'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import SectionLabel from './SectionLabel'
import trajectoryData from '@/data/trajectory.json'
import type { Trajectory as TrajectoryData, TrajectoryItem, TrackColor } from '@/types'

const data = trajectoryData as TrajectoryData
const items = data.items

const TRACK = {
  cyan: {
    dot:    'bg-primary',
    border: 'border-primary/40',
    text:   'text-primary',
    check:  'text-primary',
    glow:   '',
  },
  emerald: {
    dot:    'bg-emerald',
    border: 'border-emerald/40',
    text:   'text-emerald',
    check:  'text-emerald',
    glow:   '',
  },
  violet: {
    dot:    'bg-accent',
    border: 'border-accent/40',
    text:   'text-accent',
    check:  'text-accent',
    glow:   'shadow-[0_0_28px_#8b5cf633]',
  },
} satisfies Record<TrackColor, { dot: string; border: string; text: string; check: string; glow: string }>

function TrackBadge({ track, label }: { track: TrackColor; label: string }) {
  const t = TRACK[track]
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${t.border} ${t.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
      {label}
    </span>
  )
}

function Node({ track }: { track: TrackColor }) {
  const t = TRACK[track]
  return (
    <div className={`w-9 h-9 rounded-full flex items-center justify-center bg-card border-2 ${t.border} z-10 relative`}>
      <Zap className={`w-3.5 h-3.5 ${t.text}`} strokeWidth={2.5} />
    </div>
  )
}

function TitleBlock({ item, side }: { item: TrajectoryItem; side: 'left' | 'right' }) {
  const align = side === 'left' ? 'text-right items-end' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      <p className="text-xs font-mono text-muted tracking-widest">{item.period}</p>
      <h3 className="text-5xl font-bold text-foreground leading-tight">{item.title}</h3>
      <p className="text-muted text-sm">{item.company}</p>
      <TrackBadge track={item.track} label={item.trackLabel} />
    </div>
  )
}

function AchievementCard({ item }: { item: TrajectoryItem }) {
  const t = TRACK[item.track]
  return (
    <div className={`glass rounded-2xl p-6 border ${item.current ? t.border : 'border-white/8'} ${item.current ? t.glow : ''} flex flex-col gap-4`}>
      {item.current && (
        <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border self-start ${t.border} ${t.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
          now
        </span>
      )}
      <ul className="space-y-3">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 items-start text-sm text-foreground/80">
            <span className={`${t.check} mt-0.5 shrink-0`}>✓</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Trajectory() {
  return (
    <section id="trajectory" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="06" path="~/trajectory" kicker="career as a graph" />

        {/* Headline row */}
        <div className="flex items-end justify-between gap-8 mb-20">
          <div>
            <h2 className="text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {data.headline_lead}
              <span className="block text-gradient-cyan-violet">{data.headline_rest}</span>
            </h2>
            <p className="text-muted mt-5 text-sm max-w-lg">
              {data.note}
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-5 text-xs font-mono tracking-widest shrink-0 mb-1">
            {data.legend.map(({ label, track }) => (
              <span key={label} className={`flex items-center gap-1.5 ${TRACK[track].text}`}>
                <span className={`w-2 h-2 rounded-full ${TRACK[track].dot}`} />
                {label.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/8 hidden md:block" />

          <div className="flex flex-col gap-16">
            {items.map((item, i) => {
              const titleOnLeft = i % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 * i }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0"
                >
                  {/* Left column */}
                  <div className="md:pr-12">
                    {titleOnLeft
                      ? <TitleBlock item={item} side="left" />
                      : <AchievementCard item={item} />
                    }
                  </div>

                  {/* Right column */}
                  <div className="md:pl-12">
                    {titleOnLeft
                      ? <AchievementCard item={item} />
                      : <TitleBlock item={item} side="right" />
                    }
                  </div>

                  {/* Node centred on the vertical line */}
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:flex">
                    <Node track={item.track} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
