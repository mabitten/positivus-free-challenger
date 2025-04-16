import * as React from "react";

const ArrowInclined = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
    {...props}
  >
    <path
      fill={props.fill || '#B9FF66'}
      d="M1.25 13.701a1.5 1.5 0 1 0 1.5 2.598zm19.52-8.313a1.5 1.5 0 0 0-1.061-1.837L6.669.057a1.5 1.5 0 1 0-.777 2.898L17.483 6.06l-3.105 11.59a1.5 1.5 0 1 0 2.897.777zM2.75 16.3l17.32-10-1.5-2.598-17.32 10z"
    ></path>
  </svg>
);

export default ArrowInclined;
