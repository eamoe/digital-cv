'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Rocket, GitBranch } from 'lucide-react'
import SectionLabel from './SectionLabel'

const PHASES = [
  {
    id: 'DISCOVER',
    step: '01',
    dot: 'bg-primary',
    border: 'border-primary/25',
    hoverBorder: 'hover:border-primary/50',
    rgba: '34,211,238',
    items: [
      { label: 'Problem framing',    meta: '1d · stakeholders'       },
      { label: 'Constraint mapping', meta: '1d · org · tech · time'  },
      { label: 'Eval-first scoping', meta: 'for AI features'          },
    ],
  },
  {
    id: 'PLAN',
    step: '02',
    dot: 'bg-accent',
    border: 'border-accent/25',
    hoverBorder: 'hover:border-accent/50',
    rgba: '139,92,246',
    items: [
      { label: 'Bet sized in slices', meta: 'vertical, shippable'     },
      { label: 'Cadence chosen',      meta: 'scrum / kanban / hybrid' },
      { label: 'Hiring & skill gaps', meta: 'people are the plan'     },
    ],
  },
  {
    id: 'SHIP',
    step: '03',
    dot: 'bg-emerald',
    border: 'border-emerald/25',
    hoverBorder: 'hover:border-emerald/50',
    rgba: '52,211,153',
    items: [
      { label: 'Two-week iterations', meta: 'demo > status update'     },
      { label: 'Risk burn-down',      meta: 'weekly, in writing'       },
      { label: 'AI evals in CI',      meta: 'no model drift surprises' },
    ],
  },
  {
    id: 'COMPOUND',
    step: '04',
    dot: 'bg-white/50',
    border: 'border-white/10',
    hoverBorder: 'hover:border-white/25',
    rgba: '100,116,139',
    items: [
      { label: 'Retros that change one thing', meta: 'every 2 weeks'        },
      { label: 'Decision log',                 meta: 'ADRs for product calls'},
      { label: 'Operating doctrine',           meta: 'what we keep · drop'  },
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="04" path="~/process" kicker="how I run delivery" />

        {/* Headline row */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight">An operating system</h2>
            <h2 className="text-5xl font-bold leading-tight text-gradient-cyan-violet">for teams that ship.</h2>
          </div>
          <p className="text-muted text-sm text-right shrink-0 whitespace-nowrap hidden lg:block">
            Calm, evidence-driven delivery. Less theatre, more compounding.
          </p>
        </div>

        {/* Phase columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHASES.map(({ id, step, dot, border, hoverBorder, rgba, items }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col gap-3"
            >
              {/* Column header */}
              <div className={`flex items-center justify-between px-4 py-3 rounded-xl glass border ${border}`}>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
                  <span className="text-xs font-mono text-foreground/80 uppercase tracking-widest">{id}</span>
                </div>
                <span className="text-xs font-mono text-muted">{step} →</span>
              </div>

              {/* Step cards */}
              {items.map(({ label, meta }, j) => (
                <div
                  key={label}
                  className={`group relative overflow-hidden glass rounded-xl p-4 flex flex-col gap-2 border border-white/8 ${hoverBorder} transition-all duration-300`}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top right, rgba(${rgba},0.1) 0%, transparent 65%)` }}
                  />

                  {/* Top: icon + ticket id + dot */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <RefreshCw className="w-3 h-3 text-muted/50" strokeWidth={1.5} />
                      <span className="text-xs font-mono text-muted">{id}-{String(j + 1).padStart(2, '0')}</span>
                    </div>
                    <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  </div>

                  {/* Title */}
                  <p className="text-base font-semibold text-foreground leading-snug">{label}</p>

                  {/* Meta */}
                  <p className="text-xs font-mono text-muted">{meta}</p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bottom flow bar */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <Rocket className="w-4 h-4 text-emerald" strokeWidth={1.5} />
            <span>SHIP</span>
          </div>
          <span className="text-muted/40">→</span>
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <GitBranch className="w-4 h-4 text-accent" strokeWidth={1.5} />
            <span>LEARN</span>
          </div>
          <span className="text-muted/40">→</span>
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <RefreshCw className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span>COMPOUND</span>
          </div>
        </div>

      </div>
    </section>
  )
}
