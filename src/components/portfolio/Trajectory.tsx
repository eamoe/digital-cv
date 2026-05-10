'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import trajectory from '@/data/trajectory.json'
import type { TrajectoryItem, TrackColor } from '@/types'

const TRACK_COLOR: Record<TrackColor, string> = {
  cyan:    'bg-primary   border-primary   text-primary',
  emerald: 'bg-emerald   border-emerald   text-emerald',
  violet:  'bg-accent    border-accent    text-accent',
}

const TRACK_BORDER: Record<TrackColor, string> = {
  cyan:    'border-primary/30',
  emerald: 'border-emerald/30',
  violet:  'border-accent/30',
}

export default function Trajectory() {
  const items = trajectory as TrajectoryItem[]

  return (
    <section id="trajectory" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="02" path="~/trajectory" kicker="Where I've been and what I've built" />

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/8 hidden md:block" />

          <div className="flex flex-col gap-12">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0
              const colors = TRACK_COLOR[item.track]
              const border = TRACK_BORDER[item.track]

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className={`relative grid md:grid-cols-2 gap-6 items-start ${
                    isLeft ? '' : 'md:[&>div:first-child]:md:order-2'
                  }`}
                >
                  {/* Card */}
                  <div className={`glass rounded-2xl p-6 border ${border} flex flex-col gap-4`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted mt-0.5">{item.company}</p>
                      </div>
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${colors} bg-transparent`}>
                        {item.period}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm text-muted flex gap-2">
                          <span className={colors.split(' ')[2]}>▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-muted border border-white/8"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer column (keeps alternating layout) */}
                  <div />

                  {/* Timeline dot — centred on the vertical line */}
                  <div className={`absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 hidden md:block ${colors.split(' ')[0]} ${colors.split(' ')[1]}`} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
