export interface Metric {
  value: string
  label: string
}

export interface SocialLinks {
  github: string
  linkedin: string
}

export interface TerminalBlock {
  command: string
  lines: string[]
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
  metrics: Metric[]
  terminal: TerminalBlock
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

export interface Skills {
  languages: string[]
  frameworks: string[]
  ai: string[]
  delivery: string[]
  leadership: string[]
  cloud: string[]
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
