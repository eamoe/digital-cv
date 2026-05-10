'use client'

import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'
import SectionLabel from './SectionLabel'
import notes from '@/data/notes.json'
import type { Note } from '@/types'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'short',
    day:   'numeric',
    timeZone: 'UTC',
  })
}

export default function Notes() {
  const items = notes as Note[]

  return (
    <section id="notes" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="07" path="~/notes" kicker="Things I've written down and made public" />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ id, title, date, readTime, tag, excerpt }, i) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer"
            >
              {/* Header row */}
              <div className="flex items-center justify-between">
                <FileText className="w-4 h-4 text-muted" strokeWidth={1.5} />
                <span className="text-xs font-mono text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-muted leading-relaxed flex-1">{excerpt}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-white/8">
                <div className="flex items-center gap-3 text-xs font-mono text-muted">
                  <span>{formatDate(date)}</span>
                  <span>{readTime} min read</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
