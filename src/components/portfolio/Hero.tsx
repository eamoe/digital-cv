'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy, Network } from 'lucide-react'
import profileData from '@/data/profile.json'
import type { Profile } from '@/types'

const profile = profileData as Profile
const { hero, metrics } = profile

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg mask-fade-b pointer-events-none" />

      {/* Gradient bloom */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-accent/8 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-[1232px] mx-auto px-6 pt-32 pb-20 w-full">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/4 text-xs font-mono text-muted tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.1)} className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.08] tracking-tight max-w-5xl mx-auto">
            {hero.headline}
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p {...fadeUp(0.2)} className="text-center text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-6">
          {hero.subheadline}
        </motion.p>

        {/* Physics paragraph */}
        <motion.p {...fadeUp(0.25)} className="text-center text-base text-foreground/45 leading-relaxed max-w-xl mx-auto mb-12">
          {hero.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <a
            href={hero.cta_primary.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full font-semibold text-sm hover:bg-foreground/90 transition-colors duration-200"
          >
            <Trophy className="w-4 h-4" />
            {hero.cta_primary.label}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={hero.cta_secondary.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/12 text-foreground text-sm hover:border-white/25 hover:bg-white/4 transition-all duration-200"
          >
            <Network className="w-4 h-4 text-primary" />
            {hero.cta_secondary.label}
          </a>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="flex flex-col items-center justify-center text-center px-4 py-10 bg-background relative group"
            >
              {/* Subtle top accent on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-none mb-3 font-mono">
                {m.value}
              </span>
              <span className="text-xs text-muted leading-snug max-w-[120px]">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
