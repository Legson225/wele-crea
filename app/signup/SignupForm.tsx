'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { PLANS } from '@/lib/constants'

export default function SignupForm() {
  const router = useRouter()
  const params = useSearchParams()
  const idea = params?.get('idea') ?? ''

  const [step, setStep] = useState<1 | 2>(1)
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', gdlWallet: '', plan: 'free', idea: '', terms: false })
  const [loading, setLoading] = useState(false)
  const [githubLoading, setGithubLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => { if (idea) setForm(f => ({ ...f, idea })) }, [idea])

  function validate(): boolean {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Nom requis'
    if (!form.email.includes('@')) e.email = 'Email invalide'
    if (form.password.length < 8) e.password = 'Minimum 8 caractères'
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Les mots de passe ne correspondent pas'
    if (!form.terms) e.terms = "Vous devez accepter les conditions"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) { setErrors({ submit: data.error ?? 'Erreur serveur.' }); return }
      router.push(data.redirect ?? '/dashboard')
    } catch {
      setErrors({ submit: 'Une erreur est survenue. Réessayez.' })
    } finally { setLoading(false) }
  }

  function handleGitHub() {
    setGithubLoading(true)
    window.location.href = '/api/auth/github'
  }

  const field = (label: string, key: keyof typeof form, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-xs font-semibold text-white/60 mb-1.5">{label}</label>
      <input type={type} placeholder={placeholder} value={form[key] as string} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        className={`w-full bg-white/4 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none transition-all ${errors[key] ? 'border-red-500/50' : 'border-white/10 focus:border-[#F5A623]/50'}`} />
      {errors[key] && <p className="text-xs text-red-400 mt-1">{errors[key]}</p>}
    </div>
  )

  return (
    <main className="min-h-screen bg-[#070B16] flex items-start justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] bg-[#F5A623] -top-32 -left-32 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06] bg-[#00E5A0] bottom-0 right-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#E8920A] flex items-center justify-center font-extrabold text-[#070B16]" style={{ fontFamily: 'Syne', fontSize: 20 }}>W</div>
            <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 22 }}>WELE <span style={{ color: '#F5A623' }}>CREA</span></span>
          </Link>
          <h1 className="mt-6 text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>Créer un compte</h1>
          <p className="mt-2 text-sm text-white/40">Commencez à créer vos produits digitaux</p>
        </div>

        <div className="flex items-center gap-2 justify-center mb-8">
          {[1, 2].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= s ? 'bg-[#F5A623] text-[#070B16]' : 'bg-white/10 text-white/40'}`}>{s}</div>
              {s < 2 && <div className={`w-16 h-px ${step >= 2 ? 'bg-[#F5A623]' : 'bg-white/10'}`} />}
            </div>
          ))}
          <span className="text-xs text-white/30 ml-2">{step === 1 ? 'Informations' : 'Plan & Projet'}</span>
        </div>

        <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
          {errors.submit && <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">⚠️ {errors.submit}</div>}

          {step === 1 && (
            <>
              <button type="button" onClick={handleGitHub} disabled={githubLoading}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/15 bg-white/4 hover:bg-white/8 transition-all text-sm font-semibold mb-5 disabled:opacity-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                {githubLoading ? 'Redirection...' : "S'inscrire avec GitHub"}
              </button>
              <div className="flex items-center gap-3 mb-5"><div className="flex-1 h-px bg-white/7" /><span className="text-xs text-white/25">ou avec email</span><div className="flex-1 h-px bg-white/7" /></div>
            </>
          )}

          <form onSubmit={step === 1 ? (e) => { e.preventDefault(); if (validate()) setStep(2) } : handleSubmit}>
            {step === 1 ? (
              <div className="space-y-4">
                {field('Nom complet', 'name', 'text', 'Jean Dupont')}
                {field('Adresse email', 'email', 'email', 'vous@exemple.com')}
                {field('Mot de passe', 'password', 'password', '••••••••')}
                {field('Confirmer le mot de passe', 'confirmPassword', 'password', '••••••••')}
                <label className="flex items-start gap-3 cursor-pointer pt-1">
                  <input type="checkbox" checked={form.terms} onChange={e => setForm(f => ({ ...f, terms: e.target.checked }))} className="w-4 h-4 mt-0.5 accent-[#F5A623] shrink-0" />
                  <span className="text-xs text-white/50">J'accepte les <Link href="/terms" className="text-[#F5A623] hover:underline">conditions d'utilisation</Link> et la <Link href="/privacy" className="text-[#F5A623] hover:underline">politique de confidentialité</Link></span>
                </label>
                {errors.terms && <p className="text-xs text-red-400">{errors.terms}</p>}
                <button type="submit" className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_24px_rgba(245,166,35,0.3)] transition-all mt-2">Continuer →</button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-white/60 mb-3">Choisissez votre plan</label>
                  <div className="grid grid-cols-2 gap-2">
                    {PLANS.map(p => (
                      <button key={p.id} type="button" onClick={() => setForm(f => ({ ...f, plan: p.id }))}
                        className={`p-3 rounded-xl border text-left transition-all ${form.plan === p.id ? 'border-[#F5A623]/60 bg-[#F5A623]/8' : 'border-white/10 hover:border-white/20'}`}>
                        <div className="text-sm font-bold" style={{ fontFamily: 'Syne', color: form.plan === p.id ? '#F5A623' : 'white' }}>{p.name}</div>
                        <div className="text-[11px] text-white/40 mt-0.5">{p.priceGDL === 0 ? 'Gratuit' : `${p.priceGDL} GDL/mois`}</div>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/60 mb-1.5">Wallet GDL BEP-20 <span className="text-white/25 font-normal">(requis plans payants)</span></label>
                  <input type="text" placeholder="0x..." value={form.gdlWallet} onChange={e => setForm(f => ({ ...f, gdlWallet: e.target.value }))} className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#F5A623]/50 transition-all font-mono" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/60 mb-1.5">Votre première idée <span className="text-white/25 font-normal">(optionnel)</span></label>
                  <textarea placeholder="Décrivez votre projet..." value={form.idea} onChange={e => setForm(f => ({ ...f, idea: e.target.value }))} rows={3} className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#F5A623]/50 transition-all resize-none" />
                </div>
                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={() => setStep(1)} className="px-5 py-3 rounded-xl text-sm border border-white/15 hover:border-white/30 transition-all">← Retour</button>
                  <button type="submit" disabled={loading} className="flex-1 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] transition-all disabled:opacity-50">
                    {loading ? '⏳ Création...' : '⚡ Créer mon compte'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <p className="text-center mt-6 text-sm text-white/40">
          Déjà un compte ?{' '}
          <Link href="/login" className="text-[#F5A623] font-semibold hover:text-[#FFCD6B] transition-colors">Se connecter</Link>
        </p>
        <p className="text-center mt-3">
          <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">← Retour au site</Link>
        </p>
      </div>
    </main>
  )
}
