import Link from "next/link"
import { HeroVisual } from "./hero-visual"

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00E5A0" strokeWidth="2" strokeLinecap="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center py-[120px_0_80px] relative overflow-hidden">
      {/* Glowing orb */}
      <div
        className="absolute top-[20%] left-[55%] w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,160,0.12) 0%, transparent 70%)',
          transform: 'translate(-50%,-50%)'
        }}
      />

      <div className="container max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            {/* Tag */}
            <div className="animate-fade-up inline-flex items-center gap-2 bg-accent border border-[rgba(0,229,160,0.3)] text-primary text-[11px] tracking-[0.15em] uppercase px-3.5 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-blink" />
              AI Automation Studio · Sydney → Worldwide
            </div>

            {/* Title */}
            <h1 className="animate-fade-up animation-delay-100 font-sans text-[clamp(32px,4.5vw,60px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6">
              Save 10+ hours a week.<br/>
              Start <em className="font-serif italic text-primary font-normal">Automating with AI.</em>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up animation-delay-200 text-base text-muted-foreground leading-[1.7] max-w-[470px] mb-10">
              Custom AI agents, chatbots and automation flows —{" "}
              <strong className="text-foreground font-normal">designed, built and deployed for your business in days, not months.</strong>{" "}
              Then we train your team to run them. No developers needed on your side.
            </p>

            {/* Buttons */}
            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-3.5 mb-11">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-7 py-3.5 font-sans font-bold text-sm tracking-[0.02em] hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                Book a free strategy call &rarr;
              </Link>
              <Link
                href="#services"
                className="bg-transparent text-foreground px-7 py-3.5 font-sans font-semibold text-sm tracking-[0.02em] border border-border hover:border-[rgba(0,229,160,0.3)] hover:text-primary transition-colors"
              >
                See what we do
              </Link>
            </div>

            {/* Trust markers */}
            <div className="animate-fade-up animation-delay-400 flex flex-wrap gap-8">
              <div className="flex items-center gap-2 text-[12px] tracking-[0.06em] text-muted-foreground">
                <Check /> Fixed-scope builds
              </div>
              <div className="flex items-center gap-2 text-[12px] tracking-[0.06em] text-muted-foreground">
                <Check /> Yours to keep — no lock-in
              </div>
              <div className="flex items-center gap-2 text-[12px] tracking-[0.06em] text-muted-foreground">
                <Check /> Team trained on handover
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-up animation-delay-350">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
