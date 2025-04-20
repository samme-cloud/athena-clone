import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  image?: string;
}

const Testimonials: React.FC = () => {
  // Return null to prevent this component from rendering
  return null;
};

export default Testimonials; 