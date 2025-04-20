import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-athena-navy flex items-center justify-center overflow-hidden text-athena-cream">
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
      
      {/* Content - clean, minimal, focused */}
      <div className="relative container mx-auto px-4 text-center max-w-3xl flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-athena-cream mb-8">
          Reclaim 15+ Hours Weekly with Elite Assistants
        </h1>
        
        <p className="text-xl md:text-2xl text-athena-cream/80 mx-auto mb-12 tracking-wide font-light leading-relaxed">
          Executive assistants powered by AI to help you delegate, focus on high-impact work, and achieve more every day
        </p>

        {/* CTA button - Re-added */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-athena-cream/20 text-athena-cream hover:bg-athena-cream/5 font-medium px-8 py-6 text-lg tracking-wide"
            asChild
          >
            <Link to="/how-it-works">Begin Here</Link>
          </Button>
        </div>
        
      </div>
      {/* Optional: Add a scroll indicator similar to Hero.tsx if needed */}
    </section>
  );
};

export default HeroSection; 