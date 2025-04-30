import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "default",
  children,
  ...props
}) => {
  const baseStyle = "rounded px-4 py-2 text-sm font-medium transition";
  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
    ghost: "bg-transparent text-white hover:bg-white/10",
    secondary: "bg-green-700 text-white hover:bg-green-800",
  };

  return (
    <button
      {...props}
      className={clsx(baseStyle, variants[variant], className)}
    >
      {children}
    </button>
  );
};
