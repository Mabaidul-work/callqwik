import Image from "next/image";
import { Card } from ".";

const CardWithImage = ({
  imageUrl,
  title,
  description,
  className,
  variant,
}) => {
  return (
    <Card variant={variant} className={className}>
      <Image
        src={imageUrl}
        alt={title}
        width={56}
        height={56}
        className="lg:w-16 lg:h-16"
      />

      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-center font-bold text-black-600 text-xl lg:text-2xl">
          {title}
        </p>
        <p className="text-center font-medium text-base lg:text-lg">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default CardWithImage;
