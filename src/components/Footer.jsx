"use-client";
import { footerNavLinks, socialMediaIcons } from "@/constants/data";
import { WEBSITE_LOGO_WHITE } from "@/constants/images";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black-800 via-[#150314] to-[#2C101F] text-white bg-[#2C101F] w-full">
      <div className="flex flex-col gap-8 lg:gap-10 max-w-screen-1.5xl mx-auto w-full px-4 md:px-8 lg:px-28 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between gap-10  w-full">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start gap-4 md:gap-5 max-w-96 md:max-w-52 lg:max-w-[366px]">
            <Image
              src={WEBSITE_LOGO_WHITE}
              height={33}
              width={180}
              alt="callqwik-logo"
            />
            <p className="text-white font-medium text-center md:text-left">
              Boost leads with 24/7 AI Call & Chat Assistants. No missed
              calls—just results. Transform your website into a sales magnet
              today!
            </p>

            <ul className="hidden md:flex gap-9 md:gap-3 lg:gap-9 ">
              {socialMediaIcons.map((item) => (
                <a
                  key={item.title}
                  className="w-[40px] h-[40px] rounded-full bg-black_primary flex justify-center align-center cursor-pointer"
                  href={item.link}
                  target="_blank"
                >
                  <Image
                    src={item.icon}
                    height={40}
                    width={40}
                    alt={item.altText}
                    title={item.title}
                  />
                </a>
              ))}
            </ul>
          </div>

          <div className="md:hidden flex flex-col items-center justify-center gap-6">
            {Object.entries(footerNavLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3">
                <h2 className="font-semibold text-white text-center">
                  {category}
                </h2>
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="hover:text-white transition-colors text-center"
                      target="_blank"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* tablet and Desktop Navigation */}
          <div className="hidden md:flex md:justify-between items-start w-full md:max-w-[721px]">
            {Object.entries(footerNavLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3">
                <h2 className="font-semibold text-white">{category}</h2>
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="hover:text-white transition-colors"
                      target="_blank"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FOR MOBILE */}
          <ul className="flex md:hidden gap-9 md:gap-3 lg:gap-9 ">
            {socialMediaIcons.map((item) => (
              <a
                key={item.title}
                className="w-[40px] h-[40px] rounded-full bg-black_primary flex justify-center align-center cursor-pointer"
                href={item.link}
                target="_blank"
              >
                <Image
                  src={item.icon}
                  height={40}
                  width={40}
                  alt={item.altText}
                  title={item.title}
                />
              </a>
            ))}
          </ul>
        </div>

        <p className="text-center font-normal text-sm lg:text-base text-white opacity-50">
          2024 CallQwik Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
