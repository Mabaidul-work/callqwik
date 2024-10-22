"use client";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React, { forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-32 lg:w-48 h-9 md:h-12 lg:h-14 text-sm md:text-base lg:text-lg font-bold",
  ],
  {
    variants: {
      variant: {
        primary:
          "text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full",
        secondary: "border border-gray-100 rounded-full gradient-text",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
const Button = forwardRef(({ variant, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant }), className)}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
