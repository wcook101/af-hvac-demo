type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function PhoneIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8.5 5.5 10 7.2c.4.5.4 1.2 0 1.7l-1 1.1a1 1 0 0 0-.2 1.1 12.5 12.5 0 0 0 4.1 4.1 1 1 0 0 0 1.1-.2l1.1-1c.5-.4 1.2-.4 1.7 0l1.7 1.5c.5.5.6 1.3.2 1.9l-.8 1.1c-.5.7-1.3 1-2.1.9C10.4 18.8 5.2 13.6 4.6 8.2c-.1-.8.2-1.6.9-2.1l1.1-.8c.6-.4 1.4-.3 1.9.2Z" />
    </svg>
  );
}

export function MailIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

export function PinIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.1" />
    </svg>
  );
}

export function ShieldIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 19 6.2v5.3c0 4.2-2.8 7.2-7 8.9-4.2-1.7-7-4.7-7-8.9V6.2L12 3.5Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

export function FamilyIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="2.1" />
      <circle cx="16" cy="8.4" r="1.7" />
      <path d="M4.5 18.5v-1.2a3.4 3.4 0 0 1 3.4-3.4h.2a3.4 3.4 0 0 1 3.4 3.4v1.2" />
      <path d="M12.2 18.5v-.8a2.8 2.8 0 0 1 2.8-2.8h.1a2.8 2.8 0 0 1 2.8 2.8v.8" />
    </svg>
  );
}

export function BrandsIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
      <path d="m14.6 16.8 1.5 1.5 3-3.2" />
    </svg>
  );
}

export function ComfortIcon({ className = "size-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5v17" />
      <path d="M9 6.5a3 3 0 1 1 0 6H8.5" />
      <path d="M15 11.5a3 3 0 1 1 0 6H14" />
      <path d="M8.2 8.2 6.5 6.8" />
      <path d="M17.5 16.8 15.8 15.4" />
    </svg>
  );
}

export function MenuIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "size-6" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}
