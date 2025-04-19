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
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-300 mb-8">Page not found</p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
