'use client'

import { useState, useEffect } from 'react'
import profile from '@/data/profile.json'

const NAV_LINKS = [
  { label: 'about',      href: '#about'      },
  { label: 'trajectory', href: '#trajectory' },
  { label: 'skills',     href: '#skills'     },
  { label: 'process',    href: '#process'    },
  { label: 'projects',   href: '#projects'   },
  { label: 'vision',     href: '#vision'     },
  { label: 'notes',      href: '#notes'      },
  { label: 'contact',    href: '#contact'    },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="mx-auto max-w-[1232px] px-6">
        <div
          className={`flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 ${
            scrolled
              ? 'bg-[rgba(34,211,238,0.06)] backdrop-blur-xl border-primary/15 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.08)]'
              : 'bg-transparent border-transparent'
          }`}
        >

          {/* Logo */}
          <a
            href="#"
            aria-label={`${profile.name} — back to top`}
            className="flex items-center gap-2 px-1 py-0.5 rounded focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
          >
            <div className="w-7 h-7 rounded-md bg-card border border-white/8 flex items-center justify-center shrink-0">
              <span className="text-primary text-[11px] font-bold font-mono">&gt;_</span>
            </div>
            <span className="font-mono text-sm text-foreground/40">~/</span>
            <span className="font-mono text-sm text-foreground">{profile.name.split(' ')[0].toLowerCase()}</span>
            <span className="cursor-blink text-primary text-sm font-mono">_</span>
          </a>

          {/* Links */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 font-mono text-[13px]">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="rounded-full px-3 py-1.5 text-foreground/70 hover:bg-white/8 hover:text-foreground transition-colors duration-200"
                  >
                    <span className="text-primary/60">/</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/4 px-3 py-1 font-mono text-[11px] text-foreground/70">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
              </span>
              {profile.availability}
            </span>
            <a
              href="#contact"
              className="rounded-full bg-foreground px-4 py-1.5 font-mono text-[12px] text-background hover:bg-foreground/90 transition-colors duration-200 font-semibold"
            >
              get in touch
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}
