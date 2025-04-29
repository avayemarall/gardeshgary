"use client";

import Link from "next/link";
import React from "react";

const tours = [
  {
    id: 1,
    title: "تور جنگل نوردی",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "تور کویرگردی",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    title: "تور کوهنوردی",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    title: "تور دریاچه",
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    title: "تور دریاچه",
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    title: "تور دریاچه",
    image: "https://picsum.photos/400/300?random=6",
  },
  {
    id: 7,
    title: "تور دریاچه",
    image: "https://picsum.photos/400/300?random=7",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen  py-10 px-5">
      <div className="max-w-7xl md:max-w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">
          تورهای برگزار شده
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-20 gap-y-15 md:gap-y-30">
          {tours.map((tour) => (
            <Link
            href={`/past-tours/1`}
              key={tour.id}
              className="bg-neutral-light/40 rounded-lg overflow-hidden shadow-md 
              hover:shadow-xl hover:scale-102 transition-shadow duration-300 flex flex-col"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-10  flex items-center justify-center gap-6">
                <h2 className="text-xl md:text-2xl font-semibold">{tour.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
