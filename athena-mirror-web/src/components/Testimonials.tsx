
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Athena Health has transformed our practice operations. The intuitive interface and automated workflows have saved our staff hours of administrative work each day.",
    author: "Dr. Jennifer Wilson",
    role: "Family Medicine Specialist",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    quote: "The patient engagement tools have helped us significantly reduce no-shows. Our patients love the automated reminders and the ability to communicate with us through the portal.",
    author: "Dr. Michael Chen",
    role: "Internal Medicine Physician",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Since implementing Athena's revenue cycle management solution, we've seen a 30% increase in collections and a dramatic reduction in claim denials.",
    author: "Rebecca Adams",
    role: "Practice Administrator",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-athena-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trusted by Healthcare Providers
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See why thousands of healthcare organizations choose Athena Health for their practice needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-athena-700 font-medium">
            Join over 140,000 healthcare providers who trust Athena Health
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
