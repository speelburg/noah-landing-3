"use client";
import React from "react";

export function Button({ children, variant, size, ...props }) {
  const baseStyles =
    "py-2 px-4 rounded-md font-semibold transition-colors duration-300";
  const variantStyles =
    variant === "ghost"
      ? "bg-transparent text-black hover:bg-gray-200"
      : "bg-blue-600 text-white hover:bg-blue-700";
  const sizeStyles =
    size === "icon" ? "p-2" : "text-base";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
      {...props}
    >
      {children}
    </button>
  );
}
