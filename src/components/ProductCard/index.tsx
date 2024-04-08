import { IProduct } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex gap-4 items-center relative">
      <div
        className={`relative min-w-[86px] min-h-[74px] lg:min-w-[145px] lg:min-h-[127px]`}
      >
        <Image
          src={product.image}
          alt="product-image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div
          className={clsx(
            `absolute bottom-0 right-[1px] text-white rounded-tl-[15px] lg:rounded-tl-[33.8px] rounded-br-[15px] lg:rounded-br-[33.8px] text-xs`,
            product.sale
              ? "bg-[#FF951D] py-0 lg:py-3 px-3 lg:px-8"
              : "bg-[#D20653] py-0 lg:py-3 px-2 lg:px-6"
          )}
        >
          <span className="text-[8px] lg:text-[12px]">
            {product.sale ? "Hot Sale" : "Live auction"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-sm xl:text-lg text-[#333333] line-clamp-1">{product.title}</h4>
        <p className="text-[#333333] text-sm xl:text-lg flex items-center gap-1">
          Starting Price
          <span className="text-sm xl:text-lg font-bold text-[#333333]">
            {`${product.price} EGP`}
          </span>
        </p>
        <div className="flex flex-col xl:flex-row xl:items-center gap-1">
          <p className="text-[#828282] text-sm xl:text-lg">Lot starts in</p>
          <div className="flex gap-2">
            <div className="px-2 py-1 bg-[#FFF5E9] rounded-xl lg:min-w-24 text-center">
              <p className="text-[#FF951D] text-sm xl:text-lg">
                2 <span className="text-xs">Days</span>
              </p>
            </div>
            <div className="px-2 py-1 bg-[#FFF5E9] rounded-xl lg:min-w-24 text-center">
              <p className="text-[#FF951D] text-sm xl:text-lg">
                10 <span className="text-xs">Hours</span>
              </p>
            </div>
            <div className="px-2 py-1 bg-[#FFF5E9] rounded-xl lg:min-w-24 text-center">
              <p className="text-[#FF951D] text-sm xl:text-lg">
                50 <span className="text-xs">Minutes</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={product.isFavorite ? "/favorite-filled.svg" : '/favorite.svg'}
        alt="product-image"
        className="absolute right-2 md:right-6 top-10 md:top-6 cursor-pointer md:w-7 md:h-7"
        width={32}
        height={32}
      />
    </div>
  );
};

export default ProductCard;
