import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// LinkedIn script needs to be loaded only once
declare global {
  interface Window {
    IN: any;
  }
}

const Footer: React.FC = () => {
  // Initialize LinkedIn widgets when component mounts
  useEffect(() => {
    // Create LinkedIn script if it doesn't exist
    if (!document.getElementById('linkedin-script')) {
      const script = document.createElement('script');
      script.id = 'linkedin-script';
      script.type = 'text/javascript';
      script.src = '//platform.linkedin.com/in.js';
      script.innerHTML = 'lang: en_US';
      
      // Append script to document
      document.body.appendChild(script);
      
      // Initialize or reload LinkedIn widgets
      script.onload = () => {
        if (window.IN && window.IN.parse) {
          window.IN.parse();
        }
      };
    } else {
      // If script exists, just reparse the widgets
      if (window.IN && window.IN.parse) {
        window.IN.parse();
      }
    }
    
    // Cleanup
    return () => {
      const script = document.getElementById('linkedin-script');
      if (script) {
        // Don't remove the script to prevent multiple reloads
        // Just cleanup any event listeners if needed
      }
    };
  }, []);

  return (
    <footer className="bg-elite-teal border-t border-athena-cream/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          {/* Company info */}
          <div className="space-y-6 xl:col-span-2">
            <div className="flex items-center">
              <span className="font-serif text-2xl font-bold text-athena-cream">
                Athena<span className="text-athena-cream">.</span>
              </span>
            </div>
            <p className="text-athena-cream/80 max-w-md">
              Athena helps busy executives reclaim 15+ hours per week with our AI-powered elite assistant services.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-5">
                <a 
                  href="https://twitter.com/horizontalen" 
                  className="text-athena-cream/70 hover:text-athena-cream" 
                  aria-label="Twitter"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" className="text-athena-cream/70 hover:text-athena-cream" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" className="text-athena-cream/70 hover:text-athena-cream" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-athena-cream/70 hover:text-athena-cream" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" className="text-athena-cream/70 hover:text-athena-cream" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-bold text-athena-cream tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="#features" className="text-athena-cream/80 hover:text-athena-cream">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#testimonials" className="text-athena-cream/80 hover:text-athena-cream">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="#pricing" className="text-athena-cream/80 hover:text-athena-cream">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#delegation-assessment" className="text-athena-cream/80 hover:text-athena-cream">
                    Delegation Assessment
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-athena-cream/80 hover:text-athena-cream">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-athena-cream tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/about" className="text-athena-cream/80 hover:text-athena-cream">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-athena-cream/80 hover:text-athena-cream">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-athena-cream/80 hover:text-athena-cream">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-athena-cream/80 hover:text-athena-cream">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-athena-cream/80 hover:text-athena-cream">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter signup */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-bold text-athena-cream tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-athena-cream/80">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="rounded-md bg-elite-teal border-athena-cream/20 text-athena-cream placeholder:text-athena-cream/50"
                  aria-label="Email address"
                />
                <Button type="submit" className="bg-elite-teal hover:bg-elite-teal/90 text-athena-cream border border-athena-cream/20 hover:border-athena-cream/40 shadow-md">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-sm text-athena-cream/70">
                We care about your data. Read our{' '}
                <Link to="/privacy" className="text-athena-cream/90 hover:text-athena-cream underline">
                  Privacy Policy
                </Link>.
              </p>
            </form>
          </div>
        </div>
        
        {/* Contact information */}
        <div className="border-t border-athena-cream/10 pt-8 mt-12 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <div className="flex items-center text-athena-cream/70">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:contact@athena.com" className="hover:text-athena-cream">
                contact@athena.com
              </a>
            </div>
            <div className="flex items-center text-athena-cream/70">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+15551234567" className="hover:text-athena-cream">
                (555) 123-4567
              </a>
            </div>
            <div className="flex items-center text-athena-cream/70">
              <MapPin className="w-5 h-5 mr-2" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        {/* Copyright and legal */}
        <div className="border-t border-athena-cream/10 pt-8 mt-8 md:flex md:items-center md:justify-between">
          <div className="text-base text-athena-cream/70">
            &copy; {new Date().getFullYear()} Athena, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-athena-cream/70 hover:text-athena-cream">
              Terms
            </Link>
            <Link to="/privacy" className="text-athena-cream/70 hover:text-athena-cream">
              Privacy
            </Link>
            <Link to="/cookies" className="text-athena-cream/70 hover:text-athena-cream">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="text-athena-cream/70 hover:text-athena-cream">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
