const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
      <div
        className={`absolute left-0 w-full bg-orange-100 shadow-md transition-all duration-300 z-50 ${
          menuOpen ? "opacity-100 max-h-[500px] py-4 top-[100px]" : "opacity-0 max-h-0 overflow-hidden top-[100px]"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <a href="#aboutus" className="text-orange-700 text-lg hover:text-orange-600 transition">
            About Us
          </a>
          <a href="#features" className="text-orange-700 text-lg hover:text-orange-600 transition">
            Features
          </a>
          {/* <a href="#testimonials" className="text-orange-700 text-lg hover:text-orange-600 transition">
            Testimonials
          </a> */}
          <a href="#pricing" className="text-orange-700 text-lg hover:text-orange-600 transition">
            Pricing
          </a>
          <a className="px-6 py-2 text-white bg-orange-400 rounded-lg shadow hover:bg-orange-300 transition text-center" href="#cta">
            Get Started
          </a>
        </div>
      </div>
    );
  };
  
  export default MobileMenu;
  