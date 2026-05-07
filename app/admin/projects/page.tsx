export const metadata = { title: 'Projets — Admin' }
export default function AdminProjectsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>📁 Tous les Projets</h1>
          <p className="text-white/30 text-sm mt-1">0 projets générés</p>
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder="Rechercher..." className="bg-white/4 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#F5A623]/50 w-48" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total projets', val: '0' },
          { label: 'Sites en ligne', val: '0' },
          { label: 'En génération', val: '0' },
        ].map(s => (
          <div key={s.label} className="p-5 rounded-2xl bg-white/3 border border-white/7 text-center">
            <p className="text-2xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>{s.val}</p>
            <p className="text-xs text-white/30 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-white/2 border border-white/7 p-10 text-center">
        <p className="text-sm text-white/25">Aucun projet généré pour l'instant.</p>
      </div>
    </div>
  )
}
