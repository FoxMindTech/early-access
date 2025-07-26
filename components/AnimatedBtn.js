"use client";

import React from "react";

const AnimatedBtn = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:bg-purple-700 shadow-lg hover:shadow-purple-400/60 focus:outline-none group ${className}`}
    >
      <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 bg-purple-800 opacity-30 rounded-lg" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedBtn;
