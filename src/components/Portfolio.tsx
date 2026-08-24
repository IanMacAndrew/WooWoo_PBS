'use client'

type FormatCard = {
  eyebrow: string
  title: string
  desc: string
  anchor: string
  dark: boolean
  badge?: string
}

const formats: FormatCard[] = [
  {
    eyebrow: 'Narrow AI · 2 hours',
    title: 'Drive Time Briefing',
    desc: "A short, high-level session timed for a morning or evening commute — what's changing, and where to focus first.",
    anchor: 'briefing',
    dark: false,
    badge: 'Coming Soon',
  },
  {
    eyebrow: 'Narrow AI · 1 Day',
    title: 'Strategy Led Deep Dive',
    desc: 'A full working day to move from strategic awareness to practical, task-level AI application.',
    anchor: 'deepdive',
    dark: false,
  },
  {
    eyebrow: 'Narrow AI · 2 Days',
    title: 'Strategy Led Deeper Dive',
    desc: 'The same strategy-first grounding as the Deep Dive, with more room to actually implement, not just introduce.',
    anchor: 'deeperdive',
    dark: false,
  },
  {
    eyebrow: 'AGI · 5 Weeks',
    title: 'Strategy Led Masterclass',
    desc: "Re-engineering how your organisation's systems work, to actually adopt AGI — not just use a tool.",
    anchor: 'masterclass',
    dark: true,
  },
  {
    eyebrow: 'AGI · 5 Days',
    title: 'Strategy Led Bootcamp',
    desc: 'The same AGI re-engineering as the Masterclass, compressed into one immersive week for teams who can clear it.',
    anchor: 'bootcamp',
    dark: true,
    badge: 'Coming Soon',
  },
]

function FormatCardEl({ f }: { f: FormatCard }) {
  return (
    <div
      className="format-card group relative flex flex-col shrink-0 snap-center rounded-2xl p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: f.dark ? '#1c0333' : '#fff',
        border: f.dark ? '1px solid rgba(199,149,41,0.5)' : '1px solid rgba(28,3,51,0.12)',
        boxShadow: f.dark
          ? '0 10px 30px -10px rgba(28,3,51,0.6)'
          : '0 6px 20px -12px rgba(28,3,51,0.25)',
      }}
    >
      {f.badge && (
        <span
          className="absolute -top-3 right-5 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
          style={{
            background: '#c0392b',
            color: '#fff',
            animation: 'pulse-badge 1.6s ease-in-out infinite',
          }}
        >
          ⚡ {f.badge}
        </span>
      )}
      <div
        className="text-[11px] font-black uppercase tracking-widest mb-2"
        style={{ color: f.dark ? '#c79529' : '#97711F' }}
      >
        {f.eyebrow}
      </div>
      <h3
        className="text-lg sm:text-xl font-black mb-3 leading-snug"
        style={{ color: f.dark ? '#fafafa' : '#1c0333' }}
      >
        {f.title}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1 mb-6"
        style={{ color: f.dark ? '#E9ECF2' : '#5C566B' }}
      >
        {f.desc}
      </p>
      <div className="flex gap-2">
        <a
          href={`https://book.woowoo.world/#${f.anchor}`}
          className="flex-1 text-center text-sm font-semibold py-2.5 rounded-full gentle-animation"
          style={{
            border: f.dark ? '1px solid #fff' : '1px solid #1c0333',
            color: f.dark ? '#fff' : '#1c0333',
          }}
        >
          Info
        </a>
        <a
          href={`https://book.woowoo.world/#${f.anchor}`}
          className="flex-1 text-center text-sm font-bold py-2.5 rounded-full gentle-animation hover:-translate-y-0.5"
          style={{ background: '#c79529', color: '#1c0333' }}
        >
          Buy
        </a>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32"
      style={{ background: '#FBF3E8' }}
    >
      <style>{`
        @keyframes pulse-badge {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(1.05); }
        }
        .format-scroll {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .format-scroll::-webkit-scrollbar { display: none; }
        .format-card { width: 82vw; }
        @media (min-width: 480px) {
          .format-card { width: 62vw; }
        }
        @media (min-width: 640px) {
          .format-scroll { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; overflow: visible; }
          .format-card { width: auto; }
        }
        @media (min-width: 1024px) {
          .format-scroll { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
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

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
            <span className="block mb-2">Choose Your <br />Workshop Format</span>
          </h2>
          <span
            className="inline-block text-xs font-black tracking-widest uppercase"
            style={{ color: '#c79529' }}
          >
            By Invitation · Five Ways In
          </span>
        </div>

        {/* FIVE-BOX CTA -> book.woowoo.world */}
        <div className="max-w-6xl mx-auto">
          <div className="format-scroll flex gap-4 overflow-x-auto px-1 pb-4 -mx-1 sm:mx-0 sm:px-0 sm:pb-0">
            {formats.map((f) => (
              <FormatCardEl key={f.anchor} f={f} />
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 sm:hidden">
            ← Swipe to see all five formats →
          </p>
          <div className="text-center mt-10">
            <a
              href="https://book.woowoo.world"
              className="inline-block text-base font-bold px-10 py-4 rounded-full gentle-animation hover:-translate-y-0.5"
              style={{ background: '#1c0333', color: '#fff', border: '1px solid rgba(199,149,41,0.4)' }}
            >
              See All Dates &amp; Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
