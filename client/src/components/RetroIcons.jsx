import './RetroIcons.css';

export function RetroTrophy({ size = 16, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--trophy ${className}`}
      aria-hidden="true"
    >
      <path d="M6 3h12v7c0 3.3-2.7 6-6 6s-6-2.7-6-6V3z" />
      <path d="M6 5H3.5C2.7 5 2 5.7 2 6.5v1c0 2 1.5 3.5 3.5 3.5H6" />
      <path d="M18 5h2.5c.8 0 1.5.7 1.5 1.5v1c0 2-1.5 3.5-3.5 3.5H18" />
      <path d="M12 16v3" />
      <path d="M8 21h8" />
      <path d="M9 19h6" />
      <polygon
        points="12 7 13 9 15 9 13.5 10.5 14 12.5 12 11.2 10 12.5 10.5 10.5 9 9 11 9"
        fill={color}
        stroke="none"
        opacity="0.85"
      />
    </svg>
  );
}

export function RetroChrono({ size = 16, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--chrono ${className}`}
      aria-hidden="true"
    >
      <circle cx="12" cy="13" r="8" />
      <path d="M12 5V2" />
      <path d="M10 2h4" />
      <polyline points="12 9 12 13 15 15" />
      <line x1="12" y1="7" x2="12" y2="8" strokeWidth="1.5" />
      <line x1="12" y1="18" x2="12" y2="19" strokeWidth="1.5" />
      <line x1="6" y1="13" x2="7" y2="13" strokeWidth="1.5" />
      <line x1="17" y1="13" x2="18" y2="13" strokeWidth="1.5" />
    </svg>
  );
}

export function RetroBeacon({ size = 16, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--beacon ${className}`}
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" fill={color} />
      <circle cx="12" cy="9" r="5" strokeDasharray="1.5 2" opacity="0.6" />
    </svg>
  );
}

export function RetroBolt({ size = 16, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--bolt ${className}`}
      aria-hidden="true"
    >
      <polygon
        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        fill={color}
        fillOpacity="0.3"
      />
    </svg>
  );
}

export function RetroRocket({ size = 24, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--rocket ${className}`}
      aria-hidden="true"
    >
      {/* Sci-fi fuselage */}
      <path d="M12 2c-3.2 2.2-5.5 6.5-5.5 11 0 1.5.5 3 1.5 4l2-1.5V17l2 3 2-3v-1.5l2 1.5c1-1 1.5-2.5 1.5-4 0-4.5-2.3-8.8-5.5-11z" />
      {/* Porthole */}
      <circle cx="12" cy="8.5" r="2" fill={color} fillOpacity="0.45" />
      {/* Thruster exhaust flames */}
      <path d="M12 17v4.5" stroke="#53c2c6" strokeWidth="2" />
      <path d="M10 18v2.5" stroke="#af50ff" strokeWidth="1.5" />
      <path d="M14 18v2.5" stroke="#af50ff" strokeWidth="1.5" />
      {/* Stabilizer fins */}
      <line x1="7" y1="13" x2="4" y2="15.5" />
      <line x1="17" y1="13" x2="20" y2="15.5" />
    </svg>
  );
}

export function RetroClose({ size = 16, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--close ${className}`}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function RetroHeart({ size = 14, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--heart ${className}`}
      aria-hidden="true"
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill={color}
        fillOpacity="0.35"
      />
    </svg>
  );
}

export function RetroArrow({ size = 14, className = '', color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`retro-icon retro-icon--arrow ${className}`}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
