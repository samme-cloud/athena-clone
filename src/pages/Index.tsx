import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import ClientLogos from "../components/home/ClientLogos";
import StatsSection from "../components/home/StatsSection";
import AthenaEdge from "../components/home/AthenaEdge";
import DelegationLevels from "../components/home/DelegationLevels";
import PlaybookSection from "../components/home/PlaybookSection";
import TimeAbundance from "../components/home/TimeAbundance";
import AssistantHireSection from "../components/home/AssistantHireSection";
import ServiceTabs from "../components/home/ServiceTabs";
import AssistantComparison from "../components/home/AssistantComparison";
import CommunitySection from "../components/home/CommunitySection";
import Testimonials from "../components/home/Testimonials";
import NewsletterSection from "../components/home/NewsletterSection";

const Index = () => {
  // Set up scroll-based animations
  useEffect(() => {
    // Simple animation on scroll for elements with fade-in-section class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px' // Triggers a bit before element is in view
      }
    );
    
    // Observe all elements with the fade-in-section class
    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });
    
    // Enhanced smooth scrolling behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        anchor && 
        anchor.getAttribute('href') && 
        anchor.getAttribute('href')?.startsWith('#')
      ) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId!);
        
        if (targetElement) {
          // Get the navbar height to offset scrolling position
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          
          // Calculate position to scroll to (accounting for navbar)
          const targetPosition = targetElement.getBoundingClientRect().top + 
            window.pageYOffset - navbarHeight - 20; // Extra 20px padding
          
          // Scroll smoothly
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL but don't scroll again
          window.history.pushState(null, '', targetId);
        }
      }
    };
    
    // Add event listener to capture anchor clicks
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-athena-navy text-athena-cream">
      <Navbar />
      
      <main className="flex-grow bg-athena-navy">
        <Hero />
        
        <section className="section-gap bg-athena-navy">
          <ClientLogos />
        </section>
        
        <section id="elite-assistants" className="section-gap bg-athena-navy">
          <StatsSection />
        </section>
        
        <section className="section-gap bg-athena-navy">
          <AthenaEdge />
        </section>
        
        <section id="delegation" className="section-gap bg-athena-navy">
          <DelegationLevels />
        </section>
        
        <section className="section-gap bg-athena-navy">
          <PlaybookSection />
        </section>
        
        <section className="section-gap bg-athena-navy">
          <TimeAbundance />
        </section>
        
        <section className="section-gap bg-athena-navy">
          <AssistantHireSection />
        </section>
        
        <section id="services" className="section-gap bg-athena-navy">
          <ServiceTabs />
        </section>
        
        <section id="why-athena" className="section-gap bg-athena-navy">
          <AssistantComparison />
        </section>
        
        <section className="section-gap bg-athena-navy">
          <CommunitySection />
        </section>
        
        <section className="section-gap bg-athena-navy">
          <Testimonials />
        </section>
        
        <section id="pricing" className="section-gap bg-athena-navy">
          <NewsletterSection />
        </section>
        
        <section id="get-started" className="bg-athena-navy text-center section-padding section-gap fade-in-section">
          <div className="athena-container">
             <h2 className="font-display text-heading-1 text-athena-cream mb-6">Ready to Get Started?</h2>
             <p className="text-body-lg text-athena-cream/80 max-w-2xl mx-auto mb-10">
               Contact us today to begin your journey towards peak performance and reclaim your valuable time.
             </p>
             <a 
               href="mailto:hello@athena.com" 
               className="btn-primary hover:scale-105 transition-transform"
             >
               Contact Sales
             </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
