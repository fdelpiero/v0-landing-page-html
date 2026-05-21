const tools = [
  "n8n",
  "Make",
  "Zapier",
  "ChatGPT",
  "Claude AI",
  "Voiceflow",
  "Fireflies",
  "Notion AI",
  "Slack Bots",
  "WhatsApp API"
]

export function ToolsSection() {
  return (
    <section id="tools" className="py-6 border-y border-border bg-card relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-none">
          <div className="text-[11px] tracking-[0.18em] uppercase text-[#404055] whitespace-nowrap shrink-0">
            Tools we teach
          </div>
          <div className="flex gap-3 items-center flex-nowrap">
            {tools.map((tool) => (
              <div
                key={tool}
                className="font-sans text-[13px] font-bold px-4 py-2 border border-border text-muted-foreground tracking-[0.02em] hover:border-[rgba(0,229,160,0.3)] hover:text-primary hover:bg-accent transition-all cursor-default whitespace-nowrap shrink-0"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
