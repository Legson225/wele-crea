// app/dashboard/agents/page.tsx
import { AGENTS } from '@/lib/constants'
export const metadata = { title: 'Mes Agents IA' }

export default function AgentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-2" style={{ fontFamily: 'Syne' }}>🤖 Mes Agents IA</h1>
      <p className="text-white/40 text-sm mb-8">10 agents autonomes à votre service. Ils s'activent automatiquement quand vous lancez un projet.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AGENTS.map(agent => (
          <div key={agent.id} className="p-5 rounded-2xl bg-white/3 border border-white/7 hover:border-white/15 transition-all">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: agent.color + '18', border: `1px solid ${agent.color}30` }}>{agent.icon}</div>
              <div>
                <h3 className="text-sm font-bold" style={{ fontFamily: 'Syne' }}>{agent.name}</h3>
                <span className="text-[11px] text-white/30">Prêt</span>
              </div>
            </div>
            <p className="text-xs text-white/45 leading-relaxed mb-4">{agent.desc}</p>
            <div className="h-1 rounded-full bg-white/8">
              <div className="h-full rounded-full w-0" style={{ background: agent.color }} />
            </div>
            <p className="text-[11px] text-white/25 mt-2">0 tâches complétées</p>
          </div>
        ))}
      </div>
    </div>
  )
}
