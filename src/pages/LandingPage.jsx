import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      {/* <Testimonials /> */}
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
