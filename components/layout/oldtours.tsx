"use client";
import React from "react";
import GallerySlider from "./GallerySlider";
interface oldTours {}
const OldTours: React.FC<oldTours> = () => {
  return (
    <div className="flex flex-col gap-7 bg-neutral-light px-2 py-5 md:p-15 w-full h-auto items-center md:items-start md:px-50 justify-center pb-1.5">
      <h1 className="text-2xl md:text-3xl font-bold text-dark-blue">تور های برگزار شده</h1>
      <GallerySlider/>
    </div>
  );
};

export default OldTours;
