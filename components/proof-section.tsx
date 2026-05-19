import { Reveal } from "./reveal"
import { MatelabLogoSmall } from "./matelab-logo"

const stats = [
  { num: "10+", label: "Tools covered", isLogo: false },
  { num: "100%", label: "No code required", isLogo: false },
  { num: null, label: "Remote-first global", isLogo: true },
  { num: "AU", label: "Sydney-based team", isLogo: false }
]

export function ProofSection() {
  return (
    <section id="proof" className="pb-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="bg-card border border-border p-10 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                {stat.isLogo ? (
                  <div className="h-[40px] flex items-center justify-center mb-1.5">
                    <MatelabLogoSmall size={40} />
                  </div>
                ) : (
                  <div className="font-serif italic text-[40px] font-normal text-primary tracking-[-0.03em] leading-none mb-1.5">
                    {stat.num}
                  </div>
                )}
                <div className="text-[11px] text-muted-foreground tracking-[0.1em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
