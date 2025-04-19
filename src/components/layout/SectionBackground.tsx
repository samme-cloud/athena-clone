// Premium background component inspired by Relume.io's high-end design
// This creates a sophisticated backdrop for all page sections

const SectionBackground = ({ 
  children, 
  id, 
  className = "", 
  accentColor = "transparent",
  darkMode = false
}: { 
  children: React.ReactNode, 
  id?: string, 
  className?: string,
  accentColor?: string,
  darkMode?: boolean
}) => {
  return (
    <section 
      id={id} 
      className={`relative overflow-hidden py-16 md:py-24 lg:py-32 ${darkMode ? 'bg-relume-900 text-white' : 'bg-white'} ${className}`}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-relume-900 to-relume-800' : 'bg-gradient-to-br from-relume-50 to-white'}`}></div>
        
        {/* Premium noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Accent glow (conditional) */}
        {accentColor !== "transparent" && (
          <div 
            className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: accentColor }}
          ></div>
        )}
        
        {/* Dot pattern (for visual sophistication) */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.8' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '16px 16px'
        }}></div>
      </div>
      
      {/* Content with appropriate z-index and container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>

      {/* Subtle bottom divider (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
    </section>
  );
};

export default SectionBackground; 