import Link from "next/link"
import { LiveAutomationCard } from "./live-automation-card"

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E8A55" strokeWidth="2" strokeLinecap="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[130px] pb-[88px]">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-[26px]">

        {/* Badge pill */}
        <div className="animate-fade-up inline-flex self-start items-center gap-1.5 sm:gap-2 bg-card border border-[#DEDCD0] rounded-full px-2.5 sm:px-3.5 py-[6px] sm:py-[7px] max-w-full">
          <span className="w-1.5 h-1.5 shrink-0 bg-primary rounded-full animate-blink" />
          <span className="font-mono text-[8.5px] sm:text-[11px] tracking-[0.06em] sm:tracking-[0.15em] uppercase text-muted-foreground whitespace-nowrap">
            AI Automation lab · Sydney → Worldwide
          </span>
        </div>

        {/* Full-width headline */}
        <h1 className="animate-fade-up animation-delay-100 font-sans text-[clamp(34px,6vw,54px)] font-extrabold leading-[1.05] tracking-[-0.02em] [text-wrap:balance]">
          Save 10+ hours a week.<br/>
          Start <em className="font-serif italic text-primary font-normal tracking-normal">automating with AI.</em>
        </h1>

        {/* Two-column row: copy + live card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-3">
          <div className="flex flex-col gap-[26px]">
            <p className="animate-fade-up animation-delay-200 text-base leading-[1.7] text-[#55584E] font-medium max-w-[480px]">
              Custom AI agents, chatbots and automation flows —{" "}
              <strong className="text-foreground font-bold">designed, built and deployed for your business in days, not months.</strong>{" "}
              Then we train your team to run them. No developers needed on your side.
            </p>

            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-3.5">
              <Link
                href="/contact"
                className="bg-primary text-white px-7 py-[15px] rounded-lg font-sans font-bold text-[15px] hover:bg-foreground transition-colors"
              >
                Book a free strategy call &rarr;
              </Link>
              <Link
                href="#services"
                className="bg-card text-foreground px-7 py-[15px] rounded-lg font-sans font-semibold text-[15px] border border-[#D4D2C6] hover:border-primary hover:text-primary transition-colors"
              >
                See what we do
              </Link>
            </div>

            <div className="animate-fade-up animation-delay-400 flex flex-wrap gap-[26px]">
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.05em] text-muted-foreground">
                <Check /> Fixed-scope builds
              </div>
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.05em] text-muted-foreground">
                <Check /> Yours to keep — no lock-in
              </div>
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.05em] text-muted-foreground">
                <Check /> Team trained on handover
              </div>
            </div>
          </div>

          {/* Animated Live Automation card */}
          <div className="animate-fade-up animation-delay-350 flex items-center justify-center lg:justify-end">
            <LiveAutomationCard />
          </div>
        </div>
      </div>
    </section>
  )
}
