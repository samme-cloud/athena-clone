import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AssessmentButton from "../assessment/AssessmentButton";

export const DelegationLevels = () => {
  const [activeLevel, setActiveLevel] = useState<string>("Beginner");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through levels for engagement
    const interval = setInterval(() => {
      setActiveLevel(current => {
        switch(current) {
          case "Beginner": return "Novice";
          case "Novice": return "Intermediate";
          case "Intermediate": return "Advanced";
          case "Advanced": return "Beginner";
          default: return "Beginner";
        }
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const levels = [
    {
      name: "Beginner",
      description: "Stream-of-consciousness delegation. You delegate as things come up.",
      example: "\"Buy these flowers for my friend's birthday.\"",
      icon: "🔄"
    },
    {
      name: "Novice",
      description: "You delegate entire projects, broken down into a dozen steps.",
      example: "\"My friend's bday is coming up – let's do X, Y, and Z.\"",
      icon: "📋"
    },
    {
      name: "Intermediate",
      description: "You delegate recurring or trigger-based projects that repeat indefinitely.",
      example: "\"Once/month send my parents a postcard w/ fun photo of me.\"",
      icon: "🔁"
    },
    {
      name: "Advanced",
      description: "You think of yourself as an algorithm. You export your decision-making algorithm from your head and share with your assistant.",
      example: "\"Let's plan an entrepreneur dinner. Here's the algorithm I use for deciding what guests to invite.\"",
      icon: "🧠"
    }
  ];

  return (
    <div className="py-28 md:py-36 lg:py-44 bg-background">
      <div className="athena-container">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Master the art of delegation
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Whether you're a novice or a pro, Athena's delegation system helps you level up
          </p>
        </div>

        {/* Level selector */}
        <div className={`flex justify-center mb-12 space-x-2 md:space-x-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {levels.map((level) => (
            <button
              key={level.name}
              onClick={() => setActiveLevel(level.name)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 ${
                activeLevel === level.name
                  ? "bg-white text-black font-bold border border-border shadow-sm"
                  : "bg-background border border-gray-400 text-foreground hover:border-gray-600"
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>

        {/* Active level content with animation */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {levels.map((level) => (
            <div
              key={level.name}
              className={`transition-all duration-500 ${
                activeLevel === level.name
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute pointer-events-none"
              }`}
              style={{ display: activeLevel === level.name ? "block" : "none" }}
            >
              <div className="mint-card overflow-hidden relative">
                {/* Decoration line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Level Info */}
                  <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
                    <div className="text-5xl mb-4">{level.icon}</div>
                    <h3 className="text-3xl font-serif font-bold text-black mb-4">{level.name}</h3>
                    <div className="w-16 h-1 bg-black/30 rounded-full mb-4 md:mb-0"></div>
                  </div>
                  
                  {/* Level Content */}
                  <div className="md:col-span-9">
                    <p className="text-xl text-gray-700 mb-6">{level.description}</p>
                    <div className="bg-white p-6 rounded-lg border border-border">
                      <h4 className="text-sm uppercase text-gray-500 mb-2">Example delegation</h4>
                      <p className="text-2xl font-medium text-black">{level.example}</p>
                    </div>
                    
                    {/* Tips for each level */}
                    <div className="mt-8">
                      <h4 className="text-sm uppercase text-gray-500 mb-4">How to improve from here</h4>
                      <ul className="text-gray-700 space-y-2">
                        {level.name === "Beginner" && (
                          <>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Start batching your tasks into projects instead of one-offs</li>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Practice delegating a full day's worth of tasks at once</li>
                          </>
                        )}
                        {level.name === "Novice" && (
                          <>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Create templates for common project types</li>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Set up recurring tasks that happen without prompting</li>
                          </>
                        )}
                        {level.name === "Intermediate" && (
                          <>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Document your decision-making processes</li>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Train your assistant to think like you would</li>
                          </>
                        )}
                        {level.name === "Advanced" && (
                          <>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Consider having your assistant hire and manage other assistants</li>
                            <li className="flex items-start"><span className="text-black mr-2">•</span> Build systems that scale beyond your personal bandwidth</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <AssessmentButton 
            buttonText="FIND YOUR LEVEL"
            className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-sm"
          />
          
          <p className="text-gray-600 mt-4 text-sm">Takes less than 3 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default DelegationLevels;
