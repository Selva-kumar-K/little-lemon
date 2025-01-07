"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/Logo 1.svg";
import Link from "next/link";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="xl:w-[70%] xl:mx-auto py-5 px-5 xl:px-0">
      <section className="flex items-center justify-between">
        <div>
          <Image src={Logo} alt="Little Lemon Logo" />
        </div>

        {showMobileMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 lg:hidden cursor-pointer hover:stroke-slate-500"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 lg:hidden cursor-pointer hover:stroke-slate-500"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        <nav className="hidden lg:block">
          <ul className="flex justify-center items-center font-karla text-karla space-x-10 cursor-pointer">
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              About
            </Link>
            <Link
              href="/menu"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Reservations
            </Link>
            <Link
              href="/orders"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Order Online
            </Link>
            <Link
              href="/login"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Login
            </Link>
          </ul>
        </nav>
      </section>
      {showMobileMenu &&(
        <nav className="border-2 border-green-900/30 my-2 lg:hidden">
          <ul className="flex flex-col justify-center items-center font-karla text-karla cursor-pointer space-y-5 py-3">
            <Link
              href="/"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              About
            </Link>
            <Link
              href="/menu"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Reservations
            </Link>
            <Link
              href="/orders"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Order Online
            </Link>
            <Link
              href="/login"
              className="hover:border-b-2 hover:border-green-700 transition duration-200 delay-100"
            >
              Login
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
}
