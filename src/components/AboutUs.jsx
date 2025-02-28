import { MessageCircle, Zap, ShoppingCart, Settings } from "lucide-react";

const AboutUs = () => {
    return (
      <section id="aboutus" className="py-20 text-center">
        <h2 className="mt-50 text-4xl font-md text-orange-700"><span className="font-extrabold">Introducing</span> TextFlow</h2>
        <p className="mt-8 text-md max-w-lg text-gray-600 mt-2 mx-auto text-center">
        Recover abandoned carts, boost sales, and connect with customers
         effortlessly through personalized, high-converting text messages. Whether it’s 
         welcoming new subscribers or re-engaging inactive shoppers, TextFlow ensures  
         <span className="italic"> every opportunity turns into a sale. </span>🚀</p>

         <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
            <Zap className="w-6 h-6 text-indigo-600" />
            <h3 className="font-md mt-2">Instant Engagement</h3>
            <p className="text-gray-600 text-sm text-center">Reach customers instantly with automated SMS messages.</p>
            </div>
            <div className="flex flex-col items-center">
            <ShoppingCart className="w-6 h-6 text-indigo-600" />
            <h3 className="font-md mt-2">Recover Sales</h3>
            <p className="text-gray-600 text-sm text-center">Recover lost revenue with abandoned cart reminders.</p>
            </div>
            <div className="flex flex-col items-center">
            <MessageCircle className="w-6 h-6 text-indigo-600" />
            <h3 className="font-md mt-2">Personalized Messages</h3>
            <p className="text-gray-600 text-sm text-center">Send tailored SMS campaigns for higher conversions.</p>
            </div>
            <div className="flex flex-col items-center">
            <Settings className="w-6 h-6 text-indigo-600" />
            <h3 className="font-d mt-2">Effortless Automation</h3>
            <p className="text-gray-600 text-sm text-center">Set up in minutes—no coding required.</p>
            </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  