import React from "react";
import { cn } from "@/lib/utils"; // 可选：若没有 cn 工具函数，直接删去它

export function Button({
  className,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }) {
  const base = "px-4 py-2 rounded font-medium transition";
  const variants: Record<string, string> = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-white/10 text-white",
    secondary: "bg-green-700 text-white hover:bg-green-800",
  };
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${className || ""}`}
      {...props}
    />
  );
}
