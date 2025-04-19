import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle } from "lucide-react";

export const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState<'hire' | 'train' | 'ai'>('ai');
  
  return (
    <div className="py-20 bg-black">
      <div className="athena-container">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-lg p-1 flex">
            <button 
              className={`px-10 py-3 rounded-md font-medium ${activeTab === 'hire' ? 'tab-active' : 'text-gray-400'}`}
              onClick={() => setActiveTab('hire')}
            >
              Hire
            </button>
            <button 
              className={`px-10 py-3 rounded-md font-medium ${activeTab === 'train' ? 'tab-active' : 'text-gray-400'}`}
              onClick={() => setActiveTab('train')}
            >
              Train
            </button>
            <button 
              className={`px-10 py-3 rounded-md font-medium ${activeTab === 'ai' ? 'tab-active' : 'text-gray-400'}`}
              onClick={() => setActiveTab('ai')}
            >
              AI
            </button>
          </div>
        </div>
        
        {activeTab === 'hire' && (
          <div>
            <h2 className="text-3xl text-center font-bold mb-10">We've interviewed over 500,000 assistants so you don't have to.</h2>
            
            <div className="mb-12 border-b border-gray-800 pb-10">
              <h3 className="text-2xl text-center mb-6">Athena Assistants have an acceptance rate &lt;1%</h3>
            </div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
                <div className="text-athena-green text-7xl font-bold">1</div>
                <div className="md:col-span-3">
                  <h4 className="text-2xl font-medium mb-2">Communication</h4>
                  <p className="text-gray-400 mb-6">Candidates take an English language assessment. Only candidates with a C2 Level (highest level of proficiency) from CEFR pass.</p>
                  <div className="bg-gradient-to-r from-athena-green to-athena-blue h-4 w-2/5 rounded-sm"></div>
                  <div className="mt-2 text-white">40% Pass</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
                <div className="text-athena-green text-7xl font-bold">2</div>
                <div className="md:col-span-3">
                  <h4 className="text-2xl font-medium mb-2">Personality</h4>
                  <p className="text-gray-400 mb-6">Candidates take a comprehensive multi-factor personality test. Our selection model is fine-tuned with the data from 500,000+ applicants.</p>
                  <div className="bg-gradient-to-r from-athena-green to-athena-blue h-4 w-1/5 rounded-sm"></div>
                  <div className="mt-2 text-white">21% Pass</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
                <div className="text-athena-green text-7xl font-bold">3</div>
                <div className="md:col-span-3">
                  <h4 className="text-2xl font-medium mb-2">In-Depth Skill Review</h4>
                  <p className="text-gray-400 mb-6">Remaining candidates are tested across a range of skills including email pre-drafting, scheduling meetings, and complicated research projects.</p>
                  <div className="bg-gradient-to-r from-athena-green to-athena-blue h-4 w-[9%] rounded-sm"></div>
                  <div className="mt-2 text-white">9% Pass</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
                <div className="text-athena-green text-7xl font-bold">4</div>
                <div className="md:col-span-3">
                  <h4 className="text-2xl font-medium mb-2">Real-Life Projects</h4>
                  <p className="text-gray-400 mb-6">The most promising candidates are given real-world projects to test their speed and skill in a high pressure work environment.</p>
                  <div className="bg-gradient-to-r from-athena-green to-athena-blue h-4 w-[4%] rounded-sm"></div>
                  <div className="mt-2 text-white">4% Pass</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
                <div className="text-athena-green text-7xl font-bold">5</div>
                <div className="md:col-span-3">
                  <h4 className="text-2xl font-medium mb-2">Live Screening</h4>
                  <p className="text-gray-400 mb-6">Finalists are vetted live to assess their executive presence, character, and ability to think on their feet.</p>
                  <div className="bg-gradient-to-r from-athena-green to-athena-blue h-4 w-[1%] rounded-sm"></div>
                  <div className="mt-2 text-white">1% Pass</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
                <div className="text-athena-green text-7xl font-bold">6</div>
                <div className="md:col-span-3">
                  <h4 className="text-2xl font-medium mb-2">Bootcamp</h4>
                  <p className="text-gray-400 mb-6">Hired candidates start a 4-week training program. They learn Athena's proprietary delegation system and cutting-edge AI tools so they can become an extension of you.</p>
                  <div className="bg-gradient-to-r from-athena-green to-athena-blue h-4 w-[0.5%] rounded-sm"></div>
                  <div className="mt-2 text-white">0.5% Pass</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'train' && (
          <div>
            <h2 className="text-3xl text-center font-bold mb-16">Athena's Training Academy means your Assistant is constantly upleveling.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <Calendar className="h-10 w-10 text-athena-green" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">4 week bootcamp</h3>
                <p className="text-gray-400 text-center">
                  Before you kick off, your Athena Assistant learns the processes, skills and tools of the best assistants in the world
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-athena-green" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Continuous mentorship</h3>
                <p className="text-gray-400 text-center">
                  We train your Assistant on new delegation playbooks, fill knowledge gaps and give them experts to lean on for niche needs.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-athena-green" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">MBA program</h3>
                <p className="text-gray-400 text-center">
                  We created an accredited 5 year MBA program and cover tuition for your Assistant so they can grow with your business.
                </p>
              </div>
            </div>
            
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-6">AI Tools</h3>
              <p className="text-xl text-gray-300 mb-10">
                Over 50% of Athena Assistants use AI every week and 100% of our Assistants use AI every month. Tools include ChatGPT, HumanLoop, Zapier, FirefliesAI, OtterAI, and others.
              </p>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800"></div>
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 text-athena-green">
                  AI
                </div>
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800"></div>
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800"></div>
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800"></div>
                <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800"></div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'ai' && (
          <div>
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-6">AI Tools</h2>
              <p className="text-xl text-gray-300 mb-10">
                Over 50% of Athena Assistants use AI every week and 100% of our Assistants use AI every month. Tools include ChatGPT, HumanLoop, Zapier, FirefliesAI, OtterAI, and others.
              </p>
              
              <div className="grid grid-cols-3 gap-4 md:grid-cols-9 mb-12">
                {/* First row of AI tool logos */}
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  {/* Empty square */}
                </div>
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-orange-500" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  {/* Empty square */}
                </div>
                <div className="md:col-span-6"></div>
                
                {/* Second row of AI tool logos */}
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-500" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                  </svg>
                </div>
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-500" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.17 10.65L12 16.83l-4.17-4.18a2.5 2.5 0 0 1 0-3.54 2.5 2.5 0 0 1 3.54 0L12 9.7l.63-.59a2.5 2.5 0 0 1 3.54 0 2.5 2.5 0 0 1 0 3.54z"/>
                  </svg>
                </div>
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <div className="md:col-span-6"></div>
                
                {/* Third row of AI tool logos */}
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  {/* Empty square */}
                </div>
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-pink-500" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H5v-2h7v2zm7-4H5v-2h14v2zm0-4H5V7h14v2z"/>
                  </svg>
                </div>
                <div className="aspect-square bg-black rounded-lg flex items-center justify-center border border-gray-800">
                  {/* Empty square */}
                </div>
                <div className="md:col-span-6"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="bg-black rounded-lg p-3 text-gray-300 border border-gray-800 hover:border-gray-600 transition-colors">
                  Inbox auto-delegator
                </div>
                <div className="bg-black rounded-lg p-3 text-gray-300 border border-gray-800 hover:border-gray-600 transition-colors">
                  Automatic travel dossier
                </div>
                <div className="bg-black rounded-lg p-3 text-gray-300 border border-gray-800 hover:border-gray-600 transition-colors relative">
                  Meeting and Call auto-delegator
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 text-green-400">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4M12 4v16" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-3 text-gray-300 border border-gray-800 hover:border-gray-600 transition-colors">
                  Automatic personal dossier
                </div>
                <div className="bg-black rounded-lg p-3 text-gray-300 border border-gray-800 hover:border-gray-600 transition-colors">
                  Social media idea generator
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Athena AI</h3>
                <p className="text-gray-300 mb-6">
                  Athena develops AI apps to give an "assistant to our assistants" to exponentially increase their productivity and output. Our apps enable assistants to do things like pre-draft emails in your tone and proactively suggest delegations from your existing workflows.
                </p>
              </div>
            </div>
            
            <div className="mt-24 text-center">
              <Link to="#get-started" className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block">
                GET AN ELITE ASSISTANT
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceTabs;
