"use client";

import Lottie from "lottie-react";
import { useState } from "react";
import rocket from "../public/rocket.json";
import Toast from "./Toast";
import SocialMedia from "./SocialMedia";
function HeroWithForm() {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.number && !/^\d{10,15}$/.test(formData.number)) {
      newErrors.number = "Enter a valid number (10-15 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear errors as user types
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch("/api/early-access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
          setToast({
            visible: true,
            message: "Submitted successfully!",
            type: "success",
          });
          setIsSubmitted(true);
        } else {
          setToast({ visible: true, message: data.message, type: "error" });
        }
      } catch (err) {
        setToast({
          visible: true,
          message: "Something went wrong.",
          type: "error",
        });
      }
    }
  };

  return (
    <div className="max-w-[1500px] mx-auto px-4">
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-screen">
        {!isSubmitted ? (
          <>
            {/* Left Text */}
            <div className="text-center md:text-left">
              <span className="text-purple-300 text-xs px-3 py-1 rounded-full mb-4 inline-block">
                Early Access
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 space-font">
                Be Among the First Creators
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Get <span className="text-white font-bold">free coins</span>,
                early <span className="text-white font-bold">monetization</span>
                , and{" "}
                <span className="text-white font-bold">exclusive features</span>
                .
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-black rounded-xl p-8 shadow-md w-full max-w-md mx-auto md:mx-0 border border-purple-800">
              <h2 className="text-2xl font-semibold mb-6 text-white text-center">
                Join Waitlist
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 rounded-md border bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:ring-purple-500"
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 rounded-md border bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:ring-purple-500"
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Number */}
                <div>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Phone Number (optional)"
                    className={`w-full px-4 py-3 rounded-md border bg-[#0f0f0f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                      errors.number
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-700 focus:ring-purple-500"
                    }`}
                    value={formData.number}
                    onChange={handleChange}
                  />
                  {errors.number && (
                    <p className="text-red-500 text-sm mt-1">{errors.number}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="col-span-2 text-center pt-10 text-white">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">
              You are on the list! 🎉
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto mb-3">
              We will notify you when we launch. <br />
              Expect{" "}
              <span className="text-white font-semibold">
                early access
              </span>,{" "}
              <span className="text-white font-semibold">200 free coins</span>,
              a <span className="text-white font-semibold">featured badge</span>
              , and more perks tailored for our early creators.
            </p>
            <div className="flex justify-center flex-col items-center">
              <div className="w-80 h-50  flex justify-center items-center text-6xl ">
                {/* <DotLottieReact src={bird} loop autoplay /> */}
                <Lottie animationData={rocket} loop autoplay />
              </div>
              <div className="relative z-20">
                <SocialMedia />
              </div>
            </div>
          </div>
        )}
      </section>
      <Toast
        type={toast.type}
        message={toast.message}
        visible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </div>
  );
}

export default HeroWithForm;
