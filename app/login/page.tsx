import { Suspense } from 'react'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070B16] flex items-center justify-center"><div className="text-white/40 text-sm">Chargement...</div></div>}>
      <LoginForm />
    </Suspense>
  )
}
