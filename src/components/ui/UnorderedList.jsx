import { TICK_ICON } from "@/constants/images";
import Image from "next/image";
import React from "react";

const UnorderedList = ({ listItems }) => {
  return (
    <ul className="list-none flex flex-col gap-4 lg:gap-5 w-full">
      {listItems?.map((listItem) => (
        <li key={listItem.id} className="flex items-center gap-3">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 67, 169, 0.1) 0%, rgba(255, 168, 115, 0.1) 100%)",
            }}
          >
            <Image src={TICK_ICON} alt="tick-icon" width={10} height={9} />
          </div>
          <p className="font-medium text-sm md:text-base lg:text-lg">{listItem.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;
