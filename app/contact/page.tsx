"use client"

import Link from "next/link"
import { MatelabLogoSmall } from "@/components/matelab-logo"

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconMap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
    <line x1="9" y1="3" x2="9" y2="18"/>
    <line x1="15" y1="6" x2="15" y2="21"/>
  </svg>
)

const IconNoCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const featureItems = [
  { icon: <IconPhone />, label: "45 min call" },
  { icon: <IconMap />, label: "Custom roadmap" },
  { icon: <IconNoCode />, label: "No coding experience" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Grid bg */}
      <div className="grid-bg fixed inset-0 pointer-events-none z-0" />

      {/* Simple nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-3.5 md:px-12 bg-[rgba(247,246,240,0.88)] backdrop-blur-[20px] border-b border-[#E9E7DD]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <MatelabLogoSmall size={28} />
          <div className="font-sans font-extrabold text-lg tracking-[-0.04em]">
            <span className="text-foreground">mate</span>
            <span className="text-primary">lab.ai</span>
          </div>
        </Link>
        <Link href="/" className="font-mono text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
          ← Back to home
        </Link>
      </nav>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-[900px] flex flex-col items-center">

          {/* Header section */}
          <div className="mb-9 text-center max-w-[640px] flex flex-col items-center gap-[18px]">
            <div className="inline-block bg-primary text-white font-mono text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-[5px] rounded">
              Free · Online · Secure
            </div>
            <h1 className="font-sans font-extrabold text-[clamp(30px,5vw,46px)] tracking-[-0.03em] leading-[1.08] [text-wrap:balance]">
              Book a free{" "}
              <em className="text-primary italic font-serif font-normal tracking-normal">AI automation</em>{" "}
              strategy session
            </h1>
            <p className="text-[14.5px] text-muted-foreground leading-[1.7] max-w-[460px] font-medium">
              Tell us about you or your business. We&apos;ll map out exactly where AI automation can increase your productivity or save your business time and money — no obligation, no coding experience required.
            </p>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-[520px]">
              {featureItems.map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-[10px] p-3.5 text-center">
                  <div className="text-primary flex justify-center mb-2">
                    {item.icon}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-[0.08em] uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendly Inline Embed */}
          <div className="w-full bg-card border border-border rounded-[14px] p-2 md:p-4 shadow-[0_2px_16px_rgba(20,32,26,0.06)] relative overflow-hidden min-h-[650px]">
            <iframe
              src="https://calendly.com/matelabai26/30min?embed_domain=matelab.ai&embed_type=Inline"
              width="100%"
              height="650px"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
              className="w-full rounded-lg"
            />
          </div>

        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-[#E9E7DD] py-5 px-6 text-center relative z-10">
        <p className="font-mono text-[11px] text-[#B4B1A4] tracking-[0.05em]">
          © 2026 Matelab AI · Sydney, AU ·{" "}
          <Link href="/" className="text-[#B4B1A4] hover:text-primary transition-colors">@matelab.ai</Link>
        </p>
      </div>

    </div>
  )
}
