import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ─── Middleware WELE CREA ─────────────────────────────────────────────────────
// Protection des routes /admin côté serveur.
// Vérifie la présence d'un cookie de session admin valide.
// Sans ce middleware, n'importe qui pourrait accéder au back-office.

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ── Protection /admin ────────────────────────────────────────────────────
  if (pathname.startsWith('/admin')) {
    const adminSession = req.cookies.get('wc_admin_session')?.value
    const adminSecret  = process.env.ADMIN_SECRET_KEY

    // Vérification basique du cookie de session admin.
    // En production, remplacez par une vérification JWT signée avec ADMIN_SECRET_KEY.
    if (!adminSession || adminSession !== adminSecret) {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('redirect', pathname)
      loginUrl.searchParams.set('reason', 'admin_required')
      return NextResponse.redirect(loginUrl)
    }

    // Vérification IP (si ADMIN_ALLOWED_IP est défini)
    const allowedIp = process.env.ADMIN_ALLOWED_IP
    if (allowedIp) {
      const requestIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
                     ?? req.headers.get('x-real-ip')
                     ?? 'unknown'
      if (requestIp !== allowedIp) {
        return new NextResponse('Accès interdit', { status: 403 })
      }
    }
  }

  // ── Redirection /dashboard si non connecté ───────────────────────────────
  if (pathname.startsWith('/dashboard')) {
    const userSession = req.cookies.get('wc_user_session')?.value
    if (!userSession) {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
  ],
}
