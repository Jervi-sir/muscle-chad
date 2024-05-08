export const NosePart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={26}
    height={30}
    viewBox="0 0 26 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.49953 20C3.99953 16.5 6.49953 11.5 8.49953 0.5C10.9997 0.5 17 1.6 21 6C26 11.5 25 18.5 24 22C23 25.5 14.4995 27.5 6.49953 28.5C-1.50047 29.5 0.99953 23.5 2.49953 20Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);