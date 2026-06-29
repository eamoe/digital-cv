'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Users, TrendingUp, Terminal, Bot, ChevronDown, type LucideIcon } from 'lucide-react'
import SectionLabel from './SectionLabel'
import skillsData from '@/data/skills.json'
import type { Skills as SkillsData, SkillDomain } from '@/types'

const data = skillsData as SkillsData

const ICON_MAP: Record<string, LucideIcon> = { Users, TrendingUp, Terminal, Bot }

const ACCENT = {
  cyan:    { dot: 'bg-primary',  border: 'border-primary/20',  hoverBorder: 'hover:border-primary/40',  text: 'text-primary',  pill: 'bg-primary/10 text-primary border-primary/20',  rgba: '34,211,238'  },
  violet:  { dot: 'bg-accent',   border: 'border-accent/20',   hoverBorder: 'hover:border-accent/40',   text: 'text-accent',   pill: 'bg-accent/10 text-accent border-accent/20',     rgba: '139,92,246'  },
  emerald: { dot: 'bg-emerald',  border: 'border-emerald/20',  hoverBorder: 'hover:border-emerald/40',  text: 'text-emerald',  pill: 'bg-emerald/10 text-emerald border-emerald/20',   rgba: '52,211,153'  },
}

function DomainCard({ domain }: { domain: SkillDomain }) {
  const [open, setOpen] = useState(false)
  const a = ACCENT[domain.accent]
  const Icon = ICON_MAP[domain.icon] ?? Bot

  return (
    <div className={`glass rounded-2xl border ${a.border} ${a.hoverBorder} flex flex-col transition-all duration-300`}>

      {/* Header */}
      <div className="flex items-center gap-3 px-6 pt-6 pb-4">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${a.pill} border`}>
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <span className="text-sm font-semibold text-foreground tracking-wide">{domain.label}</span>
      </div>

      {/* Capabilities (always visible) */}
      <div className="px-6 pb-5 flex flex-col gap-2.5 flex-1">
        {domain.capabilities.map((cap) => (
          <div key={cap} className="flex items-center gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
            <span className="text-base text-foreground/85 leading-snug">{cap}</span>
          </div>
        ))}
      </div>

      {/* Expandable keyword inventory */}
      <div className="border-t border-white/6">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`inventory-${domain.id}`}
          className="w-full flex items-center justify-between px-6 py-3 text-xs font-mono text-muted hover:text-foreground transition-colors duration-200"
        >
          <span className="uppercase tracking-widest">Full inventory</span>
          <ChevronDown aria-hidden="true" className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              id={`inventory-${domain.id}`}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 pt-1 flex flex-wrap gap-2">
                {domain.keywords.map((kw) => (
                  <span key={kw} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-muted">
                    {kw}
                  </span>
                ))}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="04" path="~/skills" kicker="capability map" />

        {/* Headline row */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              {data.headline_lead}
              <span className="block text-gradient-cyan-violet">{data.headline_rest}</span>
            </h2>
          </div>
          <p className="text-muted text-sm text-right shrink-0 max-w-xs hidden lg:block">
            {data.note}
          </p>
        </div>

        {/* Domain cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.domains.map((domain, i) => (
            <m.div
              key={domain.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <DomainCard domain={domain} />
            </m.div>
          ))}
        </div>

        {/* Certifications */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-muted uppercase tracking-widest mb-3">
            <span>certifications</span>
            <span className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex flex-wrap gap-2">
            {data.certifications.map(({ name, url }) => {
              const cls = 'text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-muted hover:text-foreground hover:border-white/25 transition-colors duration-200'
              return url
                ? <a key={name} href={url} target="_blank" rel="noopener noreferrer" className={cls}>{name}</a>
                : <span key={name} className={cls}>{name}</span>
            })}
          </div>
        </m.div>

      </div>
    </section>
  )
}
