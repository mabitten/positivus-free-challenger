import * as React from "react";

const NetflixLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "126"}
    height={props.height || "48"}
    fill="none"
    viewBox="0 0 126 48"
    {...props}
  >
    <g clipPath="url(#clip0_333_1362)" style={{ mixBlendMode: "luminosity" }}>
      <path
        fill="#D81F26"
        d="M17.501 38.066c-1.884.293-3.801.381-5.784.616l-6.05-15.703v16.377c-1.884.175-3.603.41-5.388.644V10h5.025l6.875 17.022V10h5.322zm10.413-17.08c2.05 0 5.19-.088 7.074-.088v4.688c-2.347 0-5.09 0-7.074.088v6.973c3.107-.176 6.214-.41 9.355-.499v4.512l-14.644 1.025V10h14.644v4.688h-9.355zm29.023-6.298h-5.488V36.25c-1.785 0-3.57 0-5.288.059V14.688h-5.488V10h16.264zm8.594 5.976h7.24v4.688h-7.24v10.634h-5.19V10h14.776v4.688h-9.586zm18.18 11.22c3.009.06 6.05.265 8.992.41v4.63c-4.727-.264-9.454-.527-14.28-.615V10h5.289zm13.454 5.362c1.686.088 3.471.176 5.19.351V10h-5.19zM125.527 10l-6.71 14.268L125.527 40c-1.983-.234-3.967-.557-5.95-.85l-3.801-8.671-3.868 7.968c-1.917-.293-3.768-.38-5.685-.615l6.809-13.74L106.884 10h5.685l3.471 7.88 3.702-7.88z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_333_1362">
        <path fill="#fff" d="M.28 0h125.24v48H.28z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default NetflixLogo;
