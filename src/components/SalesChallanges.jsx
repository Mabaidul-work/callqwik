"use client";

import { salesChallanges } from "@/constants/data";
import { useRef, useState } from "react";
import { CardWithImage } from "./ui";

const SalesChallanges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleSlide = (index) => {
    setCurrentIndex(index);
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
      setCurrentIndex((prevIndex) =>
        prevIndex < salesChallanges.length - 1 ? prevIndex + 1 : prevIndex
      );
    }

    if (touchDifference < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  return (
    <section className="w-full bg-primary-100">
      <div className="max-w-screen-1.5xl mx-auto w-full px-4 md:px-16 lg:px-28 py-10 md:py-16 lg:py-24">
        <h2 className="text-black-500 font-extrabold text-center text-2.5xl md:text-4xl lg:text-5.5xl py-3 mb-6 md:mb-8 lg:mb-14">
          Are these challenges Stopping You from Closing More Deals?
        </h2>

        <div
          className="flex justify-center items-center overflow-hidden lg:hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform ease-in-out duration-500 w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {salesChallanges.map((challange) => (
              <div
                key={challange.id}
                className={`w-full flex-shrink-0 md:px-2 flex items-center justify-center`}
              >
                <CardWithImage
                  title={challange.title}
                  imageUrl={challange.icon}
                  description={challange.description}
                  className={
                    "w-full max-w-96 flex flex-col items-center justify-center gap-5 md:gap-8 lg:gap-10 px-4 lg:px-5 py-8 lg:py-16"
                  }
                  variant={"outlined"}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 py-5 md:py-10 lg:hidden">
          {salesChallanges.map((_, idx) => (
            <button
              key={idx}
              aria-label={`${idx + 1}`}
              className={`w-[42px] h-[4px] ${
                idx === currentIndex ? "bg-[#F7A293]" : "bg-[#E4E4E4]"
              } cursor-pointer rounded-3xl`}
              onClick={() => handleSlide(idx)}
            ></button>
          ))}
        </div>

        <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-5 lg:flex-wrap">
          {salesChallanges.map((challange) => (
            <CardWithImage
              key={challange.id}
              title={challange.title}
              imageUrl={challange.icon}
              description={challange.description}
              className={
                "w-96 flex flex-col items-center justify-center gap-5 md:gap-8 lg:gap-10 px-4 lg:px-5 py-8 lg:py-16"
              }
              variant={"outlined"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesChallanges;
