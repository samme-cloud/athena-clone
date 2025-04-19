
import { Link } from "react-router-dom";

export const CommunitySection = () => {
  return (
    <div className="py-20 bg-black">
      <div className="athena-container">
        <h2 className="section-title mb-4">
          Level up with the most <br />ambitious people in the world
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16">
          With Athena you get members-only access to elite<br /> 
          delegators and highly successful peers who are pushing<br />
          frontiers in business, finance, health and life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-athena-green/20 flex items-center justify-center text-athena-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-black mb-4">
              Delegation Mastermind Groups
            </h3>
            <p className="text-gray-700 text-center">
              The most ambitious delegators unlock access to mastermind groups of 6 peers.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-athena-green/20 flex items-center justify-center text-athena-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-black mb-4">
              Delegation Master Classes
            </h3>
            <p className="text-gray-700 text-center">
              Get free access to monthly delegation master classes taught by elite delegators.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-athena-green/20 flex items-center justify-center text-athena-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-black mb-4">
              Delegation Dinners
            </h3>
            <p className="text-gray-700 text-center">
              Join members-only dinners in cities around the world to level up your delegation skills with your peers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
