import React from "react";

export const Button = ({ className = "", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`rounded px-4 py-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 ${className}`}
    >
      {children}
    </button>
  );
};

