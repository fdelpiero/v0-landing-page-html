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
  title: 'AI Automation Training Sydney | No-Code n8n Workshops — Matelab',
  description: 'Learn to automate your business with AI agents, n8n flows and chatbots. Sydney-based workshops and courses for SMBs and corporate teams. No code required.',
  keywords: ['AI automation', 'n8n training', 'AI workshops Sydney', 'no-code automation', 'AI agents', 'chatbots for business', 'automation training Australia'],
  authors: [{ name: 'Matelab AI' }],
  openGraph: {
    title: 'AI Automation Training Sydney | No-Code n8n Workshops — Matelab',
    description: 'Learn to automate your business with AI agents, n8n flows and chatbots. Sydney-based workshops and courses for SMBs and corporate teams. No code required.',
    url: 'https://matelabai.vercel.app',
    siteName: 'Matelab AI',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Training Sydney | No-Code n8n Workshops — Matelab',
    description: 'Learn to automate your business with AI agents, n8n flows and chatbots. Sydney-based workshops and courses for SMBs and corporate teams. No code required.',
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
      <body className="font-mono antialiased text-[15px] leading-relaxed overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
