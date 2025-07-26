"use client";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

import bird from "../public/message.json";
import Lottie from "lottie-react";
import SocialMedia from "./SocialMedia";
export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.consent) return;

    console.log("📩 Contact Form Submission", form);
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "", consent: false });
  };

  return (
    <div
      id="contact"
      className=" bg-[#0f0f0f] py-16 px-6 w-full text-white relative overflow-hidden"
    >
      {/* Accent background shapes */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-red-500 rounded-br-full opacity-40 z-10"></div>
      <div className="absolute top-50 left-50 w-[200px] h-[200px] bg-red-500 rounded-br-full opacity-40 z-10"></div>
      <div className="absolute top-100 left-100 w-[200px] h-[200px] bg-red-500 rounded-br-full opacity-40 z-10"></div>
      <div className="absolute top-150 left-150 w-[200px] h-[200px] bg-red-500 rounded-br-full opacity-40 z-10"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-purple-400 rounded-tl-full opacity-40 z-10"></div>
      <div className="absolute bottom-50 right-50 w-[200px] h-[200px] bg-purple-400 rounded-tl-full opacity-40 z-10"></div>
      <div className="absolute bottom-100 right-100 w-[200px] h-[200px] bg-purple-400 rounded-tl-full opacity-40 z-10"></div>
      <div className="absolute bottom-150 right-150 w-[200px] h-[200px] bg-purple-400 rounded-tl-full opacity-40 z-10"></div>

      <div className="relative max-w-[1500px] backdrop-blur-sm py-20 z-20 mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#1a1a1a]/20 p-8 rounded-xl shadow-2xl">
        <div className="md:flex justify-center items-center flex-col flex-1">
          {/* Left graphic (placeholder for envelope/icon/logo) */}
          <div className="hidden md:flex justify-center items-center w-1/2 ">
            <div className="w-80 h-80  flex justify-center items-center text-6xl ">
              {/* <DotLottieReact src={bird} loop autoplay /> */}
              <Lottie animationData={bird} loop autoplay />
            </div>
          </div>
          <SocialMedia />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full  md:w-1/2 space-y-6 flex-1"
        >
          <div className="pb-2">
            <h2 className="text-2xl font-bold">
              <span className="text-purple-500">Let’s talk.</span>
              <br />
              Enter your message.
            </h2>
          </div>

          <div className="flex gap-4 py-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="bg-transparent border-b border-gray-500 w-full px-2 py-1 outline-none text-white"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-transparent border-b border-gray-500 w-full px-2 py-1 outline-none text-white"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message (e.g. content issues, business, etc.)"
            required
            className="bg-transparent border-b border-gray-500 w-full px-2 py-1 outline-none text-white"
            rows={4}
          ></textarea>

          <label className="flex items-start gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1"
            />
            I agree to be contacted for support, feedback, or collaboration.
          </label>

          <button
            type="submit"
            disabled={!form.consent}
            className={`w-full py-2 rounded-full font-semibold transition-all ${
              form.consent
                ? "bg-purple-500 hover:bg-purple-600 text-white"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
