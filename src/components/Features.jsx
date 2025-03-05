import { motion } from "framer-motion";
import { MessageSquare, ShoppingCart, Zap, BarChart, CheckCircle, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Features = () => {
  return (
    <motion.section
      id="features"
      className="w-full bg-white text-center py-6 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold italic text-orange-700">
        Powerful & Simple SMS Automation
      </h2>
      <p className="mt-4 text-md text-gray-700 max-w-2xl mx-auto">
        Effortlessly design high converting SMS automation campaigns with <span className="font-bold">zero technical experience needed.</span>
      </p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          { icon: MessageSquare, title: "Automated SMS Campaigns", desc: "Set up SMS sequences that nurture leads and drive conversions." },
          { icon: ShoppingCart, title: "Recover Abandoned Carts", desc: "Send timely reminders to bring back lost customers." },
          { icon: Layers, title: "Seamless Shopify Integration", desc: "Easily sync with Shopify and automate messaging with zero effort." },
          { icon: Zap, title: "Boost Customer Engagement", desc: "Deliver personalized SMS at the perfect moment." },
          { icon: BarChart, title: "Track & Optimize Results", desc: "Monitor campaign performance and improve engagement." },
          { icon: CheckCircle, title: "No Coding Required", desc: "Simple setup – start automating in minutes." },
        ].map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-orange-50 border border-orange-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg p-6">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-orange-200 p-3 rounded-full">
                  <Icon className="h-12 w-12 text-orange-700" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 mt-4">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-sm text-center">{desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;
