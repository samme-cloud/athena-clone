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
    <footer className="bg-gray-50 border-t border-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8 xl:col-span-2">
            <div className="flex items-center">
              <span className="font-serif text-2xl font-bold text-black">
                Athena<span className="text-mint-500">.</span>
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Athena helps busy executives reclaim 15+ hours per week with our AI-powered elite assistant services.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-5">
                <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" className="text-gray-500 hover:text-gray-900" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" className="text-gray-500 hover:text-gray-900" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com" className="text-gray-500 hover:text-gray-900" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              {/* LinkedIn Follow Button */}
              <div className="mt-2" aria-label="Follow us on LinkedIn">
                <div className="in-follow-company" data-id="106525266" data-counter="right"></div>
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="#features" className="text-gray-600 hover:text-black">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="#testimonials" className="text-gray-600 hover:text-black">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="#pricing" className="text-gray-600 hover:text-black">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="#delegation-assessment" className="text-gray-600 hover:text-black">
                    Delegation Assessment
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-600 hover:text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-black">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-600 hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-gray-600 hover:text-black">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter signup */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-gray-600">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="rounded-md"
                  aria-label="Email address"
                />
                <Button type="submit" className="bg-mint-600 hover:bg-mint-700 text-white">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                We care about your data. Read our{' '}
                <Link to="/privacy" className="text-mint-600 hover:text-mint-700 underline">
                  Privacy Policy
                </Link>.
              </p>
            </form>
          </div>
        </div>
        
        {/* Contact information */}
        <div className="border-t border-gray-200 pt-8 mt-12 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <div className="flex items-center text-gray-500">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:contact@athena.com" className="hover:text-gray-900">
                contact@athena.com
              </a>
            </div>
            <div className="flex items-center text-gray-500">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+15551234567" className="hover:text-gray-900">
                (555) 123-4567
              </a>
            </div>
            <div className="flex items-center text-gray-500">
              <MapPin className="w-5 h-5 mr-2" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        {/* Copyright and legal */}
        <div className="border-t border-gray-200 pt-8 mt-8 md:flex md:items-center md:justify-between">
          <div className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Athena, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-900">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="text-gray-500 hover:text-gray-900">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
