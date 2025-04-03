"use client";
import { ConfigProvider, Input, Menu, MenuProps, Popover } from "antd";
import {
  CloseOutlined,
  DownOutlined,
  LeftOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";

interface HeaderProps {}
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "close",
    icon: <CloseOutlined />,
    className: "flex [&>span]:justify-left",
  },
  {
    key: "sub1",
    label: "دپارتمان موسیقی",
    children: [
      {
        key: "g1",
        label: "دوره اول",
      },
      {
        key: "g2",
        label: "دوره دوم",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub2",
    label: "مجله",
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "شهریه دوره ها",
  },
  {
    type: "divider",
  },
  {
    key: "grp",
    label: "درباره ما",
    children: [
      { key: "13", label: "درباره ما" },
      { key: "14", label: "تماس با ما" },
    ],
  },
];
const desktopCourses = [
  {
    key: "sub1",
    label: "دپارتمان موسیقی",
    children: [
      {
        key: "1",
        label: "ساز های زخمه ای",
        children: [{ key: "child1", label: "1" }],
      },
      {
        key: "2",
        label: "ساز های بادی",
      },
      {
        key: "3",
        label: "ساز های زهی",
      },
      {
        key: "4",
        label: "ساز های کوبه ای",
      },
      {
        key: "5",
        label: "ساز های کلاسیک غربی",
      },
      {
        key: "6",
        label: "آواز و صدا سازی",
      },
      {
        key: "7",
        label: "آموزش موسیقی کودک",
      },
    ],
  },
  {
    key: "syb2",
    label: "دپارتمان کامپیوتر",
    children: [
      {
        key: "8",
        label: "icdl",
      },
      {
        key: "9",
        label: "هوش مصنوعی",
      },
      {
        key: "10",
        label: "python",
      },
      {
        key: "11",
        label: "طراحی سایت",
      },
      {
        key: "12",
        label: "امنیت شبکه",
      },
      {
        key: "13",
        label: "پایگاه داده",
      },
      {
        key: "14",
        label: "iot",
      },
    ],
  },
  {
    key: "syb3",
    label: "دپارتمان رباتیک",
    children: [
      {
        key: "15",
        label: "الکترونیک",
      },
      {
        key: "16",
        label: "مکانیک",
      },
      {
        key: "17",
        label: "اردیونو",
      },
      {
        key: "18",
        label: "سالید",
      },
      {
        key: "19",
        label: "کارگاه ساخت ربات",
      },
      {
        key: "20",
        label: "پردازش تصویر",
      },
    ],
  },
  {
    key: "syb4",
    label: "دپارتمان گردشگری",
    children: [
      {
        key: "21",
        label: "iot",
      },
      {
        key: "22",
        label: "iot",
      },
    ],
  },
];
const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`w-full h-auto shadow-md overflow-y-auto text-dark-gray relative top-0 left-0 ${
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
          className="w-full h-full opacity-100"
          items={items}
          onClick={({ key }) => {
            if (key === "close") {
              setIsOpen(false);
            }
          }}
        />
      </div>
      {/* Desktop Header */}
      <div className="hidden md:flex sticky top-0 left-0 z-50 shadow-2xl gap-50 py-10 items-center justify-center px-8 bg-custom-white">
        <span>لوگو آموزشگاه</span>
        <ul className="[&>*]:cursor-pointer flex gap-5">
          <ConfigProvider direction="rtl">
            <Popover
              className="flex gap-2 items-center"
              content={<Menu items={desktopCourses} />}
            >
              <span>دوره ها</span>
              <DownOutlined className="w-3 h-3" />
            </Popover>
          </ConfigProvider>
          <span>شهریه کلاس ها</span>
        </ul>
        <Input
          className="!w-fit [&_.ant-input-group-addon]:!bg-medium-blue border-amber-300 [&_.ant-input-group-addon_svg]:!fill-white"
          addonBefore={<SearchOutlined />}
          placeholder="جستجو کنید"
        />
      </div>
    </>
  );
};

export default Header;
