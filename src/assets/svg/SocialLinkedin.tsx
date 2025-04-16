import * as React from "react";

const SocialLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 30}
    height={props.height || 30}
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <circle cx="15" cy="15" r="15" fill="#fff"></circle>
    <path
      fill={props.fill || "#000"}
      d="M8.222 22.059h3.084v-9.985H8.222zM7.941 8.887c0 .984.795 1.781 1.823 1.781.981 0 1.776-.797 1.776-1.781 0-.985-.795-1.828-1.776-1.828A1.83 1.83 0 0 0 7.94 8.887M19.81 22.059h3.131v-5.485c0-2.672-.607-4.781-3.738-4.781-1.495 0-2.523.844-2.944 1.64h-.047v-1.359H13.27v9.985h3.084v-4.922c0-1.313.233-2.578 1.869-2.578 1.589 0 1.589 1.5 1.589 2.625z"
    ></path>
  </svg>
);

export default SocialLinkedin;
