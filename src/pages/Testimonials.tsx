import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Ventures",
      content: "Horizons has completely transformed how I manage my business. The AI-powered assistance is incredibly intuitive and the human support is exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, Innovation Labs",
      content: "The level of efficiency and attention to detail is remarkable. Horizons has given me back countless hours in my week.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      content: "From scheduling to project management, Horizons handles everything seamlessly. It's like having a whole team of expert assistants.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Serial Entrepreneur",
      content: "I've tried many assistant services, but Horizons stands out with its perfect blend of AI technology and human expertise.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Executive Director",
      content: "The onboarding process was smooth, and the results were immediate. Horizons has exceeded all my expectations.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Managing Partner",
      content: "Horizons' ability to learn and adapt to my preferences is impressive. They've become an indispensable part of my daily operations.",
      rating: 5
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
              Client Success Stories
            </h1>
            
            <p className="text-xl text-athena-cream/80">
              Discover how Horizons is helping executives and businesses achieve more with less effort.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-8 backdrop-blur-sm border border-athena-cream/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-athena-green text-athena-green" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-athena-green mb-4" />
                
                <p className="text-athena-cream/90 mb-6">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <p className="font-semibold text-athena-cream">{testimonial.name}</p>
                  <p className="text-sm text-athena-cream/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-athena-navy/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-athena-cream mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-athena-cream/80 mb-8 max-w-2xl mx-auto">
            Experience the Horizons difference and transform your productivity today.
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

export default Testimonials; 