import { MessageSquare, ShoppingCart, Zap, BarChart, CheckCircle, Layers } from "lucide-react";

const Features = () => {
  return (
    <section className="w-full bg-white text-center py-24 px-6 mt-50">
      <h2 className="text-2xl font-bold italic text-orange-700">Powerful & Simple SMS Automation</h2>
      <p className="mt-4 text-md text-gray-700 max-w-2xl mx-auto">
        Effortlessly engage Shopify customers, recover lost sales, and boost conversions with automated text messaging.
      </p>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <MessageSquare className="h-16 w-16 text-orange-600 mb-4" />
          <h3 className="text-l font-semibold text-gray-900">Automated SMS Campaigns</h3>
          <p className="text-gray-600 text-sm">Set up SMS sequences that nurture leads and drive conversions.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <ShoppingCart className="h-16 w-16 text-orange-600 mb-4" />
          <h3 className="text-l font-semibold text-gray-900">Recover Abandoned Carts</h3>
          <p className="text-gray-600 text-sm">Send timely reminders to bring back lost customers.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Layers className="h-16 w-16 text-orange-600 mb-4" />
          <h3 className="text-l font-semibold text-gray-900">Seamless Shopify Integration</h3>
          <p className="text-gray-600 text-sm">Easily sync with Shopify and automate messaging with zero effort.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Zap className="h-16 w-16 text-orange-600 mb-4" />
          <h3 className="text-l font-semibold text-gray-900">Boost Customer Engagement</h3>
          <p className="text-gray-600 text-sm">Deliver personalized SMS at the perfect moment.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <BarChart className="h-16 w-16 text-orange-600 mb-4" />
          <h3 className="text-l font-semibold text-gray-900">Track & Optimize Results</h3>
          <p className="text-gray-600 text-sm">Monitor campaign performance and improve engagement.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="h-16 w-16 text-orange-600 mb-4" />
          <h3 className="text-l font-semibold text-gray-900">No Coding Required</h3>
          <p className="text-gray-600 text-sm">Simple setup – start automating in minutes.</p>
        </div>
      </div>
      <div className="mt-20">
        <button className="px-8 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition text-lg">
          Join Waitlist
        </button>
      </div>
    </section>
  );
};

export default Features;
