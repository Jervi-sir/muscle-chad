export const ChestPart = ({ top, left, color, zIndex = 1, fill = "transparent"}) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={199}
    height={84}
    viewBox="0 0 199 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 39.0086L44.5 11.5086C85 27.5 91.5 22 150.5 1.00861C153.165 0.060512 183.667 22.5086 198.5 33.0086C198.239 64.1292 190.893 78.4463 91.5 66.5086C74.0075 81.4866 57.393 84.1151 36.5 82.0086C30.6859 83.6532 9.44018 70.6962 5 61.0086C4.00002 58.8269 2.66667 45.3419 1.5 39.0086Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);