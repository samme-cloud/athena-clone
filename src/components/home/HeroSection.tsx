import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="bg-elite-teal relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden">
      {/* Clean, minimal background - just a subtle grid pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Background pattern image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/images/grid-pattern.png)',
            backgroundSize: '600px',
            mixBlendMode: 'overlay'
          }}
        ></div>
      </div>

      <div className="athena-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div className={`mb-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-athena-cream/20 text-athena-cream text-sm transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-athena-cream opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-athena-cream"></span>
              </span>
              Now available in more countries
            </div>

            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
            >
              Your <span className="text-athena-cream/90">Executive Assistant</span> with AI Superpowers
            </h1>

            <p 
              className={`mt-6 text-xl text-athena-cream/80 max-w-xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
            >
              Athena combines elite human executive assistants with AI to handle everything from scheduling to research and project management, letting you focus on what truly matters.
            </p>

            <div className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
              <Link 
                to="#pricing" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-elite-teal hover:bg-elite-teal/90 text-athena-cream font-medium rounded-lg transition-all border border-athena-cream/20 hover:border-athena-cream/40 shadow-md"
              >
                Get Started <ChevronRight size={18} />
              </Link>
              
              <Link 
                to="#how-it-works" 
                className="flex items-center justify-center gap-2 px-6 py-3 bg-elite-teal hover:bg-elite-teal/90 text-athena-cream font-medium rounded-lg transition-all border border-athena-cream/20 hover:border-athena-cream/40 shadow-md"
              >
                Learn How It Works
              </Link>
            </div>

            <div className={`mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-sm text-athena-cream/60 mb-3">Trusted by leaders from top companies</p>
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

          {/* Hero image/illustration - simplified */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
            <div className="relative">
              {/* Main image container - cleaned up */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-elite-teal border border-athena-cream/10 shadow-md">
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
                      fallback.className = 'relative w-3/4 h-3/4 bg-elite-teal rounded-xl overflow-hidden border border-athena-cream/10';
                      fallback.innerHTML = `
                        <div class="absolute top-0 w-full h-10 bg-elite-teal border-b border-athena-cream/10 flex items-center px-4">
                          <div class="flex space-x-2">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div class="mx-auto text-xs text-athena-cream/80">Athena Assistant</div>
                        </div>
                        
                        <div class="absolute top-10 inset-x-0 bottom-0 p-4 overflow-hidden">
                          <div class="flex flex-col gap-3">
                            <div class="bg-elite-teal/70 border border-athena-cream/10 rounded-lg p-3 max-w-[80%] text-sm">
                              <div class="text-xs text-athena-cream/90 mb-1">You</div>
                              <div class="text-athena-cream/80">Can you help me schedule a meeting with the marketing team for tomorrow?</div>
                            </div>
                            
                            <div class="bg-elite-teal/50 border border-athena-cream/10 rounded-lg p-3 max-w-[80%] ml-auto text-sm">
                              <div class="text-xs text-athena-cream/90 mb-1">Athena</div>
                              <div class="text-athena-cream/80">I've scheduled a meeting with the marketing team for tomorrow at 2:00 PM. I've sent calendar invites to everyone and prepared the agenda based on your previous discussions.</div>
                            </div>
                          </div>
                          
                          <div class="absolute bottom-4 left-4 flex gap-1">
                            <div class="w-2 h-2 rounded-full bg-athena-cream/40 animate-pulse"></div>
                            <div class="w-2 h-2 rounded-full bg-athena-cream/40 animate-pulse" style="animation-delay: 0.2s"></div>
                            <div class="w-2 h-2 rounded-full bg-athena-cream/40 animate-pulse" style="animation-delay: 0.4s"></div>
                          </div>
                        </div>
                      `;
                      target.parentElement!.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 