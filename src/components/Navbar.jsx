import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "./ui/navigation-menu";
import { MenuIcon, XIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close menu when screen is resized to md (768px) or larger
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
  }, []);

  return (
    <nav className="w-full bg-orange-100 shadow-md px-6 flex items-center">
      <div className="flex items-center space-x-3">
        <img src="/shopify.png" alt="Shopify Logo" className="h-25 rounded-sm" />
        <img src="/text_flow_logo.png" alt="TextFlow Logo" className="h-35 rounded-sm mb-2" />
      </div>
      <div className="ml-auto flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-6">
          <NavigationMenuItem>
              <NavigationMenuLink
                href="#aboutus"
                className="text-orange-700 hover:text-orange-600 transition font-medium"
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#features"
                className="text-orange-700 hover:text-orange-600 transition font-medium"
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink
                href="#testimonials"
                className="text-orange-700 hover:text-orange-600 transition font-medium"
              >
                Testimonials
              </NavigationMenuLink>
              
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#pricing"
                className="text-orange-700 hover:text-orange-600 transition font-medium"
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a className="px-6 py-2 text-white bg-orange-400 rounded-lg shadow hover:bg-orange-300 transition hidden md:flex" href="#cta">
          Get Started
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XIcon className="w-6 h-6 text-orange-700" /> : <MenuIcon className="w-6 h-6 text-orange-700" />}
        </button>
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
