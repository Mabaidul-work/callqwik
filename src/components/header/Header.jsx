import { WEBSITE_LOGO } from "@/constants/images";
import Image from "next/image";
import React from "react";
import { Button } from "../ui";

const Header = () => {
  return (
    <header className="w-full h-20 lg:h-24">
      <div className="max-w-screen-1.5xl mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-3 lg:py-5">
        <div className="">
          <Image
            src={WEBSITE_LOGO}
            alt="Website logo"
            width={110}
            height={20}
            className="lg:w-44 lg:h-8"
          />
        </div>
        <div>
          <Button variant="primary">Join wishlist</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
