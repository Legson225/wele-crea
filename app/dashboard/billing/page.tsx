'use client'
import { useState } from 'react'
import { GDL, PLANS } from '@/lib/constants'

export default function BillingPage() {
  const [copied, setCopied] = useState(false)
  function copy() {
    navigator.clipboard.writeText(GDL.wallet)
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-8" style={{ fontFamily: 'Syne' }}>💳 Facturation GDL</h1>

      {/* Current plan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-[#F5A623]/6 border border-[#F5A623]/20">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Plan actuel</p>
          <p className="text-2xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>Free</p>
          <p className="text-xs text-white/40 mt-1">Gratuit · Pas de renouvellement</p>
        </div>
        <div className="p-5 rounded-2xl bg-white/3 border border-white/7">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Solde GDL</p>
          <p className="text-2xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>0 GDL</p>
          <p className="text-xs text-white/40 mt-1">Aucun paiement enregistré</p>
        </div>
      </div>

      {/* Upgrade */}
      <div className="p-6 rounded-2xl bg-white/3 border border-white/7 mb-6">
        <h2 className="text-base font-bold mb-4" style={{ fontFamily: 'Syne' }}>Passer à un plan payant</h2>
        <p className="text-sm text-white/50 mb-5">Envoyez le montant correspondant en GDL à l'adresse ci-dessous. Votre plan sera activé automatiquement après confirmation blockchain.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          {PLANS.filter(p => p.priceGDL > 0).map(plan => (
            <div key={plan.id} className={`p-4 rounded-xl border ${plan.featured ? 'border-[#F5A623]/40 bg-[#F5A623]/5' : 'border-white/10'}`}>
              <p className="text-sm font-bold" style={{ fontFamily: 'Syne', color: plan.featured ? '#F5A623' : 'white' }}>{plan.name}</p>
              <p className="text-xs text-white/40 mb-2">{plan.sub}</p>
              <p className="text-lg font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>{plan.priceGDL} <span className="text-sm font-normal text-white/40">GDL/mois</span></p>
              <p className="text-[11px] text-white/30">≈ {plan.priceUSD} USD</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-black/30 border border-white/7">
          <p className="text-xs font-bold text-[#F5A623] mb-2">🪙 Adresse de paiement GDL (BEP-20)</p>
          <code className="text-xs font-mono text-white break-all block mb-3">{GDL.wallet}</code>
          <button onClick={copy} className="px-4 py-2 rounded-lg text-xs font-semibold border border-[#F5A623]/30 text-[#F5A623] hover:bg-[#F5A623]/10 transition-all">
            {copied ? '✅ Copié !' : '📋 Copier l\'adresse'}
          </button>
        </div>
        <p className="text-[11px] text-white/30 mt-3">Réseau : BNB Smart Chain (BEP-20). Frais : LEVEE 3% (2% dev + 1% charité) automatiquement distribués via le système DJOLOGBAHA™.</p>
      </div>

      {/* History */}
      <div>
        <h2 className="text-base font-bold mb-4" style={{ fontFamily: 'Syne' }}>Historique des transactions</h2>
        <div className="rounded-2xl bg-white/2 border border-white/7 p-8 text-center">
          <p className="text-sm text-white/30">Aucune transaction pour l'instant.</p>
        </div>
      </div>
    </div>
  )
}
