export interface Metric {
  value: string
  label: string
}

export interface SocialLinks {
  github: string
  linkedin: string
}

export interface TerminalBlock {
  whoami: string
  command: string
  lines: string[]
}

export interface HeroCta {
  label: string
  href: string
}

export interface HeroBlock {
  badge: string
  headline_lead: string
  headline_rest: string
  bio: string
  cta_primary: HeroCta
  cta_secondary: HeroCta
}

export interface Profile {
  name: string
  initials: string
  role: string
  tagline: string
  email: string
  location: string
  social: SocialLinks
  availability: string
  mode: string
  response_time: string
  open_to: string[]
  contact_blurb: string
  hero: HeroBlock
  metrics: Metric[]
  terminal: TerminalBlock
}

export type DotColor = 'primary' | 'accent' | 'emerald'

export interface AboutPillar {
  icon: string
  dot: DotColor
  title: string
  description: string
}

export interface About {
  headline_lead: string
  headline_rest: string
  paragraphs: string[]
  pillars: AboutPillar[]
}

export type ProcessAccent = 'cyan' | 'violet' | 'emerald' | 'muted'

export interface ProcessItem {
  label: string
  meta: string
}

export interface ProcessPhase {
  id: string
  accent: ProcessAccent
  items: ProcessItem[]
}

export interface Process {
  headline_lead: string
  headline_rest: string
  note: string
  phases: ProcessPhase[]
  closing_quote: string
}

export type TrackColor = 'cyan' | 'emerald' | 'violet'

export interface TrajectoryItem {
  id: string
  title: string
  company: string
  period: string
  track: TrackColor
  trackLabel: string
  bullets: string[]
  current?: boolean
}

export interface SkillCapability {
  icon: string
  label: string
}

export interface Certification {
  name: string
  url: string
}

export interface Skills {
  headline_lead: string
  headline_rest: string
  note: string
  categories: Record<string, string[]>
  capabilities: SkillCapability[]
  certifications: Certification[]
}

export type AccentColor = 'cyan' | 'emerald' | 'violet'

export interface Project {
  id: string
  title: string
  category: string
  description: string
  pipeline?: string[]
  stack: string[]
  metrics: string
  accent: AccentColor
  featured: boolean
  url: string
}

export interface VisionItem {
  horizon: string
  timeRange: string
  icon: string
  title: string
  description: string
  accent: AccentColor
}

export interface Note {
  id: string
  title: string
  date: string
  readTime: number
  tag: string
  excerpt: string
}
