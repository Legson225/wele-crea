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
  const [error, setError] = useState('')

  const SOCIAL_ERRORS: Record<string, string> = {
    github_denied: "Vous avez refusé l'accès GitHub.",
    github_token: 'Erreur GitHub. Réessayez.',
    github_no_email: 'Aucun email vérifié sur votre compte GitHub.',
    github_server: 'Erreur serveur GitHub. Réessayez.',
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

  const inputCls = "w-full rounded-xl px-4 py-3 text-sm border border-white/15 focus:outline-none focus:border-[#F5A623]/70 transition-all"
  const inputStyle = { background: '#0C1120', color: '#F0F4FF' }

  return (
    <main style={{ minHeight: '100vh', background: '#070B16', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      {/* BG orbs */}
      <div style={{ position: 'fixed', top: -128, left: -128, width: 500, height: 500, borderRadius: '50%', background: '#F5A623', filter: 'blur(120px)', opacity: 0.08, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: '#00D4FF', filter: 'blur(100px)', opacity: 0.06, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 440 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,#F5A623,#E8920A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 22, color: '#070B16', boxShadow: '0 0 20px rgba(245,166,35,0.35)' }}>W</div>
            <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: 22, color: '#F0F4FF' }}>WELE <span style={{ color: '#F5A623' }}>CREA</span></span>
          </Link>
          <h1 style={{ fontFamily: 'Syne,sans-serif', fontSize: 26, fontWeight: 800, color: '#F0F4FF', marginTop: 24, marginBottom: 6 }}>Connexion</h1>
          <p style={{ color: 'rgba(240,244,255,0.5)', fontSize: 14 }}>Accédez à votre espace WELE CREA</p>
        </div>

        {/* Notices */}
        {reason === 'admin_required' && (
          <div style={{ marginBottom: 16, padding: '12px 16px', borderRadius: 12, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#FCA5A5', fontSize: 13, display: 'flex', gap: 8 }}>
            🔐 Accès administrateur requis. Connectez-vous avec les identifiants admin.
          </div>
        )}
        {loginError && SOCIAL_ERRORS[loginError] && (
          <div style={{ marginBottom: 16, padding: '12px 16px', borderRadius: 12, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#FCA5A5', fontSize: 13 }}>
            ⚠️ {SOCIAL_ERRORS[loginError]}
          </div>
        )}

        {/* Card */}
        <div style={{ background: '#0C1120', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: 32 }}>
          {error && (
            <div style={{ marginBottom: 20, padding: '12px 16px', borderRadius: 12, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#FCA5A5', fontSize: 13 }}>
              ⚠️ {error}
            </div>
          )}

          {/* Connexions sociales */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ color: 'rgba(240,244,255,0.4)', fontSize: 11, textAlign: 'center', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Se connecter avec</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {/* GitHub */}
              <button onClick={() => { window.location.href = '/api/auth/github' }}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', background: '#161B22', color: '#F0F4FF', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </button>
              {/* Google */}
              <button onClick={() => alert('Google OAuth — à configurer dans .env.local : GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET')}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', background: '#1a1a2e', color: '#F0F4FF', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"/><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"/><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"/><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"/></svg>
                Google
              </button>
              {/* Facebook */}
              <button onClick={() => alert('Facebook OAuth — à configurer dans .env.local : FACEBOOK_CLIENT_ID + FACEBOOK_CLIENT_SECRET')}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 12px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', background: '#1a1a2e', color: '#F0F4FF', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ color: 'rgba(240,244,255,0.3)', fontSize: 12 }}>ou avec email</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(240,244,255,0.6)', marginBottom: 6 }}>Adresse email</label>
              <input type="email" autoComplete="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="vous@exemple.com" className={inputCls} style={inputStyle} />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(240,244,255,0.6)' }}>Mot de passe</label>
                <Link href="/forgot-password" style={{ fontSize: 12, color: '#F5A623', textDecoration: 'none' }}>Oublié ?</Link>
              </div>
              <input type="password" autoComplete="current-password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                placeholder="••••••••" className={inputCls} style={inputStyle} />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <input type="checkbox" checked={form.remember} onChange={e => setForm(f => ({ ...f, remember: e.target.checked }))} style={{ accentColor: '#F5A623', width: 16, height: 16 }} />
              <span style={{ fontSize: 13, color: 'rgba(240,244,255,0.5)' }}>Se souvenir de moi</span>
            </label>
            <button type="submit" disabled={loading}
              style={{ width: '100%', padding: '14px', borderRadius: 12, fontWeight: 700, fontSize: 14, background: 'linear-gradient(135deg,#F5A623,#E8920A)', color: '#070B16', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
              {loading ? '⏳ Connexion...' : '→ Se connecter'}
            </button>
          </form>

          {/* Admin notice */}
          <div style={{ marginTop: 20, padding: '12px 16px', borderRadius: 12, background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
            <p style={{ fontSize: 12, color: 'rgba(252,165,165,0.8)', display: 'flex', gap: 8 }}>
              🔐 L'accès administrateur est exclusivement réservé aux admins désignés. Toute tentative non autorisée est tracée.
            </p>
          </div>

          <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(240,244,255,0.4)', marginTop: 20 }}>
            Pas encore de compte ?{' '}
            <Link href="/signup" style={{ color: '#F5A623', fontWeight: 600, textDecoration: 'none' }}>Créer un compte</Link>
          </p>
        </div>

        <p style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/" style={{ fontSize: 13, color: 'rgba(240,244,255,0.3)', textDecoration: 'none' }}>← Retour au site</Link>
        </p>
      </div>
    </main>
  )
}
