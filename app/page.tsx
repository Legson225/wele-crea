'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AGENTS, PLANS, GDL } from '@/lib/constants'

function PulsingDot({ color = '#00E5A0' }: { color?: string }) {
  return <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: color, display: 'inline-block' }} />
}

export default function LandingPage() {
  const router = useRouter()
  const [idea, setIdea] = useState('')
  const [copied, setCopied] = useState(false)
  const revealRef = useRef<HTMLDivElement[]>([])

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function handleGenerate() {
    if (!idea.trim()) return
    router.push('/signup?idea=' + encodeURIComponent(idea))
  }

  function handleCopy() {
    navigator.clipboard.writeText(GDL.wallet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden grid-bg">
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-[0.12] bg-[#F5A623] -top-28 -left-32 animate-float" />
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.08] bg-[#00D4FF] bottom-0 -right-24" style={{ animationDelay: '-3s' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-[0.06] bg-[#FF6B9D] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-5s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/8 border border-[#F5A623]/25 text-[13px] font-semibold text-[#F5A623] mb-8 animate-fadeUp">
            <PulsingDot />
            Plateforme SaaS IA — Propulsée par DJOLOG GDL
          </div>

          {/* H1 */}
          <h1 className="font-syne text-5xl sm:text-6xl lg:text-[82px] font-extrabold leading-[1.04] tracking-tight mb-6 animate-fadeUp" style={{ animationDelay: '0.1s', fontFamily: 'Syne, sans-serif' }}>
            Votre idée devient un<br />
            <span className="gradient-gold">produit digital complet</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
            WELE CREA transforme n'importe quelle idée en site web, application ou logiciel finalisé grâce à <strong className="text-white">10 Agents IA autonomes</strong>. Zéro code. Résultat professionnel.
          </p>

          {/* Prompt box */}
          <div className="max-w-2xl mx-auto mb-4 flex items-center gap-3 p-1.5 pl-5 rounded-2xl bg-white/4 border border-white/10 shadow-[0_0_60px_rgba(245,166,35,0.07),0_20px_40px_rgba(0,0,0,0.4)] animate-fadeUp" style={{ animationDelay: '0.3s' }}>
            <span className="text-xl">✨</span>
            <input
              type="text"
              value={idea}
              onChange={e => setIdea(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleGenerate()}
              placeholder="Décrivez votre idée… ex : une app de gestion RH pour PME africaines"
              className="flex-1 bg-transparent text-white text-sm placeholder:text-white/30 py-3 focus:outline-none"
            />
            <button
              onClick={handleGenerate}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] font-bold text-sm hover:shadow-[0_0_20px_rgba(245,166,35,0.35)] hover:-translate-y-0.5 transition-all shrink-0"
            >
              ⚡ Générer
            </button>
          </div>

          <p className="text-xs text-white/30 mb-12 animate-fadeUp" style={{ animationDelay: '0.35s' }}>
            Gratuit pour commencer · Paiements en <span className="px-2 py-0.5 rounded bg-[#F5A623]/10 text-[#F5A623] font-bold border border-[#F5A623]/20">🪙 GDL</span> · Aucune carte bancaire
          </p>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-2 text-[11px] text-white/20 tracking-widest uppercase animate-fadeUp" style={{ animationDelay: '0.5s' }}>
            <span>Découvrir</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#F5A623] to-transparent animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* ── COMPARAISON ──────────────────────────────── */}
      <div className="border-y border-white/7 py-5 bg-[#0C1120]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-[11px] font-bold text-white/25 uppercase tracking-widest">Comparable aux meilleures plateformes mondiales</span>
          <div className="flex flex-wrap gap-8">
            {['Framer AI', 'Webflow AI', 'Builder.io', 'Vercel v0', 'Wix AI', 'Base44'].map(n => (
              <span key={n} className="text-[13px] font-bold text-white/20 hover:text-white/50 transition-colors cursor-default" style={{ fontFamily: 'Syne' }}>{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── AGENTS ───────────────────────────────────── */}
      <section id="agents" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-bold text-[#F5A623] uppercase tracking-widest mb-5">
              ✦ 10 Agents IA Spécialisés
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'Syne' }}>
              Des agents qui <span className="gradient-gold">travaillent pour vous</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">Chaque agent est spécialisé, autonome et opère 24h/24. Ensemble, ils couvrent tout le cycle de vie de votre produit.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {AGENTS.map((agent, i) => (
              <div
                key={agent.id}
                className="agent-card relative p-6 rounded-2xl bg-white/3 border border-white/7 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 reveal"
                style={{ '--accent': agent.color, animationDelay: `${i * 50}ms` } as React.CSSProperties}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{ background: agent.color + '18', border: `1px solid ${agent.color}30` }}>
                  {agent.icon}
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ fontFamily: 'Syne' }}>{agent.name}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{agent.desc}</p>
                <div className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-semibold text-[#00E5A0] bg-[#00E5A0]/8 px-2.5 py-1 rounded-md border border-[#00E5A0]/20">
                  <PulsingDot /> Actif
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FONCTIONNEMENT ──────────────────────────── */}
      <section id="how" className="py-24 bg-[#0C1120]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-bold text-[#F5A623] uppercase tracking-widest mb-5">✦ Processus</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'Syne' }}>Comment ça <span className="gradient-gold">fonctionne ?</span></h2>
            <p className="text-white/50">De l'idée au produit live en quelques minutes. Nos agents font tout le travail.</p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-0 reveal">
            {[
              { n: '01', icon: '💡', title: "Décrivez votre idée", desc: "Tapez votre idée en langage naturel. Soyez précis ou vague — nos agents s'adaptent." },
              { n: '02', icon: '🎨', title: "Choisissez un design", desc: "Le Design Agent propose 3 à 6 variantes de design uniques. Sélectionnez la vôtre." },
              { n: '03', icon: '⚡', title: "Les agents génèrent", desc: "10 agents travaillent en parallèle : code, tests, sécurité, SEO, documentation." },
              { n: '04', icon: '🚀', title: "Déployez et lancez", desc: "Téléchargez ou déployez automatiquement sur votre hébergement. C'est live !" },
            ].map((step, i) => (
              <div key={i} className="relative flex-1 min-w-[180px] max-w-[260px] text-center px-6 py-8">
                <span className="block text-[10px] font-bold text-[#F5A623] tracking-widest font-mono mb-4">{step.n}</span>
                <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/8 border border-[#F5A623]/20 flex items-center justify-center text-2xl mx-auto mb-5 hover:bg-[#F5A623]/15 hover:shadow-[0_0_24px_rgba(245,166,35,0.2)] transition-all">
                  {step.icon}
                </div>
                <h3 className="text-[15px] font-bold mb-2" style={{ fontFamily: 'Syne' }}>{step.title}</h3>
                <p className="text-[13px] text-white/40 leading-relaxed">{step.desc}</p>
                {i < 3 && <span className="absolute right-[-16px] top-[80px] text-white/20 text-2xl hidden lg:block">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────── */}
      <section id="pricing" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-bold text-[#F5A623] uppercase tracking-widest mb-5">✦ Tarification</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'Syne' }}>
              Choisissez votre <span className="gradient-gold">plan</span>
            </h2>
            <p className="text-white/50">
              Paiements exclusivement en <strong className="text-[#F5A623]">🪙 DJOLOG (GDL)</strong> — jeton de l'écosystème DJOLOGBAHA™
            </p>
          </div>

          {/* Admin notice */}
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-red-500/5 border border-red-500/15 mb-6 max-w-4xl mx-auto reveal">
            <span className="text-xl shrink-0">🔒</span>
            <p className="text-sm text-red-300/80"><strong className="text-red-400">Accès administrateur</strong> — Quel que soit le plan souscrit, l'interface d'administration est strictement réservée aux administrateurs désignés par WELE CREA. Un nom de domaine et un hébergement actifs sont requis avant tout engagement.</p>
          </div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 reveal">
            {PLANS.map(plan => (
              <div key={plan.id} className={`relative rounded-3xl p-8 border transition-all hover:-translate-y-1 ${plan.featured ? 'bg-[#F5A623]/6 border-[#F5A623]/35 shadow-[0_20px_60px_rgba(245,166,35,0.12)]' : 'bg-white/3 border-white/7'}`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#F5A623] text-[#070B16] text-[11px] font-extrabold whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <h3 className={`text-xl font-extrabold mb-1 ${plan.featured ? 'gradient-gold' : ''}`} style={{ fontFamily: 'Syne', marginTop: plan.badge ? 12 : 0 }}>{plan.name}</h3>
                <p className="text-xs text-white/40 mb-6">{plan.sub}</p>

                <div className="mb-6">
                  {plan.priceGDL === 0 ? (
                    <span className="text-3xl font-extrabold text-[#00E5A0]" style={{ fontFamily: 'Syne' }}>Gratuit</span>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>{plan.priceGDL}</span>
                      <span className="text-sm text-white/40 ml-1">GDL / mois</span>
                      <div className="text-xs text-white/30 mt-1">≈ {plan.priceUSD} USD / mois</div>
                    </>
                  )}
                </div>

                <ul className="space-y-2 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-white/60">
                      <span className="text-[#00E5A0] mt-0.5 shrink-0">✓</span> {f}
                    </li>
                  ))}
                  {plan.locked.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-white/20 line-through">
                      <span className="shrink-0">✗</span> {f}
                    </li>
                  ))}
                </ul>

                {plan.priceGDL === 0 ? (
                  <Link href="/signup" className={`block w-full text-center py-3 rounded-xl text-sm font-bold border border-white/15 hover:border-[#F5A623] hover:text-[#F5A623] transition-all`}>
                    {plan.cta}
                  </Link>
                ) : (
                  <button
                    onClick={() => { navigator.clipboard.writeText(GDL.wallet); alert('Adresse GDL copiée ! Envoyez ' + plan.priceGDL + ' GDL pour activer le plan ' + plan.name + '.') }}
                    className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${plan.featured ? 'bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_20px_rgba(245,166,35,0.3)]' : 'border border-white/15 hover:border-[#F5A623] hover:text-[#F5A623]'}`}
                  >
                    🪙 {plan.cta}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* GDL Wallet info */}
          <div className="flex flex-wrap items-center gap-4 p-6 rounded-2xl bg-[#F5A623]/5 border border-[#F5A623]/20 max-w-4xl mx-auto reveal">
            <span className="text-3xl">🪙</span>
            <div className="flex-1 min-w-[200px]">
              <h4 className="text-sm font-bold text-[#F5A623] mb-1">Paiement DJOLOG (GDL) uniquement · BEP-20</h4>
              <p className="text-xs text-white/40 mb-2">Envoyez vos GDL à cette adresse sur le réseau BNB Smart Chain :</p>
              <code className="block text-xs font-mono text-white bg-black/30 px-3 py-2 rounded-lg break-all">{GDL.wallet}</code>
            </div>
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-[#F5A623]/30 text-[#F5A623] hover:bg-[#F5A623]/10 transition-all shrink-0"
            >
              {copied ? '✅ Copié !' : '📋 Copier'}
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 bg-[#0C1120] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial-gradient pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(245,166,35,0.1), transparent 70%)' }} />
        <div className="max-w-2xl mx-auto text-center px-6 relative z-10 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-bold text-[#F5A623] uppercase tracking-widest mb-6 mx-auto">✦ Rejoignez l'aventure</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'Syne' }}>
            Prêt à créer votre <span className="gradient-gold">premier projet ?</span>
          </h2>
          <p className="text-white/50 mb-10 text-lg">De l'idée au produit digital en moins de 2 minutes. Commencez gratuitement.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/signup" className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_30px_rgba(245,166,35,0.35)] hover:-translate-y-0.5 transition-all">
              ⚡ Commencer gratuitement
            </Link>
            <Link href="/login" className="px-8 py-4 rounded-xl font-bold border border-white/15 hover:border-[#F5A623]/40 hover:text-[#F5A623] transition-all">
              Se connecter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
