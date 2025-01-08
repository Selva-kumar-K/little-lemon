import Image from "next/image";
import React from "react";
import AboutImage from "../../public/about.png";

export default function About() {
  return (
    <section className="bg-[#EDEFEE] ">
      <div className="xl:w-[70%] xl:mx-auto py-10 px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="space-y-8 ">
            <div className="">
              <h1 className="font-markazi text-[35px] lg:text-markazi_heading text-[#495E57] drop-shadow-lg">
                Little Lemon
              </h1>
              <p className="font-markazi text-[30px] lg:text-[40px] text-[#333333]">
                Chicago
              </p>
            </div>
            <div>
              <p className="font-karla text-karla lg:w-[370px] drop-shadow-md">
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment the restaurant features a locally sourced menu with
                daily specials.Little Lemon is a charming neighborhood bistro
                that serves simple food and classic cocktails in a lively but
                casual environment the restaurant features a locally sourced
                menu with daily specials.
              </p>
            </div>
          </div>
          <div className="drop-shadow-lg hidden lg:block">
            <Image
              src={AboutImage}
              alt="Little Lemon Logo"
              width={500}
              height={450}
              className="relative top-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
