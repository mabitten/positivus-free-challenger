import * as React from "react";
const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="19"
    fill="none"
    viewBox="0 0 26 19"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth="2"
      d="M1 1.807h24M1 9.807h24M1 17.807h24"
    ></path>
  </svg>
);

export default HamburgerIcon;
