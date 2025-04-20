import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import Autoplay from "embla-carousel-autoplay"; // Temporarily disabled again
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge"; // Assuming Badge component exists
import { ArrowRight } from 'lucide-react';

interface AssistantProfile {
  name: string;
  description: string;
  imageUrl: string;
  skills: string[];
  id: string; // For key prop
}

// Data based on screenshots
const assistants: AssistantProfile[] = [
  {
    id: 'yusra',
    name: "Yusra",
    description: "Social media professional with 2-3 years experience in content management, influencer marketing...",
    imageUrl: "/images/assistants/yusra.jpg", // Placeholder path
    skills: ["Social Media Specialist", "Influencer Marketing", "Customer Support", "+3"]
  },
  {
    id: 'amad',
    name: "Amad",
    description: "Full stack engineer with years of experience building products people love. Ex...",
    imageUrl: "/images/assistants/amad.jpg", // Placeholder path
    skills: ["Next.js", "Vercel", "Supabase", "+4"]
  },
  {
    id: 'eman',
    name: "Eman",
    description: "Account executive with 4+ years experience in project management and lead generation...",
    imageUrl: "/images/assistants/eman.jpg", // Placeholder path
    skills: ["Executive Assistant", "Project Management", "Lead Generation", "+2"]
  },
  {
    id: 'marya',
    name: "Marya",
    description: "Sales representative with 2+ years experience at a US-based startup, combining data...",
    imageUrl: "/images/assistants/marya.jpg", // Placeholder path
    skills: ["LinkedIn Sales Navigator", "Instantly.ai", "Cold Emails", "+4"]
  },
  {
    id: 'chae',
    name: "Chae",
    description: "Market research and administrative specialist with 3+ years experience at Aramco...",
    imageUrl: "/images/assistants/chae.jpg", // Placeholder path
    skills: ["Market Research", "Inventory Management", "Billing & Customer Support", "+3"]
  },
  // Add more profiles if needed
];

const AssistantCarousel: React.FC = () => {
  // Autoplay disabled

  return (
    <div className="w-full" style={{ direction: 'rtl' }}> { /* Set direction to Right-to-Left */ }
      <Carousel
        // plugins prop removed
        opts={{
          align: "start",
          loop: true,
          direction: 'rtl', // Explicitly set direction for Embla options
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4" style={{ direction: 'ltr' }}> { /* Reset direction for content layout */ }
          {assistants.map((assistant) => (
            <CarouselItem key={assistant.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              {/* Card structure - Reset direction for inner content */}
              <div 
                className="group bg-athena-navy-light border border-athena-cream/10 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-athena-cream/20 hover:shadow-lg"
                style={{ direction: 'ltr' }} 
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={assistant.imageUrl} 
                    alt={assistant.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Link 
                    to={`/assistants/${assistant.id}`} // Example link
                    className="absolute top-4 right-4 bg-athena-green/80 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-athena-green"
                  >
                    Hire <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold text-athena-cream mb-2">{assistant.name}</h3>
                  <p className="text-athena-cream/80 text-sm mb-4 flex-grow">{assistant.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {assistant.skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" // Use a subtle variant
                        className="bg-athena-cream/10 border border-athena-cream/20 text-athena-cream/80 text-xs px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Keep Previous/Next buttons for manual control if desired */}
        <CarouselPrevious className="absolute left-[-20px] sm:left-[-40px] top-1/2 -translate-y-1/2 text-athena-cream/50 hover:text-athena-cream" style={{ direction: 'ltr' }}/>
        <CarouselNext className="absolute right-[-20px] sm:right-[-40px] top-1/2 -translate-y-1/2 text-athena-cream/50 hover:text-athena-cream" style={{ direction: 'ltr' }}/>
      </Carousel>
    </div>
  );
};

export default AssistantCarousel; 