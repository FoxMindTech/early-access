"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CTA from "./CTA";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 fixed top-0 px-4 py-3 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div
        className={` text-purple-500
          font-bold text-xl flex items-center`}
      >
        {/* <span className={` rounded-full w-6 h-6 mr-2`}></span> */}
        BeDonkey
      </div>

      {/* Desktop Nav */}
      <nav
        className={` text-white
         hidden lg:flex space-x-6 text-md font-medium`}
      >
        <Link href="/">Home</Link>
        <Link href="/#faqs">Faqs</Link>
        <Link href="/#contact">Contact</Link>
      </nav>

      <div className="flex items-center justify-between gap-3">
        {/* CTA Desktop */}
        <div className="hidden sm:block">
          <CTA />
        </div>

        {/* Hamburger - visible before lg */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl ${
              isScrolled ? "text-black" : "text-white"
            } focus:outline-none`}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black shadow-md rounded-b-md transition-all duration-300 ease-in-out animate-slide-down z-40">
          <div className="flex flex-col px-4 py-3 space-y-2 text-md font-medium">
            <Link href="/">Home</Link>
            <Link href="/#faqs">Faqs</Link>
            <Link href="/#contact">Contact</Link>
            {/* CTA inside dropdown for small devices */}
            <div className="block sm:hidden pt-2">
              <CTA />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
