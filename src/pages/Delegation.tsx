import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ListChecks, Clock, Brain, Zap, PieChart, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Delegation: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-athena-green" />,
      title: "Save 15+ Hours Weekly",
      description: "Reclaim your valuable time by delegating routine and time-consuming tasks to our expert team."
    },
    {
      icon: <Brain className="h-8 w-8 text-athena-green" />,
      title: "Reduce Decision Fatigue",
      description: "Focus your mental energy on high-impact decisions while we handle the operational details."
    },
    {
      icon: <ListChecks className="h-8 w-8 text-athena-green" />,
      title: "Strategic Task Management",
      description: "Our delegation framework ensures tasks are prioritized based on your business goals and objectives."
    },
    {
      icon: <Zap className="h-8 w-8 text-athena-green" />,
      title: "Effortless Onboarding",
      description: "Our streamlined delegation process makes getting started quick and painless with minimal effort."
    },
    {
      icon: <PieChart className="h-8 w-8 text-athena-green" />,
      title: "Optimized Resource Allocation",
      description: "Ensure your team's skills are deployed where they create maximum value for your business."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-athena-green" />,
      title: "Performance Analytics",
      description: "Track the impact of delegation with comprehensive analytics on productivity and efficiency gains."
    }
  ];

  return (
    <div className="bg-athena-navy min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center mb-3">
          <Link to="/" className="flex items-center text-athena-cream/80 hover:text-athena-cream transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-athena-cream mb-6">Strategic Delegation Solutions</h1>
          <p className="text-xl text-athena-cream/80 mb-8">
            Transform your productivity and business growth with our expert delegation framework, designed to help executives and entrepreneurs focus on what truly matters.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-athena-cream text-center mb-12">Benefits of Strategic Delegation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-athena-navy-light/30 backdrop-blur-sm border border-athena-cream/10 rounded-xl p-6 hover:border-athena-cream/20 transition-all duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-athena-cream mb-3">{benefit.title}</h3>
              <p className="text-athena-cream/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-athena-navy-light/30 backdrop-blur-sm border border-athena-cream/10 rounded-xl p-10">
          <h2 className="text-3xl font-bold text-athena-cream mb-4">Start Delegating Effectively</h2>
          <p className="text-xl text-athena-cream/80 mb-8">
            Book a free delegation assessment and discover how our strategic framework can transform your workflow.
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-athena-green hover:bg-athena-green/90 text-black text-xl font-semibold px-8 py-4"
            asChild
          >
            <Link to="/assessment">FREE DELEGATION ASSESSMENT</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Delegation; 