export function MatelabLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
      <line x1="19" y1="35" x2="26" y2="20" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <line x1="26" y1="20" x2="33" y2="35" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" opacity="0.45"/>
      <line x1="19" y1="35" x2="33" y2="35" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" opacity="0.25"/>
      <circle cx="26" cy="20" r="4.5" fill="#00E5A0"/>
      <circle cx="26" cy="20" r="1.6" fill="#111118"/>
      <circle cx="19" cy="35" r="4.5" fill="#00E5A0" opacity="0.6"/>
      <circle cx="19" cy="35" r="1.6" fill="#111118" opacity="0.6"/>
      <circle cx="33" cy="35" r="4.5" fill="#00E5A0" opacity="0.3"/>
      <circle cx="33" cy="35" r="1.6" fill="#111118" opacity="0.3"/>
    </svg>
  )
}

export function MatelabLogoSmall({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
      <line x1="19" y1="35" x2="26" y2="20" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <line x1="26" y1="20" x2="33" y2="35" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" opacity="0.45"/>
      <line x1="19" y1="35" x2="33" y2="35" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" opacity="0.25"/>
      <circle cx="26" cy="20" r="4.5" fill="#00E5A0"/>
      <circle cx="26" cy="20" r="1.6" fill="#111118"/>
      <circle cx="19" cy="35" r="4.5" fill="#00E5A0" opacity="0.6"/>
      <circle cx="33" cy="35" r="4.5" fill="#00E5A0" opacity="0.3"/>
    </svg>
  )
}
