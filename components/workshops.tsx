import { Reveal } from "./reveal"

const formats = [
  {
    title: "Half-day intensive",
    body: "AI fundamentals + first automation built live. Best for teams starting from zero."
  },
  {
    title: "Full-day deep dive",
    body: "From prompting to production agents. Each participant ships a working automation for their own role."
  },
  {
    title: "Custom programs",
    body: "Multi-session programs built around your tools, your data and your security requirements."
  }
]

export function Workshops() {
  return (
    <section id="workshops" className="py-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-4">Corporate workshops</div>
          <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Upskill your team to <em className="font-serif italic text-primary font-normal">build their own.</em>
          </h2>
          <p className="text-muted-foreground max-w-[560px] mb-16 text-[15px]">
            Banks, law firms, agencies, startups — we run hands-on workshops that leave your team building real automations by the end of the day, not watching slides.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {formats.map((format) => (
              <div
                key={format.title}
                className="bg-card p-9 border-t-2 border-transparent hover:border-primary hover:bg-secondary transition-all"
              >
                <div className="font-sans text-[15px] font-extrabold text-primary mb-2.5">
                  {format.title}
                </div>
                <p className="text-[13px] text-muted-foreground leading-[1.7]">
                  {format.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
