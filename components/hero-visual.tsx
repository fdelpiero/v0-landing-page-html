export function HeroVisual() {
  return (
    <svg 
      width="480" 
      height="460" 
      viewBox="0 0 480 460" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full max-w-[480px] h-auto"
    >
      {/* Large dark circle backdrop */}
      <circle cx="240" cy="230" r="170" fill="#0D1A17" stroke="#1a2a25" strokeWidth="1"/>
      
      {/* Subtle inner glow */}
      <circle cx="240" cy="230" r="140" fill="rgba(0,229,160,0.02)"/>

      {/* Connection lines - diamond pattern */}
      {/* Top to Left */}
      <line x1="240" y1="100" x2="140" y2="230" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite"/>
      </line>
      
      {/* Top to Right */}
      <line x1="240" y1="100" x2="340" y2="230" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.2s" repeatCount="indefinite"/>
      </line>
      
      {/* Left to Bottom */}
      <line x1="140" y1="230" x2="240" y2="360" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite"/>
      </line>
      
      {/* Right to Bottom */}
      <line x1="340" y1="230" x2="240" y2="360" stroke="#00E5A0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.4s" repeatCount="indefinite"/>
      </line>
      
      {/* Left to Right (horizontal through middle) */}
      <line x1="140" y1="230" x2="340" y2="230" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.25">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite"/>
      </line>
      
      {/* Peripheral lines to corner dots */}
      <line x1="240" y1="100" x2="60" y2="180" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.15">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="4s" repeatCount="indefinite"/>
      </line>
      <line x1="340" y1="230" x2="420" y2="150" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.15">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="3.5s" repeatCount="indefinite"/>
      </line>
      <line x1="240" y1="360" x2="60" y2="340" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.15">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="4.5s" repeatCount="indefinite"/>
      </line>
      <line x1="340" y1="230" x2="420" y2="340" stroke="#00E5A0" strokeWidth="1" strokeDasharray="4 6" opacity="0.12">
        <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="5s" repeatCount="indefinite"/>
      </line>

      {/* Small peripheral dots at corners */}
      <circle cx="60" cy="180" r="5" fill="#00E5A0" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.08;0.15" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="420" cy="150" r="5" fill="#00E5A0" opacity="0.15">
        <animate attributeName="opacity" values="0.15;0.08;0.15" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="60" cy="340" r="5" fill="#00E5A0" opacity="0.12">
        <animate attributeName="opacity" values="0.12;0.06;0.12" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="420" cy="340" r="5" fill="#00E5A0" opacity="0.12">
        <animate attributeName="opacity" values="0.12;0.06;0.12" dur="4.5s" repeatCount="indefinite"/>
      </circle>

      {/* Main nodes - donut style */}
      
      {/* Top node: TRIGGER (brightest) */}
      <circle cx="240" cy="100" r="24" fill="#00E5A0">
        <animate attributeName="opacity" values="1;0.75;1" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="240" cy="100" r="10" fill="#0a0a0f"/>

      {/* Left node: AGENT */}
      <circle cx="140" cy="230" r="22" fill="#00E5A0" opacity="0.65">
        <animate attributeName="opacity" values="0.65;0.4;0.65" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="140" cy="230" r="9" fill="#0a0a0f" opacity="0.8"/>

      {/* Right node: ACTION */}
      <circle cx="340" cy="230" r="22" fill="#00E5A0" opacity="0.55">
        <animate attributeName="opacity" values="0.55;0.3;0.55" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="340" cy="230" r="9" fill="#0a0a0f" opacity="0.75"/>

      {/* Bottom node: OUTPUT */}
      <circle cx="240" cy="360" r="20" fill="#00E5A0" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.35;0.6" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="240" cy="360" r="8" fill="#0a0a0f" opacity="0.8"/>

      {/* Labels */}
      <text 
        x="240" 
        y="58" 
        textAnchor="middle" 
        fontFamily="DM Mono, monospace" 
        fontSize="11" 
        fill="#00E5A0" 
        opacity="0.8" 
        letterSpacing="2"
      >
        TRIGGER
      </text>
      <text 
        x="80" 
        y="235" 
        textAnchor="middle" 
        fontFamily="DM Mono, monospace" 
        fontSize="11" 
        fill="#00E5A0" 
        opacity="0.6" 
        letterSpacing="2"
      >
        AGENT
      </text>
      <text 
        x="405" 
        y="235" 
        textAnchor="middle" 
        fontFamily="DM Mono, monospace" 
        fontSize="11" 
        fill="#00E5A0" 
        opacity="0.5" 
        letterSpacing="2"
      >
        ACTION
      </text>
      <text 
        x="240" 
        y="410" 
        textAnchor="middle" 
        fontFamily="DM Mono, monospace" 
        fontSize="11" 
        fill="#00E5A0" 
        opacity="0.55" 
        letterSpacing="2"
      >
        OUTPUT
      </text>
    </svg>
  )
}
