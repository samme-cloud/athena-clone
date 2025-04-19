import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Removed Smooth scroll helper function - now handled globally in script.js

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scroll for sticky behavior and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky after scrolling down
      setIsScrolled(window.scrollY > 50);
      
      // Highlight active nav item based on scroll position
      const sections = ['hero', 'features', 'testimonials', 'pricing'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation - redirects to home page first if on a different page
  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveLink(sectionId);
    
    const isHomePage = location.pathname === '/';
    
    if (!isHomePage) {
      // Navigate to home page first, then scroll to section after navigation completes
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Listen for navigation state to scroll to section after page change
  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Short timeout to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state so refreshing the page doesn't scroll again
          navigate('/', { state: {}, replace: true });
        }, 100);
      }
    }
  }, [location.state, navigate]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-elite-teal shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className={`font-serif text-2xl font-bold ${isScrolled ? 'text-athena-cream' : 'text-athena-cream'} group`}
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick('hero');
            }}
          >
            Athena<span className="text-athena-cream transition-all">.</span>
            <span className="block h-0.5 w-0 bg-athena-cream/40 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'features', label: 'Why Athena' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'pricing', label: 'Pricing' },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative px-1 py-2 font-medium transition-colors duration-300 ${
                    isScrolled
                      ? (activeLink === link.id
                        ? 'text-athena-cream'
                        : 'text-athena-cream/80 hover:text-athena-cream')
                      : (activeLink === link.id
                        ? 'text-athena-cream'
                        : 'text-athena-cream/80 hover:text-athena-cream')
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.id);
                  }}
                >
                  {link.label}
                  <span 
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-athena-cream/40 transform origin-bottom transition-transform duration-300 ${
                      activeLink === link.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* CTA Button (Desktop) */}
          <Button 
            variant="default" 
            className="hidden md:flex bg-elite-teal hover:bg-elite-teal/90 text-athena-cream relative overflow-hidden group border border-athena-cream/20 hover:border-athena-cream/40 shadow-md"
            asChild
          >
            <a 
              href="#get-started"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('get-started');
              }}
            >
              Start Free Trial
              <span className="absolute inset-0 bg-athena-cream/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 text-athena-cream`} />
            ) : (
              <Menu className={`w-6 h-6 text-athena-cream`} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-[400px] opacity-100 transform translate-y-0' 
              : 'max-h-0 opacity-0 transform -translate-y-4'
          }`}
        >
          <div className="bg-elite-teal backdrop-blur-sm rounded-xl shadow-md p-6 mt-2 border border-athena-cream/10">
            <ul className="space-y-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'features', label: 'Why Athena' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'pricing', label: 'Pricing' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 px-3 rounded-md transition-colors duration-300 ${
                      activeLink === link.id
                        ? 'bg-elite-teal/50 text-athena-cream border border-athena-cream/10 font-medium'
                        : 'text-athena-cream/80 hover:text-athena-cream hover:bg-elite-teal/50'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-elite-teal hover:bg-elite-teal/90 text-athena-cream border border-athena-cream/20 hover:border-athena-cream/40 shadow-md"
                  onClick={() => handleNavLinkClick('get-started')}
                >
                  Start Free Trial
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
