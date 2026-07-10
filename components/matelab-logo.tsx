"use client"

export function MatelabLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className="matelab-logo">
      <style>{`
        @keyframes flowLine {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodePulse1 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        .flow-line {
          stroke-dasharray: 4 3;
          animation: flowLine 1.5s linear infinite;
        }
        .node-pulse-1 { animation: nodePulse1 2s ease-in-out infinite; }
        .node-pulse-2 { animation: nodePulse1 2s ease-in-out infinite 0.4s; }
        .node-pulse-3 { animation: nodePulse1 2s ease-in-out infinite 0.8s; }
      `}</style>
      {/* Flow lines between nodes */}
      <line x1="14" y1="36" x2="26" y2="16" stroke="#1E8A55" strokeWidth="1.5" opacity="0.6" className="flow-line"/>
      <line x1="26" y1="16" x2="38" y2="36" stroke="#1E8A55" strokeWidth="1.5" opacity="0.6" className="flow-line"/>
      <line x1="14" y1="36" x2="38" y2="36" stroke="#1E8A55" strokeWidth="1.5" opacity="0.4" className="flow-line"/>
      {/* Nodes */}
      <circle cx="26" cy="16" r="5" fill="#1E8A55" className="node-pulse-1"/>
      <circle cx="14" cy="36" r="5" fill="#1E8A55" className="node-pulse-2"/>
      <circle cx="38" cy="36" r="5" fill="#1E8A55" className="node-pulse-3"/>
      {/* Center dots — paper cutout */}
      <circle cx="26" cy="16" r="1.8" fill="#F7F6F0"/>
      <circle cx="14" cy="36" r="1.8" fill="#F7F6F0"/>
      <circle cx="38" cy="36" r="1.8" fill="#F7F6F0"/>
    </svg>
  )
}

export function MatelabLogoLarge({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className="matelab-logo-large">
      <style>{`
        @keyframes flowLineLg {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodePulseLg {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        .flow-line-lg {
          stroke-dasharray: 4 3;
          animation: flowLineLg 1.5s linear infinite;
        }
        .node-pulse-lg-1 { animation: nodePulseLg 2s ease-in-out infinite; }
        .node-pulse-lg-2 { animation: nodePulseLg 2s ease-in-out infinite 0.4s; }
        .node-pulse-lg-3 { animation: nodePulseLg 2s ease-in-out infinite 0.8s; }
      `}</style>
      <line x1="12" y1="38" x2="26" y2="14" stroke="#1E8A55" strokeWidth="1.8" opacity="0.7" className="flow-line-lg"/>
      <line x1="26" y1="14" x2="40" y2="38" stroke="#1E8A55" strokeWidth="1.8" opacity="0.7" className="flow-line-lg"/>
      <line x1="12" y1="38" x2="40" y2="38" stroke="#1E8A55" strokeWidth="1.8" opacity="0.5" className="flow-line-lg"/>
      <circle cx="26" cy="14" r="6" fill="#1E8A55" className="node-pulse-lg-1"/>
      <circle cx="12" cy="38" r="6" fill="#1E8A55" className="node-pulse-lg-2"/>
      <circle cx="40" cy="38" r="6" fill="#1E8A55" className="node-pulse-lg-3"/>
      <circle cx="26" cy="14" r="2.2" fill="#F7F6F0"/>
      <circle cx="12" cy="38" r="2.2" fill="#F7F6F0"/>
      <circle cx="40" cy="38" r="2.2" fill="#F7F6F0"/>
    </svg>
  )
}

export function MatelabLogoSmall({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className="matelab-logo-small">
      <style>{`
        @keyframes flowLineSm {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodePulseSm {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .flow-line-sm {
          stroke-dasharray: 4 3;
          animation: flowLineSm 1.5s linear infinite;
        }
        .node-pulse-sm-1 { animation: nodePulseSm 2s ease-in-out infinite; }
        .node-pulse-sm-2 { animation: nodePulseSm 2s ease-in-out infinite 0.4s; }
        .node-pulse-sm-3 { animation: nodePulseSm 2s ease-in-out infinite 0.8s; }
      `}</style>
      <line x1="14" y1="36" x2="26" y2="16" stroke="#1E8A55" strokeWidth="2.5" className="flow-line-sm"/>
      <line x1="26" y1="16" x2="38" y2="36" stroke="#1E8A55" strokeWidth="2.5" className="flow-line-sm"/>
      <line x1="14" y1="36" x2="38" y2="36" stroke="#1E8A55" strokeWidth="2.5" opacity="0.6" className="flow-line-sm"/>
      <circle cx="26" cy="16" r="6" fill="#1E8A55" className="node-pulse-sm-1"/>
      <circle cx="14" cy="36" r="6" fill="#1E8A55" className="node-pulse-sm-2"/>
      <circle cx="38" cy="36" r="6" fill="#1E8A55" className="node-pulse-sm-3"/>
      <circle cx="26" cy="16" r="2" fill="#F7F6F0"/>
      <circle cx="14" cy="36" r="2" fill="#F7F6F0"/>
      <circle cx="38" cy="36" r="2" fill="#F7F6F0"/>
    </svg>
  )
}
