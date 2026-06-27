'use client'

import { motion } from 'framer-motion'
import { Network, TrendingUp, Database, MessagesSquare, Bot, Building2, type LucideIcon } from 'lucide-react'
import SectionLabel from './SectionLabel'
import skills from '@/data/skills.json'
import type { Skills as SkillsData } from '@/types'

const data = skills as SkillsData

const ICON_MAP: Record<string, LucideIcon> = {
  Network, TrendingUp, Database, MessagesSquare, Bot, Building2,
}

function JsonLine({ label, values, isLast = false }: { label: string; values: string[]; isLast?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-1">
      <span className="text-foreground">&quot;{label}&quot;</span>
      <span className="text-muted">: [</span>
      {values.map((v, i) => (
        <span key={v}>
          <span className="text-primary bg-primary/10 rounded px-0.5">&quot;{v}&quot;</span>
          {i < values.length - 1 && <span className="text-muted">, </span>}
        </span>
      ))}
      <span className="text-muted">{isLast ? ']' : '],'}</span>
    </div>
  )
}

export default function Skills() {
  const categories = Object.entries(data.categories)

  return (
    <section id="skills" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="03" path="~/skills" kicker="stack & cadence" />

        {/* Headline row */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight">{data.headline_lead}</h2>
            <h2 className="text-5xl font-bold leading-tight text-gradient-cyan-violet">{data.headline_rest}</h2>
          </div>
          <p className="text-muted text-sm text-right shrink-0 max-w-xs hidden lg:block">
            {data.note}
          </p>
        </div>

        {/* Two terminal panels */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-4">

          {/* Left: skills.json */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass rounded-2xl font-mono text-sm border border-white/8"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
              <div className="flex items-center gap-2 text-muted text-xs">
                <span className="text-foreground/50">{'{}'}</span>
                <span>skills.json</span>
              </div>
              <span className="text-xs text-muted">read-only</span>
            </div>
            <div className="p-5">
              <div className="bg-black/30 rounded-xl p-4 space-y-1.5 text-xs leading-relaxed">
                <p className="text-muted">{'{'}</p>
                <div className="pl-4 space-y-1.5">
                  {categories.map(([key, values], i) => (
                    <JsonLine key={key} label={key} values={values} isLast={i === categories.length - 1} />
                  ))}
                </div>
                <p className="text-muted">{'}'}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: load_skills.sh */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass rounded-2xl font-mono text-sm border border-white/8"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8">
              <div className="flex items-center gap-2 text-muted text-xs">
                <span className="text-primary">&gt;_</span>
                <span>load_skills.sh</span>
              </div>
              <span className="text-xs text-muted">exit 0</span>
            </div>
            <div className="p-5 space-y-4 text-xs leading-relaxed">
              <p>
                <span className="text-primary">$</span>{' '}
                <span className="text-foreground">./load_skills.sh --verbose</span>
              </p>
              <div className="space-y-3">
                {data.capabilities.map(({ icon, label }) => {
                  const Icon = ICON_MAP[icon] ?? Network
                  return (
                    <div key={label} className="flex items-center gap-2.5">
                      <span className="text-emerald">✓</span>
                      <Icon className="w-3.5 h-3.5 text-muted shrink-0" strokeWidth={1.5} />
                      <span className="text-foreground/80">{label}</span>
                    </div>
                  )
                })}
              </div>
              <div className="space-y-1 pt-1">
                <p><span className="text-primary">$</span>{' '}<span className="text-foreground">echo $STATUS</span></p>
                <p className="text-emerald">shipping</p>
                <p className="pt-1"><span className="text-primary">$</span>{' '}<span className="cursor-blink text-primary font-mono">_</span></p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications chip row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-6"
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
        </motion.div>

      </div>
    </section>
  )
}
