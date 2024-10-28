"use client";
import { useRef, useState } from "react";

import { testimonials } from "@/constants/data";
import { ARROW_LEFT, ARROW_RIGHT, SEAL_CHECK_FILL } from "@/constants/images";
import Image from "next/image";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDifference = touchStartX.current - touchEndX.current;

    if (touchDifference > 50) {
      setCurrentSlide((prevIndex) =>
        prevIndex < testimonials.length - 1 ? prevIndex + 1 : prevIndex
      );
    }

    if (touchDifference < -50) {
      setCurrentSlide((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setShowLeftButton(true);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      if (currentSlide === 1) {
        setShowLeftButton(false);
      }
    }
  };

  return (
    <section className="w-full">
      <div className="max-w-screen-1.5xl mx-auto w-full  py-10 md:py-16 lg:py-24">
        <div className="text-center mb-6 md:mb-10 lg:mb-16 px-4 md:px-16 lg:px-28">
          <p className="gradient-text uppercase text-sm md:text-base lg:text-xl font-bold mb-3 md:mb-4 lg:mb-5">
            TESTIMONIALS
          </p>
          <h2 className="text-2.5xl md:text-3xl lg:text-4xl font-bold">
            Why Our Customers Choose Us
          </h2>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            {showLeftButton && (
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 p-2 rounded-full  shadow-lg hover:bg-gray-100 hidden md:block"
              >
                <Image
                  src={ARROW_LEFT}
                  alt="arrow-right"
                  width={44}
                  height={44}
                />
              </button>
            )}

            <div
              className="flex justify-center items-center w-full px-4 md:px-8 lg:px-20"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex items-start justify-start gap-3  w-full  overflow-hidden"
                // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 md:px-2 flex items-start justify-start  transition-transform duration-500 ease-in-out  ${
                      index === currentSlide
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
                    style={{
                      transform: `translateX(-${currentSlide * 103}%)`,
                      // boxShadow: "0px 0px 77.9px 12px #7A00350F",
                    }}
                  >
                    <div className="w-full flex flex-col items-start justify-start gap-5 md:gap-8 lg:gap-10 py-8 lg:py-16 ">
                      <div
                        className="flex flex-col items-start justify-between rounded-2xl py-8 lg:py-10 px-4 h-[422px] "
                        style={{ boxShadow: "0px 0px 77.9px 12px #7A00350F" }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="w-20 h-20 rounded-full mb-7"
                        />
                        <p className="text-lg mb-5">{item.testimonial}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-extrabold text-xl text-black-700">
                            {item.name}
                          </p>
                          <Image
                            src={SEAL_CHECK_FILL}
                            alt="seal check fill"
                            width={24}
                            height={24}
                          />
                        </div>
                        <p className="text-sm">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {currentSlide < testimonials.length - 1 && (
              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 p-2 rounded-full  shadow-lg hover:bg-gray-100 hidden md:block"
              >
                <Image
                  src={ARROW_RIGHT}
                  alt="arrow-right"
                  width={44}
                  height={44}
                />
              </button>
            )}
          </div>

          <div className="flex justify-center items-center gap-3 py-5 md:py-10 lg:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                aria-label={`${idx + 1}`}
                className={`w-[42px] h-[4px] ${
                  idx === currentSlide ? "bg-[#F7A293]" : "bg-[#E4E4E4]"
                } cursor-pointer rounded-3xl`}
                onClick={() => handleSlide(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
