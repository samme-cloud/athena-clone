import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Define testimonial type for better organization
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imagePath: string;
}

export const EnhancedTestimonials = () => {
  // State to track which set of testimonials is currently visible
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  
  // All testimonials data with image paths
  const testimonials: Testimonial[] = [
    {
      quote: "My Athena EA is awesome – my anxiety level has decreased substantially.",
      name: "RYAN HOOVER",
      title: "Founder of ProductHunt",
      imagePath: "/images/testimonials/ryan-hoover.jpg"
    },
    {
      quote: "As Governor of Kansas, I was fortunate to have an amazing personal team supporting me. When I reentered private life, I was lucky to find Athena. My Athena EA is talented, discreet, and an amazing value.",
      name: "JEFF COLYER",
      title: "Former Governor of Kansas",
      imagePath: "/images/testimonials/jeff-colyer.jpg"
    },
    {
      quote: "I started with one Athena EA and it was so impactful that I've now hired 20 for my company. Levels' growth has been fueled by Athena.",
      name: "SAM CORCOS",
      title: "CEO of Levels",
      imagePath: "/images/testimonials/sam-corcos.jpg"
    },
    {
      quote: "Our family started with one Athena EA and we love her so much we've now hired multiple Athena EAs. Athena gives us time and freedom.",
      name: "RYAN HUDSON",
      title: "Founder of Honey, sold to PayPal for $4B",
      imagePath: "/images/testimonials/ryan-hudson.jpg"
    },
    {
      quote: "Hiring an Athena Executive Assistant has been one of the best decisions I've made. I have more time for strategic work and personal life.",
      name: "ALEX JOHNSON",
      title: "CTO of TechForward",
      imagePath: "/images/testimonials/alex-johnson.jpg"
    },
    {
      quote: "The attention to detail and proactive approach from my Athena EA has transformed how I manage my schedule and priorities.",
      name: "MICHELLE LEE",
      title: "Founder & CEO of Mindful Ventures",
      imagePath: "/images/testimonials/michelle-lee.jpg"
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
  const goToPrevious = useCallback(() => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);
  
  const goToNext = useCallback(() => {
    setActiveIndex(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);
  
  // Image loading handler
  const handleImageLoad = (imagePath: string) => {
    setImagesLoaded(prev => ({...prev, [imagePath]: true}));
  };
  
  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    
    // Element visibility observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Only auto-rotate when visible
          interval;
        } else {
          setIsVisible(false);
          clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);
    
    // Cleanup
    return () => {
      clearInterval(interval);
      if (section) observer.disconnect();
    };
  }, [goToNext]);

  return (
    <div id="testimonials-section" className="py-28 md:py-36 lg:py-44 bg-black relative">
      <div className="athena-container relative z-10">
        <div 
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What our clients say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Join industry leaders who have transformed their productivity with our services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={`${activeIndex}-${index}`}
              className={`premium-card flex flex-col justify-between hover:scale-105 hover:rotate-1 transform transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote icon for visual interest */}
              <div className="text-5xl text-athena-green/20 mb-6 font-serif">"</div>
              
              <p className="text-2xl mb-12 text-white leading-relaxed">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full mr-5 overflow-hidden relative bg-gray-800">
                  {/* Progressive image loading for author avatar */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-athena-green/30 to-athena-blue/30 transition-opacity duration-300 ${
                      imagesLoaded[testimonial.imagePath] ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  
                  <img 
                    src={testimonial.imagePath} 
                    alt={testimonial.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imagesLoaded[testimonial.imagePath] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(testimonial.imagePath)}
                    onError={(e) => {
                      // If image fails to load, keep the placeholder visible
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <div className="font-medium text-white text-lg">{testimonial.name}</div>
                  <div className="text-base text-athena-green">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <div 
            className={`flex space-x-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 border border-white/30 hover:border-athena-green bg-black hover:bg-athena-green/20 flex items-center justify-center rounded-full transition-all"
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({length: totalPages}).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'bg-athena-green w-4' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonials page ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={goToNext}
              className="w-12 h-12 border border-white/30 hover:border-athena-green bg-black hover:bg-athena-green/20 flex items-center justify-center rounded-full transition-all"
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTestimonials; 