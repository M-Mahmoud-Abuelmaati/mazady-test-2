"use client";

import navbarItems from "@/constants/navbarItems";
import { NavItem } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import NavbarItem from "./Item";
import AppButton from "./AppButton";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [selectedItem, setSelectedItem] = useState<NavItem>(
    navbarItems?.at(0)!
  );

  const handleClick = (item: NavItem) => setSelectedItem(item)
  return (
    <div className="py-3 px-4 lg:px-[84px] bg-white w-full h-[64px] flex items-center justify-between">
      <div className="flex items-center gap-1 lg:hidden">
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
        <Image src={"/logo.svg"} alt="logo" width={108} height={43} />
      </div>
      <div className="hidden lg:flex items-center gap-8">
        <Image src={"/logo.svg"} alt="logo" width={108} height={43} />
        {navbarItems?.map((item) => (
          <NavbarItem item={item} selected={selectedItem.name === item.name} onClick={handleClick} />
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center divide-[#FFEAD2] divide-x">
          <div className="shrink-0 px-6">
            <Image src="/search.svg" alt="Search" width={24} height={24} />
          </div>
          <div className="shrink-0 px-6">
            <Image
              src="/notification.svg"
              alt="Notification"
              width={24}
              height={24}
            />
          </div>

          <div className="shrink-0 px-6">
            <Image
              src="/hala.svg"
              alt="Search"
              width={24}
              height={24}
              className=" rounded-full"
            />
          </div>
        </div>
        <AppButton
          title="Add New Product"
          icon="/add.svg"
          className="hidden lg:flex"
        />
        <div className="hidden lg:flex items-center divide-[#E0E0E0] divide-x gap-2">
          <Image
            src="/language.svg"
            alt="language"
            width={24}
            height={24}
            className="hidden lg:flex"
          />
          <p className="pl-2 text-bold hidden lg:flex">EN</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
