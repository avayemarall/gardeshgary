"use client";
import { Menu, MenuProps } from "antd";
import React, { useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  type MenuItem = Required<MenuProps>["items"][number];
  const [isOpen, setIsOpen] = useState(false);

  const items: MenuItem[] = [
    {
      key: "sub1",
      label: "Navigation One",
      children: [
        {
          key: "g1",
          label: "Item 1",
          type: "group",
          children: [
            { key: "1", label: "Option 1" },
            { key: "2", label: "Option 2" },
          ],
        },
        {
          key: "g2",
          label: "Item 2",
          type: "group",
          children: [
            { key: "3", label: "Option 3" },
            { key: "4", label: "Option 4" },
          ],
        },
      ],
    },
    {
      key: "sub2",
      label: "Navigation Two",
      children: [
        { key: "5", label: "Option 5" },
        { key: "6", label: "Option 6" },
        {
          key: "sub3",
          label: "Submenu",
          children: [
            { key: "7", label: "Option 7" },
            { key: "8", label: "Option 8" },
          ],
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub4",
      label: "Navigation Three",
      children: [
        { key: "9", label: "Option 9" },
        { key: "10", label: "Option 10" },
        { key: "11", label: "Option 11" },
        { key: "12", label: "Option 12" },
      ],
    },
    {
      key: "grp",
      label: "Group",
      type: "group",
      children: [
        { key: "13", label: "Option 13" },
        { key: "14", label: "Option 14" },
      ],
    },
  ];
  return (
    <>
     <div className={`w-full h-16 shadow-xs fixed top-0 left-0 ${isOpen ? "z-30" : "z-50"} bg-white`}>
        <div className="md:hidden flex flex-col p-5">
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
            <span>آموزشکاه</span>
          </div>
        </div>
      </div>

      <div 
      onClick={() => setIsOpen(false)}
      className={`w-screen h-screen bg-[#949494b4] absolute top-0 left-0 z-40 ${isOpen ? "opacity-100" : "opacity-0"}`}>
    </div>
      <div
        className={`!w-[60%] h-screen z-50 fixed top-0 right-0 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Menu
          mode="inline"
          className="w-full h-full opacity-100"
          items={items}
        />
        </div>
    </>
  );
};

export default Header;
