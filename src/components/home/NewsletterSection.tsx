
import { useState } from "react";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setEmail("");
    alert("Thanks for subscribing!");
  };
  
  return (
    <div className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gray-900 bg-opacity-70 rounded-lg p-10 border border-gray-800">
          <h2 className="text-3xl font-bold text-center mb-4">
            Learn how to delegate better with 55,000+ founders & execs
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Get your time back. Delegate more.
          </p>
          
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-md border-r-0 border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-athena-green"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-athena-green text-white font-medium rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
