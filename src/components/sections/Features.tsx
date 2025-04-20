import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, Clock, ShieldCheck, MessagesSquare, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

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

    const section = document.querySelector('#features');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  // Rotate through features every 4 seconds
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  const features: FeatureItem[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Task Prioritization",
      description: "Athena analyzes your schedule and workload to intelligently prioritize tasks, ensuring the most important work gets done first.",
      highlight: true
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Saving Automation",
      description: "From email filtering to meeting scheduling, Athena automates repetitive tasks that traditionally consume hours of your week."
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Natural Language Communication",
      description: "Interact with Athena as naturally as you would with a human assistant through voice or text—no complex commands needed."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with bank-level encryption and strict access controls, ensuring complete privacy and compliance."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Contextual Awareness",
      description: "Athena remembers your preferences and past decisions, continually improving its assistance based on your unique needs.",
      highlight: true
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-athena-navy relative overflow-hidden -mt-1">
      {/* Background elements */}
      <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint-400/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-300/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-athena-green" />
            <p className="text-overline uppercase tracking-widest text-athena-cream font-medium">Capabilities</p>
            <Sparkles className="w-5 h-5 text-athena-green" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Delegate with <span className="asymmetric-underline">Confidence</span>
          </h2>
          
          <p className={`text-xl text-athena-cream/80 mx-auto transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Athena combines human expertise with artificial intelligence to deliver an assistant experience that exceeds expectations.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card p-8 transition-all duration-700 backdrop-blur-sm ${
                feature.highlight ? 'border-athena-green/30' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-mint-400/30 text-athena-green transform scale-110' 
                  : 'bg-mint-400/20 text-athena-green'
              }`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-serif font-medium mb-4 text-athena-cream">
                {feature.title}
              </h3>
              
              <p className="text-athena-cream/80 mb-6">
                {feature.description}
              </p>
              
              <div className={`h-1 w-16 rounded-full transition-all duration-500 ${
                activeFeature === index ? 'bg-athena-green w-24' : 'bg-mint-400/30 w-16'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Feature showcase */}
        <div className={`mt-24 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-mint-400/20 rounded-xl overflow-hidden relative">
                  {/* This would be an image or video in a real implementation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-accent text-2xl text-athena-green italic">Feature Preview</p>
                  </div>
                  
                  {/* Interactive dots */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {features.map((_, idx) => (
                      <button 
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all ${
                          activeFeature === idx ? 'bg-athena-green w-6' : 'bg-mint-400/30'
                        }`}
                        onClick={() => setActiveFeature(idx)}
                        aria-label={`View feature ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full bg-athena-green"></div>
                  <p className="text-sm uppercase tracking-widest text-athena-cream/80 font-medium">
                    Featured Capability
                  </p>
                </div>
                
                <h3 className="text-2xl font-serif font-semibold mb-4 text-athena-cream">
                  {features[activeFeature].title}
                </h3>
                
                <p className="text-lg text-athena-cream/80 mb-8">
                  {features[activeFeature].description}
                </p>
                
                <Button 
                  variant="default" 
                  className="hover-lift bg-athena-green text-athena-navy hover:bg-athena-green/90 px-6 py-2 text-base rounded-xl"
                  asChild
                >
                  <a href="#demo">
                    <span>See it in action</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-20">
          <Button className="bg-athena-green hover:bg-athena-green/90 text-black px-10 py-6 text-lg font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features; 