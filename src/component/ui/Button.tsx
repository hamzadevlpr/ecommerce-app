"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 border";

  const variants = {
    primary:
      "bg-[#14a085] text-white border-transparent hover:bg-[#11806c] focus:ring-2 focus:ring-offset-1 focus:ring-[#14a085]",
    secondary:
      "bg-gray-100 text-[#14a085] border-transparent hover:bg-gray-200 focus:ring-2 focus:ring-offset-1 focus:ring-[#14a085]",
    outline:
      "bg-transparent text-[#14a085] border-[#14a085] hover:bg-[#14a085] hover:text-white focus:ring-2 focus:ring-offset-1 focus:ring-[#14a085]",
  };

  return (
    <button
      {...props}
      className={`cursor-pointer ${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
