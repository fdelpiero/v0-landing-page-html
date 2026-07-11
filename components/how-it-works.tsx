import { Reveal } from "./reveal"

const steps = [
  {
    n: "01",
    title: "Strategy call",
    body: "Initial 45 minutes call at no cost. We map your workflows and spot the highest-value automation opportunities."
  },
  {
    n: "02",
    title: "Automation audit",
    body: "A prioritised roadmap: what to automate first, what it saves, and a fixed quote for each build."
  },
  {
    n: "03",
    title: "Build & deploy",
    body: "We build on proven tools — n8n, Make, Claude — and ship working automations in days, not months."
  },
  {
    n: "04",
    title: "Handover & training",
    body: "Documentation plus training so your team owns it. No lock-in — everything we build is yours."
  }
]

export function HowItWorks() {
  return (
    <section id="how" className="pb-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">How it works</div>
          <h2 className="font-sans text-[clamp(30px,5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            From first call to live automation <span className="text-primary">in four steps.</span>
          </h2>
          <p className="text-muted-foreground max-w-[760px] mb-14 text-[15px] font-medium leading-[1.7]">
            No six-month projects. No black boxes. You see exactly what&apos;s being built and why.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.n} className="relative">
                {/* Number circle + inline connector */}
                <div className="flex items-center gap-3 mb-[18px]">
                  <div className="flex-none w-9 h-9 rounded-full bg-background border border-primary flex items-center justify-center font-mono text-xs text-primary">
                    {step.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-[#DEDCD0]" />
                  )}
                </div>
                <div className="font-sans text-base font-bold mb-2">
                  {step.title}
                </div>
                <p className="text-[13.5px] text-muted-foreground leading-[1.7]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
