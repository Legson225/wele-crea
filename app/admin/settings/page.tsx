'use client'
import { useState } from 'react'
import { GDL } from '@/lib/constants'
export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)
  const [cfg, setCfg] = useState({ maintenance: false, open: true, agents: true, logs: true, devRate: 2, charityRate: 1 })
  function save(e: React.FormEvent) { e.preventDefault(); setSaved(true); setTimeout(()=>setSaved(false),3000) }
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-8" style={{ fontFamily: 'Syne' }}>⚙️ Configuration Plateforme</h1>
      {saved && <div className="mb-5 p-3 rounded-xl bg-[#00E5A0]/10 border border-[#00E5A0]/25 text-[#00E5A0] text-sm">✅ Configuration sauvegardée !</div>}
      <form onSubmit={save} className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-3xl">
        <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
          <h2 className="text-sm font-bold mb-5" style={{ fontFamily: 'Syne' }}>Paramètres globaux</h2>
          <div className="space-y-4">
            {([
              ['maintenance', 'Mode maintenance'],
              ['open', 'Inscriptions ouvertes'],
              ['agents', 'Agents IA actifs'],
              ['logs', 'Logs détaillés'],
            ] as [keyof typeof cfg, string][]).map(([k, label]) => (
              <label key={k} className="flex items-center justify-between cursor-pointer py-2 border-b border-white/5">
                <span className="text-sm text-white/70">{label}</span>
                <input type="checkbox" checked={!!cfg[k]} onChange={e => setCfg(c => ({ ...c, [k]: e.target.checked }))} className="w-4 h-4 accent-[#F5A623]" />
              </label>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
          <h2 className="text-sm font-bold mb-5" style={{ fontFamily: 'Syne' }}>Système LEVEE</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5">Wallet principal WELE CREA</label>
              <code className="block text-[11px] font-mono text-white bg-black/30 px-3 py-2 rounded-lg break-all">{GDL.wallet}</code>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">Taux développement (%)</label>
                <input type="number" value={cfg.devRate} onChange={e => setCfg(c => ({ ...c, devRate: +e.target.value }))} min={0} max={10} className="w-full bg-white/4 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#F5A623]/50" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">Taux charité LEVEE (%)</label>
                <input type="number" value={cfg.charityRate} onChange={e => setCfg(c => ({ ...c, charityRate: +e.target.value }))} min={0} max={10} className="w-full bg-white/4 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#F5A623]/50" />
              </div>
            </div>
            <p className="text-[11px] text-white/30">Total LEVEE : {cfg.devRate + cfg.charityRate}% · Net plateforme : {100 - cfg.devRate - cfg.charityRate}%</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <button type="submit" className="px-6 py-3 rounded-xl font-bold text-sm bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/20 transition-all">
            💾 Sauvegarder la configuration
          </button>
        </div>
      </form>
    </div>
  )
}
