const Navbar = () => {
  return (
    <nav className="w-full bg-orange-100 shadow-md px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
      <img src="/shopify.png" alt="Shopify Logo" className="h-25 rounded-sm" />
        <img src="/text_flow_logo.png" alt="TextFlow Logo" className="h-35 rounded-sm mb-2" />
      </div>
      <a
        className="px-6 py-2 text-white bg-orange-600 rounded-lg shadow hover:bg-orange-500 transition"
      >
        Join Waitlist
      </a>
    </nav>
  );
};

export default Navbar;
