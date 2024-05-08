export const EarPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={17}
    height={40}
    viewBox="0 0 17 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 2.00015C5.5 0.000146151 6 2.50015 1 10.0001C2.5 15.1668 5.6 26.9 6 32.5C6.5 39.5 9.5 40.5 12.5 36C15.5 31.5 16.5 23 16.5 13.5C16.5 4 13.5 4.00015 9.5 2.00015Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);