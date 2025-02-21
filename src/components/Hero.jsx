const Hero = () => {
  return (
    <section className="relative w-full bg-orange-100 flex flex-col items-center justify-center text-center py-28 px-6">
      <h1 className="text-5xl font-bold text-orange-700">Boost Your Revenue</h1>
      <p className="mt-10 text-lg text-orange-800 max-w-xl">
      Designed for Shopify merchants, TextFlow makes SMS automation effortless.      </p>
      <div className="mt-10 flex space-x-4 relative z-10 mb-20">
        <button className="px-6 py-3 text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-500 transition">
          Get Started
        </button>
        <button className="px-6 py-3 text-orange-600 border border-orange-600 rounded-lg shadow-md hover:bg-orange-200 transition">
          Watch Video
        </button>
      </div>
      <div className="absolute w-full flex justify-center bottom-[-200px] z-20">
        <img src="/sms_automation.png" alt="App Mockup" className="w-1/2 max-w-lg drop-shadow-lg rounded-md" />
      </div>

      <div className="absolute bottom-[-40px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-48"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
