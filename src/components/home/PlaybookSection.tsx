
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const PlaybookSection = () => {
  return (
    <div className="py-20 bg-black starry-bg">
      <div className="athena-container">
        <h2 className="section-title mb-4">Never run out of ideas to delegate</h2>
        <p className="text-xl text-center text-gray-300 mb-16">
          Members unlock our private library of delegation playbooks to leverage the collective wisdom of our 1500+ clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Link to="/playbooks" className="block">
            <div className="bg-athena-green p-8 rounded-lg group">
              <div className="text-sm uppercase mb-2 text-black/70">CAREER</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Hire the right people at record speed</h3>
              <div className="group-hover:translate-x-2 transition-transform">
                <ArrowRight className="h-6 w-6 text-black" />
              </div>
            </div>
          </Link>
          
          <Link to="/playbooks" className="block">
            <div className="bg-athena-green p-8 rounded-lg group">
              <div className="text-sm uppercase mb-2 text-black/70">FULFILLMENT</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Exceed your goals with 10-second accountability check-ins</h3>
              <div className="group-hover:translate-x-2 transition-transform">
                <ArrowRight className="h-6 w-6 text-black" />
              </div>
            </div>
          </Link>
          
          <Link to="/playbooks" className="block">
            <div className="bg-athena-green p-8 rounded-lg group">
              <div className="text-sm uppercase mb-2 text-black/70">FOUNDATIONS</div>
              <h3 className="text-2xl font-bold mb-4 text-black">Know everything about everyone in the meeting</h3>
              <div className="group-hover:translate-x-2 transition-transform">
                <ArrowRight className="h-6 w-6 text-black" />
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link to="/playbooks">
            <Button size="lg" className="bg-athena-green hover:bg-opacity-90 text-black font-medium px-8 py-6 h-auto">
              EXPLORE PLAYBOOKS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaybookSection;
