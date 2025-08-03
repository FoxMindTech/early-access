import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-purple-700/30 text-white w-full mt-24">
      <div className="max-w-[1500px] mx-auto px-6 py-10">
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium mb-6 text-center">
          {/* <a href="#" className="hover:underline block">
            Home
          </a>
          <a href="#" className="hover:underline block">
            Pricing
          </a>
          <a href="#" className="hover:underline block">
            Changelog
          </a>
          <a href="#" className="hover:underline block">
            Docs
          </a>
          <a href="#" className="hover:underline block">
            Contact
          </a> */}
          <div className="text-center my-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Join the <span className="text-purple-500">BeDonkey</span>{" "}
              Community
            </h2>
            <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">
              Follow us on social media and be part of the AI video revolution.
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-6 text-lg">
          <SocialMedia />
        </div>

        {/* Divider and Copy */}
        <div className="border-t border-white/20 pt-6 text-center text-xs text-white/80">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">BeDonkey</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
