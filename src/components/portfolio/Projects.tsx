'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import SectionLabel from './SectionLabel'
import projectsData from '@/data/projects.json'
import type { Projects as ProjectsContent, CaseStudy, PersonalBuild, AccentColor } from '@/types'

const data = projectsData as ProjectsContent

const ACCENT: Record<AccentColor, { text: string; border: string; hoverBorder: string; bg: string; dot: string; rgba: string }> = {
  cyan:    { text: 'text-primary', border: 'border-primary/30', hoverBorder: 'hover:border-primary/60', bg: 'bg-primary/10',  dot: 'bg-primary',  rgba: '34,211,238'  },
  violet:  { text: 'text-accent',  border: 'border-accent/30',  hoverBorder: 'hover:border-accent/60',  bg: 'bg-accent/10',   dot: 'bg-accent',   rgba: '139,92,246'  },
  emerald: { text: 'text-emerald', border: 'border-emerald/30', hoverBorder: 'hover:border-emerald/60', bg: 'bg-emerald/10',  dot: 'bg-emerald',  rgba: '52,211,153'  },
}

const BOTTLENECK = '#febc2e'

function PipelineDiagram({ nodes, bottleneck }: { nodes: string[]; bottleneck?: string }) {
  const W = 520
  const H = 80
  const spacing = W / (nodes.length - 1)
  const pts = nodes.map((_, i) => ({ x: i * spacing, y: i % 2 === 0 ? 55 : 22 }))

  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    d += ` C ${pts[i].x + spacing * 0.5} ${pts[i].y}, ${pts[i + 1].x - spacing * 0.5} ${pts[i + 1].y}, ${pts[i + 1].x} ${pts[i + 1].y}`
  }

  return (
    <svg viewBox={`-12 0 ${W + 24} ${H + 28}`} className="w-full overflow-visible my-2">
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#pg)" strokeWidth="1.5" />
      {pts.map((pt, i) => {
        const isBottleneck = nodes[i] === bottleneck
        return (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r="11" fill="rgba(15,23,42,0.95)" stroke={isBottleneck ? BOTTLENECK : 'rgba(255,255,255,0.1)'} strokeWidth={isBottleneck ? 1.5 : 1} />
            <circle cx={pt.x} cy={pt.y} r="3.5" fill={isBottleneck ? BOTTLENECK : i % 2 === 0 ? '#22d3ee' : '#8b5cf6'} />
            <text x={pt.x} y={pt.y + 23} textAnchor="middle" fill={isBottleneck ? BOTTLENECK : '#64748b'} fontSize="9" fontFamily="monospace" letterSpacing="1.5">
              {nodes[i]}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

function CaseStudyCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  const a = ACCENT[study.accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`group relative overflow-hidden glass rounded-2xl border ${a.border} ${a.hoverBorder} flex flex-col gap-4 h-full transition-all duration-300 ${featured ? 'p-8' : 'p-6'}`}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top right, rgba(${a.rgba},0.1) 0%, transparent 65%)` }}
      />

      {/* Category row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
          <span className="text-xs font-mono text-muted uppercase tracking-widest">{study.category}</span>
        </div>
        <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/8 flex items-center justify-center text-muted group-hover:text-foreground transition-all duration-300 shrink-0">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Title */}
      <h3 className={`font-bold text-foreground leading-tight ${featured ? 'text-4xl lg:text-5xl' : 'text-2xl'}`}>
        {study.title}
      </h3>

      {/* Description */}
      <p className={`text-muted leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
        {study.description}
      </p>

      {/* Flow diagram */}
      {featured && study.pipeline && (
        <PipelineDiagram nodes={study.pipeline} bottleneck={study.bottleneck} />
      )}

      {/* Footer: metric + methods */}
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${a.bg} ${a.text} ${a.border}`}>
          <Sparkles className="w-3 h-3" />
          {study.metrics}
        </span>
        {study.methods.map((tag) => (
          <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 text-muted">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function PersonalCard({ build }: { build: PersonalBuild }) {
  const a = ACCENT[build.accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`group relative overflow-hidden glass rounded-2xl border border-white/8 ${a.hoverBorder} flex flex-col gap-3 h-full p-6 transition-all duration-300`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
          <span className="text-xs font-mono text-muted uppercase tracking-widest">personal build</span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-bold text-foreground leading-tight">{build.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{build.description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-1">
        {build.stack.map((tag) => (
          <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 text-muted">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const studies  = data.case_studies
  const featured = studies.find((s) => s.featured) ?? studies[0]
  const rest     = studies.filter((s) => s.id !== featured.id)

  return (
    <section id="projects" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="05" path="~/projects" kicker="case studies" />

        {/* Headline row */}
        <div className="flex items-end justify-between gap-8 mb-10">
          <div>
            <h2 className="text-5xl font-bold text-foreground leading-tight">{data.headline_lead}</h2>
            <h2 className="text-5xl font-bold leading-tight text-gradient-cyan-violet">{data.headline_rest}</h2>
          </div>
          <p className="text-muted text-sm text-right shrink-0 hidden lg:block">
            Honest, directional reconstructions.<br />Companies abstracted.
          </p>
        </div>

        {/* Desktop bento grid: featured tall on the left, two stacked on the right */}
        <div
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: '3fr 2fr',
            gridTemplateAreas: '"feat sm1" "feat sm2"',
          }}
        >
          <div style={{ gridArea: 'feat' }}><CaseStudyCard study={featured} featured /></div>
          {rest[0] && <div style={{ gridArea: 'sm1' }}><CaseStudyCard study={rest[0]} /></div>}
          {rest[1] && <div style={{ gridArea: 'sm2' }}><CaseStudyCard study={rest[1]} /></div>}
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-4 lg:hidden">
          <CaseStudyCard study={featured} featured />
          {rest.map((s) => <CaseStudyCard key={s.id} study={s} />)}
        </div>

        {/* Personal builds */}
        {data.personal.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-3 font-mono text-xs text-muted uppercase tracking-widest mb-4">
              <span>personal builds</span>
              <span className="flex-1 h-px bg-white/8" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.personal.map((build) => <PersonalCard key={build.id} build={build} />)}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
