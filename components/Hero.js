import Link from "next/link";
import Badge from "./Badge";
import CTA from "./CTA";
import HeroHeading from "./HeroHeading";
import AnimatedBtn from "./AnimatedBtn";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center">
        <section className="text-center max-w-3xl mt-20 py-2 px-4 ">
          <span className=" text-purple-300 text-xs px-3 py-1 rounded-full mb-4 inline-block">
            <Badge />
          </span>
          <div className="text-4xl md:text-6xl font-bold leading-tight mb-6 space-font">
            <HeroHeading />
          </div>
          <p className="text-lg text-gray-300 mb-10 space-fonts">
            Be one of the first to join the AI video revolution.,
            <span className="text-white font-bold">
              {" "}
              Get 200 free coins
            </span>,{" "}
            <span className="text-white font-bold"> instant monetization,</span>
            and exclusive early-creator perks.
          </p>
          <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
            <div className="w-70 ">
              <CTA />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
