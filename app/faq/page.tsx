'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FAQ_ITEMS } from '@/lib/constants'

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl transition-all duration-200 ${open ? 'border-[#F5A623]/30 bg-[#F5A623]/4' : 'border-white/7 bg-white/2 hover:border-white/15'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5"
      >
        <span className={`text-sm font-semibold transition-colors ${open ? 'text-[#F5A623]' : 'text-white'}`}>{q}</span>
        <span className={`text-[#F5A623] text-lg shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-white/55 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const filtered = activeCategory
    ? FAQ_ITEMS.filter(c => c.category === activeCategory)
    : FAQ_ITEMS

  const allCategories = FAQ_ITEMS.map(c => c.category)
  const totalQuestions = FAQ_ITEMS.reduce((acc, c) => acc + c.items.length, 0)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute w-[500px] h-[400px] rounded-full blur-[120px] opacity-[0.08] bg-[#F5A623] -top-20 left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 text-xs font-bold text-[#F5A623] uppercase tracking-widest mb-6">
            ✦ {totalQuestions} questions répondues
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'Syne' }}>
            Questions <span style={{ background: 'linear-gradient(135deg,#F5A623,#FFCD6B,#00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>fréquentes</span>
          </h1>
          <p className="text-white/50 text-lg mb-8">Tout ce que vous devez savoir sur WELE CREA, les Agents IA, le paiement GDL et plus encore.</p>

          {/* Search (UI only) */}
          <div className="flex items-center gap-3 max-w-md mx-auto bg-white/4 border border-white/10 rounded-xl px-4 py-3">
            <span className="text-white/30">🔍</span>
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <div className="sticky top-0 z-40 bg-[#070B16]/80 backdrop-blur-xl border-b border-white/7 py-3">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${!activeCategory ? 'bg-[#F5A623]/10 border-[#F5A623]/40 text-[#F5A623]' : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white'}`}
          >
            Toutes
          </button>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${activeCategory === cat ? 'bg-[#F5A623]/10 border-[#F5A623]/40 text-[#F5A623]' : 'border-white/10 text-white/40 hover:border-white/25 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {filtered.map(group => (
            <div key={group.category} id={group.category.toLowerCase().replace(/ /g, '-')}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-bold" style={{ fontFamily: 'Syne' }}>{group.category}</h2>
                <span className="px-2 py-0.5 rounded-md bg-[#F5A623]/10 border border-[#F5A623]/20 text-[11px] font-bold text-[#F5A623]">
                  {group.items.length}
                </span>
              </div>
              <div className="space-y-2">
                {group.items.map((item, i) => (
                  <Accordion key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="support" className="py-16 px-6 bg-[#0C1120]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/25 text-xs font-bold text-[#00D4FF] mb-6">
            🎧 Support 24/7
          </div>
          <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'Syne' }}>Votre question n'est pas listée ?</h2>
          <p className="text-white/50 mb-8">Notre Support Agent répond en moins de 2 minutes. Pour les demandes complexes, un humain prend le relais.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="mailto:support@wele-crea.com" className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] transition-all">
              ✉️ Contacter le support
            </Link>
            <Link href="/signup" className="px-6 py-3 rounded-xl font-bold text-sm border border-white/15 hover:border-[#F5A623]/40 hover:text-[#F5A623] transition-all">
              ⚡ Commencer gratuitement
            </Link>
          </div>

          {/* GDL address reminder */}
          <div className="mt-10 p-5 rounded-xl bg-[#F5A623]/5 border border-[#F5A623]/15 text-left">
            <p className="text-xs font-bold text-[#F5A623] mb-2">🪙 Adresse de paiement GDL officielle (BEP-20)</p>
            <code className="text-xs font-mono text-white break-all">0x2AD5a3184979f9299A13Cf65C5219cD76c78DE30</code>
            <p className="text-[11px] text-white/30 mt-2">Vérifiez toujours cette adresse sur notre site. Ne jamais envoyer de GDL à une autre adresse.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
