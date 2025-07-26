"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function EarlyAccessModal() {
  const [isOpen, setIsOpen] = useState(true); // Set to `false` to hide by default

  const closeModal = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-[#1a1a1a]/90 border border-purple-500 text-white rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-fade-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-purple-500 hover:text-purple-300 transition"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-4 font-space text-purple-400">
              Join Early Access
            </h2>

            {/* Description */}
            <p className="text-base text-gray-300 mb-4 leading-relaxed">
              Welcome to{" "}
              <span className="text-purple-400 font-semibold">BeDonkey</span> —
              the bold new video platform for creators who want to be seen. Get
              a head start by joining our exclusive early access!
            </p>

            {/* Perks List */}
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                🚀{" "}
                <span className="text-white font-medium">200 Free Coins</span>{" "}
                to boost your videos
              </li>
              <li>
                💰{" "}
                <span className="text-white font-medium">
                  Monetization Enabled
                </span>{" "}
                from day one
              </li>
              <li>
                🏆{" "}
                <span className="text-white font-medium">
                  Featured Creator Badge
                </span>{" "}
                on your profile
              </li>
              <li>
                🔧{" "}
                <span className="text-white font-medium">
                  Access to Advanced Tools
                </span>{" "}
                before public release
              </li>
              <li>
                🔥{" "}
                <span className="text-white font-medium">Priority Support</span>{" "}
                and creator spotlight
              </li>
            </ul>

            {/* Call to Action */}
            <Link
              href={"/get-access"}
              onClick={closeModal}
              className="mt-6 w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
            >
              Claim Your Access Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
