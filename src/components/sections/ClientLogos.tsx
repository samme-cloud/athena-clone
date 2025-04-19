import React, { useEffect, useState } from 'react';

const ClientLogos: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.querySelector('#trusted-by');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  // Enhanced company logos with more recognizable brands
  const companies = [
    { name: 'Finova', logo: 'F', color: 'bg-mint-400', industry: 'Finance' },
    { name: 'Vitality', logo: 'V', color: 'bg-sage-400', industry: 'Healthcare' },
    { name: 'TechSphere', logo: 'T', color: 'bg-mint-600', industry: 'Technology' },
    { name: 'EcoVenture', logo: 'E', color: 'bg-sage-500', industry: 'Sustainability' },
    { name: 'Nexus Group', logo: 'N', color: 'bg-mint-500', industry: 'Consulting' },
    { name: 'Horizon', logo: 'H', color: 'bg-sage-300', industry: 'Education' },
  ];

  return (
    <section id="trusted-by" className="py-16 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-mint-100 opacity-50 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-sage-100 opacity-40 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-black/30"></div>
            <h3 className="text-center font-serif text-lg text-black font-medium tracking-wider">
              Trusted by forward-thinking organizations
            </h3>
            <div className="h-[1px] w-12 bg-black/30"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className={`flex flex-col items-center justify-center transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="glass-card p-4 mb-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${company.color} bg-opacity-20`}>
                    <span className="text-black font-accent text-3xl font-bold">{company.logo}</span>
                  </div>
                </div>
                <span className="font-medium text-black">{company.name}</span>
                <span className="text-xs text-gray-500">{company.industry}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="font-accent text-xl text-black/80 italic max-w-2xl mx-auto">
              "Athena AI is redefining what's possible with executive assistance. Their platform has been a game-changer for companies across industries."
            </p>
            <p className="mt-4 text-sm font-medium">
              <span className="asymmetric-underline">Business Insider</span>, 2023 Tech Innovation Report
            </p>
          </div>
          
          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 premium-card text-center">
              <div className="text-3xl font-serif font-bold text-black mb-2">94%</div>
              <p className="text-gray-700">of users report significant time savings within the first month</p>
            </div>
            <div className="flex flex-col items-center p-6 premium-card text-center">
              <div className="text-3xl font-serif font-bold text-black mb-2">10,000+</div>
              <p className="text-gray-700">executives and professionals rely on Athena daily</p>
            </div>
            <div className="flex flex-col items-center p-6 premium-card text-center">
              <div className="text-3xl font-serif font-bold text-black mb-2">4.9/5</div>
              <p className="text-gray-700">average rating across all major platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 