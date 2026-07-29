'use client'

import { useEffect, useRef, useState } from 'react'
import { useFocus } from '@/contexts/FocusContext'

type ProcessStep = {
  number: string
  title: string
  description: string
}

const railSteps: ProcessStep[] = [
  {
    number: "01",
    title: "All Aboard: Setting the Destination",
    description: "A high level business professional pulls into your organisation and working with key leaders, usually driven by major shareholders, maps the journey to define outcomes and deliverables that will get your business where you want to go.",
  },
  {
    number: "02",
    title: "Laying the Tracks: The Roadmap",
    description: "Each professional works with department heads and key managers to engineer a detailed plan of activities, actions and training to get the organization on track.",
  },
  {
    number: "03",
    title: "Full Steam Ahead: Project Launch",
    description: "Organizational Leaders and project participants assemble for the kick-off whistle. Teams break out into dedicated carriages for detailed briefings and task assignments before we leave the station.",
  },
  {
    number: "04",
    title: "On the Main Line: Project Goes LIVE",
    description: "Our experts ride shotgun in the cab — guiding teams, delivering training and making sure every Roadmap outcome and deliverable is firing on all cylinders across the organisation.",
  },
  {
    number: "05",
    title: "Signal Box Check-Ins",
    description: "Bi-weekly briefings with key executives, officers and owners to check the signals — reviewing progress, flagging challenges, and switching tracks if anything needs refining.",
  },
  {
    number: "06",
    title: "Pulling Into the Terminus",
    description: "With every task delivered, we conduct a thorough end-of-line review with key executives and owners to achieve project sign-off and bring the engagement to a clean stop.",
  },
  {
    number: "07",
    title: "Return Journey: The Review",
    description: "A six, 12 or 18 month return trip to make sure the outcomes are firmly coupled to your company culture — and that organisational performance is still running like clockwork.",
  }
]

const strategySteps: ProcessStep[] = [
  {
    number: "01",
    title: "Houston, We Have a Strategy",
    description: "Our mission commander touches down with your leaders and shareholders to plot the coordinates — defining the outcomes and deliverables that will get your business to escape velocity.",
  },
  {
    number: "02",
    title: "Charting the Flight Plan",
    description: "Each specialist works with department heads and key managers to engineer a detailed flight plan of activities, actions and training that keeps the mission on trajectory.",
  },
  {
    number: "03",
    title: "T-Minus: Launch Sequence",
    description: "Leaders and crew assemble for countdown. Teams break out into mission pods for detailed briefings and task assignments before main engine start.",
  },
  {
    number: "04",
    title: "Orbital Insertion: Strategy Goes LIVE",
    description: "Our experts ride in the capsule with you — guiding crews, delivering training and making sure every roadmap deliverable is firing on all thrusters across the organisation.",
  },
  {
    number: "05",
    title: "Mission Control Check-Ins",
    description: "Bi-weekly telemetry with key executives, officers and owners — reviewing trajectory, flagging anomalies, and correcting course if anything drifts off orbit.",
  },
  {
    number: "06",
    title: "Touchdown: Sticking the Landing",
    description: "With every task delivered, we conduct a thorough post-flight debrief with key executives and owners to achieve mission sign-off and a clean landing.",
  },
  {
    number: "07",
    title: "Return Trajectory: The Review",
    description: "A six, 12 or 18 month return trip to make sure the outcomes are still in orbit — and that organisational performance hasn't drifted off course.",
  }
]

const salesMarketingSteps: ProcessStep[] = [
  {
    number: "01",
    title: "All Aboard: Setting the Sales Destination",
    description: "A senior Sales & Marketing professional pulls into your organisation and, working with commercial leaders, maps the journey to the revenue outcomes you actually want to hit.",
  },
  {
    number: "02",
    title: "Laying the Pipeline Tracks",
    description: "Each professional works with sales and marketing managers to engineer a detailed plan of campaigns, funnels and training to get the pipeline on track.",
  },
  {
    number: "03",
    title: "Full Steam Ahead: Campaign Launch",
    description: "Leaders and teams assemble for the kick-off whistle. Departments break out into dedicated carriages for briefings and territory assignments before we leave the station.",
  },
  {
    number: "04",
    title: "On the Main Line: The Sales Engine Goes LIVE",
    description: "Our experts ride shotgun in the cab — guiding reps, delivering training and making sure every campaign and target is firing on all cylinders.",
  },
  {
    number: "05",
    title: "Signal Box Check-Ins: Pipeline Reviews",
    description: "Bi-weekly briefings with sales and marketing leaders to check the signals — reviewing conversion, flagging blockers, and switching tracks if targets need refining.",
  },
  {
    number: "06",
    title: "Pulling Into the Revenue Terminus",
    description: "With every campaign delivered, we conduct a thorough end-of-line review with leadership to achieve sign-off on results and bring the engagement to a clean stop.",
  },
  {
    number: "07",
    title: "Return Journey: The ROI Review",
    description: "A six, 12 or 18 month return trip to make sure the revenue gains are firmly coupled to your organisation — and still running like clockwork.",
  }
]

const hrdSteps: ProcessStep[] = [
  {
    number: "01",
    title: "All Aboard: Setting the People Destination",
    description: "A senior HR Development professional pulls into your organisation and, working with leadership, maps the journey to the culture and capability outcomes you want to reach.",
  },
  {
    number: "02",
    title: "Laying the Tracks: The People Roadmap",
    description: "Each professional works with department heads and people managers to engineer a detailed plan of development, training and change activity to get the organisation on track.",
  },
  {
    number: "03",
    title: "Full Steam Ahead: Programme Launch",
    description: "Leaders and participants assemble for the kick-off whistle. Teams break out into dedicated carriages for briefings and role assignments before we leave the station.",
  },
  {
    number: "04",
    title: "On the Main Line: Change Goes LIVE",
    description: "Our experts ride shotgun in the cab — guiding teams, delivering training and making sure every capability and culture deliverable is firing on all cylinders.",
  },
  {
    number: "05",
    title: "Signal Box Check-Ins: Culture Pulse Checks",
    description: "Bi-weekly briefings with key executives and people leaders to check the signals — reviewing adoption, flagging resistance, and switching tracks if anything needs refining.",
  },
  {
    number: "06",
    title: "Pulling Into the Terminus: Capability Sign-Off",
    description: "With every module delivered, we conduct a thorough end-of-line review with leadership to achieve programme sign-off and bring the engagement to a clean stop.",
  },
  {
    number: "07",
    title: "Return Journey: The Retention Review",
    description: "A six, 12 or 18 month return trip to make sure the people outcomes are firmly coupled to your culture — and still running like clockwork.",
  }
]

const focusCopy = {
  strategy: {
    tagline: "Our strategic starship launches you into a paragon of corporate sublimity",
    steps: strategySteps,
    theme: 'space' as const,
  },
  'sales-marketing': {
    tagline: "Our commercial power train pulls you into a paragon of revenue sublimity",
    steps: salesMarketingSteps,
    theme: 'rail' as const,
  },
  hrd: {
    tagline: "Our people-first power train pulls you into a paragon of cultural sublimity",
    steps: hrdSteps,
    theme: 'rail' as const,
  },
} as const

export function About() {
  const { focus } = useFocus()
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)
  const cycleRef = useRef<HTMLDivElement | null>(null)
  const [cycleInView, setCycleInView] = useState(false)

  const active = focus && focus in focusCopy ? focusCopy[focus as keyof typeof focusCopy] : null
  const processSteps = active ? active.steps : railSteps
  const tagline = active ? active.tagline : "Our professional power train  pulls you into a paragon of corporate sublimity"
  const isSpace = active?.theme === 'space'

  useEffect(() => {
    // Start film animation after a 3 second pause
    setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveFrame(index)
         
        }, index * 2000 + 1000) // Ultra slow: Start after 24s, then every 72s
      })
    }, 3000) // 3 second pause after section loads
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus])

  useEffect(() => {
    const el = cycleRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCycleInView(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Film Grain Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`,
          backgroundSize: '3px 3px',
          animation: 'filmGrain 8s infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Organisational Excellence
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Creating the Journey
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {tagline}
          </p>
        </div>

        {/* Film Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Railway Track / Starfield Background */}
          <div className="relative rounded-xl overflow-hidden"
               style={{ 
                 background: isSpace
                   ? 'linear-gradient(to bottom, #05040f 0%, #0b0a1f 20%, #1c0333 50%, #0b0a1f 80%, #05040f 100%)'
                   : 'linear-gradient(to bottom, #3a2a1a 0%, #4a3220 20%, #2d1f12 50%, #4a3220 80%, #3a2a1a 100%)',
                 boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.05)' 
               }}>
            
            {/* Railway Ties (sleepers) / Starfield dots - scrolling */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className={`flex items-center h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%', gap: isSpace ? '18px' : '32px', paddingLeft: '16px' }}>
                {[...Array(isSpace ? 90 : 60)].map((_, i) => (
                  isSpace ? (
                    <div key={`star-${i}`} className="flex-shrink-0 rounded-full"
                         style={{
                           width: i % 3 === 0 ? '4px' : '2px',
                           height: i % 3 === 0 ? '4px' : '2px',
                           background: '#c79529',
                           opacity: 0.25 + (i % 5) * 0.12,
                           boxShadow: '0 0 6px rgba(199,149,41,0.6)',
                         }} />
                  ) : (
                    <div key={`tie-${i}`} className="flex-shrink-0 w-12 h-full"
                         style={{ 
                           background: 'linear-gradient(to bottom, #5c3a1f, #3d2611, #5c3a1f)',
                           boxShadow: 'inset 0 0 8px rgba(0,0,0,0.5), 2px 0 4px rgba(0,0,0,0.4)',
                           borderLeft: '1px solid rgba(0,0,0,0.4)',
                           borderRight: '1px solid rgba(0,0,0,0.4)'
                         }} />
                  )
                ))}
              </div>
            </div>

            {/* Steel Rails (rail theme) / Light streaks (space theme) - top and bottom (static) */}
            <div className="absolute left-0 right-0 z-10 pointer-events-none" style={{ top: '28%' }}>
              <div className="h-1.5" style={{
                background: isSpace
                  ? 'linear-gradient(to right, transparent, #c79529aa 50%, transparent)'
                  : 'linear-gradient(to bottom, #8a8a8a, #d4d4d4 50%, #5a5a5a)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }} />
            </div>
            <div className="absolute left-0 right-0 z-10 pointer-events-none" style={{ bottom: '28%' }}>
              <div className="h-1.5" style={{
                background: isSpace
                  ? 'linear-gradient(to right, transparent, #c79529aa 50%, transparent)'
                  : 'linear-gradient(to bottom, #8a8a8a, #d4d4d4 50%, #5a5a5a)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }} />
            </div>

            {/* Film Frames Container - Scrolling Animation */}
            <div className="relative py-6 px-8 overflow-hidden h-64 max-w-full z-20">
              <div className={`flex transition-transform duration-1000 ease-in-out ${
                animationStarted ? 'film-scroll-animation' : ''
              }`} style={{ width: 'max-content', gap: '24px' }}>
                
                {[...processSteps, ...processSteps].map((step, idx) => {
                  const carColors = ['#808000', '#c79529', '#0F52BA', '#764A34', '#596A8B', '#1c0333', '#AAFF00'];
                  const bodyColor = carColors[idx % carColors.length];
                  const isDark = ['#0F52BA', '#764A34', '#596A8B', '#1c0333', '#808000'].includes(bodyColor);
                  const textColor = isDark ? '#fafafa' : '#1a1a1a';
                  const index = idx % processSteps.length;
                  return (
                    <div key={`car-${idx}`} className="relative flex-shrink-0 w-80 h-52 flex items-center">
                      {/* Couplers (rail) / Thruster glow (space) */}
                      {isSpace ? (
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-0"
                             style={{ background: '#c79529', boxShadow: '0 0 10px 3px rgba(199,149,41,0.7)' }} />
                      ) : (
                        <>
                          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-gray-700 rounded-sm z-0" />
                          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-gray-700 rounded-sm z-0" />
                        </>
                      )}
                      
                      {/* Bogies (wheel trucks) - hidden in space theme */}
                      {!isSpace && (
                        <>
                          <div className="absolute top-0 left-8 right-8 flex justify-between px-4 z-10">
                            <div className="w-10 h-3 bg-gray-900 rounded-sm border border-gray-600" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.6)' }} />
                            <div className="w-10 h-3 bg-gray-900 rounded-sm border border-gray-600" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.6)' }} />
                          </div>
                          <div className="absolute bottom-0 left-8 right-8 flex justify-between px-4 z-10">
                            <div className="w-10 h-3 bg-gray-900 rounded-sm border border-gray-600" style={{ boxShadow: '0 -1px 2px rgba(0,0,0,0.6)' }} />
                            <div className="w-10 h-3 bg-gray-900 rounded-sm border border-gray-600" style={{ boxShadow: '0 -1px 2px rgba(0,0,0,0.6)' }} />
                          </div>
                        </>
                      )}

                      {/* Car / Capsule body (top-down view) */}
                      <div
                        className={`relative mx-2 my-4 w-full h-44 ${
                          activeFrame >= index ? 'ring-2 ring-offset-2 ring-offset-transparent' : ''
                        }`}
                        style={{
                          background: `linear-gradient(180deg, ${bodyColor} 0%, ${bodyColor}dd 35%, ${bodyColor}aa 50%, ${bodyColor}dd 65%, ${bodyColor} 100%)`,
                          borderRadius: isSpace ? '9999px 9999px 24px 24px' : '24px',
                          border: isSpace ? '2px solid rgba(199,149,41,0.5)' : '2px solid rgba(0,0,0,0.4)',
                          boxShadow: isSpace
                            ? '0 12px 24px rgba(0,0,0,0.6), 0 0 30px rgba(199,149,41,0.15), inset 0 2px 8px rgba(255,255,255,0.15)'
                            : '0 12px 24px rgba(0,0,0,0.5), inset 0 2px 8px rgba(255,255,255,0.15), inset 0 -2px 8px rgba(0,0,0,0.3)',
                          color: textColor,
                        }}
                      >
                        {/* Roof ridge */}
                        <div className="absolute top-1/2 left-4 right-4 h-px -translate-y-1/2 opacity-30" style={{ background: textColor }} />
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-2 rounded-sm opacity-40" style={{ background: textColor }} />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-2 rounded-sm opacity-40" style={{ background: textColor }} />

                        {/* Car number plate */}
                        <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm z-20 border-2"
                             style={{ background: '#1a1a1a', color: '#fafafa', borderColor: '#c79529', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>
                          {step.number}
                        </div>

                        <div className="relative h-full px-8 py-5 flex flex-col justify-center">
                          <h3 className="font-black text-lg leading-tight mb-2" style={{ color: textColor }}>
                            {step.title}
                          </h3>
                          <p className="text-xs leading-relaxed opacity-90" style={{ color: textColor }}>
                            {step.description}
                          </p>
                        </div>

                        {/* Rivets / Portholes */}
                        <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between opacity-50">
                          {[...Array(4)].map((_, i) => (<div key={i} className="w-1 h-1 rounded-full" style={{ background: textColor }} />))}
                        </div>
                        <div className="absolute right-2 top-4 bottom-4 flex flex-col justify-between opacity-50">
                          {[...Array(4)].map((_, i) => (<div key={i} className="w-1 h-1 rounded-full" style={{ background: textColor }} />))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Enhanced Projector Light Effect */}
          {activeFrame >= 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,0,0.2) 40%, transparent 60%)',
                  animation: 'projectorLight 12s ease-in-out infinite'
                }}
              />
            </div>
          )}
        </div>

        {/* Film Controls */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-card/80 backdrop-blur-sm clean-border rounded-2xl px-8 py-4 subtle-shadow">
            
            {/* Film Speed Indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Professionals</span>
            </div>
            
            <div className="w-px h-6 bg-border" />
            
            {/* Duration */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <span className="text-sm font-semibold text-foreground">3-6 months</span>
            </div>
            
            <div className="w-px h-6 bg-border" />
            
            {/* Quality */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <span className="text-sm font-semibold text-foreground">Renown performance</span>
            </div>
          </div>
        </div>

        {/* The WooWoo Way */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-4">The WooWoo Way</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our professional expert co-creators refine outcomes with you to ensure unparalleled success.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Film strip */}
            <div className="relative rounded-xl p-6 overflow-hidden"
                 style={{
                   background: 'linear-gradient(to bottom, #0d0d12 0%, #1a1a22 50%, #0d0d12 100%)',
                   boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                 }}>
              {/* Perforations top/bottom */}
              <div className="absolute top-2 left-0 right-0 flex justify-around">
                {[...Array(16)].map((_, i) => (
                  <div key={`pt-${i}`} className="w-4 h-2 rounded-sm bg-black/60" />
                ))}
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-around">
                {[...Array(16)].map((_, i) => (
                  <div key={`pb-${i}`} className="w-4 h-2 rounded-sm bg-black/60" />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-6">
                {[
                  { n: "01", t: "Detailed Requirement Study", d: "We listen deeply, map and determine your outcomes aligned with your personal or corporate vision, before a single thought creates." },
                  { n: "02", t: "Create", d: "Our professional co-creators craft bold, original master works with you — designed to deliver exceptional results." },
                  { n: "03", t: "Agree the Final Solution", d: "We collaborate with you to align every detail, ensuring the solution exceeds expectations before we proceed." },
                  { n: "04", t: "Refine", d: "Precision polish. Every element is stress-tested and elevated until excellence is the only outcome." },
                  { n: "05", t: "Launch", d: "Confident deployment backed by rigorous QA — now we can loop back to make it even better." },
                ].map((s) => (
                  <div key={s.n} className="relative bg-card rounded-lg p-5 pt-7 subtle-shadow">
                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2"
                         style={{ background: '#1a1a1a', color: '#fafafa', borderColor: '#c79529' }}>
                      {s.n}
                    </div>
                    <h4 className="font-black text-base leading-tight mb-2 text-foreground">{s.t}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborative Outcome Excellence Cycle */}
            <div
              ref={cycleRef}
              className={`mt-8 relative bg-card/60 backdrop-blur-sm clean-border rounded-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 subtle-shadow ${cycleInView ? 'cycle-in-view' : ''}`}
            >
              {/* Forward journey arc */}
              <div className="flex items-center justify-center">
                <svg
                  viewBox="0 0 720 70"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-full max-w-[min(48rem,100%)] h-10 sm:h-12 md:h-14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    className="cycle-path"
                    style={{ ['--draw-length' as string]: 900 }}
                    d="M 40 60 Q 40 10 360 10 Q 680 10 680 60"
                    stroke="var(--cycle-stroke)"
                    strokeWidth="2.5"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polygon
                    className="cycle-arrow"
                    points="670,52 690,52 680,68"
                    fill="var(--cycle-arrow)"
                  />
                </svg>
              </div>

              {/* Label */}
              <div className="text-center mt-2 mb-3">
                <span
                  className="text-xs sm:text-sm md:text-base font-black tracking-widest uppercase"
                  style={{ color: 'var(--cycle-arrow)' }}
                >
                  Collaborative Outcome Excellence Cycle
                </span>
              </div>

              {/* Monitoring text */}
              <p className="text-center text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-6">
                Continuously monitored against the planned deliverables and outcomes — with corrective actions whenever the transformative journey calls for them.
              </p>

              {/* Return loop */}
              <div className="flex items-center justify-center">
                <svg
                  viewBox="0 0 720 70"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-full max-w-[min(48rem,100%)] h-10 sm:h-12 md:h-14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    className="cycle-path cycle-path-return"
                    style={{ ['--draw-length' as string]: 900 }}
                    d="M 680 10 Q 680 60 360 60 Q 40 60 40 10"
                    stroke="var(--cycle-stroke)"
                    strokeWidth="2.5"
                    strokeDasharray="8 6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polygon
                    className="cycle-arrow cycle-arrow-return"
                    points="32,18 52,18 42,2"
                    fill="var(--cycle-arrow)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
