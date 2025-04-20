
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const providers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    location: "Boston, MA",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    accepting: true,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Internal Medicine",
    location: "Cambridge, MA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    accepting: true,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "OB-GYN",
    location: "Somerville, MA",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    accepting: false,
  },
];

const FindDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  
  const filteredProviders = providers.filter(provider => 
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    provider.location.toLowerCase().includes(location.toLowerCase()) &&
    (specialty === '' || provider.specialty === specialty)
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Find a Provider
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with quality healthcare providers in your area who use the Athena Health platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Provider Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-athena-500 focus:border-athena-500"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-athena-500 focus:border-athena-500"
                  placeholder="City, State or ZIP"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                Specialty
              </label>
              <select
                id="specialty"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-athena-500 focus:border-athena-500"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option value="">All Specialties</option>
                <option value="Family Medicine">Family Medicine</option>
                <option value="Internal Medicine">Internal Medicine</option>
                <option value="OB-GYN">OB-GYN</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Cardiology">Cardiology</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <div key={provider.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={provider.image} 
                    alt={provider.name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{provider.name}</h3>
                    <p className="text-gray-600">{provider.specialty}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{provider.location}</span>
                </div>
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    provider.accepting ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {provider.accepting ? 'Accepting New Patients' : 'Not Accepting New Patients'}
                  </span>
                </div>
                <button className="w-full bg-athena-600 text-white px-4 py-2 rounded-md font-medium hover:bg-athena-700 transition">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-athena-700 font-medium hover:underline">
            View all providers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindDoctor;
