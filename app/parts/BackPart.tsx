export const BackPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={209}
    height={99}
    viewBox="0 0 209 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5 61C13.3537 59.5728 9.85656 57.1598 5.5 51L1.5 28.5C13.1562 42.3071 20.0699 45.0986 32.5 49C33.2292 60.6799 37.3096 69.3507 47.5 86.5V97L36.5 88.5C33.278 81.7932 29.8315 75.0993 22.5 61Z"
      stroke={color}
      fill={fill}
    />
    <path
      d="M207.5 28.5C204.863 16.736 203.369 10.1473 195.5 1.5C196.044 20.7491 190.303 27.7985 173 36V82C180.5 61 201.788 48.8352 207.5 28.5Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);
