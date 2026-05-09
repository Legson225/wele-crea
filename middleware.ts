import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protection /admin
  if (pathname.startsWith('/admin')) {
    const adminSession = req.cookies.get('wc_admin_session')?.value
    if (!adminSession || adminSession !== 'wc_admin_authenticated') {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('redirect', pathname)
      loginUrl.searchParams.set('reason', 'admin_required')
      return NextResponse.redirect(loginUrl)
    }
  }

  // Protection /dashboard
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
  matcher: ['/admin/:path*', '/dashboard/:path*'],
}
