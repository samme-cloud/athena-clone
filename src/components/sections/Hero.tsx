import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  videoBackground?: boolean;
}

const Hero: React.FC<HeroProps> = ({ videoBackground = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set loaded after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      id="hero" 
      className={`relative h-screen flex items-center justify-center ${ 
        // Ensure base text color is set correctly regardless of background 
        videoBackground ? 'bg-black text-athena-cream' : 'bg-white text-athena-cream' 
      } overflow-hidden`}
    >
      {/* Background video or image */}
      {videoBackground && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      
      {!videoBackground && (
        // Use a gradient that complements the beige text
        <div className="absolute inset-0 bg-gradient-to-br from-athena-navy to-athena-navy-light"></div>
      )}
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Removed pre-heading badge */}
          
          {/* Main heading */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-serif font-bold leading-[1.2] text-athena-cream mb-6 tracking-tight transition-all duration-1000 delay-100 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Reclaim 15+ Hours Weekly with <span className="relative inline-block">
              <span className="relative z-10">Elite Assistants</span>
              {/* Adjusted highlight color to complement beige */}
              <span className="absolute bottom-2 left-0 w-full h-3 bg-athena-cream/20 rounded-sm -z-0 transform -rotate-1"></span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl text-athena-cream/80 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Executive assistants powered by AI to help you delegate, focus on high-impact work, and achieve more every day
          </p>
          
          {/* CTA Button - Re-added */}
          <div 
            className={`mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-athena-cream/60 text-athena-cream hover:bg-athena-cream/10 px-8 py-6 text-lg rounded-xl font-semibold tracking-wide"
              asChild
            >
              <a href="#how-it-works">Begin Here</a>
            </Button>
          </div>
                    
          {/* Removed trust indicators */}
          
          {/* Removed testimonial and company logos */}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-700 ${
          isLoaded ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-athena-cream">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-athena-cream/50 to-athena-cream opacity-50"></div>
          <span className="text-xs uppercase tracking-widest mt-2">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 