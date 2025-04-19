import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Brain, Mic, Check, ArrowRight } from 'lucide-react';

// Enhanced AI Logo SVG
const AILogo = () => (
  <svg className="w-12 h-12 text-athena-green" viewBox="0 0 24 24">
    <path 
      fill="currentColor" 
      d="M19.44 12c0 .78-.77 1.56-1.94 1.96v2.52c1.76-.29 3-1.57 3-2.98 0-1.57-1.6-2.88-3.56-3.02-.32-1.11-1.04-2.1-2-2.81.3-.38.49-.86.5-1.38C15.44 4.58 14.07 3 12.44 3c-1.62 0-3 1.58-3 3.29-.01.53.2 1.03.52 1.42-.94.69-1.65 1.67-1.97 2.78C6.16 10.8 4.5 12.07 4.5 13.5c0 1.42 1.34 2.74 3.18 3.05v-2.58C6.56 13.65 6 13.11 6 12.44c0-.83.8-1.54 1.97-1.84.09-1.82 1.29-3.39 3.31-4.02.52-.16.98-.18 1.09-.24.48-.24.82-.74.82-1.32 0-.73-.59-1.32-1.32-1.32-.73 0-1.32.59-1.32 1.32v.48l-2-.18v-.3c0-1.85 1.5-3.35 3.35-3.35 1.82 0 3.29 1.45 3.32 3.24v.11h-.07c-.07.22-.18.42-.33.6 2.14.65 3.34 2.31 3.39 4.26 1.15.38 1.73 1.11 1.73 1.92z"
    />
    <path 
      fill="currentColor" 
      d="M12.5 8h-1v7.09c-.32-.07-.66-.11-1-.13v2.02c1.3.11 2.5.58 3.35 1.27l1.16-1.61c-.76-.58-1.56-1-2.38-1.26L12.5 8z"
    />
  </svg>
);

// Assistant Avatar component
const AssistantAvatar = () => (
  <div className="relative w-20 h-20">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-athena-green/60 to-athena-blue/60 blur-md"></div>
    <div className="absolute inset-0.5 rounded-full bg-black"></div>
    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-athena-green/20 to-athena-blue/20 overflow-hidden flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white/70">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
);

export const AssistantHireSection = () => {
  const [activeTab, setActiveTab] = useState('Hire');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'Hire', label: 'Hire', description: "We've interviewed over 500,000 assistants with an acceptance rate <1%" },
    { id: 'Train', label: 'Train', description: "Your assistant receives world-class delegation training" },
    { id: 'AI', label: 'AI', description: "AI tools amplify your assistant's capabilities" }
  ];
  
  const features = [
    "Dedicated 40+ hrs/week",
    "Faster than in-house hiring",
    "Vetted communication skills",
    "Trained on your processes", 
    "Full-time, not fractional",
    "Cancel anytime"
  ];

  return (
    <section id="assistant-hire" className="bg-black py-28 md:py-36 lg:py-44 overflow-hidden">
      <div className="athena-container">
        {/* Animated header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Get an elite assistant for <span className="text-athena-green">$3k/mo</span>
          </h2>
          
          <p 
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Scale yourself. Scale your company.
          </p>
        </div>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Visualization */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Concentric Circles */}
              <div className="relative h-[400px] flex items-center justify-center">
                {[1, 0.75, 0.5].map((scale, index) => (
                  <div 
                    key={index}
                    className="absolute inset-0 rounded-full border border-athena-green/20" 
                    style={{ 
                      transform: `scale(${scale})`,
                      animation: `pulse ${3 + index * 0.7}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                      animationDelay: `${index * 0.5}s`
                    }}
                  ></div>
                ))}

                {/* Icons and Text within circles */}
                <div className="relative z-10 flex flex-col items-center space-y-10">
                  {/* Top Icon (Delegation) */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 rounded-full bg-black border border-athena-green/30 flex items-center justify-center">
                      <Mic className="w-8 h-8 text-athena-green" />
                    </div>
                    <span className="text-sm text-athena-green font-medium uppercase tracking-wider">Delegation</span>
                  </div>

                  {/* Dotted Line */}
                  <div className="h-8 border-l border-dashed border-athena-green/40"></div>

                  {/* Middle Icon (Assistant Avatar) */}
                  <div className="flex flex-col items-center space-y-2">
                    <AssistantAvatar />
                    <span className="text-sm text-white font-medium">Athena Assistant</span>
                  </div>

                  {/* Dotted Line */}
                  <div className="h-8 border-l border-dashed border-athena-green/40"></div>

                  {/* Bottom Icon (AI) */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-16 h-16 rounded-full bg-black border border-athena-green/30 flex items-center justify-center">
                      <AILogo />
                    </div>
                    <span className="text-sm text-athena-green font-medium uppercase tracking-wider">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Features and CTA */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Tabbed navigation */}
            <div className="flex space-x-1 p-1 bg-black border border-gray-800 rounded-lg mb-8 max-w-xs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id 
                      ? 'text-black bg-athena-green' 
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="text-left mb-8">
              {tabs.map((tab) => (
                <div 
                  key={tab.id}
                  className={`transition-opacity duration-300 ${activeTab === tab.id ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-300 mb-6">{tab.description}</p>
                </div>
              ))}
            </div>
            
            {/* Features list */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-left text-white">Elite Assistant Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-athena-green/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-athena-green" />
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <Link 
              to="#get-started" 
              className="bg-athena-green hover:bg-athena-green/90 text-black font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,180,0.2)] hover:shadow-[0_0_30px_rgba(0,255,180,0.4)] inline-flex items-center gap-2 w-full justify-center md:w-auto"
            >
              GET STARTED 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Add pulse animation style */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.3; transform: scale(${1}); }
            50% { opacity: 0.6; transform: scale(${1.05}); }
            100% { opacity: 0.3; transform: scale(${1}); }
          }
        `}
      </style>
    </section>
  );
};

export default AssistantHireSection; 