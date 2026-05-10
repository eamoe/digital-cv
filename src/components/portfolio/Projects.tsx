'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionLabel from './SectionLabel'
import projects from '@/data/projects.json'
import type { Project, AccentColor } from '@/types'

const ACCENT_TEXT: Record<AccentColor, string> = {
  cyan:    'text-primary',
  violet:  'text-accent',
  emerald: 'text-emerald',
}

const ACCENT_BORDER: Record<AccentColor, string> = {
  cyan:    'border-primary/30',
  violet:  'border-accent/30',
  emerald: 'border-emerald/30',
}

const ACCENT_BG: Record<AccentColor, string> = {
  cyan:    'bg-primary/10',
  violet:  'bg-accent/10',
  emerald: 'bg-emerald/10',
}

// SVG pipeline diagram shown inside the featured card
function PipelineDiagram() {
  const nodes = ['Source', 'Process', 'Store', 'Serve']
  return (
    <div className="flex items-center gap-1 flex-wrap mt-4">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-1">
          <div className="glass rounded px-2 py-1 text-xs font-mono text-primary border border-primary/20">
            {node}
          </div>
          {i < nodes.length - 1 && (
            <span className="text-muted/40 text-xs">→</span>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const accentText   = ACCENT_TEXT[project.accent]
  const accentBorder = ACCENT_BORDER[project.accent]
  const accentBg     = ACCENT_BG[project.accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.01 }}
      className={`glass glass-hover rounded-2xl p-6 flex flex-col gap-4 border ${accentBorder} h-full`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className={`font-bold text-base ${accentText}`}>{project.title}</h3>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors shrink-0"
            aria-label={`Open ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <p className="text-sm text-muted leading-relaxed">{project.description}</p>

      {/* Pipeline diagram on featured card */}
      {featured && <PipelineDiagram />}

      <div className="mt-auto flex flex-col gap-3">
        {/* Metrics badge */}
        <div className={`inline-flex items-center self-start px-2.5 py-1 rounded-full text-xs font-mono ${accentBg} ${accentText} border ${accentBorder}`}>
          {project.metrics}
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-muted border border-white/8"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const data     = projects as Project[]
  const featured = data.find((p) => p.featured) ?? data[0]
  const rest     = data.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="05" path="~/projects" kicker="Selected work — outcomes over outputs" />

        {/* Bento grid: featured card spans 2 rows on desktop */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:auto-rows-fr">
          <div className="lg:col-span-2 lg:row-span-2">
            <ProjectCard project={featured} featured />
          </div>
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
