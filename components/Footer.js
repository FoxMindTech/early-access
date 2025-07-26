import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white w-full mt-24">
      {/* Main Content */}
      <div className="max-w-[1500px] mx-auto px-6 py-10">
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Changelog
          </a>
          <a href="#" className="hover:underline">
            Docs
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-6 text-lg">
          <SocialMedia />
        </div>

        {/* Border */}
        <div className="border-t border-white/20 pt-6 text-center text-xs">
          © {new Date().getFullYear()} BeDonkey. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
