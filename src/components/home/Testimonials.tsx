import { useState, useEffect } from 'react';

// Define testimonial type for better organization
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

export const Testimonials = () => {
  // State to track which set of testimonials is currently visible
  const [activeIndex, setActiveIndex] = useState(0);
  
  // All testimonials data
  const testimonials: Testimonial[] = [
    {
      quote: "My Athena EA is awesome – my anxiety level has decreased substantially.",
      name: "RYAN HOOVER",
      title: "Founder of ProductHunt",
    },
    {
      quote: "As Governor of Kansas, I was fortunate to have an amazing personal team supporting me. When I reentered private life, I was lucky to find Athena. My Athena EA is talented, discreet, and an amazing value.",
      name: "JEFF COLYER",
      title: "Former Governor of Kansas",
    },
    {
      quote: "I started with one Athena EA and it was so impactful that I've now hired 20 for my company. Levels' growth has been fueled by Athena.",
      name: "SAM CORCOS",
      title: "CEO of Levels",
    },
    {
      quote: "Our family started with one Athena EA and we love her so much we've now hired multiple Athena EAs. Athena gives us time and freedom.",
      name: "RYAN HUDSON",
      title: "Founder of Honey, sold to PayPal for $4B",
    },
    {
      quote: "Hiring an Athena Executive Assistant has been one of the best decisions I've made. I have more time for strategic work and personal life.",
      name: "ALEX JOHNSON",
      title: "CTO of TechForward",
    },
    {
      quote: "The attention to detail and proactive approach from my Athena EA has transformed how I manage my schedule and priorities.",
      name: "MICHELLE LEE",
      title: "Founder & CEO of Mindful Ventures",
    }
  ];
  
  // Calculate which testimonials to show based on activeIndex
  const visibleTestimonials = testimonials.slice(
    activeIndex * 3, 
    Math.min((activeIndex * 3) + 3, testimonials.length)
  );
  
  // Get total number of pages
  const totalPages = Math.ceil(testimonials.length / 3);
  
  // Handle navigation
  const goToPrevious = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  };
  
  const goToNext = () => {
    setActiveIndex(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  };
  
  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-28 md:py-36 lg:py-44 bg-black relative">
      {/* Removed pattern background for uniform black */}
      
      <div className="athena-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What our clients say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Join industry leaders who have transformed their productivity with our services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={`${activeIndex}-${index}`}
              className="premium-card flex flex-col justify-between hover:scale-105 hover:rotate-1 transform transition-all duration-500"
            >
              {/* Quote icon for visual interest */}
              <div className="text-5xl text-athena-green/20 mb-6 font-serif">"</div>
              
              <p className="text-2xl mb-12 text-white leading-relaxed">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-5 object-cover border-2 border-athena-green/30" 
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-athena-green/30 to-athena-blue/30 mr-5 flex items-center justify-center text-2xl font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-medium text-white text-lg">{testimonial.name}</div>
                  <div className="text-base text-athena-green">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="flex space-x-4">
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 border border-white/30 hover:border-athena-green bg-black hover:bg-athena-green/20 flex items-center justify-center rounded-full transition-all"
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="w-12 h-12 border border-white/30 hover:border-athena-green bg-black hover:bg-athena-green/20 flex items-center justify-center rounded-full transition-all"
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
