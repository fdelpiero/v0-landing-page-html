export function HeroVisual() {
  return (
    <svg width="420" height="400" viewBox="0 0 420 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px] h-auto">
      {/* Glow */}
      <ellipse cx="210" cy="200" rx="180" ry="160" fill="rgba(0,229,160,0.04)"/>

      {/* Connection lines */}
      <line x1="210" y1="80" x2="100" y2="200" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="210" y1="80" x2="320" y2="200" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.5s" repeatCount="indefinite"/>
      </line>
      <line x1="100" y1="200" x2="210" y2="320" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite"/>
      </line>
      <line x1="320" y1="200" x2="210" y2="320" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.25">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite"/>
      </line>
      <line x1="100" y1="200" x2="320" y2="200" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.15">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="4s" repeatCount="indefinite"/>
      </line>
      
      {/* Extra peripheral lines */}
      <line x1="210" y1="80" x2="60" y2="120" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.15"/>
      <line x1="320" y1="200" x2="380" y2="140" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.12"/>
      <line x1="210" y1="320" x2="160" y2="370" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.1"/>

      {/* Peripheral faint nodes */}
      <circle cx="60" cy="120" r="6" fill="#00E5A0" opacity="0.12"/>
      <circle cx="380" cy="140" r="5" fill="#00E5A0" opacity="0.1"/>
      <circle cx="160" cy="370" r="5" fill="#00E5A0" opacity="0.08"/>

      {/* Main nodes */}
      {/* Top: 100% */}
      <circle cx="210" cy="80" r="22" fill="#00E5A0">
        <animate attributeName="opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="210" cy="80" r="8" fill="#111118"/>

      {/* Left: 60% */}
      <circle cx="100" cy="200" r="22" fill="#00E5A0" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.35;0.6" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="200" r="8" fill="#111118" opacity="0.6"/>

      {/* Right: 30% */}
      <circle cx="320" cy="200" r="22" fill="#00E5A0" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.15;0.3" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="320" cy="200" r="8" fill="#111118" opacity="0.3"/>

      {/* Bottom: 50% */}
      <circle cx="210" cy="320" r="18" fill="#00E5A0" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.25;0.5" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="210" cy="320" r="6" fill="#111118" opacity="0.5"/>

      {/* Labels on nodes */}
      <text x="210" y="50" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10" fill="#00E5A0" opacity="0.7" letterSpacing="1">TRIGGER</text>
      <text x="55" y="238" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10" fill="#00E5A0" opacity="0.5" letterSpacing="1">AGENT</text>
      <text x="370" y="238" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10" fill="#00E5A0" opacity="0.35" letterSpacing="1">ACTION</text>
      <text x="210" y="355" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10" fill="#00E5A0" opacity="0.45" letterSpacing="1">OUTPUT</text>
    </svg>
  )
}
