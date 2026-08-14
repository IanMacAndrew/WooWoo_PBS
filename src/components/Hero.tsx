'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Menu, X, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import wooWooLogo from '@/assets/woowoo-icon.png'
import { useFocus, Focus } from '@/contexts/FocusContext'

const legalOptions = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
]

const workOptions: { label: string; value: Focus }[] = [
  { label: 'Sales & Marketing', value: 'sales-marketing' },
  { label: 'HR Development', value: 'hrd' },
  { label: 'Resilience', value: 'resilience' },
]

function goToFocusProfile() {
  setTimeout(() => {
    document.getElementById('focus-profile')?.scrollIntoView({ behavior: 'smooth' })
  }, 50)
}

// Detect browsers that should prefer MP4 (Safari iOS/macOS, older Edge, Chinese browsers
// built on Tencent X5, UC, QQ, 360). Returns true when MP4 should load first.
function preferMp4(): boolean {
  if (typeof navigator === 'undefined') return true
  const ua = navigator.userAgent
  // Safari (but not Chrome/Edge/Firefox which all include other markers)
  const isSafari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(ua)
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && (navigator as any).maxTouchPoints > 1)
  const isChineseBrowser = /UCBrowser|QQBrowser|MQQBrowser|MicroMessenger|360SE|360EE|Quark|HuaweiBrowser|HarmonyOS|MiuiBrowser/i.test(ua)
  return isSafari || isIOS || isChineseBrowser
}

// Pick the best poster image for the current viewport / DPR.
function pickPoster(): string {
  if (typeof window === 'undefined') return '/videos/hero-poster-1280.jpg'
  const dpr = window.devicePixelRatio || 1
  const w = window.innerWidth * dpr
  if (w <= 720) return '/videos/hero-poster-640.jpg'
  if (w <= 1440) return '/videos/hero-poster-1280.jpg'
  return '/videos/hero-poster-1920.jpg'
}

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [isInView, setIsInView] = useState(true)
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false)
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false)
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false)
  const [isMobileLegalOpen, setIsMobileLegalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const workDropdownRef = useRef<HTMLDivElement>(null)
  const legalDropdownRef = useRef<HTMLDivElement>(null)
  const { setFocus } = useFocus()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (workDropdownRef.current && !workDropdownRef.current.contains(e.target as Node)) {
        setIsWorkDropdownOpen(false)
      }
      if (legalDropdownRef.current && !legalDropdownRef.current.contains(e.target as Node)) {
        setIsLegalDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const mp4First = useMemo(() => preferMp4(), [])
  const poster = useMemo(() => pickPoster(), [])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Show background after 50px scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ensure video is muted immediately on load to prevent any audio
  useEffect(() => {
    if (videoRef.current) {
      console.log('Video element found, setting up...')
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      
      // Add event listeners for debugging
      videoRef.current.addEventListener('loadstart', () => console.log('Video: loadstart'))
      videoRef.current.addEventListener('loadedmetadata', () => console.log('Video: loadedmetadata'))
      videoRef.current.addEventListener('canplay', () => console.log('Video: canplay'))
      videoRef.current.addEventListener('playing', () => console.log('Video: playing'))
      videoRef.current.addEventListener('error', (e) => console.error('Video error:', e))
      
      // Force mute on play
      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          console.log('Video play event fired')
          videoRef.current.muted = isMuted
          videoRef.current.volume = isMuted ? 0 : 0.7
        }
      })
      
      // Try to play the video
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log('Video autoplay successful'))
          .catch(error => console.error('Video autoplay failed:', error))
      }
    }
  }, [])

  // Update video mute state when isMuted changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  // IntersectionObserver: pause video when hero is offscreen to save bandwidth/CPU
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting
        setIsInView(visible)
        const v = videoRef.current
        if (!v) return
        if (visible) {
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Poster + logo overlay while video loads */}
      {!isVideoReady && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-2xl ring-1 ring-black/5 animate-pulse">
              <img src={wooWooLogo} alt="WooWoo World" className="h-14 w-14 object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* MASSIVE VIDEO - Takes up 95% of space */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onCanPlay={() => setIsVideoReady(true)}
        onLoadedData={() => setIsVideoReady(true)}
        {...({
          'webkit-playsinline': 'true',
          'x5-playsinline': 'true',
          'x5-video-player-type': 'h5',
          'x5-video-player-fullscreen': 'false',
          'x5-video-orientation': 'portraint',
        } as Record<string, string>)}
      >
        {/* Source order chosen at runtime: MP4 first on Safari/iOS/Chinese browsers, WebM first elsewhere */}
        {mp4First ? (
          <>
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source src="/videos/hero.webm" type="video/webm" />
          </>
        ) : (
          <>
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </>
        )}
        Your browser does not support the video tag.
      </video>

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center shadow-md ring-1 ring-black/5">
                <img
                  src={wooWooLogo}
                  alt="WooWoo World"
                  className="h-8 w-8 object-contain"
                />
              </div>
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative" ref={workDropdownRef}>
                <button
                  onClick={() => setIsWorkDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 cursor-pointer"
                >
                  Work
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isWorkDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isWorkDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl"
                  >
                    {workOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setFocus(opt.value)
                          setIsWorkDropdownOpen(false)
                          goToFocusProfile()
                        }}
                        className="w-full text-left px-5 py-3 text-white/90 hover:text-white hover:bg-white/10 font-medium text-sm gentle-animation cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              <a 
                href="#about" 
                className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105"
              >
                Process
              </a>
              <a 
                href="#team" 
                className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105"
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105"
              >
                Contact
              </a>
              <div className="relative" ref={legalDropdownRef}>
                <button
                  onClick={() => setIsLegalDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 cursor-pointer"
                >
                  Legal
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLegalDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLegalDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-3 w-48 rounded-xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl"
                  >
                    {legalOptions.map((opt) => (
                      <Link
                        key={opt.href}
                        to={opt.href}
                        onClick={() => setIsLegalDropdownOpen(false)}
                        className="block px-5 py-3 text-white/90 hover:text-white hover:bg-white/10 font-medium text-sm gentle-animation cursor-pointer"
                      >
                        {opt.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Side - Video Controls + CTA + Mobile Menu */}
            <div className="flex items-center space-x-3 relative">
              {/* Video Controls with Sound On indicator */}
              <div className="relative">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="glass-effect p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                
                {/* Sound On indicator - only show when muted */}
                {isMuted && (
                  <div className="absolute -bottom-10 right-0 flex items-center text-white/80">
                    <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                    <span className="text-lg">↗</span>
                  </div>
                )}
              </div>
              
              {/* CTA Button - Hidden on mobile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hidden sm:block bg-red-600 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 gentle-animation ml-4 cursor-pointer"
              >
                Book a Call
              </motion.button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90] mobile-menu-panel pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Close Button at the top */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 text-white">
              <div>
                <button
                  onClick={() => setIsMobileWorkOpen((v) => !v)}
                  className="mobile-menu-link w-full flex items-center justify-between px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20 cursor-pointer"
                >
                  Work
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileWorkOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileWorkOpen && (
                  <div className="flex flex-col pl-4 mt-1">
                    {workOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setFocus(opt.value)
                          setIsMobileMenuOpen(false)
                          goToFocusProfile()
                        }}
                        className="text-left px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg gentle-animation font-medium text-base active:bg-white/20 cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a 
                href="#about" 
                className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#team" 
                className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#contact" 
                className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div>
                <button
                  onClick={() => setIsMobileLegalOpen((v) => !v)}
                  className="mobile-menu-link w-full flex items-center justify-between px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20 cursor-pointer"
                >
                  Legal
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileLegalOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileLegalOpen && (
                  <div className="flex flex-col pl-4 mt-1">
                    {legalOptions.map((opt) => (
                      <Link
                        key={opt.href}
                        to={opt.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-left px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg gentle-animation font-medium text-base active:bg-white/20 cursor-pointer"
                      >
                        {opt.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 active:bg-red-800 gentle-animation mt-8 cursor-pointer"
            >
              Book a Call
            </motion.button>
          </div>
        </div>
      </motion.div>



      {/* Big Studio Title - Lower Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 sm:bottom-14 lg:bottom-16 left-6 sm:left-8 lg:left-12 z-40"
      >
        <div className="max-w-[20rem] sm:max-w-2xl lg:max-w-3xl xl:max-w-5xl pr-4">
          <h1 className="text-[1.75rem] sm:text-[3rem] lg:text-[4rem] xl:text-[5.25rem] font-black leading-[1.05] tracking-tight text-white">
            <span className="block font-extrabold text-6xl">Purveyors of Exemplary</span>
            <span className="block font-extrabold text-8xl">Professionals &amp; their Services</span>
          </h1>
        </div>
      </motion.div>


    </div>
  )
}