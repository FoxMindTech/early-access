"use client";

import Image from "next/image";

const images = [
  "/carousel/image1.png",
  "/carousel/image2.png",
  "/carousel/image3.png",
  "/carousel/image4.png",
  "/carousel/image5.png",
  "/carousel/image6.png",
  "/carousel/image7.png",
  "/carousel/image8.png",
  "/carousel/image9.png",
  "/carousel/image10.png",
  "/carousel/image11.png",
  "/carousel/image12.png",
  "/carousel/image1.png",
  "/carousel/image2.png",
  "/carousel/image3.png",
  "/carousel/image4.png",
  "/carousel/image5.png",
  "/carousel/image6.png",
  "/carousel/image7.png",
  "/carousel/image8.png",
  "/carousel/image9.png",
  "/carousel/image10.png",
  "/carousel/image11.png",
  "/carousel/image12.png",
  "/carousel/image1.png",
  "/carousel/image2.png",
  "/carousel/image3.png",
  "/carousel/image4.png",
  "/carousel/image5.png",
  "/carousel/image6.png",
  "/carousel/image7.png",
  "/carousel/image8.png",
  "/carousel/image9.png",
  "/carousel/image10.png",
  "/carousel/image11.png",
  "/carousel/image12.png",
  "/carousel/image1.png",
  "/carousel/image2.png",
  "/carousel/image3.png",
  "/carousel/image4.png",
  "/carousel/image5.png",
  "/carousel/image6.png",
  "/carousel/image7.png",
  "/carousel/image8.png",
  "/carousel/image9.png",
  "/carousel/image10.png",
  "/carousel/image11.png",
  "/carousel/image12.png",
  "/carousel/image1.png",
  "/carousel/image2.png",
  "/carousel/image3.png",
  "/carousel/image4.png",
  "/carousel/image5.png",
  "/carousel/image6.png",
  "/carousel/image7.png",
  "/carousel/image8.png",
  "/carousel/image9.png",
  "/carousel/image10.png",
  "/carousel/image11.png",
  "/carousel/image12.png",
  "/carousel/image1.png",
  "/carousel/image2.png",
  "/carousel/image3.png",
  "/carousel/image4.png",
  "/carousel/image5.png",
  "/carousel/image6.png",
  "/carousel/image7.png",
  "/carousel/image8.png",
  "/carousel/image9.png",
  "/carousel/image10.png",
  "/carousel/image11.png",
  "/carousel/image12.png",
];

export default function ImageScrollGallery() {
  return (
    // <main className=" relative h-[400px] w-full max-w-[1500px] text-white flex items-center justify-center px-4 py-12">
    <main className=" relative h-[400px] w-full  overflow-y-auto no-scrollbar clip-trapezoid p-4">
      {/* Top Fade Overlay */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black to-black/10" />

      {/* Bottom Fade Overlay */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 z-10 bg-gradient-to-t from-white to-transparent" /> */}
      <div className="relative h-[400px] w-ful overflow-y-auto rounded-xl p-4  no-scrollbar">
        {/* Skew wrapper */}
        <div className="transform  relative z-0">
          {/* Grid of images */}
          {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"> */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-32 rounded-xl overflow-hidden transform "
              >
                <Image
                  src={src}
                  alt={`Image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
