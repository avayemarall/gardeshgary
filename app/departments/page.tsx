"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import img1 from "@/public/img/guitar.jpg";
import img2 from "@/public/img/hamtar.jpg";
import img3 from "@/public/img/santor.jpg";
import { Breadcrumb, ConfigProvider } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

const courses = [
  { title: "گیتار", img: img1 },
  { title: "سه تار", img: img2 },
  { title: "سنتور", img: img3 },
];

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <ConfigProvider direction="rtl">
        <Breadcrumb
          className="!mr-3"
          items={[
            {
              title: <HomeOutlined />,
              href: "/",
            },
            {
              title: "دپارتمان موسیقی",
            },
          ]}
        />
      </ConfigProvider>
      <div className="flex flex-col gap-14">
        <h2 className="font-bold text-xl text-center">
          کلاس‌های دپارتمان موسیقی
        </h2>
        <div className="w-full max-w-4xl mx-auto px-4">
          <Swiper
            effect="fade"
            modules={[Autoplay, Navigation, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            loop
            className="w-full h-90 rounded-2xl"
          >
            {courses.map((c, ind) => (
              <SwiperSlide key={ind} className="w-full h-full rounded-2xl">
                <div className="relative w-full h-full rounded-2xl">
                  <Link href={"/departments/guitar/12"}>
                  <Image
                    alt={c.title}
                    src={c.img}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800/100 to-transparent flex items-center justify-center">
                    <h3 className="text-white text-2xl font-semibold">
                      {c.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Page;
