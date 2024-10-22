import { WebsiteLogo } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-40 lg:h-24">
      <div className="max-w-screen-1.5xl flex items-center justify-between px-4 py-3 lg:px-16 lg:py-5">
        <div className="">
          <Image
            src={WebsiteLogo}
            alt="Website logo"
            width={110}
            height={20}
            className="lg:w-44 lg:h-8"
          />
        </div>
        <div>
          <button className="w-32 h-9 lg:w-48 lg:h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-sm md:text-base lg:text-lg font-bold">
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
