import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg dark:bg-gray-900 m-4 pt-12">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-between md:flex-row gap-4 md:gap-0">
          <Link href="/" passHref>
            <div className="inline-block">
              <Image
                src={logo}
                alt="logo"
                className="md:h-[55px] h-[50px] w-auto  hover:cursor-pointer"
                priority
              />
            </div>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex  items-center justify-center gap-8">
          <div className="flex flex-col justify-between gap-4">
            <Link href="mailto:info@ghaffarenterprises ">
              <IoMailOutline className="text-[#D72323] md:text-3xl text-2xl animate-pulse" />
            </Link>
            <Link href="tel:+1 (630) 526-4000">
              <MdOutlinePhoneInTalk className="text-[#D72323] md:text-3xl text-2xl animate-pulse" />
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <Link
              href="mailto:info@ghaffarenterprises "
              className="md:text-xl text-lg"
            >
              {" "}
              info@ghaffarenterprises.com
            </Link>
            <Link href="tel:+1 (630) 526-4000" className="md:text-xl text-lg">
              {" "}
              630-526-4000
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Ghaffar Enterprises™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
