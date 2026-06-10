import { useState } from 'react'
import developerAvatar from './assets/developer_avatar.png'
import './App.css'

// Generate stable random particle positions to prevent re-render flickering
const particlesData = Array.from({ length: 35 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 95}%`,
  left: `${Math.random() * 98}%`,
  size: `${Math.random() * 2 + 1.2}px`,
  delay: `${Math.random() * 6}s`,
  duration: `${Math.random() * 8 + 6}s`,
  color: Math.random() > 0.65 ? (Math.random() > 0.5 ? '#a855f7' : '#06b6d4') : '#ffffff'
}))

function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [darkMode, setDarkMode] = useState(true)

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact']

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen relative flex flex-col justify-between overflow-x-hidden lg:overflow-hidden z-10 selection:bg-purple-500/30 selection:text-white">
      {/* Background Star Overlay */}
      <div className="stars-overlay" />

      {/* Space Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particlesData.map((p) => (
          <div
            key={p.id}
            className="space-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 8px ${p.color}`,
              '--delay': p.delay,
              '--duration': p.duration,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Decorative Neon Background Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-purple-600/15 rounded-full filter blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[25%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[20%] w-[300px] h-[300px] bg-magenta-500/10 rounded-full filter blur-[90px] pointer-events-none z-0" />

      {/* Animated Bottom Left Wave Mesh */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[350px] pointer-events-none z-0 overflow-hidden opacity-30 select-none">
        <svg className="w-full h-full wave-animate" viewBox="0 0 400 300" fill="none">
          <path d="M-50,350 C50,280 150,330 250,220 C350,110 380,150 450,80" stroke="url(#wave-grad-1)" strokeWidth="2.5" />
          <path d="M-50,370 C60,290 170,350 270,240 C370,130 390,170 470,90" stroke="url(#wave-grad-2)" strokeWidth="2" />
          <path d="M-50,390 C70,300 190,370 290,260 C390,150 400,190 490,100" stroke="url(#wave-grad-1)" strokeWidth="1" opacity="0.7" />
          <path d="M-50,410 C80,310 210,390 310,280 C410,170 410,210 510,110" stroke="url(#wave-grad-2)" strokeWidth="0.8" opacity="0.4" />
          <defs>
            <linearGradient id="wave-grad-1" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="60%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Navigation Header */}
      <header className="w-full max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative z-10 select-none">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors">
            <svg 
              className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="url(#logo-gradient)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">
            YourName<span className="text-purple-500">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/[0.02] border border-white/[0.05] rounded-full px-7 py-2.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveTab(link)}
              className={`relative text-sm font-medium transition-colors cursor-pointer py-1 ${
                activeTab === link ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {link}
              {activeTab === link && (
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-500 ${darkMode ? 'rotate-0 text-amber-400' : 'rotate-180 text-slate-300'}`} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>

          {/* Download CV */}
          <a
            href="#download-cv"
            className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2 cursor-pointer shadow-md select-none"
          >
            Download CV
            <svg 
              className="w-4 h-4 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch py-4 lg:py-2 relative z-10">
        
        {/* Left Hero Column */}
        <section className="lg:col-span-5 flex flex-col justify-end items-start text-left pb-4 lg:pb-8 gap-5 lg:pr-4">
          <div className="flex flex-col gap-2.5">
            <span className="text-sm md:text-base font-semibold tracking-wider text-purple-400 uppercase">
              Hi, I'm
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              Your Name <span className="inline-block waving-emoji text-4xl md:text-5xl lg:text-6xl align-middle select-none">👋</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gradient-purple-blue tracking-tight leading-none py-1">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            Focused on creating clean, efficient, and user-friendly solutions.
          </p>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button className="btn-gradient px-6 py-3.5 rounded-xl text-base font-bold text-white flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto">
              View My Work
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="btn-outline px-6 py-3.5 rounded-xl text-base font-bold text-white flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
              Get In Touch
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 mt-8 lg:mt-12">
            <span className="text-xs font-bold tracking-[0.2em] text-purple-400/80 uppercase">
              Connect With Me
            </span>
            <div className="flex items-center gap-3">
              {[
                {
                  name: 'GitHub',
                  icon: (
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ),
                  url: 'https://github.com'
                },
                {
                  name: 'LinkedIn',
                  icon: (
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  url: 'https://linkedin.com'
                },
                {
                  name: 'Twitter',
                  icon: (
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                  url: 'https://twitter.com'
                },
                {
                  name: 'Email',
                  icon: (
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  url: 'mailto:info@example.com'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn w-12 h-12 rounded-xl flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Right Visuals Column */}
        <section className="lg:col-span-7 flex flex-col items-center justify-end relative pb-4 lg:pb-8 select-none">
          
          {/* Avatar Container with glowing rings */}
          <div className="relative w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] flex items-center justify-center">
            
            {/* Outer Concentric Glowing Halo */}
            <div className="absolute inset-[-12%] rounded-full neon-halo-outer pointer-events-none z-0">
              {/* Halos starry points */}
              <div className="absolute top-[12%] left-[15%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]" />
              <div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]" />
            </div>

            {/* Inner Concentric Glowing Halo */}
            <div className="absolute inset-[-4%] rounded-full neon-halo-inner pointer-events-none z-0">
              {/* Halos starry points */}
              <div className="absolute top-[75%] left-[6%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]" />
              <div className="absolute top-[25%] right-[5%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]" />
            </div>

            {/* Avatar Photo Frame */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#07051a] z-10 relative shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
              <img 
                src={developerAvatar} 
                alt="Developer Portrait" 
                className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* FLOATING BADGE 1: Experience (Left) */}
            <div className="absolute left-[-16%] top-[40%] z-20 glass-card float-slow p-3.5 rounded-2xl flex items-center gap-3.5 max-w-[190px] md:max-w-[210px] select-none pointer-events-auto">
              <div className="w-11 h-11 rounded-xl bg-purple-600/30 border border-purple-500/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Experience</span>
                <span className="text-base font-bold text-white leading-tight">2+ Years</span>
                <span className="text-[10px] text-slate-400">Building solutions</span>
              </div>
            </div>

            {/* FLOATING BADGE 2: Clean Code (Right Top) */}
            <div className="absolute right-[-14%] top-[-5%] z-20 glass-card float-medium p-4 rounded-2xl flex flex-col gap-1.5 w-[160px] md:w-[180px] text-left select-none pointer-events-auto">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-white">Clean Code</span>
              </div>
              <ul className="flex flex-col gap-1 text-[11px] text-slate-300 font-medium pl-1.5 mt-1 list-disc marker:text-emerald-400">
                <li>Scalable</li>
                <li>Efficient</li>
                <li>Maintainable</li>
              </ul>
            </div>

            {/* FLOATING BADGE 3: Passionate Problem Solver (Right Bottom) */}
            <div className="absolute right-[-12%] bottom-[12%] z-20 glass-card float-fast p-3.5 rounded-2xl flex items-center gap-3.5 max-w-[190px] md:max-w-[210px] select-none pointer-events-auto">
              <div className="w-11 h-11 rounded-xl bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 2c.5 1.5 1.5 2.5 3 3M19 2c-3.5 0-7.5 3-9.5 5.5l-3 3c-1.5 1.5-1.5 4 0 5.5l1 1c1.5 1.5 4 1.5 5.5 0l3-3C18.5 12 21.5 8 21.5 4.5V2h-2.5z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white leading-tight">Passionate</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Problem Solver</span>
                <span className="text-[10px] text-slate-400 leading-tight">Turning ideas into real products</span>
              </div>
            </div>

          </div>

          {/* Stats bar (positioned bottom-right relative to layout, fits nicely) */}
          <div className="w-full max-w-[560px] md:max-w-[620px] mt-12 lg:mt-14 glass-card p-4 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 select-none relative z-20">
            {/* Stat 1 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 relative">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <span className="text-xl md:text-2xl font-extrabold text-white">10+</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Projects Completed</span>
              <div className="hidden sm:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/10" />
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 relative">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                <span className="text-xl md:text-2xl font-extrabold text-white">5+</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Technologies Mastered</span>
              <div className="hidden sm:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/10" />
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 relative">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M12 2a6 6 0 0 1 6 6v3.5c0 3.3-2.7 6-6 6s-6-2.7-6-6V8a6 6 0 0 1 6-6z" />
                </svg>
                <span className="text-xl md:text-2xl font-extrabold text-white">3+</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Hackathons Participated</span>
              <div className="hidden sm:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/10" />
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span className="text-xl md:text-2xl font-extrabold text-white">100%</span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">Commitment Rate</span>
            </div>
          </div>

        </section>

      </main>

      {/* Scroll Down Indicator (Absolute positioned in the center-left gap) */}
      <div className="absolute left-[40%] xl:left-[42%] bottom-6 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 cursor-pointer group select-none z-30">
        <div className="border border-slate-500 rounded-full w-5 h-8 flex justify-center pt-1 group-hover:border-purple-500 transition-colors">
          <span className="w-1.5 h-2.5 bg-purple-400 rounded-full mouse-scroll-dot" />
        </div>
        <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase group-hover:text-purple-400 transition-colors">
          Scroll Down
        </span>
        <svg 
          className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-500 animate-bounce transition-colors mt-0.5" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Minimal Bottom Margin Spacer */}
      <footer className="w-full h-6 relative z-10 select-none pb-2" />
    </div>
  )
}

export default App
