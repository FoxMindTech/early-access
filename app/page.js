// app/page.tsx (or app/early-access/page.tsx)

import ContactSection from "@/components/Contact";
import CountdownTimer from "@/components/CountdownTimer";
import Faqs from "@/components/Faqs";

import Hero from "@/components/Hero";

export default function page() {
  return (
    <main className="min-h-screen bg-black text-white  py-10 flex flex-col items-center">
      <Hero />

      <CountdownTimer />

      <Faqs />

      <ContactSection />
    </main>
  );
}
