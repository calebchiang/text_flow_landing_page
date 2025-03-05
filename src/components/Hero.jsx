import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Tag from "./Tag";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const handleSubscribe = () => {
    window.open("https://forms.gle/2AyarnPyebecz8NQA", "_blank");
    };

  return (
    <section id="hero" className="relative w-full bg-gradient-to-b from-orange-100 to-orange-200 flex flex-col items-center justify-center text-center py-10 px-6">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>TextFlow v0.1</span>
          <ChevronRight className="w-6 h-6 ml-1 text-indigo-300 overflow-visible" />
        </div>
      </Tag>
      <h1 className="mt-8 mb-8 text-7xl font-extrabold text-orange-700">Engage Every Lead</h1>
      <h2 className="text-5xl font-extrabold"><span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">Completely Automated</span></h2>
      <p className="mt-10 text-lg text-orange-800 max-w-xl">
        Designed for Shopify merchants, TextFlow makes SMS automation effortless.
      </p>
      <div className="mt-10 mb-4 w-full max-w-md relative">
        <div className="flex items-center rounded-lg bg-gray-100 shadow-sm">
          <Input
            type="email"
            placeholder="name@email.com"
            className="flex-1 px-4 py-3 border-none outline-none"
          />
          <Button onClick={handleSubscribe} className="bg-orange-400 hover:bg-orange-300 text-white px-6 py-3 rounded-sm">
            Join waitlist
          </Button>
        </div>
        </div>
      <div className="flex items-center space-x-3 mb-30">
        <div className="flex -space-x-2">
          <Avatar>
            <AvatarImage className="w-full h-full object-cover" src="/avatar1.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage className="w-full h-full object-cover" src="/avatar2.jpeg" />
            <AvatarFallback>AE</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage className="w-full h-full object-cover" src="/avatar3.jpg" />
            <AvatarFallback>LC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage className="w-full h-full object-cover" src="/avatar4.jpg" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage className="w-full h-full object-cover" src="/avatar5.jpg" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-gray-700 text-sm">Join 1000+ others on the waitlist</p>
      </div>
      <div className="absolute w-full flex justify-center bottom-[-100px] md:bottom-[-280px] z-20">
        <img src="/sms_automation.png" alt="App Mockup" className="w-3/4 max-w-2xl drop-shadow-xl rounded-md opacity-95" />
      </div>

      <div className="absolute bottom-[-40px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-[150px] md:h-48"
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
