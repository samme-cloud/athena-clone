import { useEffect, useState } from 'react';

export const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Updated logo array with image paths
  const logos = [
    { name: 'Meta', role: 'Product Manager', logoPath: '/images/meta-logo.png' },
    { name: 'Apple', role: 'Engineering Director', logoPath: '/images/apple-logo.png' },
    { name: 'Amazon', role: 'VP of Operations', logoPath: '/images/amazon-logo.png' },
    { name: 'Microsoft', role: 'Principal Engineer', logoPath: '/images/microsoft-logo.png' },
    { name: 'Google', role: 'Growth Manager', logoPath: '/images/google-logo.png' },
    { name: 'Netflix', role: 'Content Strategist', logoPath: '/images/netflix-logo.png' },
    { name: 'Tesla', role: 'Design Lead', logoPath: '/images/tesla-logo.png' },
    { name: 'Spotify', role: 'Marketing Director', logoPath: '/images/spotify-logo.png' },
    { name: 'Airbnb', role: 'Product Designer', logoPath: '/images/airbnb-logo.png' },
    { name: 'Uber', role: 'Regional Manager', logoPath: '/images/uber-logo.png' },
  ];

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="athena-container">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            Trusted by Leaders from
          </h2>
          <div 
            className={`w-24 h-1 mx-auto bg-gradient-to-r from-athena-green/30 via-athena-green to-athena-green/30 rounded transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
          ></div>
        </div>

        {/* Logos grid with actual images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-lg border border-gray-800 bg-gradient-to-br from-black via-gray-900/10 to-black hover:border-athena-green/30 hover:shadow-[0_0_25px_rgba(45,212,191,0.1)] transition-all duration-500 ease-out ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Logo image with fallback */}
              <div className="relative w-12 h-12 mb-3">
                {/* Image with fallback mechanism */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* When images are available, use this */}
                  <img 
                    src={logo.logoPath} 
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // If image fails to load, replace with text fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback if image isn't available */}
                  <div className="hidden text-2xl font-bold text-white">
                    {logo.name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="text-xl font-bold text-white mb-1">{logo.name}</div>
              <div className="text-sm text-gray-400">{logo.role}</div>
            </div>
          ))}
        </div>

        {/* Testimonial snippet */}
        <div 
          className={`mt-16 md:mt-20 text-center max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <blockquote className="relative">
            <div className="absolute -left-6 -top-6 text-6xl text-athena-green opacity-30">"</div>
            <p className="text-lg md:text-xl text-gray-300 italic">
              Our executives have saved an average of <span className="text-white font-medium">15+ hours per week</span> after partnering with Athena assistants, allowing them to focus on high-impact strategic work.
            </p>
            <div className="absolute -right-6 -bottom-6 text-6xl text-athena-green opacity-30">"</div>
          </blockquote>
        </div>
      </div>

      {/* Animated gradient bar */}
      <div className="relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-athena-green/0 via-athena-green/10 to-athena-green/0"></div>
        <div 
          className={`h-px w-full bg-gradient-to-r from-athena-green/0 via-athena-green/30 to-athena-green/0 transition-all duration-2000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
      </div>
    </section>
  );
};

export default ClientLogos;
