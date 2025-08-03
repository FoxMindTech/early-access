"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "What is BeDonkey?",
    answer:
      "BeDonkey is a new video platform made for creators of AI-generated content — from storytelling and animation to memes, music, and more.",
  },
  {
    question: "Who can use BeDonkey?",
    answer:
      "Anyone! Whether you're a creator, viewer, or just curious about AI-generated content — BeDonkey is for you.",
  },
  {
    question: "What makes BeDonkey different from YouTube or TikTok?",
    answer:
      "BeDonkey is built exclusively for AI-powered videos, with tools to upload, share, monetize, and remix content in ways other platforms don’t support.",
  },
  {
    question: "Is it free to join?",
    answer:
      "Yes, joining BeDonkey is completely free. Early users may also get bonus features or coins.",
  },
  {
    question: "What do I get if I sign up for early access?",
    answer:
      "You’ll be among the first to:\n\n* Claim your BeDonkey channel name\n* Earn early creator rewards (like 200 coins)\n* Test new features before public launch",
  },
  {
    question: "Can I monetize my videos?",
    answer:
      "Yes! BeDonkey will support ad revenue, tipping, and other monetization tools for creators.",
  },
  {
    question:
      "Can I upload AI-generated videos from tools like Sora, Runway, or Pika?",
    answer:
      "Absolutely. BeDonkey is made for creators using tools like Sora, Pika, Runway, and more.",
  },
  {
    question: "Can I publish to TikTok, YouTube, or other platforms too?",
    answer:
      "Yes — you’ll be able to cross-post your videos easily if you choose to.",
  },
  {
    question: "When will the full platform launch?",
    answer:
      "We’re aiming to launch the full version soon. Early access users will get notified first!",
  },
  {
    question: "What kind of content is allowed?",
    answer:
      "We support creative, original, and respectful AI content. No hate, abuse, or illegal material — we want a fun, safe space for everyone.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className=" w-full py-20 px-4 max-w-7xl  my-20  text-white font-inter"
      id="faqs"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className=" text-white py-16 px-6">
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
              className={`rounded-2xl cursor-pointer px-5 py-4 border transition-all duration-300 hover:border-purple-400 hover:bg-[#1a1a1a]/60 ${
                openIndex === index
                  ? "bg-[#1A1A1A]/20 border-purple-500"
                  : "bg-[#0e0e0e]/20 border-gray-800"
              }`}
            >
              <button
                className="w-full flex justify-between  cursor-pointeritems-center text-left"
                onClick={() => toggle(index)}
              >
                <span className="text-white font-medium  text-[30px] font-space">
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
                <p className="text-[20px] text-white font-inter">
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
