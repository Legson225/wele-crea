'use client'
import MetricCard from '@/components/dashboard/MetricCard'
import Link from 'next/link'
export const metadata = { title: 'Administration WELE CREA' }

export default function AdminPage() {
  return (
    <div>
      <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:16,marginBottom:32,flexWrap:'wrap'}}>
        <div>
          <h1 style={{fontFamily:'Syne,sans-serif',fontSize:26,fontWeight:800,color:'#1A1035',marginBottom:4}}>Administration WELE CREA 🔐</h1>
          <p style={{color:'#9CA3AF',fontSize:13}}>Vue globale de la plateforme — Accès restreint</p>
        </div>
        <button style={{padding:'10px 20px',borderRadius:12,fontSize:13,fontWeight:700,background:'#FEF2F2',color:'#DC2626',border:'1px solid rgba(220,38,38,0.2)',cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif'}}>
          📋 Rapport Global
        </button>
      </div>

      {/* Metrics */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:14,marginBottom:28}}>
        <MetricCard label="Utilisateurs total" value={0} change="Aucun inscrit" changeType="neutral" accent="gold" />
        <MetricCard label="Revenus GDL (mois)" value="0 GDL" change="Aucune transaction" changeType="neutral" accent="gold" />
        <MetricCard label="Projets générés" value={0} change="Aucun projet" changeType="neutral" accent="cyan" />
        <MetricCard label="Uptime plateforme" value="99.9%" change="Systèmes OK" changeType="up" accent="emerald" />
        <MetricCard label="Plans payants" value={0} change="0 abonnés" changeType="neutral" accent="pink" />
        <MetricCard label="Incidents sécurité" value={0} change="Aucun incident" changeType="up" accent="emerald" />
      </div>

      {/* Quick nav */}
      <h2 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,color:'#1A1035',marginBottom:16}}>Gestion rapide</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:12,marginBottom:28}}>
        {[
          {href:'/admin/users',    icon:'👥', title:'Utilisateurs',    desc:'Gérer les comptes',     color:'#7C3AED', bg:'#F5F3FF'},
          {href:'/admin/projects', icon:'📁', title:'Projets',         desc:'Tous les projets',      color:'#3B82F6', bg:'#EFF6FF'},
          {href:'/admin/agents',   icon:'🤖', title:'Agents IA',       desc:'Monitoring global',     color:'#10B981', bg:'#ECFDF5'},
          {href:'/admin/revenue',  icon:'💰', title:'Revenus GDL',     desc:'Transactions LEVEE',    color:'#F97316', bg:'#FFF7ED'},
          {href:'/admin/security', icon:'🛡️', title:'Sécurité',        desc:'Logs et alertes',       color:'#EF4444', bg:'#FEF2F2'},
          {href:'/admin/settings', icon:'⚙️', title:'Configuration',   desc:'Paramètres plateforme', color:'#8B5CF6', bg:'#F5F3FF'},
        ].map(card => (
          <Link key={card.href} href={card.href}
            style={{padding:20,borderRadius:16,background:card.bg,border:`1px solid ${card.color}20`,textDecoration:'none',display:'block',transition:'all .25s'}}
            onMouseEnter={(e:any)=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow=`0 8px 24px ${card.color}20`}}
            onMouseLeave={(e:any)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
            <div style={{fontSize:28,marginBottom:8}}>{card.icon}</div>
            <div style={{fontFamily:'Syne,sans-serif',fontSize:15,fontWeight:700,color:card.color,marginBottom:3}}>{card.title}</div>
            <div style={{fontSize:12,color:'#9CA3AF'}}>{card.desc}</div>
          </Link>
        ))}
      </div>

      {/* Revenue Distribution */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:28}}>
        <div style={{padding:24,borderRadius:18,background:'#fff',border:'1px solid rgba(124,58,237,0.1)',boxShadow:'0 2px 12px rgba(124,58,237,0.06)'}}>
          <h3 style={{fontFamily:'Syne,sans-serif',fontSize:15,fontWeight:700,color:'#1A1035',marginBottom:16}}>Revenus GDL — Mensuel</h3>
          <div style={{height:140,borderRadius:12,background:'#F8F7FF',border:'1px solid rgba(124,58,237,0.08)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{fontSize:13,color:'#9CA3AF'}}>Aucune donnée disponible</p>
          </div>
        </div>
        <div style={{padding:24,borderRadius:18,background:'#fff',border:'1px solid rgba(124,58,237,0.1)',boxShadow:'0 2px 12px rgba(124,58,237,0.06)'}}>
          <h3 style={{fontFamily:'Syne,sans-serif',fontSize:15,fontWeight:700,color:'#1A1035',marginBottom:16}}>Système LEVEE DJOLOGBAHA™</h3>
          {[
            {label:'Développement',rate:'2%',color:'#7C3AED',bg:'#F5F3FF',val:'0 GDL'},
            {label:'Charité LEVEE',rate:'1%',color:'#10B981',bg:'#ECFDF5',val:'0 GDL'},
            {label:'Plateforme net',rate:'97%',color:'#3B82F6',bg:'#EFF6FF',val:'0 GDL'},
          ].map(item=>(
            <div key={item.label} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 14px',borderRadius:10,background:item.bg,marginBottom:8}}>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:item.color}}>{item.label}</div>
                <div style={{fontSize:11,color:'#9CA3AF'}}>{item.rate} automatique</div>
              </div>
              <div style={{fontFamily:'Syne,sans-serif',fontSize:18,fontWeight:800,color:item.color}}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <h2 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,color:'#1A1035',marginBottom:16}}>Activité récente</h2>
      <div style={{borderRadius:18,background:'#fff',border:'1px solid rgba(124,58,237,0.1)',padding:40,textAlign:'center',boxShadow:'0 2px 12px rgba(124,58,237,0.06)'}}>
        <div style={{fontSize:40,marginBottom:12}}>🚀</div>
        <p style={{fontSize:14,color:'#9CA3AF'}}>Plateforme initialisée — Aucune activité enregistrée pour l'instant.</p>
      </div>
    </div>
  )
}
