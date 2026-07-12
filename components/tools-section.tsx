const tools = [
  "n8n",
  "Claude Code",
  "OpenAI Codex",
  "Copilot",
  "Antigravity",
  "Open Claw",
  "WhatsApp API",
  "Slack Bots",
  "Notion AI",
  "Cursor"
]

export function ToolsSection() {
  return (
    <section id="tools" className="py-[22px] border-y border-[#E9E7DD] bg-card relative z-10">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-7 overflow-x-auto scrollbar-none">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4B1A4] whitespace-nowrap shrink-0">
            Built on
          </div>
          <div className="flex gap-2.5 items-center flex-nowrap">
            {tools.map((tool) => (
              <div
                key={tool}
                className="font-sans text-[13px] font-bold px-4 py-2 border border-border rounded-lg text-muted-foreground hover:border-[rgba(30,138,85,0.4)] hover:text-primary transition-all cursor-default whitespace-nowrap shrink-0"
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
