'use client'

import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import ContributionGraph from './ContributionGraph'
import skills from '@/data/skills.json'
import type { Skills as SkillsData } from '@/types'

const data = skills as SkillsData

// Minimal JSON syntax colouring — no library needed
function JsonLine({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-1">
      <span className="text-accent">&quot;{label}&quot;</span>
      <span className="text-muted">: [</span>
      {values.map((v, i) => (
        <span key={v}>
          <span className="text-emerald">&quot;{v}&quot;</span>
          {i < values.length - 1 && <span className="text-muted">,</span>}
        </span>
      ))}
      <span className="text-muted">]{label === 'cloud' ? '' : ','}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-white/8">
      <div className="max-w-[1232px] mx-auto">
        <SectionLabel index="03" path="~/skills" kicker="Tools I reach for and trust in production" />

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* JSON code panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass rounded-2xl p-6 font-mono text-sm"
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-emerald/60" />
              </div>
              <span className="text-muted text-xs ml-1">skills.json</span>
            </div>

            <div className="space-y-1.5 leading-relaxed">
              <span className="text-muted">{'{'}</span>
              <div className="pl-4 space-y-1.5">
                <JsonLine label="languages"  values={data.languages}  />
                <JsonLine label="frameworks" values={data.frameworks} />
                <JsonLine label="ai"         values={data.ai}         />
                <JsonLine label="delivery"   values={data.delivery}   />
                <JsonLine label="leadership" values={data.leadership} />
                <JsonLine label="cloud"      values={data.cloud}      />
              </div>
              <span className="text-muted">{'}'}</span>
            </div>
          </motion.div>

          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass rounded-2xl p-6"
          >
            <ContributionGraph />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
