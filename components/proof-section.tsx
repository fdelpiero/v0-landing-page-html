import { Reveal } from "./reveal"

const stats = [
  { num: "10+", label: "Tools covered" },
  { num: "100%", label: "No code required" },
  { num: "🌏", label: "Remote-first global" },
  { num: "AU", label: "Sydney-based team" }
]

export function ProofSection() {
  return (
    <section id="proof" className="pb-[120px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="bg-card border border-border p-10 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-sans text-[40px] font-black text-primary tracking-[-0.03em] leading-none mb-1.5">
                  {stat.num}
                </div>
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
