import { Clock, Sparkles, Zap } from "lucide-react"
import { Reveal } from "./reveal"

const pains = [
  {
    icon: Clock,
    title: "Hours lost to tasks that should take minutes",
    body: "Manual reports, copy-pasting between spreadsheets, chasing bookings, answering the same customer questions daily. That's payroll spent on work software should do."
  },
  {
    icon: Sparkles,
    title: "You know AI could help — but no one has time to figure it out",
    body: "Everyone's talking about AI agents. You've tried ChatGPT. But turning that into systems that actually run parts of your business? That's where we come in."
  },
  {
    icon: Zap,
    title: "Hiring developers is slow and expensive",
    body: "You don't need a six-month software project. Most business automations can be scoped, built and live within weeks — on tools your team can maintain themselves."
  }
]

export function IsThisForYou() {
  return (
    <section id="is-this-for-you" className="py-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-4">Sound familiar?</div>
          <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Your team is doing work <em className="font-serif italic text-primary font-normal">a robot should do.</em>
          </h2>
          <p className="text-muted-foreground max-w-[520px] mb-16 text-[15px]">
            If any of these hit close to home, a strategy call will pay for itself. (It&apos;s free anyway.)
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {pains.map((pain, i) => {
              const Icon = pain.icon
              return (
                <div
                  key={i}
                  className="step-card bg-card hover:bg-secondary p-9 relative overflow-hidden transition-colors"
                >
                  <div className="mb-5">
                    <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="font-sans text-lg font-bold mb-2.5">
                    {pain.title}
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-[1.7]">
                    {pain.body}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
