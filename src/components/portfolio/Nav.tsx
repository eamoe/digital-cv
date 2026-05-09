'use client'

import { useState, useEffect } from 'react'
import profile from '@/data/profile.json'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Trajectory', href: '#trajectory' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Process',    href: '#process'    },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Vision',     href: '#vision'     },
  { label: 'Notes',      href: '#notes'      },
  { label: 'Contact',    href: '#contact'    },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="font-mono font-bold text-lg tracking-wider text-primary"
        >
          {profile.initials}
        </a>

        {/* Links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Availability pulse */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="text-xs text-muted font-mono">{profile.availability}</span>
          </div>

          {/* Download CV — wired to react-to-print in a later commit */}
          <button className="hidden sm:block text-xs px-3 py-1.5 rounded border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-200 font-mono cursor-pointer">
            Download CV
          </button>
        </div>

      </nav>
    </header>
  )
}
