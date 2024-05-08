export const SusPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={167}
    height={59}
    viewBox="0 0 167 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M166 26C165.273 8.00065 160.106 3.57574 146.5 1C92.8979 24.0131 62.6465 26.6367 9 10.5L1.5 28C21.2409 25.8791 40.3744 35.7545 77.5 57.5C110.804 25.387 130.498 23.3801 166 26Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);
