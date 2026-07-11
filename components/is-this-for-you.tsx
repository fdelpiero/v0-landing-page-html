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
    <section id="is-this-for-you" className="py-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">Sound familiar?</div>
          <h2 className="font-sans text-[clamp(30px,5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Your team is doing work <span className="text-primary">a robot should do.</span>
          </h2>
          <p className="text-muted-foreground max-w-[760px] mb-14 text-[15px] font-medium leading-[1.7]">
            If any of these hit close to home, a strategy call will pay for itself.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pains.map((pain, i) => {
              const Icon = pain.icon
              return (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-[34px] hover:border-[rgba(30,138,85,0.4)] transition-colors"
                >
                  <div className="mb-[18px]">
                    <Icon className="w-9 h-9 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="font-sans text-lg font-bold mb-2.5">
                    {pain.title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-[1.7]">
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
