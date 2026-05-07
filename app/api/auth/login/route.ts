import { NextRequest, NextResponse } from 'next/server'

// ─── POST /api/auth/login ─────────────────────────────────────────────────────
// Authentification classique email + mot de passe.
// Détecte si c'est un admin et pose le bon cookie.
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email et mot de passe requis.' }, { status: 400 })
    }

    // ── Vérification Admin ────────────────────────────────────────────────
    const adminEmail    = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD
    const adminSecret   = process.env.ADMIN_SECRET_KEY

    if (email === adminEmail && password === adminPassword) {
      // C'est l'administrateur
      const response = NextResponse.json({
        success:  true,
        role:     'admin',
        redirect: '/admin',
      })

      // Cookie de session admin (valide 8h)
      response.cookies.set('wc_admin_session', adminSecret ?? 'fallback', {
        httpOnly: true,
        secure:   process.env.NODE_ENV === 'production',
        sameSite: 'strict', // strict pour l'admin
        path:     '/',
        maxAge:   60 * 60 * 8,
      })

      // Cookie utilisateur également (l'admin a aussi accès au dashboard user)
      response.cookies.set('wc_user_session', 'admin_session', {
        httpOnly: true,
        secure:   process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path:     '/',
        maxAge:   60 * 60 * 8,
      })

      return response
    }

    // ── Vérification Utilisateur normal ──────────────────────────────────
    // TODO : requête DB pour retrouver l'utilisateur et vérifier le mot de passe hashé
    // Exemple :
    // const user = await db.user.findUnique({ where: { email } })
    // if (!user) return NextResponse.json({ error: 'Identifiants incorrects.' }, { status: 401 })
    // const valid = await bcrypt.compare(password, user.passwordHash)
    // if (!valid) return NextResponse.json({ error: 'Identifiants incorrects.' }, { status: 401 })

    // Simulation (à remplacer par la vraie vérification)
    const mockUserFound = email.includes('@') && password.length >= 8
    if (!mockUserFound) {
      return NextResponse.json({ error: 'Identifiants incorrects.' }, { status: 401 })
    }

    // TODO : const sessionToken = await signJWT({ userId: user.id, role: 'user' })

    const response = NextResponse.json({
      success:  true,
      role:     'user',
      redirect: '/dashboard',
    })

    response.cookies.set('wc_user_session', 'TODO_JWT_TOKEN', {
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
