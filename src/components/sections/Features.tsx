import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, Clock, ShieldCheck, MessagesSquare, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AssistantCarousel from '../home/AssistantCarousel';

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
        <div className="text-center mb-16 max-w-3xl mx-auto">
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
             Meet some of the elite talent ready to help you achieve more.
          </p>
        </div>
        
        <div className="mb-20">
          <AssistantCarousel />
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
      </div>
    </section>
  );
};

export default Features; 