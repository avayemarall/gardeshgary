"use client";
import React from "react";
import camera from "../public/img/camera.webp";
import circuit from "../public/img/circut.webp";
import car from "../public/img/car.webp";
import phone from "../public/img/phone.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Divider from "./divider";
interface CoursesProps {}
const courses = [
  {
    id: 1,
    title: "دوره 1",
    description: "دوره 1",
    img: camera,
  },
  {
    id: 2,
    title: "دوره 2",
    description: "دوره 2",
    img: circuit,
  },
  {
    id: 3,
    title: "دوره 3",
    description: "دوره 3",
    img: car,
  },
  {
    id: 4,
    title: "دوره 4",
    description: "دوره 4",
    img: phone,
  },
];
const Courses: React.FC<CoursesProps> = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-7 w-full h-auto items-center md:items-start md:px-50 justify-center pb-1.5">
      <Divider className="w-[90%] md:w-[50%] md:self-center" />
      <h1 className="text-2xl font-bold text-dark-blue">دوره ها</h1>
      <div
        className="flex flex-col gap-10 w-full h-auto items-center justify-center
      md:flex-row md:flex-wrap md:justify-start
      "
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-[80%] h-auto relative items-center justify-center
          md:w-[25%] md:gap-6 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
          
          "
          >
            <Image
              src={course.img}
              alt={course.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-xl shadow-lg shadow-mid-gray hover:shadow-xl transition-all duration-300 ease-in-out"
            />
            <div className="absolute bottom-4 left-0 w-full rounded-xl flex items-center pr-5">
              <h1 className="text-medium-blue text-2xl font-bold">
                {course.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => router.push("/courses")}
        className="bg-dark-blue text-custom-white px-4 py-2 rounded-xl
      md:px-7 md:py-4 md:text-xl md:m-5 self-center
      "
      >
        مشاهده همه
      </button>
      <Divider className="w-[90%] md:w-[50%] md:self-center" />
    </div>
  );
};

export default Courses;
