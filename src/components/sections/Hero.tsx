import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  videoBackground?: boolean;
}

const Hero: React.FC<HeroProps> = ({ videoBackground = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Set loaded after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };
  
  return (
    <section 
      id="hero" 
      className="min-h-[100vh] bg-cover bg-center relative flex items-center justify-center pt-24 pb-16 md:py-24 overflow-hidden"
      aria-label="Hero section - Achieve more with Athena"
    >
      {/* Background elements */}
      {videoBackground ? (
        <>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            aria-hidden="true"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
          </video>
          <button 
            onClick={toggleVideo}
            className="absolute bottom-6 right-6 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            aria-label={isVideoPlaying ? "Pause background video" : "Play background video"}
          >
            {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-mint-100/30 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-100/30 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-heading badge */}
          <div 
            className={`inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-8'
            }`}
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-2" />
            <span className="text-sm font-medium">Trusted by 10,000+ executives</span>
          </div>
          
          {/* Main heading */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-serif font-bold leading-[1.2] ${videoBackground ? 'text-white' : 'text-black'} mb-6 tracking-tight transition-all duration-1000 delay-100 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Reclaim 15+ Hours Weekly with <span className="relative inline-block">
              <span className="relative z-10">Elite Assistants</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-mint-200 rounded-sm -z-0 transform -rotate-1"></span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl ${videoBackground ? 'text-gray-200' : 'text-gray-700'} mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Executive assistants powered by AI to help you delegate, focus on high-impact work, and achieve more every day
          </p>
          
          {/* CTA buttons */}
          <div 
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto hover-lift bg-mint-600 hover:bg-mint-700 text-white px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <a href="#get-started">
                <span>Start Your Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={`w-full sm:w-auto ${videoBackground ? 'border-white/60 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/5'} px-8 py-6 text-lg rounded-xl`}
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div 
            className={`mt-12 pt-8 border-t ${videoBackground ? 'border-gray-200/20' : 'border-gray-200/30'} flex flex-wrap justify-center items-center gap-4 md:gap-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-mint-500 mr-2"></div>
              <span className={`text-sm ${videoBackground ? 'text-gray-300' : 'text-gray-600'}`}>No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-mint-500 mr-2"></div>
              <span className={`text-sm ${videoBackground ? 'text-gray-300' : 'text-gray-600'}`}>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-mint-500 mr-2"></div>
              <span className={`text-sm ${videoBackground ? 'text-gray-300' : 'text-gray-600'}`}>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-mint-500 mr-2"></div>
              <a 
                href="https://twitter.com/horizontalen" 
                className={`text-sm ${videoBackground ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us on Twitter
              </a>
            </div>
          </div>
          
          {/* Enhanced social proof */}
          <div 
            className={`mt-16 w-full transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <div className="glass-card bg-white/80 p-6 mb-10 mx-auto">
              <blockquote className="text-gray-700 italic">
                "Athena has completely transformed how I manage my business and personal life. I've reclaimed 15+ hours per week."
              </blockquote>
              <div className="mt-4 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mint-700 to-mint-900 mr-3 flex items-center justify-center">
                  <span className="text-white font-medium">SJ</span>
                </div>
                <div className="text-left">
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, TechStart Ventures</p>
                </div>
              </div>
            </div>
            
            {/* Trusted by logos */}
            <div className="mt-8">
              <p className={`text-sm uppercase tracking-wider font-medium mb-6 ${videoBackground ? 'text-gray-300' : 'text-gray-500'}`}>Trusted by leading companies</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {['Forbes', 'Inc.', 'TechCrunch', 'Entrepreneur', 'Fortune'].map((brand, index) => (
                  <div 
                    key={index} 
                    className={`${videoBackground ? 'text-white/70' : 'text-gray-500'} font-serif text-xl transition-all hover:opacity-100`}
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-8 h-12 border-2 rounded-full flex justify-center p-2 border-mint-500">
          <div className="w-1 h-3 bg-mint-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 