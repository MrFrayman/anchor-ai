import React, { forwardRef, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", size = "medium", className, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none hover:cursor-pointer hover:opacity-90 transition-opacity duration-150";

    const variants: Record<ButtonVariant, string> = {
      primary: "bg-white text-black hover:bg-white/90",
      secondary:
        "bg-white/10 text-white border-white/30 border-solid border-[0.8px] hover:bg-white/20",
      tertiary: "bg-gray-600 text-white hover:bg-gray-700",
    };

    const sizes: Record<ButtonSize, string> = {
      small: "px-3 py-1.5 text-xs",
      medium: "h-[48px] ps-[28px] pe-[22px] py-[12px] text-sm",
      large: "px-5 py-3 text-base",
    };

    const safeClassName = className || "";

    const combinedClassName = [
      baseStyles,
      variants[variant],
      sizes[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  },
);
