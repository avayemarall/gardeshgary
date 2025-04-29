"use client";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// import dynamic from "next/dynamic";

// const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
//   ssr: false,
// });
// const SwiperSlide = dynamic(
//   () => import("swiper/react").then((mod) => mod.SwiperSlide),
//   {
//     ssr: false,
//   }
// );
const ImageSlider = () => {
  const images = Array.from(
    { length: 9 },
    (_, i) => `https://picsum.photos/300/200?random=${i + 1}`
  );

  return (
    <div className="w-full  mx-auto py-8">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          340: {
            slidesPerView:1,
            spaceBetween:10,
            navigation:false
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation:{
              nextEl:'.swiper-button-next',
              prevEl:'.swiper-button-prev',
            }
          }
        }}
        
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>

              <Link href={"/tours/tour1"}>
            <div className="flex flex-col items-center gap-3">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
              <div className="flex justify-center items-center font-semibold text-lg">
                تور {index + 1}
                </div>
            </div>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
