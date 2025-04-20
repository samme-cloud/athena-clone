import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-28 text-center bg-athena-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 max-w-4xl">
        <h1 
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-athena-cream mb-8 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          Elevate Your
          <span className="text-elite-teal block mt-2">Executive Experience</span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-athena-cream/80 mx-auto mb-12 transition-all duration-1000 delay-150 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          Unlock unprecedented productivity with our elite assistant service
        </p>

        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <Link 
            to="#pricing" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-elite-teal hover:bg-elite-teal/90 text-athena-cream font-medium rounded-lg transition-all border border-athena-cream/20 hover:border-athena-cream/40 shadow-md"
          >
            Get Started <ChevronRight size={18} />
          </Link>
          
          <Link 
            to="#how-it-works" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-elite-teal hover:bg-elite-teal/90 text-athena-cream font-medium rounded-lg transition-all border border-athena-cream/20 hover:border-athena-cream/40 shadow-md"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 