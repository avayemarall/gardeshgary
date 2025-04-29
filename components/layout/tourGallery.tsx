"use client";

import React, { useState, useEffect } from "react";

interface TourGalleryProps {
  images: string[];
  title: string;
  description: string;
  autoPlayInterval?: number;
}

const TourGallery: React.FC<TourGalleryProps> = ({
  images,
  title,
  description,
  autoPlayInterval = 4000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setCurrent((x) => (x + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [images.length, autoPlayInterval]);

  return (
    <div className="md:max-w-[70%] flex flex-col gap-2 mx-auto p-6 space-y-8">
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[current]}
          alt={`Tour image ${current + 1}`}
          className="w-full h-[360px] md:h-[600px]  object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`
              relative overflow-hidden rounded-lg cursor-pointer
              transition shadow-md hover:shadow-xl
              ${current === i ? "ring-4 ring-blue-400" : "ring-1 ring-gray-300"}
            `}
          >
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg`}
            />
          </button>
        ))}
      </div>

      <div className="text-center max-w-3xl flex flex-col gap-5 mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TourGallery;