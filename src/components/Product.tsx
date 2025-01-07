import React from "react";
import Image1 from "./../../public/image1.png";
import Scooter from "./../../public/scooter.svg";
import Image, { StaticImageData } from "next/image";

interface Product {
  image: StaticImageData;
  name: string;
  price: number;
  details: string;
}

export default function Product({ image, name, price, details }: Product) {
  return (
    <div className={`w-full md:w-[60%] lg:w-[300px] flex flex-col place-content-stretch rounded-md overflow-hidden drop-shadow-lg`}>
      <div>
        <Image src={image} alt="image" className="w-full bg-cover" />
      </div>

      <div className="bg-[#D9D9D9] flex flex-col justify-between flex-grow p-3 space-y-5" >
        <div className="flex justify-between items-center">
          <h1 className="font-markazi font-semibold text-[20px]">{name}</h1>
          <h1 className="font-karla text-[20px] text-[#F4CE14] font-semibold">
            ${price}
          </h1>
        </div>
        <div>
          <p className="text-[#495E57] font-karla text-karla">{details}</p>
        </div>
        <div>
          <p className="font-semibold font-karla text-karla flex items-center gap-2">
            Order Delivery{" "}
            <span>
              <Image src={Scooter} alt="scooter" width={20} height={20} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
