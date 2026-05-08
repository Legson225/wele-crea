'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {href:'/dashboard',              icon:'🏠', label:'Tableau de bord'},
  {href:'/dashboard/projects',     icon:'📁', label:'Mes Projets'},
  {href:'/dashboard/new-project',  icon:'⚡', label:'Nouveau Projet'},
  {href:'/dashboard/agents',       icon:'🤖', label:'Mes Agents IA'},
  {href:'/dashboard/billing',      icon:'💳', label:'Facturation GDL'},
  {href:'/dashboard/settings',     icon:'⚙️', label:'Paramètres'},
]

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  const path = usePathname()

  return (
    <div style={{display:'flex',minHeight:'100vh',background:'#F8F7FF'}}>
      <aside style={{width:256,flexShrink:0,background:'#fff',borderRight:'1px solid rgba(124,58,237,0.1)',display:'flex',flexDirection:'column',position:'fixed',top:0,left:0,bottom:0,zIndex:100,overflowY:'auto',boxShadow:'2px 0 12px rgba(124,58,237,0.06)'}}>
        {/* Logo */}
        <div style={{padding:'20px 20px 18px',borderBottom:'1px solid rgba(124,58,237,0.08)',marginBottom:12}}>
          <Link href="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
            <div style={{width:34,height:34,borderRadius:10,background:'linear-gradient(135deg,#7C3AED,#EC4899)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontWeight:800,fontSize:16,color:'#fff'}}>W</div>
            <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:16,color:'#1A1035'}}>WELE <span style={{color:'#7C3AED'}}>CREA</span></span>
          </Link>
        </div>

        {/* Nav links */}
        <nav style={{flex:1,padding:'0 12px'}}>
          <div style={{fontSize:10,fontWeight:700,color:'#9CA3AF',letterSpacing:'.1em',textTransform:'uppercase',padding:'0 8px',marginBottom:8}}>Menu principal</div>
          {links.map(l => {
            const active = path === l.href || (l.href !== '/dashboard' && path.startsWith(l.href))
            return (
              <Link key={l.href} href={l.href}
                style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:12,fontSize:14,textDecoration:'none',marginBottom:2,fontWeight:active?700:500,color:active?'#7C3AED':'#4B4566',background:active?'#EDE9FE':'transparent',border:`1px solid ${active?'rgba(124,58,237,0.15)':'transparent'}`,transition:'all .2s'}}>
                <span style={{fontSize:16,width:20,textAlign:'center'}}>{l.icon}</span>{l.label}
              </Link>
            )
          })}

          {/* Admin access */}
          <div style={{marginTop:16,paddingTop:16,borderTop:'1px solid rgba(124,58,237,0.08)'}}>
            <div style={{fontSize:10,fontWeight:700,color:'#9CA3AF',letterSpacing:'.1em',textTransform:'uppercase',padding:'0 8px',marginBottom:8}}>Administration</div>
            <Link href="/admin"
              style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:12,fontSize:14,textDecoration:'none',fontWeight:700,color:'#DC2626',background:'#FEF2F2',border:'1px solid rgba(220,38,38,0.15)',transition:'all .2s'}}>
              <span style={{fontSize:16,width:20,textAlign:'center'}}>🔐</span>
              <span>Back-Office Admin</span>
              <span style={{marginLeft:'auto',fontSize:10,background:'#DC2626',color:'#fff',padding:'2px 6px',borderRadius:4,fontWeight:800}}>ADMIN</span>
            </Link>
            <p style={{fontSize:11,color:'#9CA3AF',padding:'6px 8px 0',lineHeight:1.4}}>Réservé aux administrateurs désignés</p>
          </div>
        </nav>

        {/* User info */}
        <div style={{padding:'16px 12px',borderTop:'1px solid rgba(124,58,237,0.08)'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',borderRadius:12,background:'linear-gradient(135deg,#F5F3FF,#EDE9FE)',border:'1px solid rgba(124,58,237,0.15)'}}>
            <div style={{width:34,height:34,borderRadius:10,background:'linear-gradient(135deg,#7C3AED,#A855F7)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:13,color:'#fff',fontFamily:'Syne'}}>U</div>
            <div>
              <div style={{fontSize:13,fontWeight:600,color:'#1A1035'}}>Utilisateur</div>
              <div style={{fontSize:11,color:'#7C3AED',fontWeight:600}}>Plan Free · GDL</div>
            </div>
          </div>
          <div style={{display:'flex',gap:8,marginTop:8}}>
            <Link href="/" style={{flex:1,textAlign:'center',padding:'7px',borderRadius:10,fontSize:12,border:'1px solid rgba(124,58,237,0.2)',color:'#7C3AED',textDecoration:'none',fontWeight:600}}>← Site</Link>
            <Link href="/login" style={{flex:1,textAlign:'center',padding:'7px',borderRadius:10,fontSize:12,border:'1px solid rgba(239,68,68,0.2)',color:'#EF4444',textDecoration:'none',fontWeight:600}}>Déco.</Link>
          </div>
        </div>
      </aside>

      <main style={{marginLeft:256,flex:1,padding:32,minHeight:'100vh'}}>{children}</main>
    </div>
  )
}
