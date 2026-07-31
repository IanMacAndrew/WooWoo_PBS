'use client'

import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const audience = [
  { role: 'CEO', focus: 'Strategic positioning, competitive parity, board-level risk' },
  { role: 'CFO', focus: 'Cost reduction, revenue uplift, capital allocation, ROI evidence' },
  { role: 'Head of HR', focus: 'Workforce upskilling, change management, role redesign' },
  { role: 'Head of Operations', focus: 'Process efficiency, uptime, service reliability' },
  { role: 'Head of Production', focus: 'Throughput, quality control, downtime reduction' },
  { role: 'Head of Manufacturing', focus: 'Predictive maintenance, automation, safety' },
  { role: 'Head of Sales', focus: 'Pipeline intelligence, lead quality, forecasting' },
  { role: 'Head of Marketing', focus: 'Personalisation, content velocity, brand consistency' },
  { role: 'Head of Distribution', focus: 'Routing, logistics, inventory, fulfilment accuracy' },
]

const clusters = [
  {
    n: 1,
    title: 'Financial Services',
    subtitle: 'Banking, Insurance & Capital Markets',
    cases: [
      { sector: 'Banking', org: 'DBS Bank', stat: '>S$1B', statLabel: 'projected 2025 economic value from AI/ML, up from S$180M in 2022', detail: "Named World's Best AI Bank (Global Finance, 2025). Now runs over 2,000 AI models across 430+ use cases enterprise-wide.", app: 'Enterprise-wide Gen AI & Agentic AI, from fraud detection to relationship banking, governed by a cross-functional Responsible AI Council.' },
      { sector: 'Insurance', org: 'Ping An', stat: '7.4 min', statLabel: 'average claim processing time, some settled in 51 seconds', detail: '93% of life & health policies are underwritten within seconds; nearly 60% of accident & health claims are now fully automated.', app: 'One-sentence reporting, one-click uploading, one-minute validation, AI-driven underwriting and claims automation at national scale.' },
      { sector: 'Capital Markets', org: 'BlackRock', stat: '$21.6T+', statLabel: 'in assets analysed on the Aladdin platform industrywide', detail: 'Aladdin is now licensed to competitor asset managers and banks (incl. Standard Chartered, Morgan Stanley) as the industry\u2019s shared risk language.', app: 'A single platform unifying portfolio construction, risk modelling, trading and compliance into one common data language.' },
    ],
  },
  {
    n: 2,
    title: 'Consumer & Retail',
    subtitle: 'FMCG, Retail & Hospitality',
    cases: [
      { sector: 'FMCG', org: 'Unilever & Nestl\u00e9', stat: '98%', statLabel: 'on-shelf availability with Walmart Mexico, plus 12% sales growth in under a year', detail: 'Nestl\u00e9 separately cut demand-forecasting error by 30%, reaching 94% accuracy on 12-week sell-out predictions in Brazil.', app: 'AI demand-sensing (weather, POS, promotions) replacing static forecasting, 3.1M+ forecast combinations generated daily.' },
      { sector: 'Retail & E-commerce', org: 'Walmart', stat: '90%', statLabel: 'inventory accuracy achieved through AI-powered forecasting', detail: 'AI-driven route optimisation has separately saved 30 million unnecessary driving miles across its logistics network.', app: 'A proprietary multi-horizon neural network forecasts demand per store per SKU, feeding automated replenishment.' },
      { sector: 'Hospitality & Tourism', org: 'Hilton & Marriott', stat: '$1B+', statLabel: 'cumulative savings from Hilton\u2019s LightStay energy platform', detail: 'Marriott separately reports a 15% increase in direct bookings from loyalty members through AI-personalised offers.', app: 'Predictive energy management at property level, paired with AI-personalised guest offers and virtual concierge tools.' },
    ],
  },
  {
    n: 3,
    title: 'Mobility & Aviation',
    subtitle: 'Automotive, Airlines & Airports',
    cases: [
      { sector: 'Automotive & Manufacturing', org: 'Tesla & BMW', stat: '30%+', statLabel: 'reduction in unplanned factory downtime at Tesla\u2019s California plant', detail: "BMW's Regensburg plant separately avoids 500+ minutes of assembly-line disruption every year through the same approach.", app: 'AI predictive maintenance on production equipment, paired with computer-vision quality inspection on the line.' },
      { sector: 'Aviation (Airlines)', org: 'Delta Air Lines', stat: '5,600\u2192\u200955', statLabel: 'maintenance-related cancellations per year, 2010 to 2018, about 100x fewer breakdowns', detail: 'The APEX programme is reported to save Delta eight figures annually and won Aviation Week\u2019s Innovation Award in 2024.', app: 'Real-time engine sensor data analysed by AI to flag "replace this part within 50 flight hours" before failure occurs.' },
      { sector: 'Airports', org: 'Singapore Changi', stat: '60%', statLabel: 'faster immigration clearance, down from 25 seconds to as little as 10', detail: 'Part of a passport-free New Clearance Concept now live across all four terminals for citizens and residents.', app: 'Facial and iris biometric verification replacing repeated manual passport and document checks at every checkpoint.' },
    ],
  },
  {
    n: 4,
    title: 'Transport Infrastructure',
    subtitle: 'Rail, Road Haulage & Construction',
    cases: [
      { sector: 'Rail', org: 'Deutsche Bahn', stat: '25%', statLabel: 'reduction in maintenance costs through machine learning', detail: 'The system now identifies 90% of component failures before they affect service, improving punctuality by roughly 30%.', app: 'AI condition-based monitoring across track, signalling equipment and rolling stock, replacing fixed-schedule maintenance.' },
      { sector: 'Road Transport & Haulers', org: 'UPS (ORION)', stat: '$300\u2013400M', statLabel: 'saved annually, plus 100 million fewer miles driven and 10 million gallons of fuel saved every year', detail: 'Built over a decade at a cost exceeding $250M; evaluates roughly 200,000 routing options per driver, per day.', app: 'AI route optimisation across 125,000+ delivery vehicles, dynamically recalculating routes in real time.' },
      { sector: 'Construction & Real Estate', org: 'Skanska & Turner', stat: '20\u201330%', statLabel: 'reduction in project delays (Turner) and site accidents (Skanska)', detail: 'Turner uses predictive analytics for scheduling and cost estimation; Skanska uses AI-driven cameras and sensors for jobsite safety.', app: 'Predictive project-risk and cost modelling, paired with computer-vision safety monitoring across large, dispersed sites.' },
    ],
  },
  {
    n: 5,
    title: 'Health, Life Sciences & Agriculture',
    subtitle: 'Healthcare, Pharma & Agriculture',
    cases: [
      { sector: 'Healthcare', org: 'Mayo Clinic & Merck', stat: '2026', statLabel: "new R&D alliance combining Mayo's clinical & genomic data with Merck's AI-enabled virtual cell modelling", detail: "Mayo's own AI models already assist radiologists in detecting subtle abnormalities in MRI and CT scans earlier and more reliably.", app: 'AI-assisted diagnostic imaging in the clinic, and AI-accelerated target identification in drug R&D partnerships.' },
      { sector: 'Pharmaceuticals & Life Sciences', org: 'Insilico Medicine', stat: '30 mo.', statLabel: 'from project start to Phase II trials, versus 5+ years traditionally, at a fraction of the typical $100M+ cost', detail: 'The first generative-AI-designed drug (for idiopathic pulmonary fibrosis) to reach human clinical trials from an AI-discovered target.', app: 'Generative AI for target discovery (PandaOmics) and de novo molecule design (Chemistry42) across the drug pipeline.' },
      { sector: 'Agriculture & AgriTech', org: 'John Deere', stat: '6%', statLabel: 'fuel & labour reduction from GPS-guided precision automation', detail: 'Commercially available fully autonomous tractors now use a 360-degree, 16-camera vision system accurate to under an inch.', app: 'Computer-vision-guided autonomous tractors and selective "see & spray" herbicide application, cutting chemical use.' },
    ],
  },
  {
    n: 6,
    title: 'Energy & Industry',
    subtitle: 'Energy, Mining & Telecommunications',
    cases: [
      { sector: 'Energy, Oil & Gas', org: 'Shell', stat: '~$400M', statLabel: 'estimated annual savings from AI predictive maintenance', detail: 'Unplanned downtime down 20\u201345% and maintenance costs down 15\u201325%, across more than 10,000 monitored assets worldwide.', app: 'AI predictive maintenance (built on C3.ai and Azure ML) spanning upstream, downstream and integrated gas operations.' },
      { sector: 'Mining & Resources', org: 'Rio Tinto', stat: '15%', statLabel: 'lower load-and-haul unit costs from autonomous trucks', detail: 'Its autonomous fleet operates roughly 700 extra hours per truck each year, with zero recorded injuries since deployment began in 2008.', app: 'Autonomous Haulage System (AHS) and AI-guided drilling operating 24/7 across the Pilbara iron ore region.' },
      { sector: 'Telecommunications', org: 'Vodafone', stat: '~70%', statLabel: 'of roughly 1\u20131.6M monthly customer queries resolved autonomously by its AI assistant, TOBi', detail: 'Network downtime down 26% and customer churn down 8%, contributing a reported 6% uplift in EBITDA.', app: 'A generative-AI customer assistant (SuperTOBi) paired with AI-driven network fault prediction and optimisation.' },
    ],
  },
  {
    n: 7,
    title: 'Society & Culture',
    subtitle: 'Media, Public Sector & Education',
    cases: [
      { sector: 'Media & Entertainment', org: 'Netflix', stat: '$1B/yr', statLabel: 'estimated value of its recommendation engine through reduced churn', detail: 'Roughly 80% of all viewing hours originate from AI-personalised recommendations rather than manual browsing.', app: 'A reinforcement-learning personalisation engine driving thumbnails, ranking, and content discovery for every individual user.' },
      { sector: 'Public Sector & Government', org: 'Estonia & Singapore', stat: 'Top 3', statLabel: 'of 14 countries benchmarked as AI government "pioneers" (EY / Oxford Economics, 2024\u201325)', detail: "Estonia uses AI-based traffic management and citizen-service chatbots; Singapore's approach spans transport, health and enterprise services.", app: 'AI chatbots for routine citizen enquiries, paired with predictive traffic and public-transport optimisation.' },
      { sector: 'Education', org: 'Georgia State University', stat: '+22 pts', statLabel: 'graduation rate improvement, nearly 1,800 more graduates every year', detail: 'Gains were largest among at-risk students: degrees to Black students up 80%+, to Latino students up 120%+, to Pell-eligible students up 90%+.', app: 'A predictive "early warning" system tracking 800 risk indicators nightly, triggering advisor outreach within 48 hours.' },
    ],
  },
]

const patterns = [
  { title: 'Predictive Maintenance', industries: 'Aviation, Rail, Automotive, Energy/Oil & Gas, Mining', desc: 'Fix it before it breaks, the single most mature, most proven AI application across heavy industry.' },
  { title: 'Demand & Risk Forecasting', industries: 'FMCG, Retail, Banking, Insurance, Capital Markets', desc: 'See the shape of demand or risk before it arrives, instead of reacting after the fact.' },
  { title: 'Personalisation at Scale', industries: 'Media, Hospitality, Retail, Telecommunications', desc: 'One-to-one relevance for millions of customers simultaneously, the direct driver of retention and cross-sell.' },
  { title: 'AI-Assisted Front Line', industries: 'Insurance, Telecom, Public Sector, Healthcare', desc: 'Chatbots and copilots that absorb routine volume so people handle only what genuinely needs a human.' },
  { title: 'Autonomous Physical Operations', industries: 'Mining, Agriculture, Automotive Manufacturing', desc: 'AI operating physical equipment directly, haul trucks, tractors, production lines, not just recommending action.' },
  { title: 'Standardised Data & Common Language', industries: 'Banking, Capital Markets, and any multi-team or multi-division sales organisation', desc: 'A single shared vocabulary and platform so every team, branch or division reports the same way.' },
]

export function OnlineBriefingInfo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="py-6 px-6 sm:px-8 lg:px-12" style={{ background: '#1c0333' }}>
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#E9ECF2' }}>
            <ArrowLeft className="w-4 h-4" /> Back to WooWoo PBS
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c79529' }}>
            1-2 Hour Online Briefing
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 sm:px-8 lg:px-12" style={{ background: '#1c0333' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#c79529' }}>
            WooWoo PBS &middot; AI Strategy & Implementation Practice
          </p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6" style={{ color: '#fafafa' }}>
            AI Transformation Across Global Industry
          </h1>
          <p className="text-lg sm:text-xl mb-4" style={{ color: '#E9ECF2' }}>
            A cross-industry briefing for executive leadership teams
          </p>
          <p className="text-sm sm:text-base" style={{ color: '#c9c3d9' }}>
            21 real-world case studies across 21 global industries: what the world's best organisations have already done with AI, and what it delivered.
          </p>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-6">Why This Briefing, and How to Use It</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This is deliberately broad: one flagship case study, sometimes two, from 21 different industries, showing what globally recognised organisations have actually done with AI, and what it measurably delivered. Nothing here requires a decision today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { n: '1', t: 'See the whole board first', d: 'Every major vertical from Banking to Agriculture, in one sitting, so no function or industry parallel is missed before we narrow down.' },
              { n: '2', t: 'Read for the pattern, not just the industry', d: 'The same handful of AI applications, predictive maintenance, demand forecasting, personalisation, AI-assisted service, keep reappearing across completely unrelated sectors.' },
              { n: '3', t: 'Then we select 5-6 verticals together', d: "The final section is a working checklist. Leadership picks the industries closest to their own organisation's reality for a deeper follow-up workshop." },
              { n: '4', t: 'Every figure is sourced', d: 'Results quoted are publicly reported by the companies themselves, their technology partners, or independent research (McKinsey, Gartner, Deloitte, EY), not vendor marketing claims.' },
            ].map((item) => (
              <div key={item.n} className="rounded-xl p-5" style={{ background: '#EFE3D2' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm mb-3" style={{ background: '#1c0333', color: '#fafafa' }}>
                  {item.n}
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#1a1a1a' }}>{item.t}</h3>
                <p className="text-sm" style={{ color: '#4a4a4a' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 px-6 sm:px-8 lg:px-12" style={{ background: '#FBF3E8' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-center">One Briefing, Every Seat at the Table</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            AI adoption succeeds or stalls on whether every function sees itself in it, not just IT. Each case study speaks to at least one of these seats directly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((a) => (
              <div key={a.role} className="rounded-lg p-4" style={{ background: '#EFE3D2' }}>
                <p className="font-bold text-sm mb-1" style={{ color: '#1a1a1a' }}>{a.role}</p>
                <p className="text-xs" style={{ color: '#4a4a4a' }}>{a.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clusters */}
      {clusters.map((cluster) => (
        <section key={cluster.n} className="py-16 px-6 sm:px-8 lg:px-12 border-t border-border">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#c79529' }}>
              Cluster {cluster.n} of 7
            </p>
            <h2 className="text-2xl sm:text-3xl font-black mb-1">{cluster.title}</h2>
            <p className="text-muted-foreground mb-8">{cluster.subtitle}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {cluster.cases.map((c) => (
                <div key={c.org} className="rounded-xl p-6" style={{ background: '#1c0333' }}>
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#c79529' }}>{c.sector}</p>
                  <h3 className="text-lg font-black mb-3" style={{ color: '#fafafa' }}>{c.org}</h3>
                  <p className="text-3xl font-black mb-1" style={{ color: '#AAFF00' }}>{c.stat}</p>
                  <p className="text-xs mb-4" style={{ color: '#c9c3d9' }}>{c.statLabel}</p>
                  <p className="text-sm mb-4" style={{ color: '#E9ECF2' }}>{c.detail}</p>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#c79529' }}>AI application</p>
                  <p className="text-xs" style={{ color: '#c9c3d9' }}>{c.app}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Patterns */}
      <section className="py-16 px-6 sm:px-8 lg:px-12" style={{ background: '#FBF3E8' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-center">The Same Few Applications, Every Time</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Strip away the industry labels and 21 case studies collapse into a handful of repeating AI applications. None of them replace the core relationship or craft, all of them remove friction around it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {patterns.map((p) => (
              <div key={p.title} className="rounded-xl p-5" style={{ background: '#EFE3D2' }}>
                <h3 className="font-bold mb-1" style={{ color: '#1a1a1a' }}>{p.title}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: '#764A34' }}>{p.industries}</p>
                <p className="text-sm" style={{ color: '#4a4a4a' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your turn */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-center">A Quick Task Before We Regroup</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Before the next session, take ten minutes as a leadership team to answer these two questions honestly, there are no wrong answers, only starting points.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl p-6" style={{ background: '#1c0333' }}>
              <p className="text-2xl font-black mb-3" style={{ color: '#c79529' }}>1</p>
              <h3 className="font-bold mb-2" style={{ color: '#fafafa' }}>
                Which 2-3 case studies in this briefing look like a problem your organisation already has?
              </h3>
              <p className="text-sm" style={{ color: '#c9c3d9' }}>
                Not the industry, the underlying problem: stalled deals, unplanned downtime, inconsistent reporting, slow content, forecasting guesswork.
              </p>
            </div>
            <div className="rounded-xl p-6" style={{ background: '#1c0333' }}>
              <p className="text-2xl font-black mb-3" style={{ color: '#c79529' }}>2</p>
              <h3 className="font-bold mb-2" style={{ color: '#fafafa' }}>
                What would you want a hands-on follow-up workshop to actually teach your teams to do?
              </h3>
              <p className="text-sm" style={{ color: '#c9c3d9' }}>
                Think in terms of a working output your teams walk out with, not a topic. "A live demand-forecasting model," not "learn about AI."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps checklist */}
      <section className="py-16 px-6 sm:px-8 lg:px-12" style={{ background: '#FBF3E8' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 text-center">Select Your 5-6 Verticals for a Deeper Briefing</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Mark the industries most relevant to your organisation's own strategy, the follow-up session goes two to three case studies deeper on each one selected, with concrete application ideas for your teams.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { group: 'Financial Services', items: ['Banking', 'Insurance', 'Capital Markets'] },
              { group: 'Consumer & Retail', items: ['FMCG', 'Retail & E-commerce', 'Hospitality & Tourism'] },
              { group: 'Mobility & Aviation', items: ['Automotive & Manufacturing', 'Aviation', 'Airports'] },
              { group: 'Transport Infrastructure', items: ['Rail', 'Road Transport & Haulers', 'Construction & Real Estate'] },
              { group: 'Health, Life Sciences & Agri', items: ['Healthcare', 'Pharma & Life Sciences', 'Agriculture & AgriTech'] },
              { group: 'Energy & Industry', items: ['Energy, Oil & Gas', 'Mining & Resources', 'Telecommunications'] },
              { group: 'Society & Culture', items: ['Media & Entertainment', 'Public Sector & Government', 'Education'] },
            ].map((g) => (
              <div key={g.group} className="rounded-lg p-5" style={{ background: '#EFE3D2' }}>
                <p className="font-bold text-sm mb-2" style={{ color: '#1a1a1a' }}>{g.group}</p>
                <ul className="text-sm space-y-1" style={{ color: '#4a4a4a' }}>
                  {g.items.map((it) => (
                    <li key={it}>&#9744; {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 text-center" style={{ background: '#1c0333' }}>
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-4" style={{ color: '#fafafa' }}>
            Let's decide, together, which five or six industries deserve your organisation's next move.
          </h2>
          <p className="text-sm mb-8" style={{ color: '#c9c3d9' }}>
            strategy@woowoo.world &middot; woowooworld.co
          </p>
          <Link
            to="/#portfolio"
            className="inline-block text-sm font-bold px-8 py-3 rounded-full"
            style={{ background: '#c79529', color: '#1a1a1a' }}
          >
            Book Your Briefing
          </Link>
        </div>
      </section>
    </div>
  )
}
