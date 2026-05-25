import { Reveal } from "./reveal"

const IconRocket = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const IconHandWave = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/>
    <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/>
    <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/>
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
  </svg>
)

const IconCorporateTeam = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"/>
    <path d="M5 21V7l8-4v18"/>
    <path d="M19 21V11l-6-4"/>
    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/>
  </svg>
)

const audiences = [
  {
    icon: <IconRocket />,
    title: "Business Owners",
    body: "Save 10+ hours a week by automating your bookings, leads, follow-ups, social posts and customer queries. No developer needed."
  },
  {
    icon: <IconHandWave />,
    title: "Everyday People",
    body: "Want to learn AI and automation for your daily life and work? We make it simple, practical and fun — zero tech skills required."
  },
  {
    icon: <IconCorporateTeam />,
    title: "Corporate Teams",
    body: "Banks, law firms, agencies, startups — we upskill your team with hands-on workshops and leave them fully equipped to build internally."
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
            You can learn AI automation without technical or coding skills. We&apos;ll show you how.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-16">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-card p-9 border-t-2 border-transparent hover:border-primary hover:bg-secondary transition-all"
              >
                <div className="text-primary mb-4">
                  {audience.icon}
                </div>
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

