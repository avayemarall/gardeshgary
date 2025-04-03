"use client";
import MyDivider from "@/components/ui/divider";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, ConfigProvider } from "antd";
import React from "react";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div className="w-full flex flex-col gap-20 px-3">
      <ConfigProvider direction="rtl">
        <Breadcrumb
          className=" [&>ol>li:last-child]:!text-dark-blue"
          items={[
            {
              title: <HomeOutlined />,
              href: "/",
            },
            {
              href: "/departments",
              title: "دپارتمان موسیقی",
            },
            {
              href: "",
              title: "ساز های زهی",
            },
            {
              title: "سه تار",
            },
          ]}
        />
      </ConfigProvider>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-2xl self-center">آموزش سه تار</h1>
        <p className="text-justify leading-[2] tracking-normal [text-justify:inter-word]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="relative border-[1px] border-dark-blue py-4 rounded-lg pb-10">
        <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-gray px-4 text-gray-700 font-bold">
          سر فصل ها
        </h3>
        <div className="mt-4 space-y-2 flex flex-col">
          <svg
            viewBox="0 0 1024 1024"
            className="icon w-1/4 self-center fill-medium-blue"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M513.147 584.708c-15.947 0-39.468-1.747-61.040-10.031l-172.596-66.501h-84.542v103.565c0 31.84 23.684 67.975 52.884 80.663l208.987 90.967c29.2 12.688 76.605 12.743 105.841 0.127l211.263-91.222c29.218-12.615 52.921-48.697 52.921-80.537v-103.565h-93.298l-152.954 64.48c-18.386 7.773-42.38 12.051-67.466 12.051zM46.313 372.991l416.19 160.363c29.728 11.433 77.605 10.686 106.951-1.693l397.458-167.536v247.18l-24.558 81.938h71.015l-25.413-82.794v-256.319h-0.71c17.167-11.833 13.162-26.596-12.252-35.681l-404.357-143.888c-30.001-10.704-78.479-10.25-108.299 0.946l-415.844 156.449c-29.819 11.214-29.891 29.6-0.182 41.033z"></path>
            </g>
          </svg>
          <ul className="flex flex-col gap-8 mx-8 list-decimal">
            <li>فصل اول</li>
            <li>فصل دوم</li>
            <li>فصل سوم</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 justify-between py-10 bg-dark-gray min-h-70 rounded-lg ">
        <div className="w-[80%] self-center bg-light-gray rounded-2xl flex gap-2 justify-center items-center py-3 shadow-lg shadow-mid-gray">
          <span>شهریه:</span>
          <span>{(1000000).toLocaleString()} تومان</span>
        </div>
        <div className="w-[80%] self-center bg-light-gray rounded-2xl flex gap-2 justify-center items-center py-3 shadow-lg shadow-mid-gray">
          <span>
            مدت زمان دوره:
          </span>
          <span className="flex gap-1">
            <span>30</span><span>ساعت</span>
          </span>
        </div>
        <div className="w-full text-light-gray flex flex-col gap-2 justify-center items-center py-2 h-auto">
          <span className="break-words">برای شرکت در دوره با این شماره تماس بگیرید</span>
          <span>071399999999</span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">ویدیو معرفی دوره</h1>
        <video
          src="/vid/vid1.mp4"
          controls
          className="w-full h-auto object-cover rounded-xl shadow-lg shadow-mid-gray
        md:self-e md:w-[40%]
        "
          autoPlay
          muted
          loop
          playsInline
        />
        <MyDivider className="w-[80%] self-center" />
      </div>
    </div>
  );
};

export default Page;
