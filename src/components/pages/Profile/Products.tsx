import AppButton from "@/components/Navbar/AppButton";
import ProductCard from "@/components/ProductCard";
import products from "@/constants/products";
import React from "react";

interface ProductsProps {}

const Products = ({}: ProductsProps) => {
  return (
    <div
      className={`bg-white px-6 py-4 rounded-2xl w-full flex flex-col gap-4 h-full`}
    >
      <div className="lg:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="rounded-2xl text-sm border px-4 py-1 bg-[#FFF5E9] border-[#FF951D] text-[#FF951D]">
            Products
          </button>
          <button className="rounded-2xl text-sm border border-[#E0E0E0] px-4 py-1 text-[#828282]">
            Articles
          </button>
          <button className="rounded-2xl text-sm border border-[#E0E0E0] px-4 py-1 text-[#828282]">
            Reviews
          </button>
        </div>
        <AppButton
          className="hidden lg:flex"
          title="Add Review"
          icon="/add.svg"
        />
      </div>
      <div className="flex items-center my-6">
        <h2 className="text-2xl font-bold mr-1">Products</h2>
        <span className="text-xs text-[#828282]">(12)</span>
      </div>
      <div className="flex flex-col gap-2 overflow-auto">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
