import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
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
      className="relative min-h-screen flex flex-col justify-center items-center py-20 bg-athena-navy overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-texture-dots opacity-50"></div>
      
      {/* Decorative elements - floating shapes */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full bg-mint-400/30 opacity-50 animate-float parallax" data-speed="0.05"></div>
        <div className="absolute bottom-1/4 right-1/5 w-40 h-40 rounded-full bg-mint-300/30 opacity-40 animate-float-slow parallax" data-speed="0.08"></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 rounded-full bg-sage-300/30 opacity-60 animate-float parallax" data-speed="0.1"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-lg bg-mint-400/20 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all transform duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-athena-green" />
              <p className="text-overline uppercase tracking-widest text-athena-cream font-medium">Transform Your Productivity</p>
              <Sparkles className="w-5 h-5 text-athena-green" />
            </div>
            
            <h1 className="text-5xl md:text-6xl xl:text-display-1 font-serif font-bold text-athena-cream mb-4 leading-tight">
              Your Executive Assistant with <span className="asymmetric-underline">Superhuman</span> Capabilities
            </h1>
            
            <p className="display-text text-2xl text-athena-cream/80 mb-2">
              Delegate. Automate. Elevate.
            </p>
            
            <p className="text-xl text-athena-cream/80 mb-10 max-w-2xl mx-auto">
              Reclaim hours of your day with Athena AI, the intelligent assistant that manages your tasks, schedules meetings, and makes routine decisions with remarkable precision.
            </p>
            
            <div className="glass-card inline-block p-8 mb-10 mx-auto max-w-3xl">
              <blockquote className="mb-6 text-athena-cream">
                "Athena doesn't just save me time—it's fundamentally changed how I work. I accomplish in hours what used to take days, with a level of organization I never thought possible."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-mint-400 mr-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-mint-400 to-mint-600"></div>
                </div>
                <div className="text-left">
                  <p className="font-medium text-athena-cream">Sarah Johnson</p>
                  <p className="text-sm text-athena-cream/70">Founder, Innovative Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto hover-lift bg-athena-green text-athena-navy hover:bg-athena-green/90 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href="#pricing">
                  <Zap className="mr-2 h-5 w-5" />
                  <span>Start Your Transformation</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-athena-cream/20 text-athena-cream hover:bg-athena-cream/5 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-4 text-sm text-athena-cream/70">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-mint-400 mr-2"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-mint-400 mr-2"></div>
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
          
          <div className={`mt-20 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-athena-cream/20 text-athena-cream hover:bg-athena-cream/10 hover:text-athena-cream transition-colors duration-300"
              aria-label="Scroll down"
            >
              <ArrowDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-athena-navy" style={{ 
        borderTopLeftRadius: '50% 80%', 
        borderTopRightRadius: '50% 80%',
        transform: 'translateY(50%)',
        zIndex: 1
      }}></div>
      
      {/* Achievement badges */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-6 z-10">
        <div className="glass-card py-2 px-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-athena-green/80 flex items-center justify-center">
            <span className="text-athena-navy text-xs">★</span>
          </div>
          <span className="text-sm font-medium text-athena-cream">Trusted by 10,000+ users</span>
        </div>
        <div className="glass-card py-2 px-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-athena-green/80 flex items-center justify-center">
            <span className="text-athena-navy text-xs">★</span>
          </div>
          <span className="text-sm font-medium text-athena-cream">4.9/5 Rating</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 