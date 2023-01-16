import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import classNames from "classnames";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary [&_.highlighter]:ml-2",
        "transition-[shadow,text-shadow]",
      ],
      secondary: [
        "text-off-white bg-white/10 border border-transparent-white",
        "backdrop-filter-[12px] [&_.highlighter]:bg-transparent-white [&_.highlighter]:rounded-full",
        "[&_.highlighter:first-child]:-ml-2 [&_.highlighter:first-child]:mr-2 [&_.highlighter:last-child]:ml-2 [&_.highlighter:last-child]:-mr-2 [&_.highlighter]:px-2 hover:bg-white/20",
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
  href,
  variant,
  size,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={buttonClasses({ variant, size, className })}
    >
      {children}
    </button>
  );
};
