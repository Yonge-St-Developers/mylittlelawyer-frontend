interface LegalIconProps {
  className?: string;
}

export function LegalIcon({ className }: LegalIconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M8 32L32 8M8 8L32 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 4L20 36M4 20L36 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
