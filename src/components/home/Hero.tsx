import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
    
    // Subtle parallax effect for depth
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (document.getElementById('hero-bg')) {
        document.getElementById('hero-bg')!.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden bg-black section-padding">
      {/* Background overlay with stars - subtle and elegant */}
      <div id="hero-bg" className="absolute inset-0 -z-10 bg-black">
        {/* Stars animation */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="athena-container relative z-10 max-w-5xl">
        {/* Main heading with enhanced animation */}
        <h1 
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          ACHIEVE <span className="text-athena-green">MORE</span>
        </h1>
        
        {/* Enhanced subheadline */}
        <p 
          className={`text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Get an elite assistant and world-class delegation coaching<br/>
          <span className="text-gray-400">designed for executives who value their time</span>
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="#get-started">
            <Button 
              size="lg"
              className="bg-athena-green hover:bg-athena-green/90 text-black font-semibold px-10 py-6 h-auto rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,180,0.3)] hover:shadow-[0_0_30px_rgba(0,255,180,0.5)]"
            >
              GET STARTED
            </Button>
          </Link>
          
          <Link to="#elite-assistants">
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 font-medium px-10 py-6 h-auto rounded-md transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
        
        {/* Social proof capsule */}
        <div className={`mt-16 py-3 px-6 rounded-full border border-gray-800 inline-flex items-center gap-3 transition-all duration-1000 delay-600 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-athena-green/40 to-athena-blue/40 border border-gray-800 flex items-center justify-center text-xs font-bold">
                {i}
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-300">Trusted by <span className="text-white font-medium">2000+</span> founders & executives</span>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-800 ease-out ${isLoaded ? 'opacity-70' : 'opacity-0'}`}>
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs text-gray-400 mb-2">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0V23H9V0H7Z" fill="white" fillOpacity="0.3"/>
          </svg>
        </div>
      </div>
      
      {/* Add CSS for star twinkling */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
