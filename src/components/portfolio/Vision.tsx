'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Globe, type LucideIcon } from 'lucide-react'
import SectionLabel from './SectionLabel'
import vision from '@/data/vision.json'
import type { VisionItem, AccentColor } from '@/types'

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  TrendingUp,
  Globe,
}

const ACCENT_TEXT: Record<AccentColor, string> = {
  cyan:    'text-primary',
  violet:  'text-accent',
  emerald: 'text-emerald',
}

const ACCENT_BORDER: Record<AccentColor, string> = {
  cyan:    'border-primary/30',
  violet:  'border-accent/30',
  emerald: 'border-emerald/30',
}

const ACCENT_BG: Record<AccentColor, string> = {
  cyan:    'bg-primary/8',
  violet:  'bg-accent/8',
  emerald: 'bg-emerald/8',
}

export default function Vision() {
  const items = vision as VisionItem[]

  return (
    <section id="vision" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="06" path="~/vision" kicker="Where I'm headed and why" />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {items.map(({ horizon, icon, title, description, accent }, i) => {
            const Icon        = ICON_MAP[icon] ?? Target
            const accentText  = ACCENT_TEXT[accent as AccentColor]
            const accentBorder = ACCENT_BORDER[accent as AccentColor]
            const accentBg    = ACCENT_BG[accent as AccentColor]

            return (
              <motion.div
                key={horizon}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                className={`glass glass-hover rounded-2xl p-7 flex flex-col gap-5 border ${accentBorder}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accentBg} border ${accentBorder}`}>
                  <Icon className={`w-5 h-5 ${accentText}`} strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-mono ${accentText}`}>{horizon}</span>
                  <h3 className="text-base font-bold text-foreground">{title}</h3>
                </div>

                <p className="text-sm text-muted leading-relaxed">{description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Thesis statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="glass rounded-2xl p-7 border border-white/10 text-center"
        >
          <p className="text-muted text-sm font-mono mb-2">// thesis</p>
          <p className="text-foreground/80 text-base leading-relaxed max-w-2xl mx-auto">
            The best software careers compound — each role building context, trust, and capability
            that makes the next one possible. I&apos;m optimising for that curve, not the next title.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
