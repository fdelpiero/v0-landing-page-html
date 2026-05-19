import { Reveal } from "./reveal"

const steps = [
  {
    num: "01",
    title: "Join the Community",
    body: "Start free. Access our Sydney-based AI automation community, weekly live sessions, and beginner-friendly resources. No experience needed."
  },
  {
    num: "02",
    title: "Learn by Building",
    body: "Follow our workshops and courses to build real automations — chatbots, calendar agents, lead flows — using tools like n8n and ChatGPT."
  },
  {
    num: "03",
    title: "Scale Your Business",
    body: "Apply what you've built, or bring us in to consult and implement. Our team handles the complexity so you can focus on growth."
  }
]

export function HowItWorks() {
  return (
    <section id="how" className="py-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-4">How it works</div>
          <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            From zero to <em className="font-serif italic text-primary font-normal">automated</em><br/>in three steps
          </h2>
          <p className="text-muted-foreground max-w-[500px] mb-16 text-[15px]">
            No jargon. No dev team. No excuses. Just you, the tools, and a workflow that runs itself.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {steps.map((step) => (
              <div 
                key={step.num} 
                className="step-card bg-card hover:bg-secondary p-9 relative overflow-hidden transition-colors"
              >
                <div className="font-sans text-[56px] font-black text-border leading-none mb-5 tracking-[-0.04em]">
                  {step.num}
                </div>
                <div className="font-sans text-lg font-bold mb-2.5">
                  {step.title}
                </div>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">
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
