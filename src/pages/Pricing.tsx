import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      price: isAnnual ? 199 : 249,
      features: [
        "AI-powered task management",
        "Email and calendar management",
        "Basic scheduling assistance",
        "5 automation workflows",
        "Standard support"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: isAnnual ? 399 : 499,
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced AI capabilities",
        "Custom workflow creation",
        "Priority support",
        "Team collaboration tools",
        "Analytics dashboard",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom AI model training",
        "Enterprise SSO",
        "Advanced security features",
        "24/7 premium support",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-athena-navy">
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-athena-cream/80 hover:text-athena-cream mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-athena-cream mb-6">
              Simple, Transparent Pricing
            </h1>
            
            <p className="text-xl text-athena-cream/80 mb-8">
              Choose the perfect plan for your needs. Save up to 20% with annual billing.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isAnnual ? 'text-athena-cream' : 'text-athena-cream/70'}`}>
                Monthly
              </span>
              <button
                className="relative w-16 h-8 bg-athena-green/20 rounded-full p-1 transition-colors duration-200"
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-athena-green transition-transform duration-200 ${
                    isAnnual ? 'transform translate-x-8' : ''
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-athena-cream' : 'text-athena-cream/70'}`}>
                Annual
                <span className="ml-1 text-athena-green text-xs">Save 20%</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`glass-card p-8 backdrop-blur-sm border ${
                  plan.popular 
                    ? 'border-athena-green/30 relative' 
                    : 'border-athena-cream/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-athena-green text-black text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-athena-cream mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-athena-cream/70 mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-athena-cream">
                        ${plan.price}
                      </span>
                      <span className="text-athena-cream/70 mb-1">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-athena-cream">
                      {plan.price}
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-athena-green flex-shrink-0 mt-0.5" />
                      <span className="text-athena-cream/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full py-6 ${
                    plan.popular 
                      ? 'bg-athena-green hover:bg-athena-green/90 text-black' 
                      : 'border-athena-cream/20 text-athena-cream hover:bg-athena-cream/5'
                  }`}
                  asChild
                >
                  <Link to="/get-started">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-athena-navy/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-athena-cream text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day free trial on all plans. No credit card required."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time with no questions asked."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 backdrop-blur-sm border border-athena-cream/10">
                <h3 className="text-lg font-semibold text-athena-cream mb-2">
                  {faq.q}
                </h3>
                <p className="text-athena-cream/80">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 