"use client";
import { DOWN_ARROW } from "@/constants/images";
import Image from "next/image";
import { useState } from "react";
import { UnorderedList } from "../ui";

const FeatureSection = ({ section, featureDetails }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-8 w-full flex flex-col items-center justify-center">
      <h3 className="text-2xl md:text-3xl lg:text-5xl mb-6 md:mb-12 lg:mb-16 text-center font-extrabold text-black-600">
        {section}
      </h3>
      <div className="list-none w-full max-w-xl ">
        {featureDetails?.map((featureDetail, index) => (
          <div
            key={featureDetail.section + index}
            className={`flex flex-col gap-3 md:gap-4 lg:gap-6 pb-5   ${
              index >= featureDetails.length - 1
                ? "border-b-none"
                : "border-b border-primary-200 mb-5 lg:pb-10 lg:mb-10"
            }`}
          >
            <div
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h4 className="font-extrabold text-xl md:text-2xl lg:text-3.5xl gradient-text">
                {featureDetail.section}
              </h4>
              <Image
                src={DOWN_ARROW}
                alt={"toggle arrow"}
                width={24}
                height={24}
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <UnorderedList listItems={featureDetail.features} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
