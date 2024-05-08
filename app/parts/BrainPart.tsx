export const BrainPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={73}
    height={36}
    viewBox="0 0 73 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M61.5 20L1.5 34.5C3.66667 27.3334 9.7 11.9 16.5 7.5C25 2 36 3.00005 46 1.50005C56 4.60148e-05 59.5 4.00005 69 8.50005C76.6 12.1 67.1667 17.6667 61.5 20Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
)