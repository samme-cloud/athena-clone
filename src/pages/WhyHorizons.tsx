import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhyHorizons = () => {
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
          
          <h1 className="text-5xl md:text-6xl font-bold text-athena-cream mb-6">
            Why Choose Horizons?
          </h1>
          
          <p className="text-xl text-athena-cream/80 max-w-2xl">
            Discover how Horizons is revolutionizing executive assistance through AI-powered solutions and expert human support.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-athena-navy/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Efficiency",
                description: "Our AI technology automates routine tasks and enhances decision-making capabilities."
              },
              {
                title: "Expert Human Support",
                description: "Access to skilled professionals who understand your business needs."
              },
              {
                title: "Seamless Integration",
                description: "Easily integrate with your existing workflows and tools."
              },
              {
                title: "24/7 Availability",
                description: "Round-the-clock support to handle tasks across different time zones."
              },
              {
                title: "Customizable Solutions",
                description: "Tailored assistance that adapts to your specific requirements."
              },
              {
                title: "Secure & Reliable",
                description: "Enterprise-grade security to protect your sensitive information."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-8 backdrop-blur-sm border border-athena-cream/10"
              >
                <div className="w-12 h-12 rounded-xl bg-mint-400/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-athena-green" />
                </div>
                <h3 className="text-xl font-semibold text-athena-cream mb-4">
                  {feature.title}
                </h3>
                <p className="text-athena-cream/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-athena-cream mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-athena-cream/80 mb-8 max-w-2xl mx-auto">
            Join the growing number of executives who trust Horizons for their assistant needs.
          </p>
          <Button 
            variant="default"
            size="lg"
            className="bg-athena-green hover:bg-athena-green/90 text-black font-semibold px-8 py-6"
            asChild
          >
            <Link to="/get-started">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyHorizons; 