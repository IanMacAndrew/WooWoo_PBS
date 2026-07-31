'use client'

import { Radio, Presentation, CalendarRange, GraduationCap } from 'lucide-react'
import { useFocus } from '@/contexts/FocusContext'
import { BookingWidget, type Band, type DateOption } from './BookingWidget'

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
    bookHref: 'https://buy.stripe.com/bJedRa4hNdrIcqX0h3cbC0W',
    banner: 'GROUP + EARLY BIRD \u2014 UP TO 20% OFF \u2014 BOOK BY AUG 8!',
    bookingBands: [
      { minQty: 1, maxQty: 3, pricePerPerson: 1487.5, href: 'https://buy.stripe.com/bJedRa4hNdrIcqX0h3cbC0W' },
      { minQty: 4, maxQty: 10, pricePerPerson: 1400, href: 'https://buy.stripe.com/fZucN6dSn0EWdv13tfcbC0X' },
    ] as Band[],
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
          {formats.map(({ icon: Icon, title, text, tagline, infoHref, bookHref, banner, bookingBands }) => (
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
                    {!bookingBands && (
                      <a
                        href={bookHref}
                        className="text-xs font-semibold px-4 py-2 rounded-full gentle-animation hover:-translate-y-0.5"
                        style={{ background: '#1a1a1a', color: '#fafafa' }}
                      >
                        Book
                      </a>
                    )}
                  </div>
                  {bookingBands && <BookingWidget singleBands={bookingBands} />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* One Day Strategic AI - HRDC Claimable */}
        <div className="max-w-5xl mx-auto mt-16">
          <div
            className="relative rounded-2xl p-8 lg:p-10 overflow-hidden"
            style={{ background: '#1c0333' }}
          >
            <div className="woowoo-neon-banner text-center text-sm sm:text-base font-black tracking-widest uppercase mb-4">
              Up to 80% OFF \u2014 Eng Lian & Partners
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-center mb-3" style={{ color: '#fafafa' }}>
              One Day Strategic AI (HRDC Claimable)
            </h3>
            <p className="text-center text-sm sm:text-base mb-6" style={{ color: '#E9ECF2' }}>
              Standard price RM1,750/person. Held at Sri Wangsaria \u2014 Sat 8am\u20134pm or Sun 1pm\u20139pm, 2hr lunch break. Lunch/dinner from Mr Wong's restaurant included, though not compulsory.
            </p>
            <div
              className="max-w-2xl mx-auto mb-8 rounded-xl p-4 text-xs sm:text-sm leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.08)', color: '#E9ECF2', border: '1px solid rgba(199,149,41,0.4)' }}
            >
              <p className="font-bold mb-1" style={{ color: '#c79529' }}>How this works</p>
              <p className="mb-2">
                HRDC (Human Resources Development Corporation, Malaysia) claimable \u2014 eligible companies can reclaim this training cost through HRDC in due course.
              </p>
              <p className="mb-2">
                <strong>Eng Lian Board Members & Directors, C-Suite & Department Heads, and Employees & Contractors</strong> get 50% off standard. <strong>Everyone</strong> gets a group discount for booking from the same company: 5% for 2-4 people, 10% for 5-9, 15% for 10-19, 20% for 20+. A further 10% applies to bookings made before 8 August 2026. All discounts stack.
              </p>
              <p>
                At checkout, please enter your sales rep's name under "Referred By" (if applicable) and your company name.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-center text-sm font-black uppercase tracking-wide mb-3" style={{ color: '#c79529' }}>
                  Eng Lian, Partners & Contractors
                </h4>
                <BookingWidget
                  currency="RM"
                  dateOptions={[
                    {
                      label: 'Sat 15 Aug (8am\u20134pm)',
                      bands: [
                        { minQty: 1, maxQty: 1, pricePerPerson: 700, href: 'https://buy.stripe.com/fZufZi8y34Vc8aHd3PcbC0H' },
                        { minQty: 2, maxQty: 4, pricePerPerson: 612.5, href: 'https://buy.stripe.com/9B6aEY9C73R88aH9RDcbC0I' },
                        { minQty: 5, maxQty: 9, pricePerPerson: 525, href: 'https://buy.stripe.com/fZu4gA7tZbjA9eL1l7cbC0J' },
                        { minQty: 10, maxQty: 19, pricePerPerson: 437.5, href: 'https://buy.stripe.com/00wfZi3dJafwbmTd3PcbC0K' },
                        { minQty: 20, maxQty: 30, pricePerPerson: 350, href: 'https://buy.stripe.com/aFaaEYaGbcnE0IfbZLcbC0L' },
                      ],
                    },
                    {
                      label: 'Sun 16 Aug (1pm\u20139pm)',
                      bands: [
                        { minQty: 1, maxQty: 1, pricePerPerson: 700, href: 'https://buy.stripe.com/5kQ7sM6pVfzQ4Yv3tfcbC0R' },
                        { minQty: 2, maxQty: 4, pricePerPerson: 612.5, href: 'https://buy.stripe.com/7sY5kE6pVdrI9eL0h3cbC0S' },
                        { minQty: 5, maxQty: 9, pricePerPerson: 525, href: 'https://buy.stripe.com/aFa5kE7tZ3R81Mj2pbcbC0T' },
                        { minQty: 10, maxQty: 19, pricePerPerson: 437.5, href: 'https://buy.stripe.com/00w6oIdSngDU0If5BncbC0U' },
                        { minQty: 20, maxQty: 30, pricePerPerson: 350, href: 'https://buy.stripe.com/eVqdRaaGb4Vc9eL5BncbC0V' },
                      ],
                    },
                  ] as DateOption[]}
                />
              </div>

              <div>
                <h4 className="text-center text-sm font-black uppercase tracking-wide mb-3" style={{ color: '#E9ECF2' }}>
                  General Public
                </h4>
                <BookingWidget
                  currency="RM"
                  dateOptions={[
                    {
                      label: 'Sat 15 Aug (8am\u20134pm)',
                      bands: [
                        { minQty: 1, maxQty: 1, pricePerPerson: 1575, href: 'https://buy.stripe.com/00weVe7tZgDUfD96FrcbC0C' },
                        { minQty: 2, maxQty: 4, pricePerPerson: 1487.5, href: 'https://buy.stripe.com/dRm28s01x4Vcdv1fbXcbC0D' },
                        { minQty: 5, maxQty: 9, pricePerPerson: 1400, href: 'https://buy.stripe.com/5kQfZi5lR73kaiPd3PcbC0E' },
                        { minQty: 10, maxQty: 19, pricePerPerson: 1312.5, href: 'https://buy.stripe.com/5kQdRa15BgDUaiP9RDcbC0F' },
                        { minQty: 20, maxQty: 30, pricePerPerson: 1225, href: 'https://buy.stripe.com/3cI14o7tZcnE76DaVHcbC0G' },
                      ],
                    },
                    {
                      label: 'Sun 16 Aug (1pm\u20139pm)',
                      bands: [
                        { minQty: 1, maxQty: 1, pricePerPerson: 1575, href: 'https://buy.stripe.com/00wcN63dJ2N42Qn1l7cbC0M' },
                        { minQty: 2, maxQty: 4, pricePerPerson: 1487.5, href: 'https://buy.stripe.com/4gM9AU7tZcnE76DbZLcbC0N' },
                        { minQty: 5, maxQty: 9, pricePerPerson: 1400, href: 'https://buy.stripe.com/eVq7sMeWr5Zg3Urgg1cbC0O' },
                        { minQty: 10, maxQty: 19, pricePerPerson: 1312.5, href: 'https://buy.stripe.com/14A5kEeWrafw4Yv4xjcbC0P' },
                        { minQty: 20, maxQty: 30, pricePerPerson: 1225, href: 'https://buy.stripe.com/4gM28s15B0EWez50h3cbC0Q' },
                      ],
                    },
                  ] as DateOption[]}
                />
              </div>
            </div>
          </div>
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
      letter-spacing: 0.08em;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
      `}</style>
    </section>
  )
}
