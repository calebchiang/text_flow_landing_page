import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "./ui/navigation-menu";

const Navbar = () => {
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
                href="#features"
                className="text-orange-700 hover:text-orange-600 transition font-medium"
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#testimonials"
                className="text-orange-700 hover:text-orange-600 transition font-medium"
              >
                Testimonials
              </NavigationMenuLink>
              
            </NavigationMenuItem>
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

        <a className="px-6 py-2 text-white bg-orange-600 rounded-lg shadow hover:bg-orange-500 transition">
          Join Waitlist
        </a>
      </div>
    </nav>

    

    
  );
};

export default Navbar;
