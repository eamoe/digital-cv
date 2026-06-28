'use client'

import { motion } from 'framer-motion'
import execData from '@/data/executive-summary.json'
import type { ExecutiveSummary as ExecData, ExecAccent } from '@/types'

const data = execData as ExecData

const ACCENT: Record<ExecAccent, { dot: string; border: string; value: string }> = {
  cyan:    { dot: 'bg-primary',  border: 'border-primary/20',  value: 'text-primary'  },
  violet:  { dot: 'bg-accent',   border: 'border-accent/20',   value: 'text-accent'   },
  emerald: { dot: 'bg-emerald',  border: 'border-emerald/20',  value: 'text-emerald'  },
  muted:   { dot: 'bg-muted',    border: 'border-white/8',     value: 'text-foreground' },
}

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary">
      <div className="max-w-[1232px] mx-auto px-6 pt-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6"
        >
          {data.cards.map(({ id, label, type, value, unit, items, accent }) => {
            const a = ACCENT[accent]
            return (
              <div
                key={id}
                className="flex flex-col gap-5 px-8 py-8 bg-background relative group"
              >
                {/* Hover top accent */}
                <div className={`absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-current to-transparent ${a.value}`} />

                {/* Label */}
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                  <span className="text-xs font-mono text-muted uppercase tracking-widest">{label}</span>
                </div>

                {/* Content */}
                {type === 'stat' && value ? (
                  <div className="flex flex-col gap-1">
                    <span className={`text-3xl lg:text-4xl font-bold font-mono leading-none tracking-tight ${a.value}`}>
                      {value}
                    </span>
                    {unit && (
                      <span className="text-xs text-muted mt-1">{unit}</span>
                    )}
                  </div>
                ) : (
                  <ul className="flex flex-col gap-2.5">
                    {items?.map((item) => (
                      <li key={item} className="text-sm text-foreground/80 leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
