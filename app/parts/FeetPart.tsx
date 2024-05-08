export const FeetPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
    <svg
      width={323}
      height={86}
      viewBox="0 0 323 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 55.5C35.7179 40.5102 48.5632 30.7717 67 12.5L113.5 19.5C114.833 31.5 117.5 56.2 117.5 59C117.5 61.8 39.8333 69.5 1 73V55.5Z"
        stroke={color}
        fill={fill}
      />
      <path
        d="M264.5 35.5C262.5 27.1 263.667 9 264.5 1H301.5C303.167 10 306.9 29.5 308.5 35.5C310.5 43 322.5 69.5 322.5 76C322.5 82.5 281 85 276.5 85C272 85 272.5 77 269.5 65C266.5 53 267 46 264.5 35.5Z"
        stroke={color}
        fill={fill}
      />
    </svg>
  </div>
);
