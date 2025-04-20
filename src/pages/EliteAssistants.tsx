import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Briefcase, Sparkles, Target, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EliteAssistants: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-athena-green" />,
      title: "Handpicked Elite Talent",
      description: "Our assistants are selected from the top 1% of applicants, ensuring exceptional quality and performance."
    },
    {
      icon: <Clock className="h-8 w-8 text-athena-green" />,
      title: "24/7 Availability",
      description: "Access your dedicated assistant anytime, anywhere with round-the-clock support for your business needs."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-athena-green" />,
      title: "Industry Specialists",
      description: "Match with assistants experienced in your specific industry for precise, knowledgeable support."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-athena-green" />,
      title: "Executive Level Support",
      description: "Enjoy the same caliber of assistance typically reserved for C-suite executives."
    },
    {
      icon: <Target className="h-8 w-8 text-athena-green" />,
      title: "Results-Driven Approach",
      description: "Our assistants focus on delivering tangible outcomes that drive your business forward."
    },
    {
      icon: <Medal className="h-8 w-8 text-athena-green" />,
      title: "Ongoing Professional Development",
      description: "All assistants undergo continuous training to stay at the cutting edge of their field."
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
          <h1 className="text-4xl md:text-6xl font-bold text-athena-cream mb-6">Elite Virtual Assistants</h1>
          <p className="text-xl text-athena-cream/80 mb-8">
            Access the world's top 1% of virtual assistant talent, handpicked and trained to deliver exceptional results for your business.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-athena-navy-light/30 backdrop-blur-sm border border-athena-cream/10 rounded-xl p-6 hover:border-athena-cream/20 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-athena-cream mb-3">{feature.title}</h3>
              <p className="text-athena-cream/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-athena-navy-light/30 backdrop-blur-sm border border-athena-cream/10 rounded-xl p-10">
          <h2 className="text-3xl font-bold text-athena-cream mb-4">Experience the Difference</h2>
          <p className="text-xl text-athena-cream/80 mb-8">
            Start with a 7-day free trial and discover how our elite assistants can transform your workflow.
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-athena-green hover:bg-athena-green/90 text-black text-xl font-semibold px-8 py-4"
            asChild
          >
            <Link to="/get-started">START FREE TRIAL</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EliteAssistants; 