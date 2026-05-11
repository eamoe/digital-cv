'use client'

import { motion } from 'framer-motion'
import { FileCode2, ArrowUpRight } from 'lucide-react'
import SectionLabel from './SectionLabel'
import notes from '@/data/notes.json'
import type { Note } from '@/types'

const TAG_COLOR: Record<string, string> = {
  Engineering: 'border-primary/50 text-primary',
  Leadership:  'border-accent/50 text-accent',
  Strategy:    'border-emerald/50 text-emerald',
}

export default function Notes() {
  const items = notes as Note[]

  return (
    <section id="notes" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="07" path="~/notes" kicker="thinking out loud" />

        {/* Headline row */}
        <div className="flex items-end justify-between gap-8 mb-12">
          <h2 className="text-5xl font-bold text-foreground leading-tight">
            Field notes from the seat.
          </h2>
          <p className="text-muted text-sm text-right shrink-0 whitespace-nowrap">
            Markdown-first. No takes, just the patterns I&apos;m actually shipping with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ id, title, readTime, tag, excerpt }, i) => {
            const tagColor = TAG_COLOR[tag] ?? 'border-white/30 text-muted'
            const filename = `note-${String(i + 1).padStart(2, '0')}.md`

            return (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="glass rounded-2xl p-6 flex flex-col gap-5 group cursor-pointer border border-white/8 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted">
                    <FileCode2 className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-mono">{filename}</span>
                  </div>
                  <span className="text-xs font-mono text-muted">{readTime}m</span>
                </div>

                {/* Title + excerpt */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{excerpt}</p>
                </div>

                {/* Divider + footer */}
                <div className="pt-3 border-t border-white/8 flex items-center justify-between">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${tagColor}`}>
                    #{tag.toLowerCase()}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-muted group-hover:text-foreground transition-colors duration-200">
                    read <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
