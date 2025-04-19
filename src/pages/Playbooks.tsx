import Banner from "../components/layout/Banner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlaybookCategories = [
  {
    category: "CAREER",
    playbooks: [
      "Hire the right people at record speed",
      "LinkedIn delegation 101",
      "The 1-hour job search",
      "Recruiter outreach system"
    ]
  },
  {
    category: "FULFILLMENT",
    playbooks: [
      "Exceed your goals with 10-second accountability check-ins",
      "Manage your CRM effectively",
      "Daily wins celebration system",
      "Reduce decision fatigue"
    ]
  },
  {
    category: "FOUNDATIONS",
    playbooks: [
      "Know everything about everyone in the meeting",
      "Perfect personal CRM",
      "Track all commitments made to you",
      "Never miss an important message"
    ]
  },
  {
    category: "BUSINESS",
    playbooks: [
      "Close more deals with fewer meetings",
      "Email nurture sequences that convert",
      "Find 100 new prospects in 24 hours",
      "Social media engagement system"
    ]
  },
  {
    category: "PERSONAL",
    playbooks: [
      "Trip planning made easy",
      "Meal planning for busy professionals",
      "Find and book the perfect restaurant",
      "Perfect gift finder for any occasion"
    ]
  }
];

const Playbooks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Banner />
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-20 bg-black starry-bg">
          <div className="athena-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
                Delegation Playbook Library
              </h1>
              <p className="text-xl text-center text-gray-300 max-w-4xl mx-auto mb-16">
                Unlock the collective wisdom of 1500+ Athena clients with our curated library of delegation playbooks.
                Each playbook gives you step-by-step instructions to delegate effectively and get more done.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16">
              {PlaybookCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold mb-8 text-athena-green">{category.category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.playbooks.map((playbook, idx) => (
                      <div 
                        key={idx}
                        className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-athena-green transition-all group cursor-pointer"
                      >
                        <h3 className="text-2xl font-bold mb-4">{playbook}</h3>
                        <div className="group-hover:translate-x-2 transition-transform flex items-center text-athena-green">
                          View Playbook
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <p className="text-xl text-gray-400 mb-8">
                Ready to unlock all playbooks and get a dedicated assistant?
              </p>
              <Link to="/get-started">
                <Button size="lg" className="bg-athena-green hover:bg-opacity-90 text-black font-medium px-8 py-6 h-auto">
                  GET STARTED
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Playbooks;
