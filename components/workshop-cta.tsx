import Link from "next/link"
import { Reveal } from "./reveal"

export function WorkshopCTA() {
  return (
    <section id="workshop" className="pb-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="bg-accent border border-[rgba(0,229,160,0.3)] p-12 md:p-[72px_64px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center relative overflow-hidden">
            {/* Decorative glow */}
            <div 
              className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0,229,160,0.1) 0%, transparent 70%)'
              }}
            />
            
            <div className="relative z-10">
              <div className="inline-block bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5">
                Free · Online · Secure
              </div>
              <h2 className="font-sans font-black text-[clamp(32px,5vw,52px)] tracking-[-0.03em] leading-[1.05] mb-4">
              Book a free<br />
              <span className="text-primary italic font-serif font-normal">AI Automation</span> strategy session
            </h2>
            <p className="text-sm text-muted-foreground max-w-[480px] leading-[1.7]">
              Tell us about you or your business. We&apos;ll map out exactly where AI automation can increase your productivity or save your business time and money — no obligation, no coding experience required.
            </p>
            </div>

            <div className="flex flex-col gap-3 items-start relative z-10">
              <Link 
                href="/contact" 
                className="bg-primary text-primary-foreground px-7 py-3.5 font-sans font-bold text-sm whitespace-nowrap hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                Book a Call &rarr;
              </Link>
              <p className="text-[11px] text-muted-foreground tracking-[0.05em]">
                Free · 30 min
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
