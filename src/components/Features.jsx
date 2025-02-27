import { MessageSquare, ShoppingCart, Zap, BarChart, CheckCircle, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Features = () => {
  return (
    <section id="features" className="w-full bg-white text-center py-24 px-6 mt-50">
      <h2 className="text-2xl font-bold italic text-orange-700">Powerful & Simple SMS Automation</h2>
      <p className="mt-4 text-md text-gray-700 max-w-2xl mx-auto">
        Effortlessly engage Shopify customers, recover lost sales, and boost conversions with automated text messaging.
      </p>

      {/* Features Grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          { icon: MessageSquare, title: "Automated SMS Campaigns", desc: "Set up SMS sequences that nurture leads and drive conversions." },
          { icon: ShoppingCart, title: "Recover Abandoned Carts", desc: "Send timely reminders to bring back lost customers." },
          { icon: Layers, title: "Seamless Shopify Integration", desc: "Easily sync with Shopify and automate messaging with zero effort." },
          { icon: Zap, title: "Boost Customer Engagement", desc: "Deliver personalized SMS at the perfect moment." },
          { icon: BarChart, title: "Track & Optimize Results", desc: "Monitor campaign performance and improve engagement." },
          { icon: CheckCircle, title: "No Coding Required", desc: "Simple setup – start automating in minutes." },
        ].map(({ icon: Icon, title, desc }, index) => (
          <Card
            key={index}
            className="bg-orange-50 border border-orange-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg p-6"
          >
            <CardHeader className="flex flex-col items-center">
              <div className="bg-orange-200 p-3 rounded-full">
                <Icon className="h-12 w-12 text-orange-700" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900 mt-4">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 text-sm text-center">{desc}</CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20">
        <Button className="bg-orange-600 hover:bg-orange-500 px-8 py-3 text-lg">
          Join Waitlist
        </Button>
      </div>
    </section>
  );
};

export default Features;
