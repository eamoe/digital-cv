'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const PHASES = [
  {
    step:   '01',
    title:  'Discover',
    accent: 'text-primary border-primary/30',
    steps: [
      { label: 'User interviews',    meta: 'qualitative' },
      { label: 'Data analysis',      meta: 'quantitative' },
      { label: 'Competitive review', meta: 'research'     },
      { label: 'Problem framing',    meta: 'synthesis'    },
    ],
  },
  {
    step:   '02',
    title:  'Plan',
    accent: 'text-accent border-accent/30',
    steps: [
      { label: 'RFC + ADR',         meta: 'architecture' },
      { label: 'Scope negotiation', meta: 'product'      },
      { label: 'Sprint planning',   meta: 'delivery'     },
      { label: 'Risk mapping',      meta: 'engineering'  },
    ],
  },
  {
    step:   '03',
    title:  'Ship',
    accent: 'text-emerald border-emerald/30',
    steps: [
      { label: 'CI / CD pipeline',  meta: 'automation' },
      { label: 'Feature flags',     meta: 'safety'     },
      { label: 'Staged rollout',    meta: 'risk'       },
      { label: 'Observability',     meta: 'monitoring' },
    ],
  },
  {
    step:   '04',
    title:  'Compound',
    accent: 'text-primary border-primary/30',
    steps: [
      { label: 'Retro + learnings', meta: 'process'  },
      { label: 'Metric review',     meta: 'outcomes' },
      { label: 'Docs & runbooks',   meta: 'knowledge'},
      { label: 'Next iteration',    meta: 'loop'     },
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="04" path="~/process" kicker="How I take work from idea to impact" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHASES.map(({ step, title, accent, steps }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              className={`glass rounded-2xl p-5 flex flex-col gap-4 border ${accent.split(' ')[1]}`}
            >
              {/* Phase header */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono ${accent.split(' ')[0]}`}>{step}</span>
                <h3 className={`text-sm font-bold ${accent.split(' ')[0]}`}>{title}</h3>
              </div>

              {/* Step cards */}
              <div className="flex flex-col gap-2">
                {steps.map(({ label, meta }) => (
                  <div
                    key={label}
                    className="glass rounded-lg px-3 py-2 flex items-center justify-between gap-2"
                  >
                    <span className="text-xs text-foreground/80">{label}</span>
                    <span className="text-xs font-mono text-muted shrink-0">{meta}</span>
                  </div>
                ))}
              </div>

              {/* Flow indicator — hidden on last column */}
              {i < PHASES.length - 1 && (
                <div className="hidden lg:flex items-center justify-end mt-auto pt-2">
                  <span className="text-muted/40 text-xs font-mono">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
