export const AbsPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
    <svg
      width={127}
      height={104}
      viewBox="0 0 127 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 98C23.8029 80.0543 20.7235 64.1339 1 17C32.2994 17.8488 40.7475 11.8757 55.5 1C84.0954 5.37724 99.2198 5.44423 126 5C110.019 39.4473 113.981 58.8701 119.5 93.5C82.4039 103.38 61.4257 107.541 21.5 98Z"
        stroke={color}
        fill={fill}
      />
    </svg>
  </div>
);