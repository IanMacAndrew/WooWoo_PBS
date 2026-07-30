'use client'

import { Radio, Presentation, CalendarRange, GraduationCap } from 'lucide-react'
import { useFocus } from '@/contexts/FocusContext'

const subtitleByFocus: Record<string, string> = {
  strategy: 'Four ways to bring Strategic AI Transformation into your organisation.',
  'sales-marketing': 'Four ways to bring Strategic Sales & Marketing AI Transformation into your organisation.',
  hrd: 'Four ways to bring Strategic HRD AI Transformation into your organisation.',
  accounting: 'Four ways to bring Strategic Accounting AI Transformation into your organisation.',
  law: 'Four ways to bring Strategic Law AI Transformation into your organisation (for Legal Firms and Corporations).',
}
const defaultSubtitle = 'Four ways to bring Strategic AI Transformation into your organisation.'

const formats = [
  {
    icon: Radio,
    title: '1-2 Hour Online Briefing',
    text: 'A free, focused introduction to Strategic Workplace AI — delivered remotely, tailored to your organisation or function.',
    tagline: 'Free of charge \u00b7 online',
    infoHref: '#',
    bookHref: '#',
  },
  {
    icon: Presentation,
    title: 'In-Depth AI Strategic Workshop',
    text: 'Up to 7 hours, in person, going deep on implementing Strategic & Organisational AI tools for your specific role.',
    tagline: 'Paid \u00b7 early bird pricing available',
    infoHref: '#',
    bookHref: 'https://buy.stripe.com/aFa9AU6pVevMfD9fbXcbC0A',
    banner: 'EXTRA 10% OFF \u2014 BOOK BY AUG 6!',
  },
  {
    icon: CalendarRange,
    title: 'Five-Weekend Masterclass',
    text: 'Five consecutive weekends of hands-on AI transformation training — HRD Corp claimable, heavily discounted for groups.',
    tagline: 'HRD Corp Claimable',
    infoHref: '#',
    bookHref: '#',
  },
  {
    icon: GraduationCap,
    title: 'Five-Day Bootcamp',
    text: 'Five consecutive weekdays of intensive AI transformation training — HRD Corp claimable, heavily discounted for groups.',
    tagline: 'HRD Corp Claimable',
    infoHref: '#',
    bookHref: '#',
  },
]

export function Portfolio() {
  const { focus } = useFocus()
  const subtitle = (focus && subtitleByFocus[focus]) || defaultSubtitle
  return (
    <section
      id="portfolio"
      className="relative py-32"
      style={{ background: '#FBF3E8' }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
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

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Choose Your <br />Workshop Format</span>
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Formats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map(({ icon: Icon, title, text, tagline, infoHref, bookHref, banner }) => (
            <div
              key={title}
              className="relative rounded-2xl p-8 lg:p-10 gentle-animation hover:-translate-y-1 overflow-hidden"
              style={{ background: '#EFE3D2' }}
            >
              {banner && (
                <div
                  className="woowoo-neon-banner absolute top-0 left-0 right-0 text-center py-2 text-xs sm:text-sm font-black tracking-widest uppercase"
                  style={{ background: '#1c0333' }}
                >
                  {banner}
                </div>
              )}
              <div className={`flex items-start gap-6 ${banner ? 'mt-8' : ''}`}>
                <div className="shrink-0 mt-1">
                  <Icon
                    className="w-8 h-8"
                    strokeWidth={2}
                    style={{ color: '#1a1a1a' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 leading-tight" style={{ color: '#1a1a1a' }}>
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4a4a4a' }}>
                    {text}
                  </p>
                  <p className="text-sm font-bold italic mb-6" style={{ color: '#1a1a1a' }}>
                    {tagline}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={infoHref}
                      className="text-xs font-semibold px-4 py-2 rounded-full border-2 gentle-animation hover:-translate-y-0.5"
                      style={{ borderColor: '#1a1a1a', color: '#1a1a1a' }}
                    >
                      More Info
                    </a>
                    <a
                      href={bookHref}
                      className="text-xs font-semibold px-4 py-2 rounded-full gentle-animation hover:-translate-y-0.5"
                      style={{ background: '#1a1a1a', color: '#fafafa' }}
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes woowooNeonFlicker {
          0%, 19%, 21%, 23%, 54%, 56%, 100% {
            color: #AAFF00;
            text-shadow: 0 0 4px #AAFF00, 0 0 11px #AAFF00, 0 0 19px #AAFF00, 0 0 40px #c79529, 0 0 80px #c79529;
          }
          20%, 22%, 55% {
            color: #6b8f00;
            text-shadow: none;
          }
        }
        .woowoo-neon-banner {
          animation: woowooNeonFlicker 2.5s infinite;
          letter-spacing: 0.15em;
        }
      `}</style>
    </section>
  )
}
