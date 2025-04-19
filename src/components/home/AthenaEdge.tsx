import { Mic, Sparkles, LifeBuoy } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const AthenaEdge = () => {
  // Refs for sections we want to animate in
  const headingRef = useRef<HTMLHeadingElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Observer setup for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe our elements
    if (headingRef.current) observer.observe(headingRef.current);
    if (featuresRef.current) {
      const children = featuresRef.current.children;
      Array.from(children).forEach(child => {
        observer.observe(child);
      });
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="py-28 md:py-36 lg:py-44 bg-black relative">
      {/* Subtle divider - single line instead of pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-800"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800"></div>
      
      <div className="athena-container">
        <div className="text-center mb-20 lg:mb-28">
          <h2 ref={headingRef} className="fade-in-section text-5xl md:text-6xl font-bold mb-6 text-white">The Athena Edge</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What sets us apart from traditional assistant services
          </p>
        </div>
        
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div className="fade-in-section text-center premium-card hover-lift">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-black border border-athena-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mic className="h-10 w-10 text-athena-green" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Master Delegation</h3>
            <p className="text-gray-400 text-lg">
              Whether you're a novice or a pro, we've turned the art of delegation into a science.
            </p>
            <div className="mt-8">
              <a href="#delegation" className="text-athena-green hover:text-athena-blue flex items-center justify-center gap-2 transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="fade-in-section text-center premium-card hover-lift" style={{transitionDelay: '150ms'}}>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-black border border-athena-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-10 w-10 text-athena-green" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Elite Assistants</h3>
            <p className="text-gray-400 text-lg">
              We interview 30,000 assistants per month from around the world, so you don't have to.
            </p>
            <div className="mt-8">
              <a href="#elite-assistants" className="text-athena-green hover:text-athena-blue flex items-center justify-center gap-2 transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="fade-in-section text-center premium-card hover-lift" style={{transitionDelay: '300ms'}}>
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-black border border-athena-green/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <LifeBuoy className="h-10 w-10 text-athena-green" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">360° Life Support</h3>
            <p className="text-gray-400 text-lg">
              Athena transforms how you spend your time: from doing it all to doing what you love.
            </p>
            <div className="mt-8">
              <a href="#services" className="text-athena-green hover:text-athena-blue flex items-center justify-center gap-2 transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthenaEdge;
