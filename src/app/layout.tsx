import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Eugene Menski — Digital CV',
  description: 'Delivery Leader. Building systems that scale, teams that ship, products that matter.',
  openGraph: {
    title:       'Eugene Menski — Digital CV',
    description: 'Delivery Leader. Building systems that scale, teams that ship, products that matter.',
    url:         'https://eamoe.github.io/digital-cv/',
    siteName:    'Eugene Menski',
    locale:      'en_US',
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Eugene Menski — Digital CV',
    description: 'Delivery Leader. Building systems that scale, teams that ship, products that matter.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
