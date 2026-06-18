'use client'

import { motion } from 'framer-motion'
import { Network, Sparkle, Trophy } from 'lucide-react'
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
          className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Grid that fades at the bottom */}
        <div className="absolute inset-0 grid-bg mask-fade-b pointer-events-none" />

        {/* Top-center gradient bloom */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-accent/8 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-[1232px] mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left column ─────────────────────────────────── */}
            <div className="space-y-8">

              {/* Version / tagline badge */}
              <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/8 text-xs font-mono text-muted whitespace-nowrap">
                <Sparkle className="w-3 h-3 text-primary shrink-0" />
                PHYSICIST → ENGINEER → DELIVERY MANAGER
              </span>
              </motion.div>

              {/* Giant headline */}
              <motion.div {...fadeUp(0.1)}>
                <h1 className="font-bold leading-none tracking-tight">
                  <span className="block text-6xl lg:text-7xl text-foreground">Most complex systems fail at delivery.</span>
                  <span className="block text-6xl lg:text-7xl mt-2">
                    <span className="text-gradient-cyan-violet">I fix that — including in AI.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Bio */}
              <motion.p {...fadeUp(0.2)} className="text-foreground/60 text-lg leading-relaxed max-w-lg">
                I deploy robust Agile systems for continuous execution.
                Using a physicist’s analytical rigor and an engineer’s practical skill, I’ve spent 15 years building high-performing delivery systems.
                Now I apply that experience to getting AI products into production.
              </motion.p>

            </div>

            {/* ── Right column: terminals ──────────────────────── */}
            <motion.div {...fadeUp(0.2)} className="space-y-4">

              {/* Terminal: whoami + capabilities */}
              <div className="rounded-xl border border-primary/20 font-mono text-sm overflow-hidden bg-[#0d1117] shadow-[0_0_32px_#22d3ee18,0_0_64px_#22d3ee0a]">
                <div className="flex items-center px-4 py-2.5 bg-[#21262d] border-b border-white/10 relative">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="absolute left-1/2 -translate-x-1/2 text-xs text-foreground/50 tracking-wide">~/portfolio — zsh</span>
                </div>
                <div className="px-5 py-4 space-y-1.5">
                  {/* whoami */}
                  <p>
                    <span className="text-emerald">➜</span>{' '}
                    <span className="text-primary">~/portfolio</span>{' '}
                    <span className="text-muted/50">git:(</span><span className="text-[#febc2e]">main</span><span className="text-muted/50">)</span>{' '}
                    <span className="text-foreground">whoami</span>
                  </p>
                  <p className="text-muted pl-4">
                    systems thinker · delivery leader · <span className="text-primary">now applying both to AI</span>
                  </p>

                  {/* system-flow */}
                  <p className="pt-3">
                    <span className="text-emerald">➜</span>{' '}
                    <span className="text-primary">~/portfolio</span>{' '}
                    <span className="text-foreground">{profile.terminal.command}</span>
                  </p>
                  {profile.terminal.lines.map((line, i) => (
                    <p key={i} className={`pl-4 ${i === profile.terminal.lines.length - 1 ? 'text-emerald' : 'text-muted/80'}`}>
                      {line}
                    </p>
                  ))}

                  {/* idle prompt */}
                  <p className="pt-3">
                    <span className="text-emerald">➜</span>{' '}
                    <span className="text-primary">~/portfolio</span>{' '}
                    <span className="cursor-blink text-foreground/70">▋</span>
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-16">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/90 transition-colors duration-200"
                >
                  <Trophy className="w-4 h-4" />
                  VIEW PROVEN RESULTS ↗
                </a>
                <a
                    href="#trajectory"
                    className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/8 text-foreground rounded-full font-mono text-sm hover:border-white/20 hover:bg-white/5 transition-colors duration-200"
                >
                  <Network className="w-4 h-4 text-primary" />
                  VIEW CAREER TIMELINE GRAPH
                </a>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
  )
}
