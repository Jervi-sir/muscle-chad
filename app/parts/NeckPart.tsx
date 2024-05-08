export const NeckPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={139}
    height={73}
    viewBox="0 0 139 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M97.5013 40.5C74.5013 33.5 69.0013 4 68.0013 1C68.0013 7.83333 66.801 22.5 62 26.5C55.9987 31.5 33.5013 51 28.0013 56C22.5013 61 0.00130415 62.5 1.5013 65.5C3.0013 68.5 45.0013 75.5 58.0013 69C68.4013 63.8 116.001 53.8333 138.501 49.5C132.501 48.8333 115.901 46.1 97.5013 40.5Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);
