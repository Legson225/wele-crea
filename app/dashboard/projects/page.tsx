// app/dashboard/projects/page.tsx
export const metadata = { title: 'Mes Projets' }

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-extrabold" style={{ fontFamily: 'Syne' }}>📁 Mes Projets</h1>
        <a href="/dashboard/new-project" className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16]">+ Nouveau</a>
      </div>
      <div className="rounded-2xl bg-white/2 border border-white/7 p-12 text-center">
        <div className="text-5xl mb-4">📂</div>
        <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne' }}>Aucun projet</h3>
        <p className="text-sm text-white/40 mb-6">Vos projets générés par les Agents IA apparaîtront ici.</p>
        <a href="/dashboard/new-project" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#F5A623] to-[#E8920A] text-[#070B16]">⚡ Créer mon premier projet</a>
      </div>
    </div>
  )
}
