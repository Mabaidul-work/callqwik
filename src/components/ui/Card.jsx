import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const cardStyles = cva(["w-full"], {
  variants: {
    variant: {
      outlined:
        "lg:h-80 border-2 rounded-xl lg:rounded-3xl border-primary-500 bg-gradient-to-r from-primary-100 to-secondary-100 bg-opacity-5",
    },
  },
  defaultVariants: {
    variant: "outlined",
  },
});

const Card = forwardRef(({ variant, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(cardStyles({ variant }), className)}
      {...props}
    />
  );
});

Card.displayName = "Card";

export default Card;
