import * as React from "react";

const HomeCircleIcon = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ? width : "745"}
    height={height ? height : "773"}
    fill="none"
    viewBox="0 0 745 773"
  >
    <circle
      cx="403.841"
      cy="407.1"
      r="352.442"
      stroke="#7B1984"
      strokeWidth="0.727"
      opacity="0.5"
    ></circle>
    <circle
      cx="404.206"
      cy="405.282"
      r="280.063"
      stroke="#7B1984"
      strokeWidth="0.727"
    ></circle>
    <circle
      cx="418.026"
      cy="417.648"
      r="416.82"
      stroke="#7B1984"
      strokeWidth="0.727"
      opacity="0.5"
    ></circle>
  </svg>
);

export default HomeCircleIcon;
