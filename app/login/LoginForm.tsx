'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const redirectTo = params?.get('redirect') ?? ''
  const reason = params?.get('reason') ?? ''
  const loginError = params?.get('error') ?? ''

  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [loading, setLoading] = useState(false)
  const [githubLoading, setGithubLoading] = useState(false)
  const [error, setError] = useState('')

  const GITHUB_ERRORS: Record<string, string> = {
    github_denied: "Vous avez refusé l'accès GitHub.",
    github_token: 'Erreur lors de l\'authentification GitHub. Réessayez.',
    github_no_email: 'Aucun email vérifié trouvé sur votre compte GitHub.',
    github_server: 'Erreur serveur GitHub. Réessayez dans un instant.',
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) { setError('Veuillez remplir tous les champs.'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error ?? 'Identifiants incorrects.'); return }
      router.push(redirectTo || data.redirect || '/dashboard')
    } catch {
      setError('Erreur serveur. Réessayez dans un instant.')
    } finally { setLoading(false) }
  }

  function handleGitHub() {
    setGithubLoading(true)
    window.location.href = '/api/auth/github'
  }

  return (
    <main className="min-h-screen bg-[#070B16] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] bg-[#F5A623] -top-32 -left-32 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06] bg-[#00D4FF] bottom-0 right-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#E8920A] flex items-center justify-center font-extrabold text-[#070B16] shadow-[0_0_20px_rgba(245,166,35,0.3)]" style={{ fontFamily: 'Syne', fontSize: 20 }}>W</div>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 22 }}>WELE <span style={{ color: '#F5A623' }}>CREA</span></span>
          </Link>
          <h1 className="mt-6 text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>Connexion</h1>
          <p className="mt-2 text-sm text-white/40">Accédez à votre espace WELE CREA</p>
        </div>

        {reason === 'admin_required' && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm flex items-start gap-2">
            <span className="shrink-0">🔐</span>
            <span>Accès administrateur requis. Connectez-vous avec les identifiants admin.</span>
          </div>
        )}

        {loginError && GITHUB_ERRORS[loginError] && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            ⚠️ {GITHUB_ERRORS[loginError]}
          </div>
        )}

        <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
              ⚠️ {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleGitHub}
            disabled={githubLoading}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/15 bg-white/4 hover:bg-white/8 hover:border-white/25 transition-all text-sm font-semibold mb-5 disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            {githubLoading ? 'Redirection GitHub...' : 'Continuer avec GitHub'}
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-white/7" />
            <span className="text-xs text-white/25">ou</span>
            <div className="flex-1 h-px bg-white/7" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2">Adresse email</label>
              <input type="email" autoComplete="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="vous@exemple.com" className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#F5A623]/50 transition-all" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-white/60">Mot de passe</label>
                <Link href="/forgot-password" className="text-xs text-[#F5A623]/70 hover:text-[#F5A623] transition-colors">Oublié ?</Link>
              </div>
              <input type="password" autoComplete="current-password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} placeholder="••••••••" className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#F5A623]/50 transition-all" />
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={form.remember} onChange={e => setForm(f => ({ ...f, remember: e.target.checked }))} className="w-4 h-4 accent-[#F5A623] rounded" />
              <span className="text-xs text-white/50">Se souvenir de moi</span>
            </label>
            <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_24px_rgba(245,166,35,0.3)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
              {loading ? '⏳ Connexion...' : '→ Se connecter'}
            </button>
          </form>

          <div className="mt-5 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
            <p className="text-xs text-red-400/80 flex items-start gap-2">
              <span>🔐</span>
              <span>L'accès administrateur est exclusivement réservé aux admins désignés. Toute tentative non autorisée est tracée.</span>
            </p>
          </div>

          <p className="text-center text-sm text-white/40 mt-5">
            Pas encore de compte ?{' '}
            <Link href="/signup" className="text-[#F5A623] font-semibold hover:text-[#FFCD6B] transition-colors">Créer un compte</Link>
          </p>
        </div>

        <p className="text-center mt-6">
          <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">← Retour au site</Link>
        </p>
      </div>
    </main>
  )
}
