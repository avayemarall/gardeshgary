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
import { Breadcrumb, ConfigProvider, Segmented } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const courses = [
  { title: "گیتار", img: img1 },
  { title: "سه تار", img: img2 },
  { title: "سنتور", img: img3 },
];

const Page = () => {
  const [value, setValue] = useState<string>('زهی');
  const router = useRouter()
  return (
    <div className="w-full flex flex-col gap-20 md:mt-10">
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
      <div className="flex flex-col gap-14 ">
        <h2 className="font-bold text-xl text-center md:text-2xl">
          کلاس‌های دپارتمان موسیقی
        </h2>
        <Segmented<string> 
        value={value}
        onChange={(e) => {setValue(e);router.push("/departments/zehi")}}
        options={['زهی','کوبه ای']}   
        className="!bg-medium-blue w-[max-content] self-center rounded-lg overflow-hidden"
        style={{
          '--segmented-bg': '#1E3A8A',
          '--segmented-selected-bg': '#F3F4F6',
          '--segmented-selected-color': '#1E3A8A',
          '--segmented-color': '#FFFFFF',
        } as React.CSSProperties}
      />
        <div className="w-full max-w-4xl md:max-w-[60%] mx-auto px-4">
          <Swiper
            effect="fade"
            modules={[Autoplay, Navigation, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            loop
            className="w-full h-90 md:h-150 rounded-2xl"
          >
            {courses.map((c, ind) => (
              <SwiperSlide key={ind} className="w-full h-full rounded-2xl">
                <div className="relative w-full h-full rounded-2xl">
                  <Link href={"/departments/music-departments/sitar"}>
                  <Image
                    alt={c.title}
                    src={c.img}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800/100 to-transparent flex items-center justify-center">
                    <span className="text-custom-white text-2xl font-semibold">
                      {c.title}
                    </span>
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
