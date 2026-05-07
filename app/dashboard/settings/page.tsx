'use client'
import { useState } from 'react'
import { GDL } from '@/lib/constants'

export default function SettingsPage() {
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', gdlWallet: '', notifProject: true, notifSecurity: true, notifBilling: true, notifMarketing: false })

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    // TODO: PATCH /api/user/settings
    setSaved(true); setTimeout(() => setSaved(false), 3000)
  }

  const notifToggle = (key: keyof typeof form) => (
    <label className="flex items-center justify-between cursor-pointer py-2.5 border-b border-white/5 last:border-0">
      <span className="text-sm text-white/70">{
        key === 'notifProject' ? 'Projet terminé' :
        key === 'notifSecurity' ? 'Alerte sécurité' :
        key === 'notifBilling' ? 'Transaction GDL' : 'Newsletter'
      }</span>
      <input type="checkbox" checked={form[key] as boolean} onChange={e => setForm(f => ({ ...f, [key]: e.target.checked }))} className="w-4 h-4 accent-[#F5A623]" />
    </label>
  )

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-8" style={{ fontFamily: 'Syne' }}>⚙️ Paramètres</h1>
      {saved && <div className="mb-6 p-3.5 rounded-xl bg-[#00E5A0]/10 border border-[#00E5A0]/25 text-[#00E5A0] text-sm">✅ Modifications sauvegardées !</div>}

      <form onSubmit={handleSave} className="space-y-5 max-w-lg">
        <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
          <h2 className="text-sm font-bold mb-5" style={{ fontFamily: 'Syne' }}>Profil</h2>
          <div className="space-y-4">
            {[
              { label: 'Nom complet', key: 'name', type: 'text', ph: 'Jean Dupont' },
              { label: 'Email', key: 'email', type: 'email', ph: 'vous@exemple.com' },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-xs font-semibold text-white/50 mb-1.5">{f.label}</label>
                <input type={f.type} placeholder={f.ph} value={form[f.key as keyof typeof form] as string} onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))} className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#F5A623]/50 transition-all" />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5">Wallet GDL (BEP-20)</label>
              <input type="text" placeholder="0x..." value={form.gdlWallet} onChange={e => setForm(f => ({ ...f, gdlWallet: e.target.value }))} className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#F5A623]/50 transition-all font-mono" />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
          <h2 className="text-sm font-bold mb-4" style={{ fontFamily: 'Syne' }}>Notifications</h2>
          <div>
            {notifToggle('notifProject')}
            {notifToggle('notifSecurity')}
            {notifToggle('notifBilling')}
            {notifToggle('notifMarketing')}
          </div>
        </div>

        <button type="submit" className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_20px_rgba(245,166,35,0.25)] transition-all">
          💾 Sauvegarder
        </button>
      </form>
    </div>
  )
}
