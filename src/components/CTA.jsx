import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const CTA = () => {

const handleSubscribe = () => {
    window.open("https://forms.gle/2AyarnPyebecz8NQA", "_blank");
    };

  return (
    <section id="cta" className="py-20 bg-orange-100 text-center">
      <h2 className="text-4xl font-bold text-orange-700">Stay Updated</h2>
      <p className="text-lg text-gray-600 mt-2 max-w-md mx-auto">
        Subscribe to our newsletter and be the first to know when we launch.
      </p>
      <div className="mt-6 w-full max-w-md mx-auto">
        <div className="flex items-center rounded-lg bg-gray-100 shadow-sm">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border-none outline-none"
          />
          <Button onClick={handleSubscribe} className="bg-orange-400 hover:bg-orange-300 text-white px-6 py-3 rounded-sm">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
