import { Clock, Sparkles, Rocket } from "lucide-react"
import { Reveal } from "./reveal"

const pains = [
  {
    icon: Clock,
    title: "You spend hours on tasks that should take minutes",
    body: "Manual reports, copy-pasting data between sheets, answering the same questions over and over. There's a better way — and you don't need to code to build it."
  },
  {
    icon: Sparkles,
    title: "You use AI but feel you're tapping 10% of what it can do",
    body: "You know there's more beyond ChatGPT but don't know where to start. Our program takes you from basic prompting to AI agents in production."
  },
  {
    icon: Rocket,
    title: "You want to build with AI but don't know where to start",
    body: "Integrate AI into your product, business or career — to scale, differentiate and build real competitive advantages."
  }
]

export function IsThisForYou() {
  return (
    <section id="is-this-for-you" className="py-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-4">THE PROBLEM</div>
          <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Is this for <em className="font-serif italic text-primary font-normal">you?</em>
          </h2>
          <p className="text-muted-foreground max-w-[500px] mb-16 text-[15px]">
            If you recognise yourself in any of these, then yes.
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
