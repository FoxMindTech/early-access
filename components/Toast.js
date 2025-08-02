// components/ui/Toast.js
"use client";

import { useEffect } from "react";

export default function Toast({ type = "success", message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  const base =
    "fixed top-6 right-6 z-50 px-4 py-3 rounded-lg shadow-xl transition-all duration-500";
  const types = {
    success: "bg-purple-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-purple-500 text-black",
  };

  if (!visible) return null;

  return (
    <div className={`${base} ${types[type]}`}>
      <p className="text-sm font-semibold">{message}</p>
    </div>
  );
}
