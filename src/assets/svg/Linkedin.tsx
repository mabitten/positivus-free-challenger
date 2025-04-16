import * as React from "react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <circle cx="17" cy="17" r="17" fill="#000"></circle>
    <path
      fill="#B9FF66"
      d="M9.318 25h3.495V13.684H9.318zM9 10.072c0 1.116.9 2.019 2.065 2.019a2.015 2.015 0 0 0 2.013-2.02c0-1.115-.9-2.071-2.013-2.071A2.07 2.07 0 0 0 9 10.072M22.452 25H26v-6.216c0-3.028-.689-5.418-4.237-5.418-1.695 0-2.86.956-3.336 1.859h-.053v-1.54h-3.337V25h3.496v-5.578c0-1.488.264-2.922 2.118-2.922 1.8 0 1.8 1.7 1.8 2.975z"
    ></path>
  </svg>
);

export default LinkedinIcon;
