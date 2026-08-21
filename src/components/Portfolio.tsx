'use client'

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32"
      style={{ background: '#FBF3E8' }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: 'var(--brand-olive)' }}
            />
            <span className="text-sm font-semibold text-muted-foreground">
              Ready to Rock?!
            </span>
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: 'var(--brand-gold)' }}
            />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            <span className="block mb-2">Choose Your <br />Workshop Format</span>
          </h2>
        </div>

        {/* Big Purple CTA -> book.woowoo.world */}
        <div className="max-w-2xl mx-auto">
          <div
            className="relative rounded-2xl p-10 lg:p-12 text-center"
            style={{ background: '#1c0333', border: '1px solid rgba(199,149,41,0.4)' }}
          >
            <span
              className="inline-block text-xs font-black tracking-widest uppercase mb-4"
              style={{ color: '#c79529' }}
            >
              By Invitation
            </span>
            <h3 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: '#fafafa' }}>
              Five ways to bring Strategic AI Transformation into your organisation.
            </h3>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#E9ECF2' }}>
              Briefings, Deep Dives, Deeper Dives, Masterclasses and Bootcamps, all dates, pricing and HRD
              Corp claim details are live on our booking site.
            </p>
            <a
              href="https://book.woowoo.world"
              className="inline-block text-base font-bold px-10 py-4 rounded-full gentle-animation hover:-translate-y-0.5"
              style={{ background: '#c79529', color: '#1c0333' }}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
