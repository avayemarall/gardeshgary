"use client";
import React from "react";

import ImageSlider from "./image";

interface currentTours {}

const CurrentTours: React.FC<currentTours> = () => {
  return (
    <div
      className="flex flex-col gap-10 w-full h-auto items-center justify-center text-dark-gray
    md:items-start md:px-50 bg-neutral-light p-5 md:p-15
    "
    >
      <h1 className="text-2xl font-bold text-dark-blue">
        تور های در حال برگذاری
      </h1>
      <ImageSlider />
    </div> 
  );
};

export default CurrentTours;
