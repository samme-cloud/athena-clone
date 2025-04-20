import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, PenTool, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FractionalHiring = () => {
  const hiringOptions = [
    {
      title: "Executive Assistants",
      description: "Experienced professionals ready to manage your calendar, communications, and admin tasks.",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Content Creators",
      description: "Skilled writers and creators to manage your blog, social media, and marketing content.",
      icon: <PenTool className="h-6 w-6 text-primary" />,
    },
    {
      title: "Project Managers",
      description: "Dedicated experts to keep your projects on track, on time, and within budget.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Tech Specialists",
      description: "Technical professionals for your development, design, and IT management needs.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
  ];

  const benefits = [
    "No recruitment or onboarding headaches",
    "Flexible terms with no long-term commitments",
    "Pre-vetted professionals with proven track records",
    "Significant cost savings compared to full-time hires",
    "Immediate availability to start on your projects",
    "Seamless integration with your existing team",
  ];

  return (
    <div className="min-h-screen bg-athena-navy text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-primary mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Fractional Hiring Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Access top-tier talent on-demand without the commitment of full-time employment. Our fractional hiring solutions provide the expertise you need, exactly when you need it.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Hiring Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Available Talent</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hiringOptions.map((option, index) => (
            <div key={index} className="bg-athena-navy-800 p-8 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-gray-300 mb-6">{option.description}</p>
              <Link to="/get-started" className="text-primary hover:underline inline-flex items-center">
                Learn more <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Needs Analysis</h3>
            <p className="text-gray-300">We assess your requirements and identify the perfect talent match for your business.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Talent Matching</h3>
            <p className="text-gray-300">We connect you with pre-vetted professionals who align with your requirements.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
            <p className="text-gray-300">Your fractional hire begins work immediately with ongoing support from our team.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-athena-navy-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Choose Fractional Hiring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Workforce?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Access top-tier talent without the commitment and cost of traditional hiring. Start with Horizons today.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
          Get Started Now
        </Button>
      </section>
    </div>
  );
};

export default FractionalHiring; 