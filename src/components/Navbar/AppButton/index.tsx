import Image from "next/image";
import React from "react";

interface AppButtonProps {
  title: string;
  icon?: string;
  onClick?: VoidFunction;
  className?: string;
}

const AppButton = ({ title, icon, className }: AppButtonProps) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#D20653] to-[#FF951D] py-2 px-4 text-white rounded-lg text-sm flex items-center justify-center gap-2 ${className}`}
    >
      {icon && (
        <Image className="block m-auto" src={icon} alt="button-icon" width={18} height={18} />
      )}
      {title}
    </button>
  );
};

export default AppButton;
