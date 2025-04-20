
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FindDoctor from "../components/FindDoctor";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Athena Health | Healthcare Technology";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <FindDoctor />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
