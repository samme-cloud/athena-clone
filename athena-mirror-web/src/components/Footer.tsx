
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold text-athena-700">athena<span className="font-normal">health</span></h1>
            <p className="mt-4 text-gray-600 max-w-sm">
              Athena Health provides cloud-based services for healthcare providers including EHR, practice management, and patient engagement solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-athena-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-athena-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-athena-600">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-athena-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-athena-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">EHR Solutions</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Patient Engagement</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Revenue Cycle</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Telehealth</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Population Health</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Blog</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Webinars</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Case Studies</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Knowledge Base</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Leadership</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Careers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">News</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-athena-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Athena Health, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-500 hover:text-athena-600 text-sm">Privacy Policy</Link>
              <Link to="#" className="text-gray-500 hover:text-athena-600 text-sm">Terms of Service</Link>
              <Link to="#" className="text-gray-500 hover:text-athena-600 text-sm">Cookie Policy</Link>
              <Link to="#" className="text-gray-500 hover:text-athena-600 text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
