import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = () => {
  return (
    <nav className="flex justify-between p-2  shadow-md shadow-gray-300">
      <Image
        src={logo}
        alt="logo"
        className="w-[65vw] md:w-[40vw] lg:w-[20vw]"
      />
      <div className="flex items-center p-1">
        <GiHamburgerMenu className="text-2xl lg:hidden" />
        <div className="flex justify-between w-[57vw] hidden lg:flex">
          <div className="flex items-center justify-center gap-8">
            <p className="text-xl">Home</p>
            <p className="text-xl">Companies</p>
            <p className="text-xl">Pricing</p>
          </div>
          <div className="flex items-center justify-center">
            <button className="border-[1px] border-black px-8 py-4 rounded-xl text-xl font-medium bg-[#D72323] text-white font-bold hover:bg-[white] hover:border-[#D72323] hover:text-black hover:transition hover:duration-500">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
