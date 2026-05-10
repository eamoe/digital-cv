'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
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

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 border-t border-white/8">
      {/* Grid background — masked so it fades away from the terminal */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '64px 64px', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent), radial-gradient(ellipse 60% 100% at 75% 50%, black 20%, transparent 100%)', WebkitMaskComposite: 'destination-in', maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent), radial-gradient(ellipse 60% 100% at 75% 50%, black 20%, transparent 100%)', maskComposite: 'intersect' }} />
      <div className="max-w-[1232px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-16 items-start">

          {/* Left: section label + headline + blurb + CTA buttons */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <SectionLabel index="08" path="~/contact" kicker="" />
            <div className="space-y-1">
              <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-foreground">
                Let&apos;s build something
              </h2>
              <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
                <span className="text-gradient-cyan-violet">worth running</span>
                <span className="text-accent">.</span>
              </h2>
            </div>

            <p className="text-muted text-base leading-relaxed">
              {profile.contact_blurb}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-sm text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-200 font-mono"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {profile.email}
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
              </a>

              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-foreground hover:border-accent/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-200 font-mono"
              >
                <LinkedinIcon className="w-4 h-4 shrink-0" />
                LinkedIn
              </a>

              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-foreground hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-200 font-mono"
              >
                <GithubIcon className="w-4 h-4 shrink-0" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: terminal panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(#0d1117, #0d1117) padding-box, linear-gradient(135deg, rgba(34,211,238,0.65) 0%, rgba(34,211,238,0.25) 40%, rgba(34,211,238,0.08) 100%) border-box',
              border: '1px solid transparent',
              boxShadow: '0 0 140px rgba(34, 211, 238, 0.18), 0 0 50px rgba(34, 211, 238, 0.1)',
            }}
            className="rounded-2xl p-6 font-mono text-sm backdrop-blur-[14px]"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-emerald/60" />
              </div>
              <span className="text-muted text-xs ml-1">intake.sh</span>
            </div>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <span className="text-primary">$</span>{' '}
                <span className="text-foreground">cat availability.json</span>
              </p>

              {/* JSON inset panel */}
              <div className="bg-black/30 rounded-xl p-4 space-y-1">
                <p className="text-muted">{'{'}</p>
                <div className="pl-4 space-y-1">
                  <p>
                    <span className="text-foreground">&quot;status&quot;</span>
                    <span className="text-muted">: </span>
                    <span className="text-primary">&quot;{profile.availability}&quot;</span>
                    <span className="text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-foreground">&quot;mode&quot;</span>
                    <span className="text-muted">: </span>
                    <span className="text-primary">&quot;{profile.mode}&quot;</span>
                    <span className="text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-foreground">&quot;based_in&quot;</span>
                    <span className="text-muted">: </span>
                    <span className="text-primary">&quot;{profile.location}&quot;</span>
                    <span className="text-muted">,</span>
                  </p>
                  <p>
                    <span className="text-foreground">&quot;open_to&quot;</span>
                    <span className="text-muted">{': ['}</span>
                  </p>
                  <div className="pl-4 space-y-1">
                    {profile.open_to.map((item, i) => (
                      <p key={item}>
                        <span className="text-accent">&quot;{item}&quot;</span>
                        {i < profile.open_to.length - 1 && <span className="text-muted">,</span>}
                      </p>
                    ))}
                  </div>
                  <p><span className="text-muted">],</span></p>
                  <p>
                    <span className="text-foreground">&quot;response_time&quot;</span>
                    <span className="text-muted">: </span>
                    <span className="text-primary">&quot;{profile.response_time}&quot;</span>
                  </p>
                </div>
                <p className="text-muted">{'}'}</p>
              </div>

              <p>
                <span className="text-primary">$</span>{' '}
                <span className="cursor-blink">_</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
