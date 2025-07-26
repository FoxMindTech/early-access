"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I partner with BeDonkey?",
    answer:
      "We’re actively onboarding trusted partners. Reach out via our contact form to learn more.",
  },
  {
    question: "Does BeDonkey sell leads to 3rd parties?",
    answer:
      "Absolutely not. We respect your privacy and only use your data for internal optimization.",
  },
  {
    question: "How can I buy inventory on BeDonkey partner sites?",
    answer:
      "You can connect via our dashboard and start bidding instantly across all supported networks.",
  },
  {
    question: "Are there minimum spend requirements?",
    answer:
      "There is no strict minimum. However, enterprise users may access exclusive packages starting at $500/mo.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-[#0e0e10] w-full py-20 px-4   my-20  text-white font-inter"
      id="faqs"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-[#0e0e10] text-white py-16 px-6">
          <div className=" mx-auto">
            <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">
              Quick Answers
            </p>
            <h1 className="text-5xl font-semibold leading-tight">
              BeDonkey FAQs
            </h1>
            <p className="text-4xl font-light text-gray-400 mt-2">
              Your questions answered
            </p>
          </div>
        </div>

        {/* <h2 className="text-center text-3xl md:text-4xl font-space font-bold text-white mb-2">
          FAQs
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Answers to Frequently Asked Questions
        </p> */}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl px-5 py-4 border transition-all duration-300 hover:border-purple-400 hover:bg-[#1a1a1a]/80 ${
                openIndex === index
                  ? "bg-[#1A1A1A] border-purple-500"
                  : "bg-[#0e0e0e] border-gray-800"
              }`}
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-white font-medium text-base md:text-lg font-space">
                  {faq.question}
                </span>
                <span className="text-purple-500">
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm md:text-base text-gray-400 font-inter">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
