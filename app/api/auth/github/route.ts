import { NextResponse } from 'next/server'

// ─── GET /api/auth/github ─────────────────────────────────────────────────────
// Redirige l'utilisateur vers GitHub pour l'autorisation OAuth.
export async function GET() {
  const clientId = process.env.GITHUB_CLIENT_ID
  if (!clientId) {
    return NextResponse.json({ error: 'GitHub OAuth non configuré' }, { status: 500 })
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback/github`,
    scope: 'user:email',
    state: crypto.randomUUID(), // TODO: stocker en session pour CSRF protection
  })

  return NextResponse.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`
  )
}
