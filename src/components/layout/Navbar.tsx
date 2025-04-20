import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FreeTrialModal from "@/components/ui/FreeTrialModal";

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
    // Check if the target is an internal link or section ID
    if (!sectionId.startsWith('/')) {
      setActiveLink(sectionId);
      const isHomePage = location.pathname === '/';
      
      if (!isHomePage) {
        // Navigate to home page first, then scroll to section
        navigate('/', { state: { scrollToSection: sectionId } });
      } else {
        // Already on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Handle direct navigation links (like /why-athena)
      navigate(sectionId);
      // Reset active link if navigating away from homepage sections
      setActiveLink(''); 
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
    <nav className={`fixed w-full z-50 transition-all duration-300 font-['Montserrat'] ${isScrolled ? 'py-6 bg-athena-navy/90 backdrop-blur-sm shadow-lg' : 'py-8'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Ensure width auto or remove fixed pixel dimensions if issues persist */}
          <Link to="/" className="flex items-center">
            <img src="/images/logos/image2vector.svg" alt="Horizons Logo" className="h-14 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {[
              { name: 'Elite Assistants', href: '/elite-assistants' },
              { name: 'Delegation', href: '/delegation' },
              { name: 'AI', href: '/ai' },
              { name: 'Why Athena', href: '/why-athena' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'Love ❤', href: '/testimonials' },
            ].map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xl font-semibold tracking-wide text-athena-cream/90 hover:text-athena-cream transition-colors"
                onClick={() => handleNavLinkClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Button (Desktop) - Triggers Modal */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-athena-cream/60 text-athena-cream hover:bg-athena-cream/10 px-8 py-6 text-lg rounded-xl font-semibold tracking-wide"
                >
                  Begin Here
                </Button>
              </DialogTrigger>
              <FreeTrialModal />
            </Dialog>
          </div>
          
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
          <div className="bg-athena-navy/90 backdrop-blur-sm rounded-xl shadow-md p-6 mt-2 border border-athena-cream/10">
            <ul className="space-y-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'features', label: 'Features' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'pricing', label: 'Pricing' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block py-2 px-3 rounded-md transition-colors duration-300 ${
                      activeLink === link.id
                        ? 'bg-athena-cream/10 text-athena-cream border border-athena-cream/10 font-medium'
                        : 'text-athena-cream/80 hover:text-athena-cream hover:bg-athena-cream/10'
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
              {/* Mobile CTA Button - Triggers Modal */}
              <li className="pt-2">
                 <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline"
                      className="w-full border-athena-cream/60 text-athena-cream hover:bg-athena-cream/10 font-semibold tracking-wide"
                    >
                      Begin Here
                    </Button>
                  </DialogTrigger>
                  <FreeTrialModal />
                </Dialog>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
