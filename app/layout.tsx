import type { Metadata } from 'next'
import { Syne, DM_Mono, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800']
})

const dmMono = DM_Mono({ 
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300', '400', '500']
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  style: ['normal', 'italic'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Matelab AI — Automate Everything',
  description: 'We teach people and businesses to build AI agents, automation flows and chatbots — no code, no tech skills required. Just results.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable} bg-background`}>
      <body className="font-mono antialiased text-[15px] leading-relaxed overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
