'use client'

import { Radio, Presentation, CalendarRange, GraduationCap } from 'lucide-react'

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
    bookHref: '#',
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
              PBS Section 1
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
            Four ways to bring Strategic AI Transformation into your organisation.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map(({ icon: Icon, title, text, tagline, infoHref, bookHref }) => (
            <div
              key={title}
              className="rounded-2xl p-8 lg:p-10 gentle-animation hover:-translate-y-1"
              style={{ background: '#EFE3D2' }}
            >
              <div className="flex items-start gap-6">
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
    </section>
  )
}
