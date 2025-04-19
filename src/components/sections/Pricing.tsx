import React, { useState, useEffect } from 'react';
import { Check, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingFeature {
  text: string;
  highlight?: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  billingPeriod: string;
  isPopular?: boolean;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
}

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isYearly, setIsYearly] = useState(true);

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

    const section = document.querySelector('#pricing');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const pricingPlans: PricingPlan[] = [
    {
      name: "Executive",
      description: "Perfect for busy executives who need comprehensive delegation support",
      price: isYearly ? "$2,750" : "$3,000",
      billingPeriod: isYearly ? "/month, billed annually" : "/month",
      isPopular: true,
      icon: <Zap className="w-6 h-6" />,
      features: [
        { text: "Dedicated full-time assistant (40+ hrs/week)" },
        { text: "Comprehensive delegation training", highlight: true },
        { text: "Proprietary AI tools access" },
        { text: "Unlimited delegation volume" },
        { text: "Priority support response (1hr)" },
        { text: "Custom workflows and processes" },
        { text: "Quarterly performance reviews" },
        { text: "Assistant replacement guarantee" }
      ],
      ctaText: "Get Started",
      ctaLink: "#get-started"
    },
    {
      name: "Team",
      description: "Ideal for teams needing shared assistants and centralized management",
      price: isYearly ? "$6,900" : "$7,500",
      billingPeriod: isYearly ? "/month, billed annually" : "/month",
      icon: <Shield className="w-6 h-6" />,
      features: [
        { text: "3 dedicated full-time assistants" },
        { text: "Team delegation dashboard", highlight: true },
        { text: "Proprietary AI tools access" },
        { text: "Cross-trained backup assistants" },
        { text: "Priority support response (1hr)" },
        { text: "Custom workflows and processes" },
        { text: "Monthly performance reviews" },
        { text: "Assistant replacement guarantee" }
      ],
      ctaText: "Contact Sales",
      ctaLink: "#contact-sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint-100/30 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-100/30 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-mint-700" />
            <p className="text-overline uppercase tracking-widest text-black font-medium">Simple Pricing</p>
            <Sparkles className="w-5 h-5 text-mint-700" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Invest in Your <span className="asymmetric-underline">Productivity</span>
          </h2>
          
          <p className={`text-xl text-gray-700 mx-auto transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Transparent pricing with no hidden fees or complicated tiers. Just exceptional assistance at a predictable cost.
          </p>
        </div>
        
        {/* Billing toggle */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card bg-white/70 inline-flex p-1 rounded-full">
            <button
              className={`py-2 px-6 rounded-full transition-all ${
                !isYearly ? 'bg-mint-500 text-white shadow-sm' : 'text-gray-700'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-6 rounded-full transition-all ${
                isYearly ? 'bg-mint-500 text-white shadow-sm' : 'text-gray-700'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly <span className="text-xs font-medium ml-1">(Save 8%)</span>
            </button>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`premium-card p-8 md:p-10 transition-all duration-700 ${
                plan.isPopular ? 'border-mint-300 ring-1 ring-mint-300 bg-white' : 'bg-white/80'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-mint-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  plan.isPopular ? 'bg-mint-500 text-white' : 'bg-mint-100 text-mint-700'
                } mr-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-serif font-medium">{plan.name}</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                {plan.description}
              </p>
              
              <div className="border-t border-b border-gray-100 py-6 mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-serif font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.billingPeriod}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                      feature.highlight 
                        ? 'bg-mint-500 text-white' 
                        : 'bg-mint-100 text-mint-700'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={feature.highlight ? 'font-medium' : ''}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isPopular ? "default" : "outline"} 
                size="lg" 
                className={`w-full py-6 text-lg rounded-xl ${
                  plan.isPopular 
                    ? 'hover-lift bg-black text-white hover:bg-black/90' 
                    : 'border-black/20 text-black hover:bg-black/5'
                }`}
                asChild
              >
                <a href={plan.ctaLink}>
                  {plan.ctaText}
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        {/* Enterprise callout */}
        <div className={`mt-16 max-w-5xl mx-auto transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-card p-8 md:p-10 bg-white/80">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2">Enterprise Solutions</h3>
                <p className="text-gray-700 max-w-xl">
                  Need a customized solution for your organization? Our enterprise plans provide tailored assistant teams, custom integrations, and dedicated account management.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="whitespace-nowrap rounded-xl border-black/20 text-black hover:bg-black/5"
                asChild
              >
                <a href="#contact-sales">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className={`mt-24 max-w-3xl mx-auto transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Common Questions</h3>
          
          <div className="space-y-6">
            <div className="premium-card p-6">
              <h4 className="text-lg font-medium mb-2">What's included in my subscription?</h4>
              <p className="text-gray-700">Your subscription includes a dedicated full-time assistant, complete onboarding and training, access to our proprietary AI tools, ongoing performance monitoring, and priority support.</p>
            </div>
            
            <div className="premium-card p-6">
              <h4 className="text-lg font-medium mb-2">Can I cancel my subscription anytime?</h4>
              <p className="text-gray-700">Yes, all plans can be canceled with 30 days' notice. There are no long-term contracts or hidden fees.</p>
            </div>
            
            <div className="premium-card p-6">
              <h4 className="text-lg font-medium mb-2">Is there a guarantee?</h4>
              <p className="text-gray-700">We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your assistant, we'll work to find a replacement or provide a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 