import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronRight, ChevronLeft, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  image?: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    // Auto-rotate testimonials every 8 seconds
    autoplayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      quote: "Athena doesn't just save me time—it's fundamentally changed how I work. I accomplish in hours what used to take days, with a level of organization I never thought possible.",
      name: "Sarah Johnson",
      title: "Founder & CEO",
      company: "Innovative Solutions",
      rating: 5
    },
    {
      quote: "As someone who was skeptical of AI assistants, Athena completely changed my perspective. The combination of human expertise and AI capabilities creates an experience that's truly transformative for busy executives.",
      name: "Michael Chen",
      title: "Chief Technology Officer",
      company: "TechSphere",
      rating: 5
    },
    {
      quote: "My team started with one Athena assistant and quickly expanded to five. Our productivity metrics have increased by 37% since implementation, and team satisfaction has never been higher.",
      name: "Elena Rodriguez",
      title: "VP of Operations",
      company: "Vitality Healthcare",
      rating: 5
    },
    {
      quote: "The attention to detail is what sets Athena apart. My assistant anticipates needs I didn't even realize I had, allowing me to focus entirely on strategic initiatives rather than daily operations.",
      name: "James Wilson",
      title: "Managing Partner",
      company: "Nexus Group",
      rating: 4
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section 
      ref={testimonialsRef}
      id="testimonials" 
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mint-100/30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-100/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-black/30"></div>
            <p className="text-overline uppercase tracking-widest text-black font-medium">Success Stories</p>
            <div className="h-[1px] w-12 bg-black/30"></div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What Our <span className="asymmetric-underline">Clients</span> Say
          </h2>
          
          <p className={`text-xl text-gray-700 mx-auto transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join thousands of executives and teams who have transformed their productivity with Athena
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative">
            {/* Main testimonial */}
            <div className="glass-card p-10 md:p-12 bg-white/90 relative">
              {/* Quote icon */}
              <Quote className="absolute text-mint-300 w-16 h-16 -top-6 -left-6" />
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                {/* Avatar and info */}
                <div className="w-full md:w-1/3 flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full bg-mint-800 mb-6 overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-mint-700 to-mint-900 flex items-center justify-center">
                      <span className="font-accent text-4xl text-white">{testimonials[activeIndex].name.charAt(0)}</span>
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-xl mb-1">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-700 mb-2">{testimonials[activeIndex].title}</p>
                  <p className="text-mint-700 font-medium text-sm">{testimonials[activeIndex].company}</p>
                  
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonials[activeIndex].rating ? 'text-mint-500 fill-mint-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                
                {/* Quote */}
                <div className="w-full md:w-2/3">
                  <blockquote className="text-2xl text-gray-800 mb-6 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-mint-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Indicator dots */}
              <div className="flex items-center gap-2 px-4">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === idx ? 'w-6 h-2 bg-mint-500' : 'w-2 h-2 bg-gray-300 hover:bg-mint-300'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-mint-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className={`mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="premium-card flex flex-col items-center p-8 text-center">
            <div className="text-4xl font-serif font-bold text-black mb-3">97%</div>
            <p className="text-gray-700">Client retention rate after the first year</p>
          </div>
          <div className="premium-card flex flex-col items-center p-8 text-center">
            <div className="text-4xl font-serif font-bold text-black mb-3">15+</div>
            <p className="text-gray-700">Hours saved per week for the average executive</p>
          </div>
          <div className="premium-card flex flex-col items-center p-8 text-center">
            <div className="text-4xl font-serif font-bold text-black mb-3">4.9/5</div>
            <p className="text-gray-700">Average satisfaction rating across all clients</p>
          </div>
        </div>
        
        {/* Brand logos */}
        <div className={`mt-24 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <p className="text-lg font-medium font-serif">Trusted by leading brands worldwide</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['Forbes', 'Inc.', 'TechCrunch', 'Entrepreneur', 'Business Insider'].map((brand) => (
              <div key={brand} className="text-gray-400 font-accent text-2xl italic">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 