import { NextRequest, NextResponse } from 'next/server'

// ─── GET /api/auth/callback/github ───────────────────────────────────────────
// Callback OAuth GitHub. Échange le code contre un access_token,
// récupère le profil utilisateur, crée/met à jour le compte en DB,
// puis pose le cookie de session.
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const code  = searchParams.get('code')
  const error = searchParams.get('error')

  // Erreur côté GitHub (ex: l'utilisateur a refusé)
  if (error || !code) {
    return NextResponse.redirect(
      new URL('/login?error=github_denied', req.url)
    )
  }

  try {
    // 1. Échanger le code contre un access_token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id:     process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/github`,
      }),
    })

    const tokenData = await tokenRes.json()

    if (tokenData.error || !tokenData.access_token) {
      console.error('[GitHub OAuth] Erreur token :', tokenData)
      return NextResponse.redirect(new URL('/login?error=github_token', req.url))
    }

    const accessToken: string = tokenData.access_token

    // 2. Récupérer le profil GitHub
    const [userRes, emailsRes] = await Promise.all([
      fetch('https://api.github.com/user', {
        headers: { Authorization: `Bearer ${accessToken}`, 'User-Agent': 'WELE-CREA' },
      }),
      fetch('https://api.github.com/user/emails', {
        headers: { Authorization: `Bearer ${accessToken}`, 'User-Agent': 'WELE-CREA' },
      }),
    ])

    const githubUser  = await userRes.json()
    const githubEmails: Array<{ email: string; primary: boolean; verified: boolean }> = await emailsRes.json()
    const primaryEmail = githubEmails.find(e => e.primary && e.verified)?.email ?? githubUser.email

    if (!primaryEmail) {
      return NextResponse.redirect(new URL('/login?error=github_no_email', req.url))
    }

    // 3. TODO : Créer ou retrouver l'utilisateur en base de données
    // Exemple (à adapter à votre ORM) :
    // const user = await db.user.upsert({
    //   where: { email: primaryEmail },
    //   create: {
    //     email: primaryEmail,
    //     name:  githubUser.name ?? githubUser.login,
    //     githubId: String(githubUser.id),
    //     avatar:   githubUser.avatar_url,
    //     plan:     'free',
    //   },
    //   update: {
    //     githubId: String(githubUser.id),
    //     avatar:   githubUser.avatar_url,
    //   },
    // })

    // 4. TODO : Créer un JWT de session
    // const sessionToken = await signJWT({ userId: user.id, role: user.role })

    // 5. Poser le cookie de session et rediriger vers le dashboard
    const response = NextResponse.redirect(new URL('/dashboard', req.url))

    // Cookie de session (HttpOnly, Secure en prod)
    response.cookies.set('wc_user_session', 'TODO_JWT_TOKEN_HERE', {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path:     '/',
      maxAge:   60 * 60 * 24 * 30, // 30 jours
    })

    return response

  } catch (err) {
    console.error('[GitHub OAuth] Exception :', err)
    return NextResponse.redirect(new URL('/login?error=github_server', req.url))
  }
}
