import Image from "next/image";

const SalesAndCrmFeature = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl py-7 md:py-8 lg:py-11 flex flex-col gap-4 md:gap-5 lg:gap-7 w-full lg:max-w-96 lg:h-[473px] shadow-[0px_0px_77.9px_12px_#7A00350F]">
      <Image
        src={imageUrl}
        alt={title}
        width={384}
        height={384}
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 384px"
        srcSet={`${imageUrl}?w=192 192w,
           ${imageUrl}?w=384 384w,
           ${imageUrl}?w=768 768w`}
      />

      <div className="flex flex-col items-start justify-center gap-2 lg:gap-3 px-4 lg:px-5">
        <h3 className="font-extrabold text-black-600 text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="font-medium text-base lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default SalesAndCrmFeature;
