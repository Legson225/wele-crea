import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email et mot de passe requis.' }, { status: 400 })
    }

    const adminEmail    = process.env.ADMIN_EMAIL    ?? 'admin@wele-crea.com'
    const adminPassword = process.env.ADMIN_PASSWORD ?? ''

    // ── Vérification Admin ────────────────────────────────────────────
    if (adminEmail && adminPassword && email === adminEmail && password === adminPassword) {
      const response = NextResponse.json({
        success:  true,
        role:     'admin',
        redirect: '/admin',
      })

      // Cookie admin — valeur fixe connue du middleware
      response.cookies.set('wc_admin_session', 'wc_admin_authenticated', {
        httpOnly: true,
        secure:   process.env.NODE_ENV === 'production',
        sameSite: 'lax',   // lax pour compatibilité navigation client
        path:     '/',
        maxAge:   60 * 60 * 8,  // 8 heures
      })

      // Cookie user aussi (admin peut accéder au dashboard)
      response.cookies.set('wc_user_session', 'wc_admin_authenticated', {
        httpOnly: true,
        secure:   process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path:     '/',
        maxAge:   60 * 60 * 8,
      })

      return response
    }

    // ── Vérification Utilisateur normal ──────────────────────────────
    // TODO: remplacer par vérification DB réelle
    // const user = await db.user.findUnique({ where: { email } })
    // const valid = await bcrypt.compare(password, user.passwordHash)

    const mockValid = email.includes('@') && password.length >= 8
    if (!mockValid) {
      return NextResponse.json({ error: 'Identifiants incorrects.' }, { status: 401 })
    }

    const response = NextResponse.json({
      success:  true,
      role:     'user',
      redirect: '/dashboard',
    })

    response.cookies.set('wc_user_session', 'wc_user_authenticated', {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path:     '/',
      maxAge:   60 * 60 * 24 * 30,
    })

    return response

  } catch (err) {
    console.error('[Login] Erreur :', err)
    return NextResponse.json({ error: 'Erreur serveur. Réessayez.' }, { status: 500 })
  }
}
