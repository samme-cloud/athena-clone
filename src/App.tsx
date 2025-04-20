import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Eager loaded section components
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';

// Lazy loaded section components
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Pricing = lazy(() => import('./components/sections/Pricing'));
const DelegationAssessment = lazy(() => import('./components/sections/DelegationAssessment'));

const queryClient = new QueryClient();

// Loading fallback
const SectionLoading = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mint-500"></div>
  </div>
);

// Floating CTA Button
const FloatingCTA = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Use the same navigation logic as the navbar
  const handleClick = () => {
    const isHomePage = location.pathname === '/';
    
    if (!isHomePage) {
      navigate('/', { state: { scrollToSection: 'get-started' } });
    } else {
      const element = document.getElementById('get-started');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Track CTA click (connect to your analytics system)
    console.log('Analytics: Floating CTA Clicked');
    // Example analytics call:
    // window.analytics.track('floating_cta_clicked');
  };

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      <Button 
        size="lg" 
        className="bg-mint-700 hover:bg-mint-800 text-white px-6 py-5 rounded-full shadow-lg hover:shadow-xl transition-all group"
        onClick={handleClick}
      >
        <span className="mr-2">Start Free Trial</span>
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </Button>
      <button 
        onClick={() => setIsDismissed(true)} 
        className="ml-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero videoBackground={true} />
      <Features />
      <Suspense fallback={<SectionLoading />}>
        <DelegationAssessment />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Pricing />
      </Suspense>
      <div id="get-started" className="py-24 bg-mint-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Reclaim Your Time?</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Get started with Athena today and transform your productivity.
          </p>
          <Button 
            size="lg"
            className="bg-mint-700 hover:bg-mint-800 text-white px-8 py-6 text-lg rounded-xl"
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

const AppContent = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/elite-assistants" element={<Index />} />
          <Route path="/delegation" element={<Index />} />
          <Route path="/ai" element={<Index />} />
          <Route path="/pricing" element={<Index />} />
          <Route path="/get-started" element={<Index />} />
          <Route path="/assessment" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <AppContent />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
