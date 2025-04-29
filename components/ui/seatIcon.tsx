import React from "react";

interface SeatIconProps {
  number?:number
  className:string
}

const SeatIcon: React.FC<SeatIconProps> = ({className,number}) => {
  return (
    <svg
      className={`${className} hover:opacity-70 cursor-pointer h-fit`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 50"
    >
      <rect x="14" y="5" width="30" height="30" rx="5" ry="5" opacity={0.8} />
      <rect x="7" y="35.5" width="45" height="10" rx="4" ry="4" />
      {/* <circle cx="18" cy="47" r="3" />
    <circle cx="42" cy="47" r="3" /> */}
      <text
        x="29.5"
        y="25.5"
        textAnchor="middle"
        fill="#fff"
        fontSize="15"
        fontWeight="bold"
      >
        {number}
      </text>
    </svg>
  );
};

export default SeatIcon;
