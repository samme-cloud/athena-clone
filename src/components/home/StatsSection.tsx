export const StatsSection = () => {
  return (
    <div className="py-20 md:py-28 lg:py-36 bg-black">
      <div className="athena-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Trusted by industry leaders</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our clients include elite leaders across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          <div className="premium-card">
            <div className="text-athena-green mb-6 text-lg font-medium">Founders of</div>
            <div className="text-5xl md:text-6xl font-bold mb-3 text-white">2000+</div>
            <div className="text-3xl text-gray-300">companies</div>
          </div>
          
          <div className="premium-card">
            <div className="text-athena-green mb-6 text-lg font-medium">VCs and angel investors</div>
            <div className="text-5xl md:text-6xl font-bold mb-3 text-white">$100B+</div>
            <div className="text-3xl text-gray-300">AUM</div>
          </div>
          
          <div className="premium-card">
            <div className="text-athena-green mb-6 text-lg font-medium">Best-selling authors</div>
            <div className="text-5xl md:text-6xl font-bold mb-3 text-white">#1 New</div>
            <div className="text-3xl text-gray-300">York Times</div>
          </div>
          
          <div className="premium-card">
            <div className="text-athena-green mb-6 text-lg font-medium">A-list podcasters</div>
            <div className="text-5xl md:text-6xl font-bold mb-3 text-white">1B+</div>
            <div className="text-3xl text-gray-300">downloads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
