import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'
import MotionProvider from '@/components/MotionProvider'
import JsonLd from '@/components/portfolio/JsonLd'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const SITE_URL = 'https://eamoe.github.io/digital-cv'

const TITLE       = 'Eugene Menski — Enterprise Delivery Leader'
const DESCRIPTION = 'Enterprise Delivery Leader combining systems thinking, flow analytics, organizational design, and AI transformation. 15 years across organizations from 30 to 50,000+ people.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Enterprise Delivery Leader',
    'Agile Transformation',
    'Flow Analytics',
    'Kanban',
    'SAFe',
    'Scrum',
    'AI Transformation',
    'Operating Model Design',
    'Delivery Transformation',
    'Monte Carlo Forecasting',
    'Theory of Constraints',
    'Eugene Menski',
  ],
  authors: [{ name: 'Eugene Menski', url: SITE_URL }],
  creator: 'Eugene Menski',
  alternates: {
    canonical: SITE_URL + '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL + '/',
    siteName: 'Eugene Menski',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <JsonLd />
        {/* Skip to main content — visible only on focus for keyboard/screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-background focus:text-primary focus:border focus:border-primary/50 focus:rounded-lg focus:font-mono focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}
