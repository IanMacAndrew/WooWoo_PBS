'use client'

import { Fragment } from 'react'
import { useFocus } from '@/contexts/FocusContext'
import { TrendingUp, Users2, ShieldCheck, type LucideIcon } from 'lucide-react'

interface Person {
  name: string
  nameSuffix?: string
  role: string
  tagline: string
  bullets: string[]
  link?: string
  linkLabel?: string
  note?: string
  placeholder?: boolean
}

interface FocusPage {
  title: string
  eyebrow: string
  icon: LucideIcon
  color: string
  people: Person[]
}

// The Hoardman's CV excerpt is shared across every section — he appears
// on all three Strategy Led AI focus pages, since Strategy and AI now
// inform everything WooWoo World offers.
const hoardman: Person = {
  name: 'The Hoardman',
  role: 'AI Strategy Guru',
  tagline: 'Two decades of strategy consulting across the globe, now driving AI transformation from Kuala Lumpur.',
  bullets: [
    'Director, Consulting at Ernst & Young since 2017 leading strategy and transformation engagements across government, aviation, property, plantations, e-commerce and Smart Cities',
    'Developed Malaysia\u2019s National COVID-19 Recovery Plan and the Halal Industry Master Plan 2.0',
    'Prior strategy leadership at PwC, AWR Lloyd (Bangkok), Booz & Company (D\u00fcsseldorf & Bangkok), Hochtief Construction AG (Essen), and KPMG/BearingPoint',
    'MBA, London Business School (Corporate Finance) \u00b7 BA Economics & Political Science, University of Michigan',
  ],
  note: 'Pending confirmation from The Hoardman on CV summary approval.',
}

// Max also appears wherever her hands-on AI implementation and training
// background fits — shared here the same way Hoardman is.
const maxTheAiMaverick: Person = {
  name: 'Max Rempillo',
  nameSuffix: '"The AI Maverick"',
  role: 'AI Systems Builder & Trainer',
  tagline: 'Builds and teaches the AI systems that turn strategy into daily practice.',
  bullets: [
    'Lead Instructor, Claude Code Bootcamp at Clay Bootcamp, training teams to ship real AI-powered workflows',
    'Independent AI/RevOps Systems Builder \u2014 AI implementation, workflow automation (n8n, Make, Zapier) and CRM systems (HubSpot, ActiveCampaign, ClickUp, Attio)',
    'Prior growth-marketing leadership at Mindvalley, ORA and AIESEC Hong Kong, plus chatbot marketing at School of Bots',
    'Native English & Filipino \u00b7 professional Cantonese \u00b7 proficient Mandarin and French',
  ],
  link: 'https://linkedin.com/in/maxrempillo',
  linkLabel: 'Connect with Max',
}

const omar: Person = {
  name: 'Ian MacAndrew',
  nameSuffix: '"Omar the Magnificent"',
  role: 'Sales, Marketing & Troubleshooting Operations Recovery Consultant',
  tagline: 'Almost three decades turning underperforming sales operations into growth stories, worldwide and now in Malaysia.',
  bullets: [
    'Regional leadership across reinsurance, insuretech and outsourced BPO including SYMBO Platform Holdings, Pana Harrison and HLAP Ltd.',
    'Grew a jewellery retailer\u2019s revenue from RM 160 million to RM 200 million in under six months, adopting Isa Karim\u2019s amazing Strategic work',
    'Recovered Malaysia\u2019s first offshore outsourcing project and set up contact centres from 30 to 600+ seats across Asia',
    'Over RM2 Billion in top line, bottom line or cost down opportunities added to organizations\u2019 revenue and still counting',
  ],
}

const comingSoon: Person = {
  name: 'Coming Soon',
  role: '',
  tagline: 'A new HR Development specialist will be announced here soon.',
  bullets: [],
  placeholder: true,
}

const focusPages: Record<'sales-marketing' | 'hrd' | 'resilience', FocusPage> = {
  'sales-marketing': {
    title: 'Strategy Led AI Sales & Marketing',
    eyebrow: 'Sales & Marketing Focus',
    icon: TrendingUp,
    color: '#c79529',
    people: [hoardman, maxTheAiMaverick, omar],
  },
  hrd: {
    title: 'Strategy Led AI HRD',
    eyebrow: 'HR Development Focus',
    icon: Users2,
    color: '#0F52BA',
    people: [hoardman, maxTheAiMaverick, comingSoon],
  },
  resilience: {
    title: 'Strategy Led AI Resilience',
    eyebrow: 'Resilience Focus',
    icon: ShieldCheck,
    color: '#4A5A6A',
    people: [
      hoardman,
      maxTheAiMaverick,
      {
        name: 'The Axeman',
        role: 'Resilience Focus',
        tagline: 'Bio pending.',
        bullets: [],
        note: 'Bio pending from The Axeman before this goes live.',
      },
    ],
  },
}

function PersonCard({ person, color }: { person: Person; color: string }) {
  if (person.placeholder) {
    return (
      <div className="flex-1 min-w-0 flex flex-col items-center justify-center text-center py-10">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{ background: `${color}20`, border: `1px solid ${color}40` }}
        >
          <span className="text-2xl font-black" style={{ color }}>+</span>
        </div>
        <h3 className="text-xl font-black mb-2 text-foreground">{person.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{person.tagline}</p>
      </div>
    )
  }

  return (
    <div className="flex-1 min-w-0">
      <h3 className="text-2xl sm:text-3xl font-black mb-1 text-foreground">
        {person.name}
        {person.nameSuffix && (
          <span className="text-base font-medium text-muted-foreground ml-2">{person.nameSuffix}</span>
        )}
      </h3>
      <p className="text-base font-semibold mb-3" style={{ color }}>
        {person.role}
      </p>
      <p className="text-base text-muted-foreground leading-relaxed mb-5">{person.tagline}</p>

      {person.bullets.length > 0 && (
        <ul className="space-y-3">
          {person.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
              {b}
            </li>
          ))}
        </ul>
      )}

      {person.link && (
        <a
          href={person.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-sm font-semibold underline underline-offset-4"
          style={{ color }}
        >
          {person.linkLabel || 'Learn more'} &rarr;
        </a>
      )}

      {person.note && (
        <p className="mt-5 text-xs text-muted-foreground italic border-t border-border pt-3">{person.note}</p>
      )}
    </div>
  )
}

export function FocusProfile() {
  const { focus } = useFocus()

  if (!focus) return null

  const page = focusPages[focus]
  const Icon = page.icon

  return (
    <section id="focus-profile" className="relative py-24 bg-background" aria-label="Focus profile">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: page.color }} />
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
              {page.eyebrow}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div
              className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: page.color }}
            >
              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">{page.title}</h2>
          </div>

          <div
            className="rounded-2xl p-8 sm:p-12"
            style={{
              background: `linear-gradient(135deg, ${page.color}12 0%, transparent 60%)`,
              border: `1px solid ${page.color}30`,
            }}
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
              {page.people.map((person, i) => (
                <Fragment key={person.name}>
                  {i > 0 && (
                    <>
                      <div className="hidden lg:block w-px bg-border shrink-0" />
                      <div className="block lg:hidden h-px bg-border" />
                    </>
                  )}
                  <PersonCard person={person} color={page.color} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
