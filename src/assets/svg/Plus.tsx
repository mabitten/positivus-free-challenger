import * as React from "react";

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 26}
    height={props.height || 26}
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      fill="#191A23"
      d="M9.6 25.58v-9.72H0v-5.64h9.6V.5h5.88v9.72h9.6v5.64h-9.6v9.72z"
    ></path>
  </svg>
);

export default PlusIcon;
