import { Reveal } from "./reveal"

const useCases = [
  {
    title: "Lead capture & qualification bot",
    body: "Every enquiry answered, qualified and booked into your calendar — 24/7."
  },
  {
    title: "Customer support chatbot",
    body: "Trained on your docs and FAQs. Handles the repeats; escalates the rest."
  },
  {
    title: "Meeting notes → CRM",
    body: "Calls transcribed, summarised and logged against the right contact automatically."
  },
  {
    title: "Invoice & document processing",
    body: "Receipts, invoices and forms extracted into your accounting system without typing."
  },
  {
    title: "Reporting on autopilot",
    body: "Weekly numbers pulled, formatted and delivered to your inbox or Slack."
  },
  {
    title: "Content & social pipelines",
    body: "From idea to drafted, scheduled posts — with your voice, reviewed by you."
  }
]

export function UseCases() {
  return (
    <section id="usecases" className="pb-[110px] relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">What we build</div>
          <h2 className="font-sans text-[clamp(30px,5vw,44px)] font-extrabold tracking-[-0.02em] leading-[1.05] mb-4">
            Real automations, <span className="text-primary">real hours back.</span>
          </h2>
          <p className="text-muted-foreground max-w-[760px] mb-14 text-[15px] font-medium leading-[1.7]">
            A sample of what we build for clients — every one custom-fit to your tools and workflows.
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
