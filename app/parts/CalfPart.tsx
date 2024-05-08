export const CalfPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={240}
    height={137}
    viewBox="0 0 240 137"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5009 130C16.501 89 -7.04058 42.4724 4.50092 28C21.1673 26.6667 54.9 24 56.5 24C81.2483 61.6109 73.414 69.6001 63 86C51.5869 105.784 51.8607 116.534 56.5 135.5C44 133.667 17.9002 130 13.5009 130Z"
      stroke={color}
      fill={fill}
    />
    <path
      d="M203.5 115.5C208 68 152 76 162.5 28L203.5 1.5C214.745 24.666 240.868 28 238.5 41.5C232.521 75.5884 234.55 90.0341 238.5 115.5H203.5Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);
