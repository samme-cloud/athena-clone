import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="bg-black relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden">
      {/* Enhanced decorative elements with image */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Background pattern image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/grid-pattern.png)',
            backgroundSize: '600px',
            mixBlendMode: 'overlay'
          }}
        ></div>
        
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-athena-green/5 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-athena-green/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-athena-green/3 blur-3xl"></div>
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(45,212,191,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="athena-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className={`mb-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-athena-green/10 border border-athena-green/20 text-athena-green text-sm transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-athena-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-athena-green"></span>
              </span>
              Now available in more countries
            </div>

            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
            >
              Your <span className="text-athena-green">Executive Assistant</span> with AI Superpowers
            </h1>

            <p 
              className={`mt-6 text-xl text-gray-300 max-w-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
            >
              Athena combines elite human executive assistants with AI to handle everything from scheduling to research and project management, letting you focus on what truly matters.
            </p>

            <div className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              <Link 
                to="#pricing" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-athena-green hover:bg-athena-green/90 text-black font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
              >
                Get Started <ChevronRight size={18} />
              </Link>
              
              <Link 
                to="#how-it-works" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/30 text-white rounded-lg transition-all"
              >
                Learn How It Works
              </Link>
            </div>

            <div className={`mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-sm text-gray-400 mb-3">Trusted by leaders from top companies</p>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Company logos with actual images */}
                <img src="/images/google-logo.png" alt="Google" className="h-6 object-contain" />
                <img src="/images/microsoft-logo.png" alt="Microsoft" className="h-6 object-contain" />
                <img src="/images/amazon-logo.png" alt="Amazon" className="h-6 object-contain" />
                <img src="/images/meta-logo.png" alt="Meta" className="h-6 object-contain" />
                <img src="/images/apple-logo.png" alt="Apple" className="h-6 object-contain" />
              </div>
            </div>
          </div>

          {/* Hero image/illustration */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-[0_0_50px_rgba(45,212,191,0.15)]">
                <div className="absolute top-0 right-0 left-0 h-28 bg-gradient-to-b from-athena-green/10 to-transparent"></div>
                
                {/* Hero illustration or dashboard mockup */}
                <div className="absolute inset-0">
                  <img 
                    src="/images/dashboard-mockup.png" 
                    alt="Athena AI Dashboard" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image is not available
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      
                      // Create fallback content
                      const fallback = document.createElement('div');
                      fallback.className = 'relative w-3/4 h-3/4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden';
                      fallback.innerHTML = `
                        <div class="absolute top-0 w-full h-10 bg-gray-800 flex items-center px-4">
                          <div class="flex space-x-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div class="mx-auto text-xs text-gray-300">Athena Assistant</div>
                        </div>
                        
                        <div class="absolute top-10 inset-x-0 bottom-0 p-4 overflow-hidden">
                          <div class="flex flex-col gap-3">
                            <div class="bg-gray-700/50 rounded-lg p-3 max-w-[80%] text-sm">
                              <div class="text-xs text-athena-green mb-1">You</div>
                              <div>Can you help me schedule a meeting with the marketing team for tomorrow?</div>
                            </div>
                            
                            <div class="bg-athena-green/10 border border-athena-green/20 rounded-lg p-3 max-w-[80%] ml-auto text-sm">
                              <div class="text-xs text-athena-green mb-1">Athena</div>
                              <div>I've scheduled a meeting with the marketing team for tomorrow at 2:00 PM. I've sent calendar invites to everyone and prepared the agenda based on your previous discussions.</div>
                            </div>
                          </div>
                          
                          <div class="absolute bottom-4 left-4 flex gap-1">
                            <div class="w-2 h-2 rounded-full bg-athena-green/70 animate-pulse"></div>
                            <div class="w-2 h-2 rounded-full bg-athena-green/70 animate-pulse" style="animation-delay: 0.2s"></div>
                            <div class="w-2 h-2 rounded-full bg-athena-green/70 animate-pulse" style="animation-delay: 0.4s"></div>
                          </div>
                        </div>
                      `;
                      target.parentElement!.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-athena-green/5 backdrop-blur-md border border-athena-green/10 rounded-xl rotate-6 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-athena-green/5 backdrop-blur-md border border-athena-green/10 rounded-xl -rotate-12 animate-float-slow"></div>
              
              {/* Feature callout bubble */}
              <div className="absolute -bottom-4 right-8 bg-athena-green text-black px-4 py-2 rounded-lg font-medium text-sm shadow-lg transform rotate-3 animate-float">
                <div className="absolute -top-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-athena-green"></div>
                AI-powered delegation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 