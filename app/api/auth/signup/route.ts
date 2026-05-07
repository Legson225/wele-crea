import { NextRequest, NextResponse } from 'next/server'

// ─── POST /api/auth/signup ────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password, plan, gdlWallet, idea } = body

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }
    if (password.length < 8) {
      return NextResponse.json({ error: 'Mot de passe trop court (min 8 caractères).' }, { status: 400 })
    }

    // TODO: vérifier que l'email n'existe pas déjà en DB
    // const existing = await db.user.findUnique({ where: { email } })
    // if (existing) return NextResponse.json({ error: 'Email déjà utilisé.' }, { status: 409 })

    // TODO: hasher le mot de passe et créer l'utilisateur
    // const passwordHash = await bcrypt.hash(password, 12)
    // const user = await db.user.create({
    //   data: { name, email, passwordHash, plan: plan ?? 'free', gdlWallet, role: 'user' }
    // })

    // TODO: envoyer un email de bienvenue via SMTP
    // await sendWelcomeEmail({ to: email, name })

    // TODO: si idea fournie, créer un brouillon de projet
    // if (idea) await db.project.create({ data: { ownerId: user.id, idea, status: 'draft' } })

    // TODO: générer un JWT de session
    // const sessionToken = await signJWT({ userId: user.id, role: 'user' })

    const response = NextResponse.json({ success: true, redirect: '/dashboard' })
    response.cookies.set('wc_user_session', 'TODO_JWT_TOKEN', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })
    return response

  } catch (err) {
    console.error('[Signup] Erreur :', err)
    return NextResponse.json({ error: 'Erreur serveur. Réessayez.' }, { status: 500 })
  }
}
