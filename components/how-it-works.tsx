import { Reveal } from "./reveal"

const steps = [
  {
    n: "01 /",
    title: "Strategy call",
    body: "Free 45 minutes. We map your workflows and spot the highest-value automation opportunities."
  },
  {
    n: "02 /",
    title: "Automation audit",
    body: "A prioritised roadmap: what to automate first, what it saves, and a fixed quote for each build."
  },
  {
    n: "03 /",
    title: "Build & deploy",
    body: "We build on proven tools — n8n, Make, Claude — and ship working automations in days, not months."
  },
  {
    n: "04 /",
    title: "Handover & training",
    body: "Documentation plus training so your team owns it. No lock-in — everything we build is yours."
  }
]

export function HowItWorks() {
  return (
    <section id="how" className="pb-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-4">How it works</div>
          <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            From first call to live automation <em className="font-serif italic text-primary font-normal">in four steps.</em>
          </h2>
          <p className="text-muted-foreground max-w-[520px] mb-16 text-[15px]">
            No six-month projects. No black boxes. You see exactly what&apos;s being built and why.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0.5">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-card p-8 border-t-2 border-transparent hover:border-primary hover:bg-secondary transition-all"
              >
                <div className="font-sans text-[13px] font-extrabold text-primary tracking-[0.1em] mb-3.5">
                  {step.n}
                </div>
                <div className="font-sans text-base font-bold mb-2">
                  {step.title}
                </div>
                <p className="text-xs text-muted-foreground leading-[1.7]">
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
