'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
import profile from '@/data/profile.json'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Subtle radial glow behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: headline + tagline + CTAs ─────────────────── */}
          <div className="space-y-8">

            {/* Availability badge */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              <span className="text-xs font-mono text-muted">{profile.availability}</span>
            </motion.div>

            {/* Name + role */}
            <motion.div {...fadeUp(0.1)} className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                {profile.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-gradient-cyan-violet">
                {profile.role}
              </h2>
            </motion.div>

            <motion.p {...fadeUp(0.2)} className="text-muted text-lg leading-relaxed max-w-md">
              {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-background rounded font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-foreground rounded font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-colors duration-200"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-foreground rounded font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-colors duration-200"
              >
                <ArrowRight className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ── Right: terminal + metrics ────────────────────────── */}
          <motion.div {...fadeUp(0.2)} className="space-y-4">

            {/* Terminal block */}
            <div className="glass rounded-xl p-5 font-mono text-sm">
              {/* Traffic lights */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <span className="w-3 h-3 rounded-full bg-emerald/60" />
                </div>
                <span className="text-muted text-xs">~ terminal</span>
              </div>
              {/* Output lines */}
              <div className="space-y-1.5">
                <p className="text-primary">$ {profile.terminal.command}</p>
                {profile.terminal.lines.map((line, i) => (
                  <p key={i} className={i === profile.terminal.lines.length - 1 ? 'text-emerald' : 'text-muted/80'}>
                    {line}
                  </p>
                ))}
                {/* Blinking cursor */}
                <p className="text-muted/40">
                  $ <span className="cursor-blink">▊</span>
                </p>
              </div>
            </div>

            {/* KPI metrics */}
            <div className="grid grid-cols-2 gap-3">
              {profile.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass glass-hover rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary font-mono">{metric.value}</p>
                  <p className="text-xs text-muted mt-1">{metric.label}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
