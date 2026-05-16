'use client'

import { motion } from 'framer-motion'
import { GitFork } from 'lucide-react'
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
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/8 text-xs font-mono text-muted">
                <span className="text-primary">✦</span>
                v10.0 · research → delivery → AI leadership
              </span>
            </motion.div>

            {/* Giant headline */}
            <motion.div {...fadeUp(0.1)}>
              <h1 className="font-bold leading-none tracking-tight">
                <span className="block text-6xl lg:text-7xl text-foreground">Delivery Leader</span>
                <span className="block text-6xl lg:text-7xl mt-2">
                  <span className="text-foreground/25">&amp;</span>{' '}
                  <span className="text-gradient-cyan-violet">AI Builder.</span>
                </span>
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.p {...fadeUp(0.2)} className="text-foreground/60 text-lg leading-relaxed max-w-lg">
              I&apos;m {profile.name.split(' ')[0]} — a former software engineer and researcher who spent
              the last decade leading delivery, coaching teams, and building AI systems.
              I&apos;m engineering my path toward founding and running an AI-native company.
            </motion.p>

            {/* Terminal: whoami */}
            <motion.div {...fadeUp(0.3)} className="rounded-xl border border-primary/20 font-mono text-sm overflow-hidden bg-[#0d1117] shadow-[0_0_32px_#22d3ee18,0_0_64px_#22d3ee0a]">
              <div className="flex items-center px-4 py-2.5 bg-[#21262d] border-b border-white/10 relative">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 text-xs text-foreground/50 tracking-wide">~/portfolio — zsh</span>
              </div>
              <div className="px-5 py-4 space-y-2.5">
                <p>
                  <span className="text-primary">❯</span>{' '}
                  <span className="text-foreground">em</span>{' '}
                  <span className="text-foreground">git:</span>
                  <span className="text-primary">(main)</span>{' '}
                  <span className="text-foreground">whoami</span>
                </p>
                <p className="text-muted">
                  researcher · engineer · coach · <span className="text-primary">delivery leader</span>
                  <span className="cursor-blink text-primary font-mono">_</span>
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/90 transition-colors duration-200"
              >
                view selected work ↗
              </a>
              <a
                href="#trajectory"
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/8 text-foreground rounded-full font-mono text-sm hover:border-white/20 hover:bg-white/5 transition-colors duration-200"
              >
                <GitFork className="w-4 h-4 text-primary" />
                career as a graph
              </a>
            </motion.div>

          </div>

          {/* ── Right column: terminal + metrics ────────────── */}
          <motion.div {...fadeUp(0.2)} className="space-y-4">

            <div className="rounded-xl border border-primary/20 font-mono text-sm overflow-hidden bg-[#0d1117] shadow-[0_0_32px_#22d3ee18,0_0_64px_#22d3ee0a]">
              <div className="flex items-center px-4 py-2.5 bg-[#21262d] border-b border-white/10 relative">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 text-xs text-foreground/50 tracking-wide">~ terminal</span>
              </div>
              <div className="space-y-1.5 p-5">
                <p className="text-primary">$ {profile.terminal.command}</p>
                {profile.terminal.lines.map((line, i) => (
                  <p key={i} className={i === profile.terminal.lines.length - 1 ? 'text-emerald' : 'text-muted/80'}>
                    {line}
                  </p>
                ))}
                <p className="text-muted/40">$ <span className="cursor-blink text-primary font-mono">_</span></p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {profile.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl p-4 text-center bg-white/8 border border-white/10 hover:bg-white/12 transition-colors duration-200">
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
