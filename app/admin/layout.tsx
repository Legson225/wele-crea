'use client'
import Link from 'next/link'

const links = [
  {href:'/admin',icon:'📊',label:"Vue d'ensemble"},
  {href:'/admin/users',icon:'👥',label:'Utilisateurs'},
  {href:'/admin/projects',icon:'📁',label:'Tous les projets'},
  {href:'/admin/agents',icon:'🤖',label:'Agents IA Globaux'},
  {href:'/admin/revenue',icon:'💰',label:'Revenus GDL'},
  {href:'/admin/security',icon:'🛡️',label:'Sécurité'},
  {href:'/admin/settings',icon:'⚙️',label:'Config Plateforme'},
]

export default function AdminLayout({children}:{children:React.ReactNode}) {
  return (
    <div style={{display:'flex',minHeight:'100vh',background:'#FFF8F5'}}>
      {/* Admin top banner */}
      <div style={{position:'fixed',top:0,left:0,right:0,zIndex:200,background:'linear-gradient(135deg,#DC2626,#EF4444)',padding:'8px 20px',display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
        <span style={{fontSize:12,fontWeight:700,color:'#fff'}}>🔐 Interface Administrateur — Accès restreint · WELE CREA Back-Office</span>
      </div>

      <aside style={{width:256,flexShrink:0,background:'#fff',borderRight:'1px solid rgba(239,68,68,0.1)',paddingTop:52,paddingBottom:0,display:'flex',flexDirection:'column',position:'fixed',top:0,left:0,bottom:0,zIndex:100,overflowY:'auto',boxShadow:'2px 0 12px rgba(239,68,68,0.06)'}}>
        <div style={{padding:'16px 20px 16px',borderBottom:'1px solid rgba(239,68,68,0.1)',marginBottom:12}}>
          <Link href="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
            <div style={{width:32,height:32,borderRadius:9,background:'linear-gradient(135deg,#DC2626,#EF4444)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontWeight:800,fontSize:15,color:'#fff'}}>A</div>
            <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:15,color:'#1A1035'}}>WELE <span style={{color:'#DC2626'}}>ADMIN</span></span>
          </Link>
        </div>
        <nav style={{flex:1,padding:'0 12px'}}>
          {links.map(l=>(
            <Link key={l.href} href={l.href} style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:12,fontSize:14,color:'#4B4566',textDecoration:'none',transition:'all .2s',marginBottom:2,fontWeight:500,border:'1px solid transparent'}}
              onMouseEnter={e=>{e.currentTarget.style.color='#DC2626';e.currentTarget.style.background='#FEF2F2'}}
              onMouseLeave={e=>{e.currentTarget.style.color='#4B4566';e.currentTarget.style.background='transparent'}}>
              <span style={{fontSize:16,width:20,textAlign:'center'}}>{l.icon}</span>{l.label}
            </Link>
          ))}
        </nav>
        <div style={{padding:'16px 12px',borderTop:'1px solid rgba(239,68,68,0.08)'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:12,background:'#FEF2F2',border:'1px solid rgba(239,68,68,0.15)'}}>
            <div style={{width:32,height:32,borderRadius:9,background:'linear-gradient(135deg,#DC2626,#EF4444)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,color:'#fff'}}>🔐</div>
            <div>
              <div style={{fontSize:13,fontWeight:600,color:'#1A1035'}}>Super Admin</div>
              <div style={{fontSize:11,color:'#DC2626',fontWeight:600}}>Niveau 5 · Root</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,marginTop:8}}>
            <Link href="/dashboard" style={{flex:1,textAlign:'center',padding:'7px',borderRadius:10,fontSize:11,border:'1px solid rgba(124,58,237,0.2)',color:'#7C3AED',textDecoration:'none',fontWeight:600}}>Dashboard</Link>
            <Link href="/" style={{flex:1,textAlign:'center',padding:'7px',borderRadius:10,fontSize:11,border:'1px solid rgba(0,0,0,0.1)',color:'#4B4566',textDecoration:'none',fontWeight:600}}>← Site</Link>
          </div>
        </div>
      </aside>

      <main style={{marginLeft:256,flex:1,minHeight:'100vh',paddingTop:44}}>
        <div style={{padding:32}}>{children}</div>
      </main>
    </div>
  )
}
