
import { Users, Building, Clock, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-8 w-8 text-athena-600" />,
    value: "140,000+",
    label: "Healthcare Providers",
    description: "Trust Athena Health for their practice needs"
  },
  {
    icon: <Building className="h-8 w-8 text-athena-600" />,
    value: "2,500+",
    label: "Medical Facilities",
    description: "Powered by our platform nationwide"
  },
  {
    icon: <Clock className="h-8 w-8 text-athena-600" />,
    value: "74%",
    label: "Time Saved",
    description: "On administrative tasks for healthcare staff"
  },
  {
    icon: <Globe className="h-8 w-8 text-athena-600" />,
    value: "110M+",
    label: "Patient Records",
    description: "Securely managed in our cloud platform"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-athena-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Athena Health by the Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Making a measurable impact on healthcare delivery across the country
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-athena-100 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-lg font-medium text-athena-700 mb-2">{stat.label}</p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
