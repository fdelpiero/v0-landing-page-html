const marqueeItems = [
  "n8n Automations",
  "AI Agents",
  "Codex / Claude code",
  "No Code Required",
  "Calendar Agents",
  "Chatbots for SMBs",
  "Lead Capture Flows",
  "Make · Zapier · n8n",
  "Consulting",
  "Customisation",
  "Corporate Workshops",
  "Online Courses"
]

export function Marquee() {
  return (
    <div className="border-y border-border py-4 overflow-hidden bg-card">
      <div className="flex w-max animate-marquee">
        {/* First set */}
        {marqueeItems.map((item, i) => (
          <div 
            key={`a-${i}`}
            className="whitespace-nowrap px-10 text-xs tracking-[0.12em] uppercase text-muted-foreground flex items-center gap-3"
          >
            {item}
            <span className="text-primary text-[8px]">✦</span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {marqueeItems.map((item, i) => (
          <div 
            key={`b-${i}`}
            className="whitespace-nowrap px-10 text-xs tracking-[0.12em] uppercase text-muted-foreground flex items-center gap-3"
          >
            {item}
            <span className="text-primary text-[8px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
