// app/page.tsx (or app/early-access/page.tsx)

import ContactSection from "@/components/Contact";
import CountdownTimer from "@/components/CountdownTimer";
import Faqs from "@/components/Faqs";

import Hero from "@/components/Hero";
import ImageScrollGallery from "@/components/ImageScrollGallary";

export default function page() {
  return (
    <main className="min-h-screen  text-white  flex flex-col items-center relative z-20">
      <div className=" ">
        <CountdownTimer />
        <Hero />
      </div>
      <ImageScrollGallery />

      <Faqs />

      <ContactSection />
    </main>
  );
}
