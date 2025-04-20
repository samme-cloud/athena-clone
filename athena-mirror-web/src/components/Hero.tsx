
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-athena-50 to-blue-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Healthcare <span className="text-athena-600">technology</span> that puts people first
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Our solutions help healthcare providers deliver better care with less work, 
              connecting patients to the care they need when they need it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-athena-600 text-white px-6 py-3 rounded-full font-medium hover:bg-athena-700 transition">
                Request a demo
              </button>
              <Link to="#" className="inline-flex items-center text-athena-700 font-medium px-6 py-3 hover:underline">
                Learn more <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-athena-400 to-blue-400 rounded-lg blur-lg opacity-30"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare professional using Athena software" 
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 p-4 bg-athena-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  "Athena's platform has streamlined our practice operations and improved patient satisfaction by 45%."
                </p>
                <p className="mt-2 text-sm font-medium text-athena-700">
                  Dr. Sarah Johnson, Women's Health Clinic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
