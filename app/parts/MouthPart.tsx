export const MouthPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={47}
    height={20}
    viewBox="0 0 47 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 1C13.4 1 4.5 9.66667 1.5 14C4.33333 15.8333 11.6 19.5 18 19.5C24.4 19.5 38.6667 7.16667 45 1H25Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);
