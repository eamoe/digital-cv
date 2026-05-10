'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import SectionLabel from './SectionLabel'
import profile from '@/data/profile.json'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const CTАС = [
  {
    label: 'Send an email',
    sub:   profile.email,
    href:  `mailto:${profile.email}`,
    icon:  Mail,
    accent: 'border-primary/30 hover:border-primary/60 hover:ring-glow-cyan',
  },
  {
    label: 'Connect on LinkedIn',
    sub:   'linkedin.com/in/eugenemenski',
    href:  profile.social.linkedin,
    icon:  LinkedinIcon,
    accent: 'border-accent/30 hover:border-accent/60 hover:ring-glow-violet',
  },
  {
    label: 'See my work on GitHub',
    sub:   'github.com/eamoe',
    href:  profile.social.github,
    icon:  GithubIcon,
    accent: 'border-white/10 hover:border-white/30',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="08" path="~/contact" kicker="Let's build something worth building" />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* CTA links */}
          <div className="flex flex-col gap-4">
            {CTАС.map(({ label, sub, href, icon: Icon, accent }, i) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                className={`glass rounded-2xl p-5 flex items-center gap-4 border group transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${accent}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-muted group-hover:text-foreground transition-colors duration-200" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                  <span className="text-xs font-mono text-muted truncate">{sub}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Availability panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="glass rounded-2xl p-6 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-emerald/60" />
              </div>
              <span className="text-muted text-xs ml-1">availability.json</span>
            </div>
            <div className="space-y-1.5 text-xs leading-relaxed">
              <p className="text-muted">{'{'}</p>
              <div className="pl-4 space-y-1.5">
                <p><span className="text-accent">&quot;status&quot;</span><span className="text-muted">: </span><span className="text-emerald">&quot;{profile.availability}&quot;</span><span className="text-muted">,</span></p>
                <p><span className="text-accent">&quot;location&quot;</span><span className="text-muted">: </span><span className="text-emerald">&quot;{profile.location}&quot;</span><span className="text-muted">,</span></p>
                <p><span className="text-accent">&quot;timezone&quot;</span><span className="text-muted">: </span><span className="text-emerald">&quot;flexible&quot;</span><span className="text-muted">,</span></p>
                <p><span className="text-accent">&quot;remote&quot;</span><span className="text-muted">: </span><span className="text-primary">true</span><span className="text-muted">,</span></p>
                <p><span className="text-accent">&quot;response_time&quot;</span><span className="text-muted">: </span><span className="text-emerald">&quot;within 24h&quot;</span></p>
              </div>
              <p className="text-muted">{'}'}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
