export const HairPart = ({ top, left, color, zIndex = 1, fill = "transparent" }) => (
  <div style={{ position: 'absolute', top: top, left: left, zIndex: zIndex}}>
  <svg
    width={93}
    height={52}
    viewBox="0 0 93 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39 0.999913C22.2 0.599913 6.66667 15.8332 1 23.4999C2.66667 23.4999 6.5 22.9999 8.5 21C11 18.5001 36.5 13.5 44.5 12.5C50.9 11.7 62.1667 19.4999 67 23.4999C70.6667 33.3333 78.1 52.6 78.5 51C78.9 49.4 87.6667 49 92 49C90.3333 41.5 86.8 25.9 86 23.4999C85 20.4998 74.5 9.5 71.5 6.5C68.5 3.5 60 1.49991 39 0.999913Z"
      stroke={color}
      fill={fill}
    />
  </svg>
  </div>
);
