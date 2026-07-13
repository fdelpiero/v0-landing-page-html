import { Reveal } from "./reveal"
import { getMessages, type Locale } from "@/lib/i18n"

export function HowItWorks({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).how
  const steps = copy.steps
  return (
    <section id="how" className="pb-[110px] relative z-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.n} className="relative">
                {/* Number circle + inline connector */}
                <div className="flex items-center gap-3 mb-[18px]">
                  <div className="flex-none w-9 h-9 rounded-full bg-background border border-primary flex items-center justify-center font-mono text-xs text-primary">
                    {step.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-[#DEDCD0]" />
                  )}
                </div>
                <div className="font-sans text-base font-bold mb-2">
                  {step.title}
                </div>
                <p className="text-[13.5px] text-muted-foreground leading-[1.7]">
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
