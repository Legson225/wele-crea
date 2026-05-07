export const metadata = { title: 'Utilisateurs — Admin' }
export default function AdminUsersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>👥 Gestion Utilisateurs</h1>
          <p className="text-white/30 text-sm mt-1">0 utilisateurs inscrits</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16]">+ Ajouter</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total inscrits', val: '0' },
          { label: 'Abonnés payants', val: '0' },
          { label: 'Nouveaux (mois)', val: '0' },
        ].map(s => (
          <div key={s.label} className="p-5 rounded-2xl bg-white/3 border border-white/7 text-center">
            <p className="text-2xl font-extrabold text-[#F5A623]" style={{ fontFamily: 'Syne' }}>{s.val}</p>
            <p className="text-xs text-white/30 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-white/2 border border-white/7 p-10 text-center">
        <p className="text-sm text-white/25">Aucun utilisateur inscrit pour l'instant.</p>
      </div>
    </div>
  )
}
