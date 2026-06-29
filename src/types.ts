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
  headline_gradient: string
  subheadline: string
  bio: string
  cta_primary: HeroCta
  cta_secondary: HeroCta
}

export interface ContactBlock {
  headline: string
  body: string
  booking_url: string
  who: string[]
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
  contact: ContactBlock
  hero: HeroBlock
  metrics: Metric[]
  terminal: TerminalBlock
}

export type DotColor = 'primary' | 'accent' | 'emerald'

export interface Principle {
  id: string
  lead: string
  rest: string
  accent: AccentColor
}

export interface Principles {
  headline_lead: string
  headline_rest: string
  principles: Principle[]
}

export type ExecAccent = 'cyan' | 'violet' | 'emerald' | 'muted'

export interface ExecCard {
  id: string
  label: string
  type: 'stat' | 'list'
  value?: string
  unit?: string
  items?: string[]
  accent: ExecAccent
}

export interface ExecutiveSummary {
  cards: ExecCard[]
}

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

export interface TrajectoryLegendItem {
  label: string
  track: TrackColor
}

export interface Trajectory {
  headline_lead: string
  headline_rest: string
  note: string
  legend: TrajectoryLegendItem[]
  items: TrajectoryItem[]
}

export interface Certification {
  name: string
  url: string
}

export interface SkillDomain {
  id: string
  label: string
  icon: string
  accent: 'cyan' | 'violet' | 'emerald'
  capabilities: string[]
  keywords: string[]
}

export interface Skills {
  headline_lead: string
  headline_rest: string
  note: string
  domains: SkillDomain[]
  certifications: Certification[]
}

export type AccentColor = 'cyan' | 'emerald' | 'violet'

export interface CaseStudy {
  id: string
  category: string
  title: string
  problem: string
  diagnosis: string
  intervention: string
  outcome: string
  lesson: string
  metrics: string
  methods: string[]
  accent: AccentColor
  featured: boolean
  url: string
}

export interface PersonalBuild {
  id: string
  title: string
  description: string
  stack: string[]
  accent: AccentColor
  url: string
}

export interface Projects {
  headline_lead: string
  headline_rest: string
  case_studies: CaseStudy[]
  personal: PersonalBuild[]
}

export interface VisionItem {
  horizon: string
  timeRange: string
  icon: string
  title: string
  description: string
  accent: AccentColor
}

export interface Vision {
  headline_lead: string
  headline_rest: string
  intro: string
  thesis_lead: string
  thesis_rest: string
  horizons: VisionItem[]
}

export interface Note {
  id: string
  title: string
  date: string
  readTime: number
  tag: string
  excerpt: string
  url: string
}

export interface Notes {
  headline: string
  note: string
  blog_url: string
  posts: Note[]
}
