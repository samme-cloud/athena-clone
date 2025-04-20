
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-athena-700">athena<span className="font-normal">health</span></h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-athena-600 font-medium"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products <ChevronDown size={16} className="ml-1" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 min-w-[200px]">
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">Electronic Health Records</Link>
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">Revenue Cycle Management</Link>
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">Patient Engagement</Link>
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">Population Health</Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-athena-600 font-medium"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources <ChevronDown size={16} className="ml-1" />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 min-w-[200px]">
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">Case Studies</Link>
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">Webinars</Link>
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">White Papers</Link>
                  <Link to="#" className="block py-2 text-gray-700 hover:text-athena-600">Blog</Link>
                </div>
              )}
            </div>
            <Link to="#" className="text-gray-700 hover:text-athena-600 font-medium">About Us</Link>
            <Link to="#" className="text-gray-700 hover:text-athena-600 font-medium">Careers</Link>
            <Link to="#" className="text-gray-700 hover:text-athena-600 font-medium">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-athena-600 text-white px-5 py-2 rounded-full font-medium hover:bg-athena-700 transition">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                className="flex items-center justify-between text-gray-700 hover:text-athena-600 font-medium"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products <ChevronDown size={16} className={`transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="#" className="text-gray-700 hover:text-athena-600">Electronic Health Records</Link>
                  <Link to="#" className="text-gray-700 hover:text-athena-600">Revenue Cycle Management</Link>
                  <Link to="#" className="text-gray-700 hover:text-athena-600">Patient Engagement</Link>
                  <Link to="#" className="text-gray-700 hover:text-athena-600">Population Health</Link>
                </div>
              )}

              <button 
                className="flex items-center justify-between text-gray-700 hover:text-athena-600 font-medium"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources <ChevronDown size={16} className={`transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="#" className="text-gray-700 hover:text-athena-600">Case Studies</Link>
                  <Link to="#" className="text-gray-700 hover:text-athena-600">Webinars</Link>
                  <Link to="#" className="text-gray-700 hover:text-athena-600">White Papers</Link>
                  <Link to="#" className="text-gray-700 hover:text-athena-600">Blog</Link>
                </div>
              )}

              <Link to="#" className="text-gray-700 hover:text-athena-600 font-medium">About Us</Link>
              <Link to="#" className="text-gray-700 hover:text-athena-600 font-medium">Careers</Link>
              <Link to="#" className="text-gray-700 hover:text-athena-600 font-medium">Contact</Link>

              <button className="bg-athena-600 text-white px-5 py-2 rounded-full font-medium hover:bg-athena-700 transition w-full">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
