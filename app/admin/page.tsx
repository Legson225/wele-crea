import MetricCard from '@/components/dashboard/MetricCard'
import Link from 'next/link'

export const metadata = { title: 'Administration WELE CREA' }

export default function AdminPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>Administration WELE CREA 🔐</h1>
          <p className="text-white/30 text-sm mt-1">Vue globale plateforme</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl text-sm font-bold bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/15 transition-all">
          📋 Rapport Global
        </button>
      </div>

      {/* Metrics — all 0 */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <MetricCard label="Utilisateurs" value={0} change="Plateforme lancée" changeType="neutral" accent="gold" />
        <MetricCard label="Revenus GDL (mois)" value="0 GDL" change="Aucune transaction" changeType="neutral" accent="gold" />
        <MetricCard label="Projets générés" value={0} change="Aucun projet" changeType="neutral" accent="cyan" />
        <MetricCard label="Uptime" value="99.9%" change="Systèmes OK" changeType="up" accent="emerald" />
        <MetricCard label="Plans payants" value={0} change="0 abonnés" changeType="neutral" accent="pink" />
        <MetricCard label="Incidents sécu." value={0} change="Aucun incident" changeType="up" accent="emerald" />
      </div>

      {/* Revenue & distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
          <h2 className="text-sm font-bold mb-4" style={{ fontFamily: 'Syne' }}>Revenus GDL — Mensuel</h2>
          <div className="h-40 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center">
            <p className="text-sm text-white/25">Aucune donnée disponible</p>
          </div>
          <div className="flex justify-between mt-3 text-xs text-white/20">
            <span>Début</span><span>Aujourd'hui</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/3 border border-white/7">
          <h2 className="text-sm font-bold mb-4" style={{ fontFamily: 'Syne' }}>Répartition Plans</h2>
          {[
            { name: 'Free', pct: 0, color: 'rgba(255,255,255,0.15)' },
            { name: 'Starter', pct: 0, color: '#F5A623' },
            { name: 'Pro', pct: 0, color: '#FFCD6B' },
            { name: 'Business', pct: 0, color: '#00D4FF' },
          ].map(p => (
            <div key={p.name} className="mb-3">
              <div className="flex justify-between text-xs mb-1.5"><span>{p.name}</span><span className="text-white/30">0 (0%)</span></div>
              <div className="h-2 rounded-full bg-white/7"><div className="h-full rounded-full" style={{ width: '0%', background: p.color }} /></div>
            </div>
          ))}
          <div className="mt-4 p-4 rounded-xl bg-[#F5A623]/5 border border-[#F5A623]/15 text-center">
            <p className="text-xs text-white/30 mb-1">MRR estimé</p>
            <p className="text-xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>0 GDL</p>
          </div>
        </div>
      </div>

      {/* Activity log */}
      <div>
        <h2 className="text-sm font-bold mb-4" style={{ fontFamily: 'Syne' }}>Activité récente</h2>
        <div className="rounded-2xl bg-white/2 border border-white/7 p-8 text-center">
          <p className="text-sm text-white/25">Aucune activité enregistrée. La plateforme vient d'être initialisée.</p>
        </div>
      </div>
    </div>
  )
}
