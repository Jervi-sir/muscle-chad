export const ShoulderPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={299}
    height={89}
    viewBox="0 0 299 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M66.9977 15.0011C73.9977 16.1678 88.5976 18.2011 90.9977 17.0011L49.5 44.0011L52.5 65.0011L55.5 86C33.2907 89.3847 25.3582 89.5744 2.99765 74.0011C-4.07555 38.9158 8.88073 31.2047 41.9976 24.5011L66.9977 15.0011Z"
      stroke={color}
      fill={fill}
    />
    <path
      d="M228 1.50112L199.5 5.50112C247 36.5011 249.5 35.0011 258.5 66.5011L298 36.5011C292.932 4.35468 274.938 -1.11529 228 1.50112Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);
