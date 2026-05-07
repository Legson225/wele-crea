import { NextResponse } from 'next/server'

// ─── POST /api/auth/logout ────────────────────────────────────────────────────
export async function POST() {
  const response = NextResponse.json({ success: true, redirect: '/login' })
  response.cookies.delete('wc_user_session')
  response.cookies.delete('wc_admin_session')
  return response
}
