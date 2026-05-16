'use client'

import { motion } from 'framer-motion'
import { Code2, Network, Target } from 'lucide-react'
import SectionLabel from './SectionLabel'

const PILLARS = [
  {
    icon:        Code2,
    dot:         'bg-primary',
    title:       'Engineering DNA',
    description: 'I came up shipping code. I read PRs, write specs in markdown, and prefer evidence over opinion.',
  },
  {
    icon:        Network,
    dot:         'bg-accent',
    title:       'Systems thinking',
    description: 'Teams, products, and AI pipelines are systems. I optimize the loops, not just the steps.',
  },
  {
    icon:        Target,
    dot:         'bg-emerald',
    title:       'Executive trajectory',
    description: "Operating companies are built, not stumbled into. I'm engineering the path to leadership with intent.",
  },
]

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
              I lead delivery the way I used to{' '}
              <span className="text-gradient-cyan-violet">write systems</span>
              {' '}— for clarity, leverage, and the long run.
            </h2>

            <div className="space-y-5 text-muted text-base leading-relaxed">
              <p>
                Ten years ago I traded the IDE for a backlog. I spent years as a software engineer first — starting with academic research — and that engineering DNA never left. It shows up in how I instrument teams, design rituals, and reason about delivery as a system.
              </p>
              <p>
                Today I lead product delivery end-to-end: from problem framing and design, to staffing, sequencing, and getting things into production without losing the team to chaos. I still keep my hands in the work — reviews, prototypes, and the occasional weekend experiment.
              </p>
              <p>
                The next chapter is an operating one. I&apos;m deliberately routing toward founding and running a company — an AI-native operating company built by engineers who&apos;ve done the leadership work first.
              </p>
            </div>
          </motion.div>

          {/* Right: pillar cards */}
          <div className="flex flex-col gap-4">
            {PILLARS.map(({ icon: Icon, dot, title, description }, i) => (
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
                    <span className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
                    <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
