import Seates from "@/components/layout/seates";
import SeatIcon from "@/components/ui/seatIcon";
import { Divider } from "antd";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: {slug: string}
}


export async function generateStaticParams() {
  return [{slug:"tour1"}]
}
const Page: React.FC<PageProps> = ({params}) => {

  const price = 2500000
  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <Image
        alt=""
        src={"/img/arg.webp"}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full md:w-[60%]  h-80 md:h-140 md:rounded-2xl"
      />
      <div className="flex flex-col w-full md:px-0 md:w-[70%] gap-20 md:text-xl">
        <div className="flex flex-col gap-2 px-4">
          <h1 className="text-2xl md:text-3xl">نام تور</h1>
          <p className="text-justify leading-[2] tracking-normal [text-justify:inter-word]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="bg-neutral-light flex flex-col gap-15 rounded-xl py-15 [&>*]:pr-10 md:[&>*]:pr-15">
          <h2 className="text-2xl w-full border-r-4 border-deep-blue flex gap-5 items-center">
            <svg
              className="fill-deep-blue w-10"
              version="1.1"
              id="Uploaded to svgrepo.com"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  className="stone_een"
                  d="M18,16h9v10c0,1.657-1.343,3-3,3H8c-1.657,0-3-1.343-3-3V16h9v1c0,0.552,0.448,1,1,1h2 c0.552,0,1-0.448,1-1V16z M17,14h-2v3h2V14z M27,12v3h-9v-1c0-0.552-0.448-1-1-1h-2c-0.552,0-1,0.448-1,1v1H5v-3 c0-1.657,1.343-3,3-3h4V4c-0.552,0-1-0.448-1-1c0-1.657,1.343-3,3-3h4c1.657,0,3,1.343,3,3c0,0.552-0.448,1-1,1v5h4 C25.657,9,27,10.343,27,12z M19,4c-0.552,0-1-0.448-1-1h-4c0,0.552-0.448,1-1,1v5h6V4z M22,32c1.105,0,2-0.895,2-2h-4 C20,31.105,20.895,32,22,32z M10,32c1.105,0,2-0.895,2-2H8C8,31.105,8.895,32,10,32z"
                ></path>{" "}
              </g>
            </svg>
            <span>برنامه تور</span>
          </h2>
          <span className="">تاریخ حرکت: ۱۴۰۴/۱۰/۱۲</span>
          <ul className="list-decimal flex flex-col gap-5 ">
            <div>مسیر ها:</div>
            <li>حرکت به سمت </li>
            <li>بازدید از ارگ</li>
            <li>صرف بستنی و نوشیدنی</li>
          </ul>
          <Divider className="bg-deep-blue" />
          <h2 className="text-2xl w-full border-r-4 border-deep-blue flex gap-5 items-center">
            <svg
              className="w-10 fill-deep-blue"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  {" "}
                  <path
                    className="st0"
                    d="M399.151,0.039c-35.093-1.211-64.489,26.244-65.692,61.337c-1.219,35.093,26.245,64.507,61.33,65.718 c35.084,1.21,64.498-26.262,65.699-61.347C461.708,30.663,434.235,1.249,399.151,0.039z"
                  ></path>{" "}
                  <path
                    className="st0"
                    d="M382.245,153.356c-24.019-9.49-51.188,2.279-60.661,26.324v-0.027l-50.761,126.788l-99.12-29.164 c-21.464-8.173-45.464,2.092-54.358,23.28L54.021,466.845c-6.961,16.56,0.828,35.646,17.414,42.608 c16.585,6.961,35.663-0.837,42.625-17.404l65.78-120.655l76.24,30.17c45.17,18.606,77.068,0,95.665-45.179l56.833-142.35 C418.059,190.007,406.29,162.846,382.245,153.356z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span>انتخاب صندلی</span>
          </h2>
          <div className="flex flex-col items-center md:items-start !pr-0 gap-10 md:justify-around md:flex-row">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="flex">
                  <span className="my-auto">قابل خرید:</span>
                  <SeatIcon className="fill-seat-available w-18 h-18 hover:opacity-100 !cursor-default" />
                </div>
                <div className="flex">
                  <span className="my-auto">غیر قابل خرید:</span>
                  <SeatIcon className="fill-seat-unavailable w-18 h-18 hover:opacity-100 !cursor-default" />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <span className="my-auto">انتخاب شده:</span>
                  <SeatIcon className="fill-seat-selected w-18 h-18 hover:opacity-100 !cursor-default" />
                </div>
                <div className="flex">
                  <span className="my-auto">رزرو شده:</span>
                  <SeatIcon className="fill-seat-reserved w-18 h-18 hover:opacity-100 !cursor-default" />
                </div>
              </div>
            </div>
            <Seates />
          </div>
          <Divider className="bg-deep-blue" />
          <h2 className="text-2xl w-full border-r-4 border-deep-blue flex gap-5 items-center">
            <svg
              className="w-10 fill-deep-blue"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    className="st0"
                    d="M259.993,460.958c14.498,14.498,75.487-23.002,89.985-37.492l59.598-59.606l-52.494-52.485l-59.597,59.597 C282.996,385.462,245.504,446.46,259.993,460.958z"
                  ></path>{" "}
                  <path
                    className="st0"
                    d="M493.251,227.7c-14.498-14.49-37.996-14.49-52.485,0l-71.68,71.678l52.494,52.486l71.671-71.68 C507.741,265.695,507.741,242.198,493.251,227.7z M399.586,308.882l-9.008-8.999l50.18-50.18l8.991,8.99L399.586,308.882z"
                  ></path>
                  <path
                    className="st0"
                    d="M374.714,448.193c-14.071,14.055-67.572,51.008-104.791,51.008c-0.008,0,0,0-0.008,0 c-17.47,0-28.484-7.351-34.648-13.516c-44.758-44.775,36.604-138.56,37.492-139.439l4.123-4.124 c-3.944-4.354-5.644-10.348-5.644-22.302c0-8.836,0-25.256,0-40.403c11.364-12.619,15.497-11.048,25.103-60.596 c19.433,0,18.178-25.248,27.34-47.644c7.479-18.238,1.212-25.632-5.072-28.655c5.14-66.463,5.14-112.236-70.296-126.435 c-27.349-23.438-68.606-15.48-88.158-11.57c-19.536,3.911-37.159,0-37.159,0l3.355,31.49 C97.74,70.339,112.05,116.112,107.44,142.923c-5.994,3.27-11.407,10.809-4.269,28.254c9.17,22.396,7.906,47.644,27.339,47.644 c9.614,49.548,13.747,47.976,25.111,60.596c0,15.148,0,31.567,0,40.403c0,25.248-8.58,25.684-28.134,36.612 c-47.14,26.35-108.572,41.659-119.571,124.01C5.902,495.504,92.378,511.948,213.434,512 c121.04-0.052,207.524-16.496,205.518-31.558c-3.168-23.702-10.648-41.547-20.68-55.806L374.714,448.193z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span>ثبت نام در تور</span>
          </h2>
          <div className="flex gap-2">
            <span>هزینه تور:</span>
            <span>{price.toLocaleString()} تومان</span>
          </div>
          <ul className="list-disc">
            <span className="font-bold mb-3">نکات مهم</span>
            <li className="mt-5">شرایط عودت وجه</li>
            <li>لوازم</li>
            <li>ایمنی</li>
          </ul>
          <button className="self-center flex justify-center cursor-pointer items-center bg-mid-blue text-cloud-white text-center py-5 !px-20 rounded-xl">
            <span>رزرو کن!</span>
          </button>
          <div className="pb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
















