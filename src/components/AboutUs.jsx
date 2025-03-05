import { motion } from "framer-motion";
import { MessageCircle, Zap, ShoppingCart, Settings } from "lucide-react";

const AboutUs = () => {
  return (
    <motion.section
      id="aboutus"
      className="py-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="mt-40 md:mt-72 text-4xl font-md text-orange-700">
        <span className="font-extrabold">Introducing</span> TextFlow
      </h2>
      <p className="mt-8 text-md max-w-lg text-gray-600 mt-2 mx-auto text-center">
        Recover abandoned carts, boost sales, and connect with customers
        effortlessly through personalized, high-converting text messages. Whether it’s
        welcoming new subscribers or re-engaging inactive shoppers, TextFlow ensures
        <span className="italic"> every opportunity turns into a sale. </span>🚀
      </p>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { icon: Zap, title: "Instant Engagement", desc: "Reach customers instantly with automated SMS messages." },
          { icon: ShoppingCart, title: "Recover Sales", desc: "Recover lost revenue with abandoned cart reminders." },
          { icon: MessageCircle, title: "Personalized Messages", desc: "Send tailored SMS campaigns for higher conversions." },
          { icon: Settings, title: "Effortless Automation", desc: "Set up in minutes—no coding required." },
        ].map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Icon className="w-6 h-6 text-indigo-600" />
            <h3 className="font-md mt-2">{title}</h3>
            <p className="text-gray-600 text-sm text-center">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutUs;
