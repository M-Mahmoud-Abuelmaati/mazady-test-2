"use client";

import { NavItem } from "@/types";
import clsx from "clsx";
import React from "react";

interface NavbarItemProps {
  item: NavItem;
  selected?: boolean;
  onClick: (item: NavItem) => void;
}

const NavbarItem = ({ item, selected, onClick }: NavbarItemProps) => {
  return (
    <span
      className={clsx(
        "text-lg cursor-pointer",
        selected ? "text-[#D20653] font-bold" : "text-[#828282]"
      )}
      onClick={() => onClick(item)}
    >
      {item.name}
    </span>
  );
};

export default NavbarItem;
