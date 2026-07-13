import { Reveal } from "./reveal"
import { getMessages, type Locale } from "@/lib/i18n"

export function UseCases({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).useCases
  const useCases = copy.items
  return (
    <section id="usecases" className="pb-[110px] relative z-10">
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
            {useCases.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-[26px] flex items-baseline gap-3.5 hover:border-[rgba(30,138,85,0.4)] transition-colors"
              >
                <span className="text-primary text-[13px] flex-none">→</span>
                <div>
                  <div className="font-sans text-[15px] font-bold mb-[5px]">{item.title}</div>
                  <p className="text-[12.5px] text-muted-foreground leading-[1.6]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
