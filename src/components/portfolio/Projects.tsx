'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import SectionLabel from './SectionLabel'
import projectsData from '@/data/projects.json'
import type { Projects as ProjectsContent, CaseStudy, PersonalBuild, AccentColor } from '@/types'

const data = projectsData as ProjectsContent

const ACCENT: Record<AccentColor, { text: string; border: string; hoverBorder: string; bg: string; dot: string; rgba: string }> = {
  cyan:    { text: 'text-primary', border: 'border-primary/30', hoverBorder: 'hover:border-primary/50', bg: 'bg-primary/10',  dot: 'bg-primary',  rgba: '34,211,238'  },
  violet:  { text: 'text-accent',  border: 'border-accent/30',  hoverBorder: 'hover:border-accent/50',  bg: 'bg-accent/10',   dot: 'bg-accent',   rgba: '139,92,246'  },
  emerald: { text: 'text-emerald', border: 'border-emerald/30', hoverBorder: 'hover:border-emerald/50', bg: 'bg-emerald/10',  dot: 'bg-emerald',  rgba: '52,211,153'  },
}

const SECTIONS = [
  { key: 'problem',      label: 'Problem'      },
  { key: 'diagnosis',    label: 'Diagnosis'    },
  { key: 'intervention', label: 'Intervention' },
  { key: 'outcome',      label: 'Outcome'      },
  { key: 'lesson',       label: 'Lesson'       },
] as const

function CaseStudySection({ label, text, isLesson = false }: { label: string; text: string; isLesson?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest shrink-0">{label}</span>
        <span className="flex-1 h-px bg-white/6" />
      </div>
      <p className={`text-sm leading-relaxed ${isLesson ? 'text-foreground/60 italic' : 'text-muted'}`}>
        {isLesson ? `"${text}"` : text}
      </p>
    </div>
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
      className={`group relative overflow-hidden glass rounded-2xl border ${a.border} ${a.hoverBorder} flex flex-col h-full transition-all duration-300 ${featured ? 'p-8' : 'p-6'}`}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top right, rgba(${a.rgba},0.08) 0%, transparent 65%)` }}
      />

      {/* Category row */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full shrink-0 ${a.dot}`} />
          <span className="text-xs font-mono text-muted uppercase tracking-widest">{study.category}</span>
        </div>
        {study.url ? (
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-white/25 flex items-center justify-center text-muted hover:text-foreground transition-all duration-300 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="w-8 h-8 rounded-full border border-white/6 flex items-center justify-center text-muted/30 shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className={`font-bold text-foreground leading-tight mb-6 ${featured ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
        {study.title}
      </h3>

      {/* Consulting sections */}
      {featured ? (
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-5 flex-1">
          <CaseStudySection label="Problem"      text={study.problem}      />
          <CaseStudySection label="Intervention" text={study.intervention} />
          <CaseStudySection label="Diagnosis"    text={study.diagnosis}    />
          <CaseStudySection label="Outcome"      text={study.outcome}      />
          <div className="lg:col-span-2">
            <CaseStudySection label="Lesson" text={study.lesson} isLesson />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 flex-1">
          <CaseStudySection label="Problem"      text={study.problem}      />
          <CaseStudySection label="Intervention" text={study.intervention} />
          <CaseStudySection label="Outcome"      text={study.outcome}      />
          <CaseStudySection label="Lesson"       text={study.lesson}       isLesson />
        </div>
      )}

      {/* Footer: metric + methods */}
      <div className="mt-6 pt-5 border-t border-white/6 flex flex-wrap items-center gap-2">
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
        {build.url ? (
          <a
            href={build.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
          <ArrowUpRight className="w-4 h-4 text-muted/30" />
        )}
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
        <SectionLabel index="06" path="~/projects" kicker="case studies" />

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

        {/* Featured case study — full width */}
        <div className="mb-4">
          <CaseStudyCard study={featured} featured />
        </div>

        {/* Two secondary case studies */}
        <div className="grid lg:grid-cols-2 gap-4">
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
