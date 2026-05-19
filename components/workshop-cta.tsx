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
                Free · Online · This Month
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,42px)] font-black tracking-[-0.02em] leading-[1.1] mb-4 text-foreground">
                Join our next free<br/>AI Automation Workshop
              </h2>
              <p className="text-sm text-muted-foreground max-w-[480px] leading-[1.7]">
                60 minutes. Live. We build a real automation from scratch —
                a chatbot, a calendar agent, or a lead capture flow.
                You watch, you follow along, you walk away with something working.
                <br/><br/>
                No code. No fluff. Just results.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-start relative z-10">
              <Link 
                href="/register" 
                className="bg-primary text-primary-foreground px-7 py-3.5 font-sans font-bold text-sm whitespace-nowrap hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                Reserve My Spot &rarr;
              </Link>
              <p className="text-[11px] text-muted-foreground tracking-[0.05em]">
                Free · No credit card · 60 min
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
