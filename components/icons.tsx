/* Iconos SVG en línea — una sola familia visual, sin emojis. */

type IconProps = React.SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2c-5.46 0-9.9 4.43-9.9 9.88 0 1.74.46 3.45 1.32 4.95L2.05 22l5.3-1.39a9.9 9.9 0 0 0 4.69 1.19h.01c5.45 0 9.89-4.43 9.89-9.88a9.82 9.82 0 0 0-2.9-7 9.83 9.83 0 0 0-7-2.92Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.47-.01-.17 0-.43.06-.66.31-.22.24-.86.84-.86 2.05 0 1.21.89 2.38 1.01 2.55.12.16 1.74 2.66 4.22 3.73.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.67-1.18.2-.57.2-1.06.14-1.17-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function CrownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.2 7.4 6.6 10 11 4.6a1.25 1.25 0 0 1 2 0L17.4 10l3.4-2.6a.7.7 0 0 1 1.12.68l-1.78 8.07a1.4 1.4 0 0 1-1.37 1.1H5.23a1.4 1.4 0 0 1-1.37-1.1L2.08 8.08A.7.7 0 0 1 3.2 7.4Z" />
      <path d="M6 19.4h12a.85.85 0 0 1 0 1.7h-3.1c.04.42.13.86.3 1.25a.62.62 0 0 1-.57.87.66.66 0 0 1-.6-.4 5 5 0 0 1-.37-1.72h-1.32a5 5 0 0 1-.37 1.72.66.66 0 0 1-.6.4.62.62 0 0 1-.57-.87c.17-.39.26-.83.3-1.25H6a.85.85 0 0 1 0-1.7Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 6.5h16M4 12h16M4 17.5h10" />
    </svg>
  );
}

export function ContactIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10.5" r="2" />
      <path d="M5.8 16.5c.6-1.5 1.9-2.3 3.2-2.3s2.6.8 3.2 2.3M15 9.5h3.5M15 13h2.5" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
