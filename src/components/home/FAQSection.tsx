import { useState, useEffect } from 'react';
import { ChevronDown, PlusCircle } from 'lucide-react';

// FAQ item type
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "How does Athena work?",
      answer: "Athena matches you with a top-tier full-time executive assistant who has been rigorously vetted for their skills, communication abilities, and problem-solving capabilities. Your assistant undergoes comprehensive training on delegation and leverages AI tools to maximize their efficiency, allowing you to delegate tasks more effectively.",
      category: "Getting Started"
    },
    {
      question: "What types of tasks can I delegate to my Athena assistant?",
      answer: "Your Athena assistant can handle a wide range of tasks including email management, calendar scheduling, travel arrangements, research, data entry, basic graphic design, social media management, expense reporting, meeting preparation, and much more. As your assistant becomes more familiar with your preferences and processes, they can take on increasingly complex responsibilities.",
      category: "Services"
    },
    {
      question: "How much does an Athena assistant cost?",
      answer: "Athena assistants are available for $3,000 per month. This flat fee covers a full-time (40+ hours/week) dedicated assistant, complete training, AI tool access, and ongoing performance monitoring. There are no hidden fees, contracts, or complicated pricing tiers.",
      category: "Pricing"
    },
    {
      question: "What makes Athena assistants different from other VA services?",
      answer: "Athena stands apart through our rigorous vetting process (less than 1% acceptance rate), comprehensive delegation training, and proprietary AI enhancement tools. Unlike other services that offer fractional assistants, Athena provides you with a dedicated full-time professional who becomes a true extension of your team. We focus exclusively on securing elite talent rather than offering tiered service levels with varying quality.",
      category: "Comparison"
    },
    {
      question: "How quickly can I get started with an assistant?",
      answer: "Most clients are matched with their Athena assistant within 1-2 weeks of signing up. Our team works diligently to understand your specific needs and preferences to ensure an optimal match. Once matched, you can begin delegating tasks immediately while our onboarding team helps facilitate a smooth transition.",
      category: "Getting Started"
    },
    {
      question: "Can I cancel my Athena subscription?",
      answer: "Yes, you can cancel your Athena subscription at any time with no long-term contracts or commitments. We're confident in the value our assistants provide and don't believe in locking clients into agreements. If you need to cancel, simply let us know with 30 days' notice.",
      category: "Billing"
    }
  ];

  return (
    <section id="faq" className="bg-background py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-texture-dots opacity-30"></div>
      <div className="absolute -right-40 bottom-0 w-96 h-96 rounded-full bg-mint-100/40 blur-3xl"></div>
      <div className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-sage-100/30 blur-3xl"></div>
      
      <div className="athena-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-[1px] w-16 bg-black/20"></div>
            <p className="text-sm uppercase tracking-widest text-black/70 font-medium">Questions & Answers</p>
            <div className="h-[1px] w-16 bg-black/20"></div>
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            Frequently Asked <span className="asymmetric-underline">Questions</span>
          </h2>
          <p 
            className={`text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            Everything you need to know about transforming your productivity with Athena
          </p>
        </div>

        {/* FAQ grid with decorative elements */}
        <div className="relative max-w-3xl mx-auto">
          {/* Decorative vertical line */}
          <div className="absolute left-7 top-8 bottom-8 w-[2px] bg-gradient-to-b from-mint-200/0 via-mint-300/50 to-mint-200/0 rounded-full"></div>
          
          {/* FAQ Accordion */}
          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  onClick={() => toggleQuestion(index)}
                  className={`flex items-start cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-white shadow-sm' 
                      : 'hover:bg-white/70 bg-white/40'
                  }`}
                >
                  {/* Category and indicator */}
                  <div className="relative mr-6 flex flex-col items-center">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index 
                        ? 'bg-mint-500 text-white' 
                        : 'bg-white border border-mint-400 text-mint-500'
                    }`}>
                      {openIndex === index ? (
                        <span className="text-xs font-bold">−</span>
                      ) : (
                        <span className="text-xs font-bold">+</span>
                      )}
                    </div>
                    {item.category && (
                      <div className="hidden md:block absolute -left-24 top-0 rotate-90 origin-top-right text-xs uppercase tracking-wider font-medium text-black/40">
                        {item.category}
                      </div>
                    )}
                  </div>
                  
                  {/* Question and answer */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-serif font-medium pr-8 transition-colors ${
                      openIndex === index ? 'text-mint-800' : 'text-black'
                    }`}>
                      {item.question}
                    </h3>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                  
                  {/* Chevron icon */}
                  <ChevronDown className={`text-black/50 w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`} />
                </div>
              </div>
            ))}
          </div>
          
          {/* Still have questions? */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="glass-card p-8 bg-white/80">
              <div className="mb-6 inline-block">
                <PlusCircle className="w-10 h-10 text-mint-500 mx-auto mb-2" />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3">Still have questions?</h3>
              <p className="mb-6 text-gray-700">Our team is just an email away. We'd love to hear from you.</p>
              <a 
                href="mailto:hello@athena.com" 
                className="inline-flex items-center px-8 py-3 bg-black text-white hover:bg-black/90 transition-all duration-300 rounded-md hover-lift"
              >
                Get in Touch
              </a>
              <p className="text-sm text-gray-500 mt-4">Response time: within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 