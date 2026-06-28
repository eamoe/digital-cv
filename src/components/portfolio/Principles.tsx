'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import principlesData from '@/data/principles.json'
import type { Principles as PrinciplesData, AccentColor } from '@/types'

const data = principlesData as PrinciplesData

const ACCENT: Record<AccentColor, { border: string; quote: string; lead: string }> = {
  cyan:    { border: 'border-l-primary/60',  quote: 'text-primary/20',  lead: 'text-foreground'   },
  violet:  { border: 'border-l-accent/60',   quote: 'text-accent/20',   lead: 'text-foreground'   },
  emerald: { border: 'border-l-emerald/60',  quote: 'text-emerald/20',  lead: 'text-foreground'   },
}

export default function Principles() {
  return (
    <section id="principles" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="05" path="~/principles" kicker="leadership principles" />

        {/* Headline */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold text-foreground leading-tight">{data.headline_lead}</h2>
          <h2 className="text-5xl font-bold leading-tight text-gradient-cyan-violet">{data.headline_rest}</h2>
        </div>

        {/* Principle cards — 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.principles.map(({ id, lead, rest, accent }, i) => {
            const a = ACCENT[accent as AccentColor]
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
                className={`glass rounded-2xl p-7 flex flex-col gap-3 border border-white/8 border-l-2 ${a.border}`}
              >
                {/* Lead with inline quote mark */}
                <p className={`text-lg font-semibold leading-snug ${a.lead}`}>
                  <span className={`font-serif text-2xl leading-none mr-1 ${a.quote}`}>&ldquo;</span>
                  {lead}
                </p>

                {/* Rest — slightly muted */}
                <p className="text-base text-foreground/55 leading-relaxed">
                  {rest}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
