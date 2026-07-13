import { Clock, Sparkles, Zap } from "lucide-react"
import { Reveal } from "./reveal"
import { getMessages, type Locale } from "@/lib/i18n"

export function IsThisForYou({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).pains
  const icons = [Clock, Sparkles, Zap]
  return (
    <section id="is-this-for-you" className="py-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">{copy.eyebrow}</div>
          <h2 className="font-sans text-[clamp(30px,5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            {copy.title} <span className="text-primary">{copy.accent}</span>
          </h2>
          <p className="text-muted-foreground max-w-[760px] mb-14 text-[15px] font-medium leading-[1.7]">
            {copy.intro}
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {copy.items.map((pain, i) => {
              const Icon = icons[i]
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
