import Link from "next/link"
import { HeroVisual } from "./hero-visual"
import { MatelabLogoSmall } from "./matelab-logo"

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
              Born in Sydney. Built for the world.
            </div>

            {/* Title */}
            <h1 className="animate-fade-up animation-delay-100 font-sans text-[clamp(42px,5.5vw,72px)] font-black leading-none tracking-[-0.03em] mb-6">
              Stop working.<br/>
              Start <em className="font-serif italic text-primary font-normal">automating.</em>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up animation-delay-200 text-base text-muted-foreground leading-[1.7] max-w-[460px] mb-10">
              We teach <strong className="text-foreground font-normal">people and businesses</strong> to build AI agents, automation flows and chatbots —
              <strong className="text-foreground font-normal"> no code, no tech skills required.</strong> Just results.
            </p>

            {/* Buttons */}
            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-3.5">
              <Link 
                href="#workshop" 
                className="bg-primary text-primary-foreground px-7 py-3.5 font-sans font-bold text-sm tracking-[0.02em] hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
                Join Free Workshop &rarr;
              </Link>
              <Link 
                href="#services" 
                className="bg-transparent text-foreground px-7 py-3.5 font-sans font-semibold text-sm tracking-[0.02em] border border-border hover:border-[rgba(0,229,160,0.3)] hover:text-primary transition-colors"
              >
                See What We Do
              </Link>
            </div>

            {/* Meta stats */}
            <div className="animate-fade-up animation-delay-400 flex gap-8 mt-10">
              <div>
                <div className="font-sans text-[26px] font-extrabold text-primary tracking-[-0.02em]">100%</div>
                <div className="text-[11px] text-muted-foreground tracking-[0.08em]">No code</div>
              </div>
              <div>
                <div className="h-[26px] flex items-center">
                  <MatelabLogoSmall size={26} />
                </div>
                <div className="text-[11px] text-muted-foreground tracking-[0.08em]">Remote-first</div>
              </div>
              <div>
                <div className="font-sans text-[26px] font-extrabold text-primary tracking-[-0.02em]">n8n</div>
                <div className="text-[11px] text-muted-foreground tracking-[0.08em]">+ 10 tools</div>
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
