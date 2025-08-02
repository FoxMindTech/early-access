import Link from "next/link";
import Badge from "./Badge";
import CTA from "./CTA";
import HeroHeading from "./HeroHeading";
import AnimatedBtn from "./AnimatedBtn";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center">
        <section className="text-center max-w-3xl mt-20 h-screen px-4 ">
          <span className=" text-purple-300 text-xs px-3 py-1 rounded-full mb-4 inline-block">
            <Badge />
          </span>
          <div className="text-4xl md:text-6xl font-bold leading-tight mb-6 space-font">
            <HeroHeading />
          </div>
          <p className="text-lg text-gray-300 mb-10">
            Join early and receive{" "}
            <span className="text-white font-bold">200 free coins</span>,{" "}
            <span className="text-white font-bold">monetization access</span>,
            and exclusive creator benefits.
          </p>
          <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
            <div className="w-70 ">
              <CTA />
            </div>
            {/* <AnimatedBtn>Join Now</AnimatedBtn> */}
            {/* <Link
            href="#join"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white font-semibold"
          >
          Join Waitlist
          </Link>
          <Link
            href="#demo"
            className="border border-white px-6 py-3 rounded-lg text-white font-semibold hover:bg-white hover:text-black"
            >
            Watch Demo
          </Link> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
