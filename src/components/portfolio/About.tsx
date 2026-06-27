'use client'

import { motion } from 'framer-motion'
import { Network, MessagesSquare, Layers, type LucideIcon } from 'lucide-react'
import SectionLabel from './SectionLabel'
import aboutData from '@/data/about.json'
import type { About as AboutData } from '@/types'

const about = aboutData as AboutData

const ICON_MAP: Record<string, LucideIcon> = { Network, MessagesSquare, Layers }

const DOT: Record<string, string> = {
  primary: 'bg-primary',
  accent:  'bg-accent',
  emerald: 'bg-emerald',
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="01" path="~/about" />

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">

          {/* Left: headline + bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              {about.headline_lead}{' '}
              <span className="text-gradient-cyan-violet">{about.headline_rest}</span>
            </h2>

            <div className="space-y-5 text-muted text-base leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Right: pillar cards */}
          <div className="flex flex-col gap-4">
            {about.pillars.map(({ icon, dot, title, description }, i) => {
              const Icon = ICON_MAP[icon] ?? Network
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="glass rounded-2xl p-5 flex gap-4 items-start border border-white/8"
                >
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-muted" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${DOT[dot]}`} />
                      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{description}</p>
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
