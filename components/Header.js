"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CTA from "./CTA";
import { HiMenu, HiX } from "react-icons/hi";
import MySVGLogo from "./MySVGLogo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Scroll listener to toggle background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`w-full z-50 fixed top-0 px-4 py-3 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="h-auto w-50">
          <MySVGLogo />
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-6 text-md font-medium text-white">
        <Link href="/">Home</Link>
        <Link href="/#faqs">Faqs</Link>
        <Link href="/#contact">Contact</Link>
      </nav>

      {/* CTA + Hamburger */}
      <div className="flex items-center justify-between gap-3">
        <div className="hidden sm:block">
          <CTA />
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl ${
              isScrolled ? "text-white" : "text-white"
            } focus:outline-none`}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 w-full bg-black  text-white shadow-md rounded-b-md transition-all duration-300 ease-in-out animate-slide-down z-40"
        >
          <div className="flex flex-col px-4 py-3 space-y-2 text-md font-medium  ">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-purple-800/30 hover:text-purple-300 transition-all duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/#faqs"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-purple-800/30 hover:text-purple-300 transition-all duration-200 ease-in-out"
            >
              Faqs
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-purple-800/30 hover:text-purple-300 transition-all duration-200 ease-in-out"
            >
              Contact
            </Link>

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
