import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ClipboardCheck, FileText, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Assessment = () => {
  const assessmentTypes = [
    {
      title: "Skills Assessment",
      description: "Comprehensive evaluation of technical and soft skills to identify strengths and growth areas.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "Team Dynamics Analysis",
      description: "In-depth examination of team interactions, communication patterns, and collaboration effectiveness.",
      icon: <Target className="h-6 w-6 text-primary" />,
    },
    {
      title: "Organizational Audit",
      description: "Thorough review of company structures, processes, and systems to identify optimization opportunities.",
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "Growth Readiness Review",
      description: "Evaluation of your organization's preparedness for scaling and expansion initiatives.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
    },
  ];

  const assessmentProcess = [
    {
      step: 1,
      title: "Discovery",
      description: "We begin with a thorough analysis of your current situation, challenges, and objectives through interviews and data collection."
    },
    {
      step: 2,
      title: "Assessment",
      description: "Our experts conduct comprehensive evaluations using industry-leading frameworks and proprietary methodologies."
    },
    {
      step: 3,
      title: "Analysis",
      description: "We analyze the collected data to identify patterns, opportunities, and areas for improvement."
    },
    {
      step: 4,
      title: "Recommendations",
      description: "You'll receive a detailed report with actionable insights and a strategic roadmap tailored to your specific needs."
    },
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
            Comprehensive Assessments
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Gain valuable insights into your organization's strengths, weaknesses, and opportunities with our in-depth assessment services. We identify what's working, what's not, and how to improve.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Request an Assessment
          </Button>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Assessment Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assessmentTypes.map((type, index) => (
            <div key={index} className="bg-athena-navy-800 p-8 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <div className="mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
              <p className="text-gray-300 mb-6">{type.description}</p>
              <Link to="/get-started" className="text-primary hover:underline inline-flex items-center">
                Learn more <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Assessment Process</h2>
        <div className="space-y-12">
          {assessmentProcess.map((process) => (
            <div key={process.step} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                {process.step}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-300 max-w-3xl">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-athena-navy-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <FileText className="h-12 w-12 text-primary mb-6" />
              <blockquote className="text-xl italic mb-6">
                "The assessment conducted by the Horizons team was eye-opening. They identified inefficiencies we had overlooked for years and provided a clear roadmap for improvement. Within three months of implementing their recommendations, we saw a 28% increase in productivity."
              </blockquote>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-gray-400">COO, TechInnovate Inc.</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Assessment Outcomes</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p>Detailed analysis of current operations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p>Identification of improvement opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p>Actionable recommendations with clear ROI</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p>Strategic roadmap for implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Our expert assessments provide the clarity and direction you need to optimize operations and accelerate growth.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
          Schedule Your Assessment
        </Button>
      </section>
    </div>
  );
};

export default Assessment; 