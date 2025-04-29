"use client";
import { ConfigProvider, Input, Menu, MenuProps, Popover } from "antd";
import {
  CloseOutlined,
  DownOutlined,
  LeftOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/img/logo.png";
interface HeaderProps {}
type MenuItem = Required<MenuProps>["items"][number];

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCourses, setMobileCourses] = useState<MenuItem[]>([
    {
      key: "close",
      icon: <CloseOutlined />,
      className: "flex [&>span]:justify-left",
    },
    {
      type: "divider",
    },
    {
      key: "home",
      label: "خانه",
      
    },
    {
      type: "divider",
    },
    {
      key: "login",
      label: "ورود و ثبت نام",
      
    },
    {
      type: "divider",
    },
    {
      key:"1",
      label:"تور های ادبی"
    },
    {
      key:"2",
      label:"تور های قرهنکی"
    },
    {
      key:"3",
      label:"تور های زیارتی"
    },
    {
      key:"4",
      label:"تور های گردشی"
    },
  ]);
  const router = useRouter();
 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      {/* Mobile Header */}
      <div
        className={`w-full h-auto shadow-md bg-deep-blue text-cloud-white overflow-y-auto text-dark-gray relative top-0 left-0 ${
          isOpen ? "z-30" : "z-50"
        } bg-custom-white`}
      >
        <div className="md:hidden flex flex-col p-5 gap-7">
          <div className="flex justify-between items-center">
            <button className="mr-4" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <span>لوگو آموزشگاه</span>
          </div>
          <Input
            className="!w-[80%] !mx-auto self-center relative [&_.ant-input-group-addon]:!bg-medium-blue [&_.ant-input-group-addon_svg]:!fill-white"
            addonBefore={<SearchOutlined />}
            placeholder="جستجو کنید"
          />
        </div>
      </div>

      <div
        onClick={() => setIsOpen(false)}
        className={`w-screen h-screen bg-[#949494b4] md:hidden absolute top-0 left-0 ${
          isOpen ? "opacity-100 z-40" : "opacity-0 -z-1"
        }`}
      ></div>
      <div
        className={`!w-[60%] h-screen md:hidden text-dark-gray z-50 fixed top-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Menu
          mode="inline"
          className="w-full h-full opacity-100 overflow-y-auto !bg-cloud-white [&_.ant-menu]:!text-deep-blue"
          items={mobileCourses}
          onClick={({ key }) => {
            if (key === "close") {
              setIsOpen(false);
            } else if(key === "home"){
              router.push("/");
              setIsOpen(false);
            } else if (key === "login") {
              router.push("/signup");
              setIsOpen(false);
            } else if ( key === "gallery") {
              router.push("/past-tours");
              setIsOpen(false);
            }
          }}
        />
      </div>
      {/* Desktop Header */}
      <div className="hidden md:flex sticky top-0 left-0 z-50 shadow-xl gap-50 py-5 items-center justify-beetween px-8 bg-deep-blue text-cloud-white">
        <div className="flex gap-7">
          <Image alt="" src={logo} width={200} height={200} />

          <ul className="[&>*]:cursor-pointer flex justify-baseline items-center gap-10 text-lg">
            <Link href={"/"}>خانه</Link>
            <ConfigProvider direction="rtl">
              <Popover
                className="flex gap-2 items-center"
                content={<Menu items={[
                  {key:"1",label:"تور های ادبی",onClick: ()=> router.push("/tours/4")},
                  {key:"2",label:"تور های فرهنگی",onClick: ()=> router.push("/tours/4")},
                  {key:"3",label:"تور های زیارتی",onClick: ()=> router.push("/tours/4")},
                  {key:"4",label:"تور های گردشی",onClick: ()=> router.push("/tours/4")},
                
                ]} />}
              >
                
                تور ها
                <DownOutlined className="w-3 h-3" /> 
              </Popover>
            </ConfigProvider>
            {/* <Link href={"/signup"}>ورود به سایت</Link> */}
            <Link href={""}>درباره ما</Link>
          </ul>
        </div>
        <Input
          className="!w-fit [&_.ant-input-outlined]:!bg-cloud-white [&>input]:!hidden [&_.ant-input-group-addon]:!bg-forest-green border-amber-300 [&_.ant-input-group-addon_svg]:!fill-white"
          addonBefore={<SearchOutlined />}
          placeholder="جستجو کنید"
        />
        <div className="flex gap-6">
          <Link href={"/signup"}>
            <UserOutlined className="[&>svg]:w-6 [&>svg]:h-6" />
          </Link>
          <svg
            className="w-7 fill-cloud-white"
            viewBox="-19.77 0 122.88 122.88"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
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
                <path d="M11.29,25.24h57.97h2.8c3.11,0,5.93,1.27,7.98,3.32c2.05,2.05,3.32,4.87,3.32,7.98v69.02c0,3.11-1.27,5.93-3.32,7.98 c-2.03,2.02-4.81,3.29-7.88,3.31v2.01c0,2.22-1.81,4.03-4.03,4.03l0,0c-2.22,0-4.03-1.81-4.03-4.03v-2H19.26v2 c0,2.22-1.81,4.03-4.03,4.03l0,0c-2.22,0-4.03-1.81-4.03-4.03v-2.01c-3.07-0.03-5.86-1.29-7.88-3.31C1.27,111.48,0,108.66,0,105.55 V36.53c0-3.11,1.27-5.93,3.32-7.98C5.36,26.51,8.19,25.24,11.29,25.24L11.29,25.24z M17.63,0h48.44c0.56,0,1.02,0.46,1.02,1.02 v6.56c0,0.56-0.46,1.02-1.02,1.02H58.8V22h-4.28V8.59H29.65V22h-4.28V8.59h-7.74c-0.56,0-1.02-0.46-1.02-1.02V1.02 C16.62,0.46,17.08,0,17.63,0L17.63,0z M49.58,45.9v5.11c0,0.49-0.2,0.94-0.52,1.26c-0.33,0.32-0.77,0.53-1.26,0.53H36.7 c-0.49,0-0.94-0.2-1.26-0.52c-0.32-0.32-0.52-0.77-0.52-1.26V45.9h-9.24c-2.55,0-4.59-0.99-6.18-2.58 c-1.74-1.74-2.89-4.19-3.58-6.78l-2.05-7.77h-2.58c-2.13,0-4.07,0.87-5.48,2.28c-1.41,1.41-2.28,3.35-2.28,5.48v69.02 c0,2.13,0.87,4.07,2.28,5.48c1.41,1.41,3.35,2.28,5.48,2.28h60.77c2.13,0,4.07-0.87,5.48-2.28c1.41-1.41,2.28-3.35,2.28-5.48V36.53 c0-2.13-0.87-4.07-2.28-5.48c-1.41-1.41-3.35-2.28-5.48-2.28h-1.37l-1.64,7.69c-0.56,2.62-1.71,5.07-3.45,6.81 c-1.63,1.63-3.74,2.64-6.32,2.64H49.58L49.58,45.9z M18.34,100.41c-0.97,0-1.76-0.79-1.76-1.76c0-0.97,0.79-1.76,1.76-1.76h46.94 c0.97,0,1.76,0.79,1.76,1.76c0,0.97-0.79,1.76-1.76,1.76H18.34L18.34,100.41z M18.34,83.37c-0.97,0-1.76-0.79-1.76-1.76 s0.79-1.76,1.76-1.76h46.94c0.97,0,1.76,0.79,1.76,1.76s-0.79,1.76-1.76,1.76H18.34L18.34,83.37z M18.34,66.33 c-0.97,0-1.76-0.79-1.76-1.76c0-0.97,0.79-1.76,1.76-1.76h46.94c0.97,0,1.76,0.79,1.76,1.76c0,0.97-0.79,1.76-1.76,1.76H18.34 L18.34,66.33z M17.52,28.77l1.81,6.87c0.54,2.04,1.4,3.92,2.67,5.18c0.95,0.95,2.17,1.55,3.68,1.55h33.61 c1.56,0,2.84-0.62,3.83-1.61c1.24-1.24,2.08-3.06,2.5-5.04l1.48-6.96H17.52L17.52,28.77z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
