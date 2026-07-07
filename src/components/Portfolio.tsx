'use client'

import { Scale, Shield, Calculator, Users } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Tenacious Effective Litigation',
    text: 'Battle-tested litigators who pursue every angle with relentless rigor — protecting your position and securing outcomes that hold up in court.',
    tagline: 'Because settling for "settled" isn\'t a strategy',
  },
  {
    icon: Shield,
    title: 'Comprehensive Professional Reinsurance',
    text: 'Specialist reinsurance counsel and structuring expertise that spreads risk intelligently and keeps capital working where it matters most.',
    tagline: 'Risk, redistributed with surgical intent',
  },
  {
    icon: Calculator,
    title: 'Complex Competent Accounting',
    text: 'Senior accountants who untangle the most intricate financial puzzles — forensic detail, regulatory fluency, and clarity you can act on.',
    tagline: 'Numbers that tell the truth, beautifully',
  },
  {
    icon: Users,
    title: 'Heroic Human Resources',
    text: 'HR leaders who turn culture, compliance and people strategy into a real competitive edge — from policy design to delicate, high-stakes interventions.',
    tagline: 'People problems, professionally solved',
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
              Some Magnificent Work
            </span>
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: 'var(--brand-gold)' }}
            />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Professionals & their <br />Services</span>
          </h2>

          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Some of the professional services, consulting & training delivered by our exceptional team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, text, tagline }) => (
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
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#4a4a4a' }}>
                    {text}
                  </p>
                  <p className="text-sm font-bold italic" style={{ color: '#1a1a1a' }}>
                    {tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
