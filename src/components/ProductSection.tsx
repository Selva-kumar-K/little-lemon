import React from "react";
import Product from "./Product";
import products from "@/libs/product";

export default function ProductSection() {
  return (
    <div className="xl:w-[70%] xl:mx-auto py-5 px-5 xl:px-0 my-20">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <h1 className="font-markazi text-[30px] lg:text-markazi_heading">
          This week’s specials!
        </h1>
        <div>
          <button className="bg-[#F4CE14] font-karla text-karla rounded-full px-[20px] py-[8px] cursor-pointer my-5 hover:bg-[#F4CE14]/90 hover:text-white/90 transition duration-100 delay-150 drop-shadow-md">
            Order Online
          </button>
        </div>
      </div>
    
      <div className="flex flex-col justify-center items-center space-y-10 lg:flex-row lg:justify-between my-10 lg:space-y-0 lg:items-stretch lg:space-x-10">
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              details={product.details}
              image={product.image}
            />
          ))}
      </div>
    </div>
  );
}
