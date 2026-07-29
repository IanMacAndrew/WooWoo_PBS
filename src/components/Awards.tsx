'use client'

function LaurelAward({ label, dark }: { label: string; dark: boolean }) {
  const stroke = dark ? '#e8e2d6' : '#1c0333'
  return (
    <svg viewBox="0 0 220 200" className="w-full h-auto max-w-48 mx-auto" aria-label={label}>
      {/* Left laurel branch */}
      <g stroke={stroke} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M60 170 C 40 150, 30 120, 35 90 C 38 65, 50 40, 68 20" />
        {[30, 50, 70, 90, 110, 130, 150].map((t, i) => {
          const y = 170 - t
          const x = 60 - t * 0.35
          return <path key={i} d={`M${x} ${y} q -16 -6 -22 6`} />
        })}
      </g>
      {/* Right laurel branch (mirrored) */}
      <g stroke={stroke} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M160 170 C 180 150, 190 120, 185 90 C 182 65, 170 40, 152 20" />
        {[30, 50, 70, 90, 110, 130, 150].map((t, i) => {
          const y = 170 - t
          const x = 160 + t * 0.35
          return <path key={i} d={`M${x} ${y} q 16 -6 22 6`} />
        })}
      </g>
      {/* Base ribbon */}
      <path d="M75 168 L110 185 L145 168" stroke={stroke} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Label */}
      <text
        x="110"
        y="95"
        textAnchor="middle"
        fontSize="15"
        fontWeight="800"
        fill={stroke}
        style={{ fontFamily: 'inherit' }}
      >
        {label.length > 14 ? (
          <>
            <tspan x="110" dy="-8">{label.split(' ').slice(0, Math.ceil(label.split(' ').length / 2)).join(' ')}</tspan>
            <tspan x="110" dy="20">{label.split(' ').slice(Math.ceil(label.split(' ').length / 2)).join(' ')}</tspan>
          </>
        ) : (
          label
        )}
      </text>
    </svg>
  )
}

export function Awards() {
  const awards = [
    { label: 'Rising Star', delay: '0s' },
    { label: "Customer's Choice", delay: '0.5s' },
    { label: 'Innovation', delay: '1s' },
    { label: 'Smart Award', delay: '1.5s' },
    { label: 'Excellence', delay: '2s' },
    { label: 'Rising Talent', delay: '2.5s' },
  ]

  return (
    <section id="awards" className="relative py-20 bg-background overflow-hidden">
      
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      


      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Recognition & Achievement
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Awards & Recognition
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Celebrated excellence in Professional & Business Excellence
          </p>
        </div>

        {/* Awards Display */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Awards Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {awards.map((award, index) => {
              const dark = index === 2 || index === 3
              return (
              <div
                key={award.label}
                className="group relative flex flex-col items-center text-center"
                style={{ animationDelay: award.delay }}
              >
                
                {/* Award Pedestal */}
                <div className="relative mb-6">
                  
                  {/* Floating Award Display */}
                  <div className={`relative p-6 rounded-2xl border shadow-md transition-all duration-500 hover:scale-105 ${
                    dark ? 'bg-gray-800 border-gray-700' : 'bg-background border-border'
                  }`}
                       style={{ 
                         boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                       }}>
                    
                    {/* Award Graphic */}
                    <LaurelAward label={award.label} dark={dark} />
                    

                  </div>
                  
                  {/* Floating Animation */}
                  <div className="float-gentle absolute inset-0 pointer-events-none" />
                </div>

              </div>
            )})}
          </div>

        </div>


      </div>
      
    </section>
  )
}
