import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, MessageSquare, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Love = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CEO, Innovate Tech",
      content: "Horizons transformed our operations completely. Their team's expertise and dedication helped us achieve what we thought was impossible. We've seen a 40% increase in productivity and a significant boost in team morale since implementing their recommendations.",
      rating: 5,
      image: "/images/testimonials/testimonial-1.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, Growth Co.",
      content: "Working with Horizons has been a game-changer for our marketing department. Their strategic approach and innovative solutions helped us streamline our processes and focus on what really matters. I can't recommend them enough!",
      rating: 5,
      image: "/images/testimonials/testimonial-2.jpg"
    },
    {
      name: "Michael Roberts",
      role: "Founder, Startup Ventures",
      content: "As a startup founder, I was drowning in tasks and responsibilities. Horizons not only helped me prioritize effectively but also provided the infrastructure to scale our operations. Their team is professional, responsive, and genuinely cares about our success.",
      rating: 5,
      image: "/images/testimonials/testimonial-3.jpg"
    },
    {
      name: "Jennifer Lee",
      role: "Operations Manager, Enterprise Solutions",
      content: "The expertise and attention to detail that Horizons brings to the table is unmatched. They didn't just implement a solution—they took the time to understand our unique challenges and developed a customized approach that addressed our specific needs.",
      rating: 5,
      image: "/images/testimonials/testimonial-4.jpg"
    },
    {
      name: "David Williams",
      role: "CTO, Tech Innovations",
      content: "We brought Horizons in to help with a specific technical challenge, but they ended up transforming our entire approach to problem-solving. Their team's technical expertise combined with their strategic vision has been invaluable to our growth.",
      rating: 5,
      image: "/images/testimonials/testimonial-5.jpg"
    },
    {
      name: "Laura Martinez",
      role: "HR Director, Global Services",
      content: "Horizons has revolutionized how we manage our human resources. Their fractional hiring solutions have allowed us to access top-tier talent without the overhead. The quality of professionals they've connected us with has exceeded all expectations.",
      rating: 5,
      image: "/images/testimonials/testimonial-6.jpg"
    }
  ];

  const caseStudies = [
    {
      company: "TechInnovate Inc.",
      challenge: "Struggling with scaling operations while maintaining quality",
      solution: "Implemented fractional hiring and process optimization",
      result: "47% increase in output with 23% reduction in costs",
      link: "/case-studies/techinnovate"
    },
    {
      company: "Growth Marketing Agency",
      challenge: "High turnover and inefficient project management",
      solution: "Team dynamics assessment and workflow redesign",
      result: "Reduced turnover by 35% and improved delivery times by 28%",
      link: "/case-studies/growth-marketing"
    },
    {
      company: "Enterprise Solutions Corp",
      challenge: "Ineffective communication across departments",
      solution: "Communication frameworks and cross-functional processes",
      result: "50% reduction in project delays and improved team satisfaction",
      link: "/case-studies/enterprise-solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-athena-navy text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-primary mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-8 w-8 text-primary" fill="currentColor" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Client Love
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl">
            Don't just take our word for it. Hear directly from the businesses we've helped transform through our strategic solutions and expert guidance.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-athena-navy-800 p-8 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-athena-navy-800 p-8 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-4">{study.company}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Challenge:</p>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Solution:</p>
                  <p>{study.solution}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Result:</p>
                  <p className="text-primary font-semibold">{study.result}</p>
                </div>
              </div>
              <Link to={study.link} className="text-primary hover:underline inline-flex items-center">
                Read full case study <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Feature */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-athena-navy-800 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <MessageSquare className="h-12 w-12 text-primary mb-6" />
              <blockquote className="text-2xl italic mb-6">
                "Partnering with Horizons was the best decision we made last year. Their strategic guidance and practical solutions helped us navigate a challenging period of growth with confidence."
              </blockquote>
              <div>
                <p className="font-semibold text-lg">Robert Chen</p>
                <p className="text-gray-400">CEO, Quantum Enterprises</p>
              </div>
            </div>
            <div className="flex-1 bg-athena-navy-700 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">The Results:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 flex-shrink-0">1</div>
                  <p>Increased revenue by 38% year-over-year</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 flex-shrink-0">2</div>
                  <p>Streamlined operations reduced overhead by 22%</p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 flex-shrink-0">3</div>
                  <p>Employee satisfaction scores improved from 72% to 94%</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Let's discuss how we can help transform your business just like we've done for countless others.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
          Schedule a Consultation
        </Button>
      </section>
    </div>
  );
};

export default Love; 