'use client'

import { useFocus } from '@/contexts/FocusContext'
import { Compass, TrendingUp, Users2, Gavel, Contact, Calculator, ShieldCheck } from 'lucide-react'

const profiles = {
  strategy: {
    eyebrow: 'Strategic Focus',
    icon: Compass,
    name: 'David Hoard',
    role: 'AI Strategy Director',
    tagline: 'Two decades of strategy consulting across the globe, now driving AI transformation from Kuala Lumpur.',
    bullets: [
      'Director, Consulting at Ernst & Young since 2017 — leading strategy and transformation engagements across government, aviation, property, plantations, e-commerce and Smart Cities',
      'Developed Malaysia\u2019s National COVID-19 Recovery Plan and the Halal Industry Master Plan 2.0',
      'Prior strategy leadership at PwC, AWR Lloyd (Bangkok), Booz & Company (D\u00fcsseldorf & Bangkok), Hochtief Construction AG (Essen), and KPMG/BearingPoint',
      'MBA, London Business School (Corporate Finance) \u00b7 BA Economics & Political Science, University of Michigan',
    ],
    note: 'Pending confirmation from David on name/alias and CV summary approval.',
    color: '#1c0333',
  },
  'sales-marketing': {
    eyebrow: 'Sales & Marketing Focus',
    icon: TrendingUp,
    name: 'Ian MacAndrew',
    nameSuffix: '(Omar IS MacAndrew)',
    role: 'Sales, Marketing & Troubleshooting Operations Recovery Consultant',
    tagline: 'Almost three decades turning underperforming sales operations into growth stories, worldwide and now in Malaysia.',
    bullets: [
      'Regional leadership across reinsurance, insuretech and outsourced BPO — including SYMBO Platform Holdings, Pana Harrison and HLAP Ltd.',
      'Grew a jewellery retailer\u2019s revenue from RM 160 million to RM 200 million in under six months, adopting Isa Karim\u2019s amazing Strategic work',
      'Recovered Malaysia\u2019s first offshore outsourcing project and set up contact centres from 30 to 600+ seats across Asia',
      'Over RM2 Billion in top line, bottom line or cost down opportunities added to organizations\u2019 revenue and still counting',
    ],
    color: '#c79529',
  },
  hrd: {
    eyebrow: 'HR Development Focus',
    icon: Users2,
    name: 'Dr Michele Sagan',
    role: 'Leadership, Change Management & Human Capital Development',
    tagline: '25 years of leadership and management expertise across the UK and Malaysia.',
    bullets: [
      'Held key positions at Asia School of Business / MIT Sloan, UBS, HSBC, and CIMB',
      'Specialist insight into the future of work, strategic thought, change management, and human capital development',
      'Brings critical, real-world leadership perspective to organisational HRD programmes',
    ],
    note: 'Pending sign-off from Dr Sagan before this goes live.',
    color: '#0F52BA',
    link: 'https://www.michelesagan.com/',
  },
  law: {
    eyebrow: 'Law Focus',
    icon: Gavel,
    name: 'Nad Segaram',
    role: 'Partner, Shearn Delamore & Co. \u2014 General & Commercial Litigation',
    tagline: 'Leading dispute resolution counsel advising on complex commercial and employment litigation across Malaysia and internationally.',
    bullets: [
      'Partner in the Dispute Resolution practice group at Shearn Delamore & Co., one of Malaysia\u2019s longest-established law firms',
      'Co-author of "Employment & Industrial Relations Law in Malaysia"',
      'Active in the International Bar Association (IBA) and the Inter-Pacific Bar Association (IPBA)',
      'Based in Kuala Lumpur',
    ],
    note: 'Draft profile built from public sources \u2014 please confirm details with Nad before this goes live.',
    color: '#764A34',
  },
  crm: {
    eyebrow: 'CRM Focus',
    icon: Contact,
    name: 'Coming Soon',
    role: 'Profile in progress',
    tagline: 'This focus area is being built out \u2014 check back shortly for the full profile and services.',
    bullets: [],
    color: '#596A8B',
  },
  accounting: {
    eyebrow: 'Accounting Focus',
    icon: Calculator,
    name: 'Colin Warner',
    role: 'Profile in progress',
    tagline: 'Full profile coming shortly \u2014 details still to be confirmed.',
    bullets: [],
    note: 'Awaiting confirmed bio details for Colin.',
    color: '#0F7B6C',
  },
  reinsurance: {
    eyebrow: 'Reinsurance Focus',
    icon: ShieldCheck,
    name: 'Coming Soon',
    role: 'Something exciting is being reinsured as we speak',
    tagline: 'Watch this space \u2014 a Reinsurance focus profile is on its way.',
    bullets: [],
    note: 'Awaiting confirmation from the Leader before this section is built out.',
    color: '#AAFF00',
  },
} as const

export function FocusProfile() {
  const { focus } = useFocus()

  if (!focus) return null

  const profile = profiles[focus]
  const Icon = profile.icon

  return (
    <section id="focus-profile" className="relative py-24 bg-background" aria-label="Focus profile">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: profile.color }} />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              {profile.eyebrow}
            </span>
          </div>

          <div
            className="rounded-2xl p-8 sm:p-12"
            style={{
              background: `linear-gradient(135deg, ${profile.color}12 0%, transparent 60%)`,
              border: `1px solid ${profile.color}30`,
            }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div
                className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: profile.color }}
              >
                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-black mb-1 text-foreground">
                  {profile.name}
                  {'nameSuffix' in profile && profile.nameSuffix && (
                    <span className="text-base sm:text-lg font-medium text-muted-foreground ml-2">
                      {profile.nameSuffix}
                    </span>
                  )}
                </h2>
                <p className="text-base sm:text-lg font-semibold mb-4" style={{ color: profile.color }}>
                  {profile.role}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{profile.tagline}</p>

                {profile.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {profile.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: profile.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {'link' in profile && profile.link && (
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-sm font-semibold underline underline-offset-4"
                    style={{ color: profile.color }}
                  >
                    More about Dr Sagan &rarr;
                  </a>
                )}

                {'note' in profile && profile.note && (
                  <p className="mt-6 text-xs text-muted-foreground italic border-t border-border pt-4">
                    {profile.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
