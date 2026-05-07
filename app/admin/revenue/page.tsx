'use client'
import { useState } from 'react'
import { GDL } from '@/lib/constants'

export default function AdminRevenuePage() {
  const [copied, setCopied] = useState(false)
  function copy() { navigator.clipboard.writeText(GDL.wallet); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-8" style={{ fontFamily: 'Syne' }}>💰 Revenus GDL</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'MRR GDL', val: '0 GDL', sub: 'Aucune transaction' },
          { label: 'MRR USD ≈', val: '0 USD', sub: '1 GDL ≈ 0.039 USD' },
          { label: 'ARR projeté', val: '0 USD', sub: 'Croissance à venir' },
          { label: 'Total reçu', val: '0 GDL', sub: 'Depuis lancement' },
        ].map(s => (
          <div key={s.label} className="p-5 rounded-2xl bg-white/3 border border-white/7">
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">{s.label}</p>
            <p className="text-xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>{s.val}</p>
            <p className="text-xs text-white/25 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Wallet + LEVEE */}
      <div className="p-6 rounded-2xl bg-[#F5A623]/5 border border-[#F5A623]/15 mb-6">
        <h2 className="text-sm font-bold mb-3" style={{ fontFamily: 'Syne' }}>Wallet Principal WELE CREA</h2>
        <code className="text-xs font-mono text-white block bg-black/30 px-3 py-2.5 rounded-lg mb-3">{GDL.wallet}</code>
        <button onClick={copy} className="px-4 py-2 rounded-lg text-xs font-semibold border border-[#F5A623]/30 text-[#F5A623] hover:bg-[#F5A623]/10 transition-all mb-5">
          {copied ? '✅ Copié !' : '📋 Copier'}
        </button>

        <h3 className="text-sm font-bold mb-3 mt-2" style={{ fontFamily: 'Syne' }}>Système LEVEE DJOLOGBAHA™</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Développement', rate: '2%', color: '#F5A623', val: '0 GDL' },
            { label: 'Charité LEVEE', rate: '1%', color: '#00E5A0', val: '0 GDL' },
            { label: 'Plateforme net', rate: '97%', color: '#00D4FF', val: '0 GDL' },
          ].map(item => (
            <div key={item.label} className="p-4 rounded-xl border text-center" style={{ background: item.color + '08', borderColor: item.color + '25' }}>
              <p className="text-xs text-white/40 mb-1">{item.label}</p>
              <p className="text-lg font-extrabold" style={{ fontFamily: 'Syne', color: item.color }}>{item.val}</p>
              <p className="text-[11px] text-white/30">{item.rate}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-white/30 mt-3">Le système LEVEE distribue automatiquement 3% à chaque transaction reçue (2% développement + 1% charité).</p>
      </div>

      <div>
        <h2 className="text-sm font-bold mb-4" style={{ fontFamily: 'Syne' }}>Dernières transactions</h2>
        <div className="rounded-2xl bg-white/2 border border-white/7 p-8 text-center">
          <p className="text-sm text-white/25">Aucune transaction pour l'instant.</p>
        </div>
      </div>
    </div>
  )
}
