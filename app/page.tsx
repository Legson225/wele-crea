'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AGENTS, PLANS, GDL } from '@/lib/constants'

const S = {
  section: (bg='#FAFAF8') => ({padding:'96px 0',background:bg} as React.CSSProperties),
  container: {maxWidth:1280,margin:'0 auto',padding:'0 32px'} as React.CSSProperties,
  h2: {fontFamily:'Syne,sans-serif',fontSize:'clamp(32px,5vw,52px)',fontWeight:800,letterSpacing:'-.03em',marginBottom:16,color:'#1A1035'} as React.CSSProperties,
  grad: {background:'linear-gradient(135deg,#7C3AED 0%,#EC4899 50%,#F97316 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'} as React.CSSProperties,
}

function PulsingDot({color='#10B981'}:{color?:string}) {
  return <span style={{width:6,height:6,borderRadius:'50%',background:color,display:'inline-block'}} className="animate-pulse-dot"/>
}

export default function LandingPage() {
  const router = useRouter()
  const [idea, setIdea] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)} })
    },{threshold:0.1})
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  },[])

  function handleGenerate() {
    if(!idea.trim()) return
    router.push('/signup?idea='+encodeURIComponent(idea))
  }
  function handleCopy() {
    navigator.clipboard.writeText(GDL.wallet)
    setCopied(true); setTimeout(()=>setCopied(false),2000)
  }

  const agentColors = ['#7C3AED','#3B82F6','#10B981','#F59E0B','#EF4444','#06B6D4','#EC4899','#8B5CF6','#F97316','#06B6D4']
  const agentBg = ['#F5F3FF','#EFF6FF','#ECFDF5','#FFFBEB','#FEF2F2','#ECFEFF','#FDF2F8','#F5F3FF','#FFF7ED','#ECFEFF']

  return (
    <main style={{background:'#FAFAF8'}}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'110px 32px 80px',position:'relative',overflow:'hidden'}}>
        {/* Gradient bg */}
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 600px 400px at 20% 30%,rgba(124,58,237,0.08) 0%,transparent 70%),radial-gradient(ellipse 500px 400px at 80% 70%,rgba(236,72,153,0.07) 0%,transparent 70%),radial-gradient(ellipse 400px 300px at 60% 20%,rgba(249,115,22,0.06) 0%,transparent 70%)'}}/>
        <div className="dot-grid" style={{position:'absolute',inset:0,pointerEvents:'none'}}/>

        <div style={{maxWidth:860,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
          <div className="badge badge-purple animate-fadeUp" style={{marginBottom:28}}>
            ✨ Transformez vos idées en produits digitaux réels
          </div>
          <h1 className="animate-fadeUp" style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(44px,7vw,82px)',fontWeight:800,lineHeight:1.06,letterSpacing:'-.03em',marginBottom:22,color:'#1A1035',animationDelay:'.1s'}}>
            Créez votre <span style={S.grad}>site, app</span><br/>ou logiciel sans coder
          </h1>
          <p className="animate-fadeUp" style={{fontSize:'clamp(16px,2vw,20px)',color:'#4B4566',maxWidth:600,margin:'0 auto 36px',lineHeight:1.65,animationDelay:'.2s'}}>
            Décrivez votre idée en français. Nos <strong>10 Agents IA</strong> conçoivent, codent, testent et déploient votre produit complet en quelques minutes.
          </p>

          {/* Prompt box */}
          <div className="animate-fadeUp" style={{maxWidth:660,margin:'0 auto 14px',display:'flex',alignItems:'center',gap:10,padding:'6px 6px 6px 20px',background:'#fff',borderRadius:18,border:'2px solid rgba(124,58,237,0.2)',boxShadow:'0 8px 40px rgba(124,58,237,0.14)',animationDelay:'.3s'}}>
            <span style={{fontSize:20}}>🎯</span>
            <input type="text" value={idea} onChange={e=>setIdea(e.target.value)} onKeyDown={e=>e.key==='Enter'&&handleGenerate()}
              placeholder="Ex: une app de réservation pour un salon de coiffure à Abidjan…"
              style={{flex:1,border:'none',outline:'none',fontSize:15,fontFamily:'Plus Jakarta Sans,sans-serif',color:'#1A1035',background:'transparent',padding:'10px 0'}}/>
            <button onClick={handleGenerate}
              style={{padding:'12px 22px',borderRadius:13,border:'none',background:'linear-gradient(135deg,#7C3AED,#A855F7)',color:'#fff',fontWeight:700,fontSize:14,cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif',boxShadow:'0 4px 14px rgba(124,58,237,0.35)',whiteSpace:'nowrap'}}>
              ⚡ Générer
            </button>
          </div>

          <p className="animate-fadeUp" style={{fontSize:12,color:'#9CA3AF',marginBottom:48,animationDelay:'.35s'}}>
            Gratuit pour commencer · Paiements en <span style={{padding:'2px 8px',borderRadius:6,background:'rgba(249,115,22,0.1)',color:'#F97316',fontWeight:700,fontSize:11,border:'1px solid rgba(249,115,22,0.25)'}}>🪙 GDL</span> · Aucune carte bancaire
          </p>

          {/* Floating chips */}
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,flexWrap:'wrap'}}>
            {[
              {icon:'🎨',label:'Design professionnel',color:'#7C3AED',bg:'#F5F3FF'},
              {icon:'💻',label:'Code React généré',color:'#3B82F6',bg:'#EFF6FF'},
              {icon:'🚀',label:'Déployé en 2 min',color:'#10B981',bg:'#ECFDF5'},
              {icon:'🛡️',label:'Sécurisé 24/7',color:'#F97316',bg:'#FFF7ED'},
            ].map(c=>(
              <div key={c.label} className="animate-float" style={{background:c.bg,borderRadius:14,padding:'10px 16px',display:'flex',alignItems:'center',gap:8,fontSize:13,fontWeight:600,color:c.color,border:'1px solid',borderColor:c.color+'25',boxShadow:'0 4px 16px rgba(0,0,0,0.06)'}}>
                <span style={{fontSize:18}}>{c.icon}</span>{c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CE QU'ON CREE ──────────────────────────────────────────────── */}
      <section id="types" style={S.section('#fff')}>
        <div style={S.container}>
          <div style={{textAlign:'center',marginBottom:64}} className="reveal">
            <div className="badge badge-purple" style={{marginBottom:16}}>✦ Ce que vous pouvez créer</div>
            <h2 style={S.h2}>Trois types de produits,<br/><span style={S.grad}>une seule plateforme</span></h2>
            <p style={{fontSize:17,color:'#4B4566',maxWidth:520,margin:'0 auto'}}>Que vous ayez besoin d'un site vitrine, d'une application web ou d'un logiciel sur mesure, WELE CREA le crée pour vous.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20}} className="reveal">
            {[
              {emoji:'🌐',title:'Sites Web',desc:'Portfolios, landing pages, blogs, sites e-commerce, vitrines. Design unique, SEO optimisé, mobile-ready.',tags:['Landing page','E-commerce','Portfolio','Blog'],bg:'linear-gradient(160deg,#F5F3FF,#EDE9FE)',color:'#7C3AED',border:'rgba(124,58,237,0.2)',top:'#7C3AED'},
              {emoji:'⚡',title:'Applications Web',desc:"SaaS, tableaux de bord, CRM, outils de gestion, plateformes avec backend, base de données et authentification.",tags:['SaaS','Dashboard','CRM','Marketplace'],bg:'linear-gradient(160deg,#FFF7ED,#FFEDD5)',color:'#F97316',border:'rgba(249,115,22,0.2)',top:'#F97316'},
              {emoji:'💡',title:'Logiciels',desc:'Applications desktop, outils métier, APIs et backends. Code source complet livré avec documentation.',tags:['Desktop','API','Outil métier','Automatisation'],bg:'linear-gradient(160deg,#FDF2F8,#FCE7F3)',color:'#EC4899',border:'rgba(236,72,153,0.2)',top:'#EC4899'},
            ].map(card=>(
              <div key={card.title} style={{padding:28,borderRadius:22,background:card.bg,border:'2px solid transparent',cursor:'pointer',transition:'all .3s',borderTopWidth:4,borderTopColor:card.top,borderTopStyle:'solid',borderTopLeftRadius:22,borderTopRightRadius:22}}
                onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)';(e.currentTarget as HTMLDivElement).style.boxShadow=`0 12px 40px ${card.color}25`}}
                onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(0)';(e.currentTarget as HTMLDivElement).style.boxShadow='none'}}>
                <div style={{fontSize:42,marginBottom:16}}>{card.emoji}</div>
                <h3 style={{fontFamily:'Syne,sans-serif',fontSize:20,fontWeight:800,color:card.color,marginBottom:10}}>{card.title}</h3>
                <p style={{fontSize:13,color:'#4B4566',lineHeight:1.6,marginBottom:16}}>{card.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                  {card.tags.map(t=>(
                    <span key={t} style={{padding:'4px 12px',borderRadius:20,fontSize:11,fontWeight:700,background:'rgba(255,255,255,0.65)',color:card.color}}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENTS ──────────────────────────────────────────────────────── */}
      <section id="agents" style={S.section('linear-gradient(180deg,#FAFAF8 0%,#F5F3FF 100%)')}>
        <div style={S.container}>
          <div style={{textAlign:'center',marginBottom:64}} className="reveal">
            <div className="badge badge-orange" style={{marginBottom:16}}>✦ 10 Agents IA Spécialisés</div>
            <h2 style={S.h2}>Une équipe complète d'experts IA<br/><span style={S.grad}>qui travaille pour vous</span></h2>
            <p style={{fontSize:17,color:'#4B4566',maxWidth:520,margin:'0 auto'}}>Chaque agent est autonome et actif 24h/24. Ensemble, ils couvrent tout le cycle de vie de votre produit.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:14}} className="reveal">
            {AGENTS.map((agent,i)=>(
              <div key={agent.id} style={{padding:24,borderRadius:18,background:'#fff',border:`1px solid ${agentColors[i]}20`,boxShadow:'0 2px 12px rgba(124,58,237,0.06)',transition:'all .3s',borderTop:`3px solid ${agentColors[i]}`}}
                onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(-3px)';(e.currentTarget as HTMLDivElement).style.boxShadow='0 8px 30px rgba(0,0,0,0.1)'}}
                onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform='translateY(0)';(e.currentTarget as HTMLDivElement).style.boxShadow='0 2px 12px rgba(124,58,237,0.06)'}}>
                <div style={{width:48,height:48,borderRadius:14,background:agentBg[i],display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,marginBottom:14}}>{agent.icon}</div>
                <h3 style={{fontFamily:'Syne,sans-serif',fontSize:14,fontWeight:700,marginBottom:6,color:'#1A1035'}}>{agent.name}</h3>
                <p style={{fontSize:12,color:'#4B4566',lineHeight:1.6}}>{agent.desc}</p>
                <div style={{display:'inline-flex',alignItems:'center',gap:5,marginTop:12,fontSize:11,fontWeight:700,color:'#10B981',background:'#ECFDF5',padding:'3px 10px',borderRadius:8,border:'1px solid rgba(16,185,129,0.2)'}}>
                  <PulsingDot/>Actif
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section id="how" style={S.section('#fff')}>
        <div style={S.container}>
          <div style={{textAlign:'center',marginBottom:64}} className="reveal">
            <div className="badge badge-green" style={{marginBottom:16}}>✦ Processus simple</div>
            <h2 style={S.h2}>De l'idée au produit en <span style={S.grad}>4 étapes</span></h2>
            <p style={{fontSize:17,color:'#4B4566',maxWidth:500,margin:'0 auto'}}>Nos agents font tout le travail. Vous décrivez, vous choisissez, ils livrent.</p>
          </div>
          <div style={{display:'flex',alignItems:'flex-start',position:'relative'}} className="reveal">
            <div style={{position:'absolute',top:42,left:'12%',right:'12%',height:3,background:'linear-gradient(90deg,#7C3AED,#EC4899,#F97316)',borderRadius:3}}/>
            {[
              {n:'1',icon:'💡',title:'Décrivez votre idée',desc:"En français, en détail ou en quelques mots. Nos agents s'adaptent.",color:'#7C3AED'},
              {n:'2',icon:'🎨',title:'Choisissez un design',desc:'Le Design Agent propose 3 à 6 variantes visuelles uniques.',color:'#EC4899'},
              {n:'3',icon:'⚡',title:'Les agents génèrent',desc:'10 agents en parallèle : code, tests, sécurité, SEO, documentation.',color:'#F97316'},
              {n:'4',icon:'🚀',title:'Déployez et lancez',desc:"Téléchargez votre code ou déployez sur votre hébergement. C'est live !",color:'#10B981'},
            ].map(step=>(
              <div key={step.n} style={{flex:1,padding:'32px 20px',textAlign:'center',position:'relative'}}>
                <div style={{width:52,height:52,borderRadius:'50%',background:step.color,color:'#fff',fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:20,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',position:'relative',zIndex:1,boxShadow:`0 4px 16px ${step.color}50`}}>{step.n}</div>
                <div style={{fontSize:30,marginBottom:12}}>{step.icon}</div>
                <h3 style={{fontFamily:'Syne,sans-serif',fontSize:16,fontWeight:700,marginBottom:8,color:'#1A1035'}}>{step.title}</h3>
                <p style={{fontSize:13,color:'#4B4566',lineHeight:1.65}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section id="pricing" style={S.section('linear-gradient(180deg,#F5F3FF 0%,#FAFAF8 100%)')}>
        <div style={S.container}>
          <div style={{textAlign:'center',marginBottom:64}} className="reveal">
            <div className="badge badge-pink" style={{marginBottom:16}}>✦ Tarification transparente</div>
            <h2 style={S.h2}>Un plan pour <span style={S.grad}>chaque besoin</span></h2>
            <p style={{fontSize:17,color:'#4B4566',maxWidth:500,margin:'0 auto'}}>Paiements en <strong>🪙 DJOLOG (GDL)</strong> uniquement — jeton de l'écosystème DJOLOGBAHA™</p>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16,maxWidth:1080,margin:'0 auto'}} className="reveal">
            {PLANS.map(plan=>(
              <div key={plan.id} style={{
                borderRadius:24,padding:28,position:'relative',
                background: plan.featured ? 'linear-gradient(160deg,#7C3AED,#A855F7)' : '#fff',
                color: plan.featured ? '#fff' : '#1A1035',
                border: plan.featured ? 'none' : '2px solid rgba(124,58,237,0.12)',
                boxShadow: plan.featured ? '0 16px 56px rgba(124,58,237,0.4)' : '0 4px 20px rgba(0,0,0,0.06)',
                transform: plan.featured ? 'scale(1.04)' : 'scale(1)',
                transition:'all .3s',
              }}
                onMouseEnter={e=>{if(!plan.featured)(e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'}}
                onMouseLeave={e=>{if(!plan.featured)(e.currentTarget as HTMLDivElement).style.transform='scale(1)'}}>
                {plan.badge && (
                  <div style={{position:'absolute',top:-14,left:'50%',transform:'translateX(-50%)',padding:'5px 18px',borderRadius:20,background:'linear-gradient(135deg,#F97316,#EC4899)',color:'#fff',fontSize:11,fontWeight:800,whiteSpace:'nowrap',boxShadow:'0 4px 12px rgba(249,115,22,0.4)'}}>
                    🔥 {plan.badge}
                  </div>
                )}
                <div style={{fontFamily:'Syne,sans-serif',fontSize:20,fontWeight:800,marginBottom:4,marginTop:plan.badge?12:0}}>{plan.name}</div>
                <div style={{fontSize:13,opacity:.65,marginBottom:20}}>{plan.sub}</div>
                <div style={{marginBottom:22}}>
                  {plan.priceGDL===0 ? (
                    <div style={{fontFamily:'Syne,sans-serif',fontSize:36,fontWeight:800,color:plan.featured?'#fff':'#10B981'}}>Gratuit</div>
                  ):(
                    <>
                      <span style={{fontFamily:'Syne,sans-serif',fontSize:36,fontWeight:800}}>{plan.priceGDL}</span>
                      <span style={{fontSize:14,opacity:.65,marginLeft:4}}>GDL / mois</span>
                      <div style={{fontSize:13,opacity:.55,marginTop:2}}>≈ {plan.priceUSD} USD / mois</div>
                    </>
                  )}
                </div>
                <ul style={{listStyle:'none',marginBottom:24}}>
                  {plan.features.map(f=>(
                    <li key={f} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:13,padding:'5px 0',borderBottom:`1px solid ${plan.featured?'rgba(255,255,255,0.12)':'rgba(124,58,237,0.06)'}`,opacity:.9}}>
                      <span style={{color:plan.featured?'#A7F3D0':'#10B981',flexShrink:0}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                {plan.priceGDL===0 ? (
                  <Link href="/signup" style={{display:'block',width:'100%',padding:'13px',borderRadius:14,fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif',textAlign:'center',background:'transparent',color:plan.featured?'#fff':'#7C3AED',border:`2px solid ${plan.featured?'rgba(255,255,255,0.4)':'rgba(124,58,237,0.25)'}`,textDecoration:'none',transition:'all .2s'}}>
                    Commencer gratuitement
                  </Link>
                ):(
                  <button onClick={handleCopy}
                    style={{width:'100%',padding:'13px',borderRadius:14,fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif',background:plan.featured?'#fff':'transparent',color:plan.featured?'#7C3AED':'#7C3AED',border:`2px solid ${plan.featured?'transparent':'rgba(124,58,237,0.25)'}`,transition:'all .2s'}}>
                    🪙 Payer en GDL
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Wallet GDL */}
          <div style={{maxWidth:760,margin:'32px auto 0',padding:'24px 28px',borderRadius:18,background:'linear-gradient(135deg,#FFF7ED,#FFF3E0)',border:'2px solid rgba(249,115,22,0.25)',display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}} className="reveal">
            <div style={{fontSize:32}}>🪙</div>
            <div style={{flex:1,minWidth:200}}>
              <div style={{fontWeight:700,color:'#F97316',fontSize:14,marginBottom:4}}>Adresse de paiement GDL officielle · BNB Smart Chain (BEP-20)</div>
              <div style={{fontSize:13,color:'#92400E',marginBottom:8}}>Envoyez vos GDL à cette adresse pour activer votre plan.</div>
              <code style={{fontFamily:'JetBrains Mono,monospace',fontSize:12,background:'rgba(249,115,22,0.1)',color:'#F97316',padding:'8px 14px',borderRadius:10,display:'block',wordBreak:'break-all',border:'1px solid rgba(249,115,22,0.2)'}}>{GDL.wallet}</code>
            </div>
            <button onClick={handleCopy}
              style={{padding:'10px 18px',borderRadius:12,border:'2px solid rgba(249,115,22,0.3)',background:'#fff',color:'#F97316',fontWeight:700,fontSize:13,cursor:'pointer',fontFamily:'Plus Jakarta Sans,sans-serif',whiteSpace:'nowrap'}}>
              {copied?'✅ Copié !':'📋 Copier'}
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{padding:'100px 32px',background:'linear-gradient(135deg,#7C3AED 0%,#EC4899 50%,#F97316 100%)',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div className="dot-grid" style={{position:'absolute',inset:0,opacity:.15,pointerEvents:'none'}}/>
        <div style={{position:'relative',zIndex:1,maxWidth:640,margin:'0 auto'}} className="reveal">
          <div style={{display:'inline-flex',alignItems:'center',gap:6,padding:'6px 16px',borderRadius:20,background:'rgba(255,255,255,0.15)',fontSize:12,fontWeight:700,color:'#fff',marginBottom:24}}>✦ Rejoignez l'aventure</div>
          <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(32px,5vw,54px)',fontWeight:800,color:'#fff',marginBottom:16}}>Prêt à créer votre premier produit digital ?</h2>
          <p style={{color:'rgba(255,255,255,0.8)',fontSize:18,marginBottom:36}}>De l'idée au produit en moins de 2 minutes. Commencez gratuitement.</p>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:14,flexWrap:'wrap'}}>
            <Link href="/signup" style={{padding:'15px 32px',borderRadius:14,background:'#fff',color:'#7C3AED',fontWeight:800,fontSize:16,textDecoration:'none',boxShadow:'0 6px 24px rgba(0,0,0,0.2)',transition:'all .2s',display:'inline-flex',alignItems:'center',gap:8}}>
              ⚡ Commencer gratuitement
            </Link>
            <Link href="/login" style={{padding:'14px 28px',borderRadius:14,border:'2px solid rgba(255,255,255,0.4)',background:'transparent',color:'#fff',fontWeight:700,fontSize:15,textDecoration:'none',transition:'all .2s'}}>
              Se connecter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
