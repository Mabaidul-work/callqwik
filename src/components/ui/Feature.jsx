import Image from "next/image";

const Feature = ({ id, title, description, imageUrl }) => {
  return (
    <div
      className={`w-full flex flex-col gap-3 md:gap-5 lg:gap-10 ${
        id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <Image
          src={imageUrl}
          alt={title}
          width={384}
          height={384}
          className="w-full h-full object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 384px"
          srcSet={`${imageUrl}?w=192 192w,
           ${imageUrl}?w=384 384w,
           ${imageUrl}?w=768 768w`}
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-4">
        <h3 className="font-extrabold text-black-500 text-2xl md:text-3xl lg:text-5xl lg:leading-snug">
          {title}
        </h3>
        <p className="font-medium text-base md:text-lg lg:text-xl lg:leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
