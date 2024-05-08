export const EyesPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={52}
    height={24}
    viewBox="0 0 52 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M44.9981 0.999761C32.4981 -1.00024 27.9981 7.49976 28.4981 8.99976L47 6C50.4994 4.99992 54.9981 2.59976 44.9981 0.999761Z"
      stroke={color}
      fill={fill}
    />
    <path
      d="M0.5 21C0.5 18.5 4 15 10 14L11 18L5 23.5C3.5 23.5 0.5 23 0.5 21Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);