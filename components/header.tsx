"use client";
import { Input, Menu, MenuProps } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  type MenuItem = Required<MenuProps>["items"][number];
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    if(isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },[isOpen])
  const items: MenuItem[] = [
    {
      key:"close",
      icon:<CloseOutlined />,
      className: "flex [&>span]:justify-left", 
    },
    {
      key: "sub1",
      label: "دوره ها",
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
      label: "مجله"
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
  return (
    <>
     <div className={`w-full h-auto shadow-md overflow-y-auto text-dark-gray relative top-0 left-0 ${isOpen ? "z-30" : "z-50"} bg-custom-white`}>
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
          addonBefore={<SearchOutlined />} placeholder="جستجو کنید" />
        </div>
      </div>

      <div 
      onClick={() => setIsOpen(false)}
      className={`w-screen h-screen bg-[#949494b4] absolute top-0 left-0 z-40 ${isOpen ? "opacity-100" : "opacity-0"}`}>
    </div>
      <div
        className={`!w-[60%] h-screen text-dark-gray z-50 fixed top-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Menu
          mode="inline"
          className="w-full h-full opacity-100"
          items={items}
          onClick={({key}) => {
            if(key === 'close') {
              setIsOpen(false);
            }
          }}
        />
        </div>
    </>
  );
};

export default Header;
