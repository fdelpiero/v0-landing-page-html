"use client"

import Link from "next/link"
import { MatelabLogoSmall } from "@/components/matelab-logo"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* Grid bg */}
      <div className="grid-bg fixed inset-0 pointer-events-none z-0" />

      {/* Simple nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12 bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <MatelabLogoSmall size={28} />
          <div className="font-sans font-extrabold text-lg tracking-[-0.04em]">
            <span className="text-foreground">mate</span>
            <span className="text-primary">lab</span>
            <span className="text-primary text-lg opacity-100 tracking-[-0.04em]">.ai</span>
          </div>
        </Link>
        <Link href="/" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
          ← Back to home
        </Link>
      </nav>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-20 relative z-10">
        <div className="w-full max-w-4xl flex flex-col items-center">
          
          {/* Header section */}
          <div className="mb-8 text-center max-w-2xl">
            <div className="inline-block bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5">
              Free · Online · Secure
            </div>
            <h1 className="font-sans font-black text-[clamp(32px,5vw,52px)] tracking-[-0.03em] leading-[1.05] mb-4">
              Book a free<br />
              <span className="text-primary italic font-serif font-normal">AI Automation</span> strategy session
            </h1>
            <p className="text-sm text-muted-foreground leading-[1.7] max-w-md mx-auto">
              Tell us about you or your business. We&apos;ll map out exactly where AI automation can increase your productivity or save your business time and money — no obligation, no coding experience required
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { icon: "📞", label: "30 min call" },
                    { icon: "🗺️", label: "Custom roadmap" },
                    { icon: "👩🏻‍💻", label: "No coding experience" },
                  ].map((item) => (
                    <div key={item.label} className="bg-card border border-border p-3 text-center">
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="text-[10px] text-muted-foreground tracking-[0.08em] uppercase">{item.label}</div>
                    </div>
                  ))}
                </div>
          </div>

          {/* Calendly Inline Embed */}
          <div className="w-full bg-card border border-border p-2 md:p-4 rounded-lg shadow-2xl relative overflow-hidden min-h-[650px]">
            <iframe
              src="https://calendly.com/matelabai26/30min?embed_domain=matelab.ai&embed_type=Inline"
              width="100%"
              height="650px"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
              className="w-full"
            />
          </div>

        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-border py-5 px-6 text-center relative z-10">
        <p className="text-[11px] text-[#404055] tracking-[0.05em]">
          © 2026 Matelab AI · Sydney, AU ·{" "}
          <Link href="/" className="hover:text-primary transition-colors">@matelab.ai</Link>
        </p>
      </div>

    </div>
  )
}
