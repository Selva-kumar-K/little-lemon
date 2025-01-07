import React from "react";
import Image from "next/image";
import HeroPic from "../../public/Hero Pic.svg";

export default function HeroSection() {
  return (
    <section className="bg-[#495E57] lg:h-[58vh]">
      <div className="xl:w-[70%] xl:mx-auto py-5 px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="space-y-8 ">
            <div className="">
              <h1 className="font-markazi text-[35px] lg:text-markazi_heading text-[#F4CE14]">
                Little Lemon
              </h1>
              <p className="font-markazi text-[30px] lg:text-[40px] text-[#EDEFEE]">Chicago</p>
            </div>
            <div>
              <p className="font-karla text-karla text-[#EDEFEE] lg:w-[340px]">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
            </div>
            <button className="bg-[#F4CE14] font-karla text-karla rounded-full px-[38px] py-[11px] cursor-pointer my-5 hover:bg-[#F4CE14]/90 hover:text-white/90 transition duration-100 delay-150">
              Reserve a Table
            </button>
          </div>
          <div className="drop-shadow-lg hidden lg:block">
            <Image
              src={HeroPic}
              alt="Little Lemon Logo"
              width={400}
              height={450}
              className="relative top-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
