'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewProjectPage() {
  const router = useRouter()
  const [form, setForm] = useState({ idea: '', type: 'website', stack: 'auto', designs: '3' })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.idea.trim()) return
    setLoading(true)
    // TODO: POST /api/projects/generate
    await new Promise(r => setTimeout(r, 1500))
    router.push('/dashboard/projects')
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <button onClick={() => router.back()} className="text-white/40 hover:text-white transition-colors">←</button>
        <h1 className="text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>⚡ Nouveau Projet</h1>
      </div>

      <div className="max-w-2xl">
        {/* Prerequisites notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-6">
          <span className="text-lg shrink-0">⚠️</span>
          <div>
            <p className="text-sm font-semibold text-yellow-400 mb-1">Prérequis avant déploiement</p>
            <p className="text-xs text-white/40">Un <strong className="text-white">nom de domaine</strong> et un <strong className="text-white">hébergement web actifs</strong> sont requis pour mettre votre projet en ligne. Le Deploy Agent se connectera à votre hébergement automatiquement.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Idea */}
          <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
            <label className="block text-sm font-bold mb-3" style={{ fontFamily: 'Syne' }}>✨ Décrivez votre idée</label>
            <p className="text-xs text-white/40 mb-4">Soyez précis ou vague — nos agents s'adaptent. Plus vous êtes détaillé, meilleur sera le résultat.</p>
            <textarea
              value={form.idea}
              onChange={e => setForm(f => ({ ...f, idea: e.target.value }))}
              rows={5}
              placeholder="Ex : Une application mobile pour des restaurateurs africains permettant de gérer leurs commandes, livraisons et paiements mobile money. Interface en français avec tableau de bord analytique..."
              className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#F5A623]/50 transition-all resize-none"
              required
            />
            <div className="text-right text-[11px] text-white/20 mt-1">{form.idea.length} caractères</div>
          </div>

          {/* Type & Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-white/3 border border-white/7">
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2">Type de projet</label>
              <select
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                className="w-full bg-[#0C1120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F5A623]/50 transition-all"
              >
                <option value="website">Site web (Landing page)</option>
                <option value="webapp">Application web (SaaS)</option>
                <option value="ecommerce">E-commerce</option>
                <option value="mobile">Application mobile (PWA)</option>
                <option value="software">Logiciel desktop</option>
                <option value="api">API / Backend</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2">Stack technologique</label>
              <select
                value={form.stack}
                onChange={e => setForm(f => ({ ...f, stack: e.target.value }))}
                className="w-full bg-[#0C1120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F5A623]/50 transition-all"
              >
                <option value="auto">Auto (recommandé par IA)</option>
                <option value="html">HTML / CSS / JavaScript</option>
                <option value="react">React + Node.js</option>
                <option value="nextjs">Next.js + Prisma</option>
                <option value="vue">Vue.js + Express</option>
              </select>
            </div>
          </div>

          {/* Designs */}
          <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
            <label className="block text-xs font-semibold text-white/60 mb-3">Propositions de design</label>
            <div className="flex gap-3">
              {['3', '6'].map(n => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, designs: n }))}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all ${form.designs === n ? 'border-[#F5A623]/60 bg-[#F5A623]/10 text-[#F5A623]' : 'border-white/10 text-white/50 hover:border-white/25'}`}
                >
                  {n} designs
                </button>
              ))}
              <span className="text-xs text-white/25 self-center">{form.designs === '6' ? '— Plan Pro requis' : '— Disponible sur tous les plans'}</span>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading || !form.idea.trim()}
              className="flex-1 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16] hover:shadow-[0_0_24px_rgba(245,166,35,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? '⏳ Les agents génèrent...' : '⚡ Lancer la génération IA'}
            </button>
            <button type="button" onClick={() => router.back()} className="px-5 py-3.5 rounded-xl text-sm border border-white/15 hover:border-white/30 transition-all">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
