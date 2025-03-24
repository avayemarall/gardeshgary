import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(237,250,255,0.7749300403755253) 0%, rgba(0,51,102,1) 45%, rgba(0,51,102,1) 50%, rgba(0,51,102,1) 55%, rgba(237,250,255,1) 100%)",
      }}
      className={`h-[1px] my-5 rounded-full ${className}`}
    ></div>
  );
};

export default Divider;
