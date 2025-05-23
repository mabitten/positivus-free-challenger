import * as React from "react";

const SocialFacebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 30}
    height={props.height || 30}
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill={props.fill || "#fff"}
      d="M30 15.091C30 6.755 23.286 0 15 0S0 6.755 0 15.091C0 22.637 5.444 28.905 12.641 30V19.473h-3.81V15.09h3.81v-3.286c0-3.773 2.238-5.902 5.625-5.902 1.694 0 3.387.304 3.387.304v3.712h-1.875c-1.875 0-2.48 1.156-2.48 2.373v2.8h4.174l-.666 4.38h-3.508V30C24.496 28.905 30 22.637 30 15.091"
    ></path>
  </svg>
);

export default SocialFacebook;
