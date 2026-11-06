'use client'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const legalTeam = [
  {
    name: 'Nad Segaram',
    role: 'Intellectual Property & Dispute Resolution',
    initials: 'NS',
    paragraphs: [
      'Nad Segaram was called to the Bar in London in 1997. He has since practiced with the firm of Shearn Delamore & Co, one of the oldest and largest law firms in Malaysia, and was made a partner of the firm in 2004. He currently consults for Mazlan & Associates and handles the IP for WooWoo World.',
      'He has practiced in the Intellectual Property and Dispute Resolution departments of the firm and has appeared as counsel and co-counsel in several large litigation matters in the High Court and the Appellate courts as well as in domestic and international arbitrations, including arbitrations in Malaysia, Singapore, Hong Kong and the United Kingdom.',
      'Nad is a member of the International Bar Association and the ASEAN Law Association of Malaysia. He is also an Accredited Advocacy Trainer conducting training sessions for the Malaysian Bar teaching advocacy skills for pupils and young lawyers of the Malaysian Bar.',
      'Nad is a recommended lawyer for domestic and international arbitration by the Legal 500 Asia-Pacific (2019).',
    ],
  },
  {
    name: 'Lim Tuck Sun',
    role: 'Partner, Chooi & Company — Dispute Resolution and Competition Law',
    initials: 'LTS',
    paragraphs: [
      'Tuck Sun is a senior lawyer with a very strategic approach. He graduated with a Bachelor of Laws (Hons) from the University of London (External) in 1995, was called to the Degree of Utter Barrister of the Honourable Society of Lincoln\'s Inn in 1996, and was admitted as an advocate and solicitor of the High Court of Malaya in 1997. He is also certified as a Tutor Trainer in Trial Advocacy by the Honourable Society of Lincoln\'s Inn (2011).',
      'He focuses on commercial and corporate litigation and arbitration, including shareholder disputes and cross-border matters. As counsel he has acted in SIAC and KLRCA arbitrations and in ICC-related proceedings, including telecommunications, reinsurance and shipping disputes. As arbitrator he has served as sole arbitrator in SIAC and KLRCA matters, including a telecommunications joint venture dispute.',
      'Tuck Sun is a Contributing Editor of Malaysian Civil Procedure (Sweet & Maxwell Asia) and has co-edited a LexisNexis court forms volume. He is empanelled as an arbitrator with the Singapore International Arbitration Centre and the Asian International Arbitration Centre, and has been recognised by Chambers Asia Pacific, Asia Pacific Legal 500, Benchmark Litigation Asia-Pacific and Asialaw Leading Lawyers.',
    ],
  },
]

export function LegalTeam() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-full py-16" style={{ background: '#1c0333' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 hover:opacity-80"
          style={{ color: '#c79529' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: '#fafafa' }}>
          Legal Team
        </h1>
        <p className="text-lg mb-12" style={{ color: '#E9ECF2' }}>
          The lawyers who stand behind WooWoo World.
        </p>

        <div className="space-y-10">
          {legalTeam.map((person) => (
            <section
              key={person.name}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8"
            >
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="h-16 w-16 shrink-0 rounded-full flex items-center justify-center text-xl font-black"
                  style={{ background: '#c79529', color: '#1c0333' }}
                  aria-hidden="true"
                >
                  {person.initials}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#fafafa' }}>
                    {person.name}
                  </h2>
                  <p className="text-sm sm:text-base" style={{ color: '#c79529' }}>
                    {person.role}
                  </p>
                </div>
              </div>

              <div className="space-y-4 leading-relaxed" style={{ color: '#E9ECF2' }}>
                {person.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
