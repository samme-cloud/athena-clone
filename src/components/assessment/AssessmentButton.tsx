import { useState } from 'react';
import DelegationAssessment from './DelegationAssessment';

type AssessmentButtonProps = {
  className?: string;
  buttonText?: string;
};

const AssessmentButton = ({ 
  className = "bg-athena-green hover:bg-athena-green/90 text-black font-semibold px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,180,0.2)] hover:shadow-[0_0_30px_rgba(0,255,180,0.4)]",
  buttonText = "FIND YOUR LEVEL"
}: AssessmentButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        onClick={openModal}
        className={className}
      >
        {buttonText}
      </button>
      
      <DelegationAssessment 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default AssessmentButton; 