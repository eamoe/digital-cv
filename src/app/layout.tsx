import type { Metadata } from 'next'
import './globals.css'
import React from "react";

export const metadata: Metadata = {
  title: 'Digital CV',
  description: 'Personal digital CV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
