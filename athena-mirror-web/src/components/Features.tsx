
import { 
  CalendarClock, 
  ClipboardList, 
  UserCheck, 
  LineChart, 
  MessageCircle, 
  Shield
} from 'lucide-react';

const features = [
  {
    icon: <CalendarClock className="w-10 h-10 text-athena-600" />,
    title: "Streamlined Scheduling",
    description: "Reduce no-shows and simplify appointment management with our intelligent scheduling system."
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-athena-600" />,
    title: "Electronic Health Records",
    description: "Access patient information securely from anywhere with our cloud-based EHR solution."
  },
  {
    icon: <UserCheck className="w-10 h-10 text-athena-600" />,
    title: "Patient Engagement",
    description: "Keep patients connected to their care with automated reminders and a patient portal."
  },
  {
    icon: <LineChart className="w-10 h-10 text-athena-600" />,
    title: "Revenue Cycle Management",
    description: "Optimize financial performance with our comprehensive billing and claims processing."
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-athena-600" />,
    title: "Telehealth Solutions",
    description: "Connect with patients virtually through our secure, integrated telehealth platform."
  },
  {
    icon: <Shield className="w-10 h-10 text-athena-600" />,
    title: "HIPAA Compliant",
    description: "Rest easy knowing your data is protected with enterprise-grade security measures."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Comprehensive Healthcare Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide innovative tools that help healthcare providers deliver better care with less administrative burden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
