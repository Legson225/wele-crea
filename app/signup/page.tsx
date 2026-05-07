import { Suspense } from 'react'
import SignupForm from './SignupForm'

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070B16] flex items-center justify-center"><div className="text-white/40 text-sm">Chargement...</div></div>}>
      <SignupForm />
    </Suspense>
  )
}
