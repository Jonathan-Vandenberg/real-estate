import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import classNames from "classnames";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary [&_.highlighter]:ml-2",
        "transition-[shadow,text-shadow]",
      ],
      secondary: [
        "text-black font-semibold bg-white",
        "hover:bg-white/20 border",
        "transition-colors ease-in",
      ],
      tertiary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Highlighter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={classNames("highlighter", className)}>{children}</span>
  );
};

export const Button = ({
  className,
  children,
  variant,
  disabled,
  size,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses({ variant, size, className })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
