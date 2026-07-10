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
  metadataBase: new URL('https://matelabai.vercel.app'),
  title: 'AI Automation Consulting Sydney | Custom AI Solutions for Business — Matelab',
  description: 'We design and build custom AI agents, chatbots and automation flows for SMBs — then train your team to run them. Sydney-based, working worldwide.',
  keywords: ['AI automation consulting', 'AI automation agency Sydney', 'custom AI solutions', 'n8n consulting', 'AI agents for business', 'chatbots for business', 'corporate AI workshops', 'automation consulting Australia'],
  authors: [{ name: 'Matelab AI' }],
  openGraph: {
    title: 'AI Automation Consulting Sydney | Custom AI Solutions for Business — Matelab',
    description: 'We design and build custom AI agents, chatbots and automation flows for SMBs — then train your team to run them. Sydney-based, working worldwide.',
    url: 'https://matelabai.vercel.app',
    siteName: 'Matelab AI',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Consulting Sydney | Custom AI Solutions for Business — Matelab',
    description: 'We design and build custom AI agents, chatbots and automation flows for SMBs — then train your team to run them. Sydney-based, working worldwide.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable} bg-background`}>
      {/* Body font is now Syne (font-sans); DM Mono is used only for labels/eyebrows/tags */}
      <body className="font-sans antialiased text-[15px] leading-relaxed overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
