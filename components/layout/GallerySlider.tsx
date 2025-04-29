'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import React, { useState } from 'react';
import Link from 'next/link';
const GallerySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const images = Array.from({ length: 6 }, (_, i) => `https://picsum.photos/800/500?random=${i + 1}`);

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <Swiper
        modules={[Autoplay, Thumbs, Navigation]}
        spaceBetween={10}
        navigation
        dir='rtl'
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        className="mb-4 rounded-xl overflow-hidden shadow-lg"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Link href={"/past-tours/1"}>
            
            <img
              src={img}
              alt={`Tour ${i + 1}`}
              className="w-full md:h-120 object-cover"
            />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640:{
            slidesPerView:4,
            spaceBetween:10
          }
        }}
        watchSlidesProgress
        modules={[Thumbs]}
        className="rounded-lg"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-[100px] object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;