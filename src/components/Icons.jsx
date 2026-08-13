const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Svg = ({ children, size = 24, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...rest}>
    {children}
  </svg>
)

export const House = (p) => (
  <Svg {...p}>
    <path d="M3.5 10.5 12 4l8.5 6.5V20a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" />
    <path d="M9.6 21v-5.2h4.8V21" />
    <circle cx="12" cy="11.6" r="1" />
  </Svg>
)

export const Building = (p) => (
  <Svg {...p}>
    <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4H13a1.5 1.5 0 0 1 1.5 1.5V21" />
    <path d="M14.5 10H19a1 1 0 0 1 1 1v10" />
    <path d="M2.5 21h19" />
    <path d="M7 8h4M7 12h4M7 16h4M17 14h0M17 17.5h0" />
  </Svg>
)

export const Car = (p) => (
  <Svg {...p}>
    <path d="M3 15.5v3h3v-3M18 15.5v3h3v-3" />
    <path d="M2.6 15.5v-3.2l1.7-4.4A2 2 0 0 1 6.2 6.6h11.6a2 2 0 0 1 1.9 1.3l1.7 4.4v3.2z" />
    <path d="M3.4 12.3h17.2" />
    <path d="M6 14.2h1.6M16.4 14.2H18" />
  </Svg>
)

export const Phone = (p) => (
  <Svg {...p}>
    <path d="M6.4 3.5h2.2l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v2.2a2.4 2.4 0 0 1-2.7 2.4A15.5 15.5 0 0 1 4 6.2 2.4 2.4 0 0 1 6.4 3.5z" />
  </Svg>
)

export const KeyIcon = (p) => (
  <Svg {...p}>
    <circle cx="8" cy="8" r="4.2" />
    <path d="M11 11l8 8M16.5 15.5l-2 2M19 13l-2 2" />
  </Svg>
)

export const Shield = (p) => (
  <Svg {...p}>
    <path d="M12 3.2 19 6v5.6c0 4-2.9 7.3-7 9.2-4.1-1.9-7-5.2-7-9.2V6z" />
    <path d="m9 12 2.2 2.2L15.4 10" />
  </Svg>
)

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2V12l3.2 2" />
  </Svg>
)

export const Pin = (p) => (
  <Svg {...p}>
    <path d="M12 21c4.2-4.6 6.3-8 6.3-10.6A6.3 6.3 0 0 0 5.7 10.4C5.7 13 7.8 16.4 12 21z" />
    <circle cx="12" cy="10.3" r="2.3" />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
)

export const Arrow = (p) => (
  <Svg {...p}>
    <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />
  </Svg>
)

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)

export const Close = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
)

// Keyhole badge used behind service icons
export const Keyhole = ({ size = 24, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M12 3a4.6 4.6 0 0 1 2.7 8.3L16.6 20a1 1 0 0 1-1 1.2H8.4A1 1 0 0 1 7.4 20l1.9-8.7A4.6 4.6 0 0 1 12 3z" />
  </svg>
)

export const icons = { house: House, building: Building, car: Car }
