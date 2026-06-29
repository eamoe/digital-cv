'use client'

import { m } from 'framer-motion'
import { Target, Gauge, Crown, TrendingUp, type LucideIcon } from 'lucide-react'
import SectionLabel from './SectionLabel'
import visionData from '@/data/vision.json'
import type { Vision as VisionData, AccentColor } from '@/types'

const data = visionData as VisionData

const ICON_MAP: Record<string, LucideIcon> = { Target, Gauge, Crown }

const ACCENT: Record<AccentColor, { text: string; border: string; bg: string; pill: string; rgba: string }> = {
  cyan:    { text: 'text-primary', border: 'border-primary/30', bg: 'bg-primary/10',  pill: 'border-primary/50 text-primary',  rgba: '34,211,238'   },
  violet:  { text: 'text-accent',  border: 'border-accent/30',  bg: 'bg-accent/10',   pill: 'border-accent/50 text-accent',    rgba: '139,92,246'   },
  emerald: { text: 'text-emerald', border: 'border-emerald/30', bg: 'bg-emerald/10',  pill: 'border-emerald/50 text-emerald',  rgba: '52,211,153'   },
}

export default function Vision() {
  const items = data.horizons

  return (
    <section id="vision" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-start">

          {/* Left */}
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <SectionLabel index="07" path="~/vision" kicker="next decade" />
            <h2 className="text-[2.75rem] font-bold leading-tight text-foreground">
              {data.headline_lead}
              <span className="block text-gradient-cyan-violet">{data.headline_rest}</span>
            </h2>

            <p className="text-muted text-base leading-relaxed">
              {data.intro}
            </p>

            {/* Thesis box */}
            <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                <span className="text-xs font-mono text-muted uppercase tracking-widest">Thesis</span>
              </div>
              <p className="text-foreground/85 text-sm leading-relaxed">
                {data.thesis_lead}
              </p>
              <p className="text-muted text-sm">
                {data.thesis_rest}
              </p>
            </div>
          </m.div>

          {/* Right: stacked horizon cards */}
          <div className="flex flex-col gap-4">
            {items.map(({ horizon, timeRange, icon, title, description, accent }, i) => {
              const Icon = ICON_MAP[icon] ?? Target
              const a    = ACCENT[accent as AccentColor]
              const hLabel = `H${i + 1}`

              return (
                <m.div
                  key={horizon}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                  style={{
                    background: `linear-gradient(#0d1117, #0d1117) padding-box, linear-gradient(135deg, rgba(${a.rgba},0.6) 0%, rgba(${a.rgba},0.2) 45%, transparent 75%) border-box`,
                    border: '1px solid transparent',
                    boxShadow: `0 0 60px rgba(${a.rgba},0.08)`,
                  }}
                  className="rounded-2xl p-6 flex flex-col gap-3 backdrop-blur-[14px]"
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${a.bg} border ${a.border}`}>
                      <Icon className={`w-6 h-6 ${a.text}`} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-muted uppercase tracking-wider">{horizon}</span>
                        <span className="text-muted/40 text-xs">·</span>
                        <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${a.pill}`}>{timeRange}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{description}</p>
                    </div>

                    {/* H# label */}
                    <span className={`text-4xl font-bold shrink-0 ${a.text}`}>{hLabel}</span>
                  </div>
                </m.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
