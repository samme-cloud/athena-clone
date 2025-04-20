import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/layout/Banner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-athena-navy text-athena-cream">
      <Banner />
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-athena-cream">404</h1>
          <p className="text-xl text-athena-cream/80 mb-8">Page not found</p>
          <Link 
            to="/" 
            className="inline-block border border-athena-cream/60 text-athena-cream hover:bg-athena-cream/10 px-8 py-4 text-lg rounded-xl font-semibold tracking-wide transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
