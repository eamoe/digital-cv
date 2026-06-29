'use client'

import { m } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import SectionLabel from './SectionLabel'
import processData from '@/data/process.json'
import type { Process as ProcessContent, ProcessAccent } from '@/types'

const data = processData as ProcessContent

const ACCENT: Record<ProcessAccent, { dot: string; border: string; hoverBorder: string; rgba: string }> = {
  cyan:    { dot: 'bg-primary',  border: 'border-primary/25', hoverBorder: 'hover:border-primary/50', rgba: '34,211,238'  },
  violet:  { dot: 'bg-accent',   border: 'border-accent/25',  hoverBorder: 'hover:border-accent/50',  rgba: '139,92,246'  },
  emerald: { dot: 'bg-emerald',  border: 'border-emerald/25', hoverBorder: 'hover:border-emerald/50', rgba: '52,211,153'  },
  muted:   { dot: 'bg-white/50', border: 'border-white/10',   hoverBorder: 'hover:border-white/25',   rgba: '100,116,139' },
}

// short ticket code from a (possibly multi-word) phase id, e.g. "MAKE VISIBLE" → "MAKE"
const ticketCode = (id: string) => id.split(/[^A-Za-z]/)[0].slice(0, 4).toUpperCase()

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="05" path="~/process" kicker="the method" />

        {/* Headline row */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              {data.headline_lead}
              <span className="block text-gradient-cyan-violet">{data.headline_rest}</span>
            </h2>
          </div>
          <p className="text-muted text-sm text-right shrink-0 max-w-sm hidden lg:block">
            {data.note}
          </p>
        </div>

        {/* Phase columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.phases.map(({ id, accent, items }, i) => {
            const a = ACCENT[accent]
            const code = ticketCode(id)
            return (
              <m.div
                key={id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                className="flex flex-col gap-3"
              >
                {/* Column header */}
                <div className={`flex items-center justify-between px-4 py-3 rounded-xl glass border ${a.border}`}>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
                    <span className="text-xs font-mono text-foreground/80 uppercase tracking-widest truncate">{id}</span>
                  </div>
                  <span className="text-xs font-mono text-muted shrink-0">{String(i + 1).padStart(2, '0')} →</span>
                </div>

                {/* Step cards */}
                {items.map(({ label, meta }, j) => (
                  <div
                    key={label}
                    className={`group relative overflow-hidden glass rounded-xl p-4 flex flex-col gap-2 border border-white/8 ${a.hoverBorder} transition-all duration-300`}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at top right, rgba(${a.rgba},0.1) 0%, transparent 65%)` }}
                    />

                    {/* Top: icon + ticket id + dot */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <RefreshCw aria-hidden="true" className="w-3 h-3 text-muted/50" strokeWidth={1.5} />
                        <span className="text-xs font-mono text-muted">{code}-{String(j + 1).padStart(2, '0')}</span>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                    </div>

                    {/* Title */}
                    <p className="text-base font-semibold text-foreground leading-snug">{label}</p>

                    {/* Meta */}
                    <p className="text-xs font-mono text-muted">{meta}</p>
                  </div>
                ))}
              </m.div>
            )
          })}
        </div>

        {/* Closing quote */}
        <m.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-14 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl lg:text-2xl text-foreground/75 leading-relaxed italic">
            &ldquo;{data.closing_quote}&rdquo;
          </blockquote>
        </m.figure>

      </div>
    </section>
  )
}
