import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200 py-2 px-4 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-700 flex items-center justify-center gap-2 text-sm font-medium">
          Experience the premium ATHENA service
          <Link 
            to="/assessment" 
            className="inline-flex items-center gap-1 text-amber-600 ml-1 font-medium hover:underline transition-all"
          >
            Take assessment
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
