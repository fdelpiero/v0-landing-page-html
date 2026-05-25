import { Clock, Sparkles, Rocket } from "lucide-react"

export function IsThisForYou() {
  const cards = [
    {
      icon: Clock,
      title: "You spend hours on tasks that should take minutes",
      body: "Manual reports, copy-pasting data between sheets, answering the same questions over and over. There's a better way — and you don't need to code to build it.",
    },
    {
      icon: Sparkles,
      title: "You use AI but feel you're tapping 10% of what it can do",
      body: "You know there's more beyond ChatGPT but don't know where to start. Our program takes you from basic prompting to AI agents in production.",
    },
    {
      icon: Rocket,
      title: "You want to build with AI but don't know where to start",
      body: "Integrate AI into your product, business or career — to scale, differentiate and build real competitive advantages.",
    },
  ]

  return (
    <section id="is-this-for-you" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-emerald-400 font-mono">
            Is this you?
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05]">
            Is this for{" "}
            <span className="font-serif italic font-normal text-emerald-400">
              you?
            </span>
          </h2>
          <p className="mt-6 text-white/60 font-mono">
            If you recognise yourself in any of these, then yes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className="rounded-lg border border-white/10 bg-white/[0.02] p-8"
              >
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-md border border-emerald-400/30 bg-emerald-400/10">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/60 font-mono text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
