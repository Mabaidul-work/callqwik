import { OPEN_IN_NEW } from "@/constants/images";
import Image from "next/image";
import { Button } from "../ui";

const Usecase = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col justify-between gap-4 md:gap-5 lg:gap-6 w-full lg:max-w-[500px] lg:h-[550px] shadow-[0px_0px_77.9px_12px_#7A00350F]">
      <div className="flex flex-col gap-4 lg:gap-5">
        <Image
          src={imageUrl}
          alt={title}
          width={384}
          height={384}
          className="w-full h-full object-contain rounded-xl"
          priority
        />
        <p className="font-medium text-base lg:text-lg">{description}</p>
      </div>
      <Button
        variant="secondary"
        className="flex items-center justify-center gap-2 w-full lg:w-full  bg-gradient-to-r from-primary-500 to-secondary-500"
      >
        <span className="mb-1">Watch Demo</span>
        <Image
          src={OPEN_IN_NEW}
          alt="open in new icon"
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};

export default Usecase;
