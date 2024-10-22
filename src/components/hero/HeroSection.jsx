"use client";
import React from "react";
import { Button, UnorderedList } from "../ui";
import { salesMagnetListItems } from "@/constants/data";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-screen-1.5xl mx-auto w-full px-4 md:px-16 lg:px-28 py-10 md:py-14 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 md:gap-10 lg:gap-14">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-9 items-center">
          <h1 className="font-extrabold text-2.5xl lg:text-4.5xl">
            Transform your website into a sales magnet using{" "}
            <span className="lg:hidden gradient-text">
              No missed calls, Just results.
            </span>
          </h1>

          <UnorderedList listItems={salesMagnetListItems} />

          <div className="hidden lg:flex flex-col items-center lg:items-start justify-center gap-3 lg:gap-4 w-full px-4 lg:px-0">
            <p className="text-black-500 font-bold text-base md:text-lg lg:text-2xl">
              6 Months free for first 100 users
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="bg-black-50 lg:bg-transparent  rounded-full lg:border lg:border-primary-500 w-full h-12 text-sm md:text-base lg:text-lg font-medium text-black-300 px-6 lg:max-w-80 focus:outline-green-500"
              />
              <Button variant="primary" className="h-12 w-full">
                Join wishlist
              </Button>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE: VIDEO PART */}
        <div className="w-full lg:w-1/2 min-h-56 lg:h-96 border-2 border-gray-200 rounded-lg flex items-center justify-center">
          <video controls className="w-full min-h-56 h-full rounded-lg">
            <source src="/videos/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex lg:hidden flex-col items-center lg:items-start justify-center gap-3 lg:gap-4 w-full px-4 lg:px-0">
          <p className="text-black-500 font-bold text-base md:text-lg lg:text-2xl">
            6 Months free for first 100 users
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-3 w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              className="bg-black-50 lg:bg-transparent  rounded-full lg:border lg:border-primary-500 w-full h-12 text-sm md:text-base lg:text-lg font-medium text-black-300 px-6 lg:max-w-80 focus:outline-green-500"
            />
            <Button variant="primary" className="h-12 w-full">
              Join wishlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
