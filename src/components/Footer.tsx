import Image from "next/image";
import React from "react";
import FooterLogo from "./../../public/footerLogo 1.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#495E57] p-20 ">
      <div className="font-inika text-inika text-[#EDEFEE] flex flex-col justify-between space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
        <div>
          <Image src={FooterLogo} alt="logo" className="bg-cover w-32" />
        </div>
        <div className="space-y-7">
          <h1 className="underline">Doormat Navigation</h1>
          <ul className="flex flex-col space-y-3 cursor-pointer">
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Home
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              About
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Menu
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Order Online
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Reservation
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Login
            </Link>
          </ul>
        </div>
        <div className="space-y-7">
          <h1 className="underline">Contacts</h1>
          <ul className="flex flex-col space-y-3 cursor-pointer">
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Address
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Phone Number
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Email
            </Link>
          </ul>
        </div>
        <div className="space-y-7">
          <h1 className="underline">Social Media Links</h1>
          <ul className="flex flex-col space-y-3 cursor-pointer">
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Address
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Phone Number
            </Link>
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Email
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
