'use client'

import { motion } from 'framer-motion'
import { Layers, Network, Rocket } from 'lucide-react'
import SectionLabel from './SectionLabel'

const PILLARS = [
  {
    icon:        Layers,
    title:       'Engineering Foundation',
    description: 'Deep technical roots across the full stack. I write production code, review architecture decisions, and keep quality high without becoming a bottleneck.',
    accent:      'text-primary',
    glow:        'ring-glow-cyan',
  },
  {
    icon:        Network,
    title:       'Systems Thinking',
    description: 'I see how components interact at scale — people, processes, and infrastructure. Bottlenecks and failure modes stand out before they become incidents.',
    accent:      'text-accent',
    glow:        'ring-glow-violet',
  },
  {
    icon:        Rocket,
    title:       'Delivery Leadership',
    description: 'Shipping is a habit, not an event. I build cultures where teams make confident decisions, move fast, and compound their impact over time.',
    accent:      'text-emerald',
    glow:        '',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="01" path="~/about" kicker="Who I am and how I work" />

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, description, accent, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className={`glass glass-hover rounded-2xl p-8 flex flex-col gap-5 ${glow}`}
            >
              <div className={`w-10 h-10 ${accent}`}>
                <Icon className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className={`text-lg font-bold ${accent}`}>{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
