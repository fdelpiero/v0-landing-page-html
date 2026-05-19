import { Reveal } from "./reveal"

const audiences = [
  {
    emoji: "🧑‍💼",
    title: "Small Business Owners",
    body: "Save 10+ hours a week by automating your bookings, follow-ups, social posts and customer queries. No developer needed."
  },
  {
    emoji: "📈",
    title: "Marketing & Ops Teams",
    body: "Connect your CRM, email, Slack and spreadsheets into one seamless flow. Stop copy-pasting and start shipping."
  },
  {
    emoji: "🏦",
    title: "Corporate Teams",
    body: "Banks, law firms, agencies — we upskill your team with hands-on workshops and leave them fully equipped to build internally."
  }
]

export function WhoItsFor() {
  return (
    <section id="who" className="py-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[10px] tracking-[0.25em] uppercase text-primary mb-4">Who it&apos;s for</div>
          <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Built for <em className="font-serif italic text-primary font-normal">everyone</em><br/>not just developers
          </h2>
          <p className="text-muted-foreground max-w-[500px] mb-16 text-[15px]">
            If you can use email, you can automate your business. We&apos;ll show you how.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16">
            {audiences.map((audience) => (
              <div 
                key={audience.title}
                className="bg-card p-9 border-t-2 border-transparent hover:border-primary hover:bg-secondary transition-all"
              >
                <span className="text-4xl mb-4 block">{audience.emoji}</span>
                <div className="font-sans text-[17px] font-extrabold mb-2.5">
                  {audience.title}
                </div>
                <p className="text-xs text-muted-foreground leading-[1.75]">
                  {audience.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
