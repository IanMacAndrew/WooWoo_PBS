import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FocusProfile } from './components/FocusProfile'
import { FocusProvider } from './contexts/FocusContext'
import { OnlineBriefingInfo } from './pages/OnlineBriefingInfo'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ overflow: 'visible' }}>
      <main className="relative" role="main" style={{ overflow: 'visible' }}>
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <FocusProfile />
        <section id="portfolio" aria-label="Portfolio section">
          <Portfolio />
        </section>
        <section id="about" aria-label="About section">
          <About />
        </section>
        <section id="team" aria-label="Team section" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
          <Team />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
        <section id="awards" aria-label="Awards section">
          <Awards />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <FocusProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workshops/online-briefing" element={<OnlineBriefingInfo />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </FocusProvider>
  )
}