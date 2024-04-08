"use client";

import Image from "next/image";
import React from "react";
import AppButton from "../../Navbar/AppButton";
interface TagProps {
  title: string;
  icon: string;
  value: number;
  total?: number;
}
const Tag = ({ title, icon, value, total }: TagProps) => {
  return (
    <div className="flex items-center w-full bg-[#FFF5E9] py-3 pl-2 pr-4 rounded-[18px] gap-1.5">
      <Image src={icon} alt="icon" width={24} height={24} />
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 items-end">
          <span className="font-bold leading-5">{value}</span>
          <span className="text-[#828282] text-xs">{total && `(${total})`}</span>
        </div>
        <span className="text-xs text-[#FF951D]">{title}</span>
      </div>
    </div>
  );
};

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <div
      className={`bg-white px-6 py-4 rounded-2xl w-full flex flex-col gap-4`}
    >
      <Image src="/hala.svg" alt="profile" width={100} height={100} />
      <h3 className="font-bold text-[#333] text-2xl">Hala Ahmed</h3>
      <p className="text-sm text-[#4f4f4f]">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
      <div className="flex flex-row md:flex-col xl:flex-row justify-between items-center w-full gap-3">
        <Tag icon="/following.svg" title="Following" value={5} />
        <Tag icon="/followers.svg" title="Followers" value={5} />
        <Tag icon="/rate.svg" title="Rate" value={5} total={15} />
      </div>
      <AppButton className="w-full" title="Follow" />
    </div>
  );
};

export default Profile;
