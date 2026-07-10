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
    <section id="workshops" className="py-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">Corporate workshops</div>
          <h2 className="font-sans text-[clamp(30px,5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Upskill your team to <span className="text-primary">build their own.</span>
          </h2>
          <p className="text-muted-foreground max-w-[760px] mb-14 text-[15px] font-medium leading-[1.7]">
            Banks, law firms, agencies, startups — we run hands-on workshops that leave your team building real automations by the end of the day, not watching slides.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {formats.map((format) => (
              <div
                key={format.title}
                className="bg-card border border-border rounded-xl p-8 border-t-[3px] border-t-primary"
              >
                <div className="font-sans text-base font-extrabold text-foreground mb-2.5">
                  {format.title}
                </div>
                <p className="text-[13.5px] text-muted-foreground leading-[1.7]">
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
