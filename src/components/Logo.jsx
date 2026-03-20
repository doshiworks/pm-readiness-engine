export default function Logo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Warm gradient background circle */}
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#logoGrad)" />
      {/* Abstract PM path: upward arrow + bar chart hint */}
      <rect x="10" y="22" width="4" height="10" rx="1.5" fill="white" fillOpacity="0.5" />
      <rect x="18" y="16" width="4" height="16" rx="1.5" fill="white" fillOpacity="0.75" />
      <rect x="26" y="10" width="4" height="22" rx="1.5" fill="white" />
      {/* Upward tick on tallest bar */}
      <path d="M28 8 L30 5 L32 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
