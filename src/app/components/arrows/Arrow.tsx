import * as React from "react";

const Arrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M17.757 11.09a.833.833 0 0 0 0-1.18l-4.714-4.713a.833.833 0 0 0-1.178 1.178l3.291 3.292H4.12a.833.833 0 1 0 0 1.667h11.036l-3.292 3.29a.833.833 0 0 0 1.179 1.18l4.714-4.715Z"
    />
  </svg>
);
export default Arrow;
