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
            className="rounded-xl border border-primary/20 font-mono text-sm overflow-hidden bg-[#0d1117] shadow-[0_0_32px_#22d3ee18,0_0_64px_#22d3ee0a]"
          >
            <div className="flex items-center px-4 py-2.5 bg-[#21262d] border-b border-white/10 relative">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 text-xs text-foreground/50 tracking-wide">~/portfolio — zsh</span>
            </div>
            <div className="px-5 py-4 space-y-1.5 text-xs leading-relaxed">
              <p>
                <span className="text-emerald">➜</span>{' '}
                <span className="text-primary">~/portfolio</span>{' '}
                <span className="text-muted/50">git:(</span><span className="text-[#febc2e]">main</span><span className="text-muted/50">)</span>{' '}
                <span className="text-foreground">cat skills.json</span>
              </p>
              <p className="text-muted">{'{'}</p>
              <div className="pl-4 space-y-1.5">
                {categories.map(([key, values], i) => (
                  <JsonLine key={key} label={key} values={values} isLast={i === categories.length - 1} />
                ))}
              </div>
              <p className="text-muted">{'}'}</p>
              <p className="pt-1">
                <span className="text-emerald">➜</span>{' '}
                <span className="text-primary">~/portfolio</span>{' '}
                <span className="text-muted/50">git:(</span><span className="text-[#febc2e]">main</span><span className="text-muted/50">)</span>{' '}
                <span className="cursor-blink text-foreground/70">▋</span>
              </p>
            </div>
          </motion.div>

          {/* Right: load_skills.sh */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-xl border border-primary/20 font-mono text-sm overflow-hidden bg-[#0d1117] shadow-[0_0_32px_#22d3ee18,0_0_64px_#22d3ee0a]"
          >
            <div className="flex items-center px-4 py-2.5 bg-[#21262d] border-b border-white/10 relative">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="absolute left-1/2 -translate-x-1/2 text-xs text-foreground/50 tracking-wide">~/portfolio — zsh</span>
            </div>
            <div className="px-5 py-4 space-y-4 text-xs leading-relaxed">
              <p>
                <span className="text-emerald">➜</span>{' '}
                <span className="text-primary">~/portfolio</span>{' '}
                <span className="text-muted/50">git:(</span><span className="text-[#febc2e]">main</span><span className="text-muted/50">)</span>{' '}
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
                <p>
                  <span className="text-emerald">➜</span>{' '}
                  <span className="text-primary">~/portfolio</span>{' '}
                  <span className="text-muted/50">git:(</span><span className="text-[#febc2e]">main</span><span className="text-muted/50">)</span>{' '}
                  <span className="text-foreground">echo $STATUS</span>
                </p>
                <p className="text-emerald">shipping</p>
                <p className="pt-1">
                  <span className="text-emerald">➜</span>{' '}
                  <span className="text-primary">~/portfolio</span>{' '}
                  <span className="text-muted/50">git:(</span><span className="text-[#febc2e]">main</span><span className="text-muted/50">)</span>{' '}
                  <span className="cursor-blink text-foreground/70">▋</span>
                </p>
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
