import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Define question types
type SliderQuestion = {
  type: 'slider';
  id: string;
  title: string;
  subtitle: string;
  leftLabel: string;
  rightLabel: string;
};

type CheckboxQuestion = {
  type: 'checkbox';
  id: string;
  title: string;
  subtitle: string;
  options: { value: string; label: string }[];
};

type EmailQuestion = {
  type: 'email';
  id: string;
  title: string;
  subtitle: string;
};

type Question = SliderQuestion | CheckboxQuestion | EmailQuestion;

// Assessment questions
const questions: Question[] = [
  {
    type: 'slider',
    id: 'intuition',
    title: 'Intuition',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'Your first instinct is "How should I do this?"',
    rightLabel: 'Your first instinct is "Who should do this?"'
  },
  {
    type: 'slider',
    id: 'experimentation',
    title: 'Experimentation',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You don\'t like experimenting.',
    rightLabel: 'You get joy from running experiments.'
  },
  {
    type: 'slider',
    id: 'money',
    title: 'Money',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You are cautious to invest $ in a personal team. You feel scarcity with $.',
    rightLabel: 'You spend freely and happily when you are investing in yourself. You feel abundance with $.'
  },
  {
    type: 'slider',
    id: 'trust',
    title: 'Trust & Control',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You don\'t trust easily, and you don\'t like giving up control. You worry your team will do the task differently than you would.',
    rightLabel: 'You are prudent with whom you trust, but when you do – you trust fully. You are excited to give up control. You focus on outcomes not process.'
  },
  {
    type: 'slider',
    id: 'tolerance_iteration',
    title: 'Tolerance for Iteration',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You have minimal tolerance for iteration. You want one-and-done.',
    rightLabel: 'You have a high tolerance for iteration. You\'re happy to iterate multiple times.'
  },
  {
    type: 'slider',
    id: 'tolerance_failure',
    title: 'Tolerance for Failure',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'A failed project permanently erodes your trust and confidence in the person you delegated to.',
    rightLabel: 'A failed project is a sign you didn\'t delegate properly or that you should keep experimenting.'
  },
  {
    type: 'slider',
    id: 'tolerance_inefficiency',
    title: 'Tolerance for Inefficiency',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You optimize for efficiency (outputs/inputs) instead of total output. You dislike that a bigger team means lower efficiency.',
    rightLabel: 'You know team output is, as Elon says, a "vector sum" and inefficiency increases with output. You happily optimize for total output not efficiency.'
  },
  {
    type: 'slider',
    id: 'feedback',
    title: 'Feedback',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You don\'t like giving feedback, and when you do it is simple ("good job thanks").',
    rightLabel: 'You give constant, high-quality feedback ("I loved X, Y, Z and A, B, C could be better next time")'
  },
  {
    type: 'slider',
    id: 'creativity',
    title: 'Creativity',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You struggle to think of things to delegate.',
    rightLabel: 'You easily come up with wild and crazy ideas.'
  },
  {
    type: 'slider',
    id: 'ambition',
    title: 'Ambition',
    subtitle: 'Move the slider based on your default behaviour today',
    leftLabel: 'You are satisfied.',
    rightLabel: 'You want 10x more – time, freedom, success, impact, love, etc.'
  },
  {
    type: 'checkbox',
    id: 'delegation_types',
    title: 'What types of delegation do you do often?',
    subtitle: 'Select all that apply',
    options: [
      { value: 'stream', label: 'Stream-of-consciousness delegation. You delegate as things come up.' },
      { value: 'projects', label: 'You delegate entire projects, broken down into a dozen steps.' },
      { value: 'recurring', label: 'You delegate recurring or trigger-based projects that repeat indefinitely.' },
      { value: 'algorithm', label: 'You export your decision-making algorithm from your head and share with your assistant to reduce decisions.' },
      { value: 'proactive', label: 'Your assistant proactively suggests tasks that you simply approve.' },
      { value: 'autonomous', label: 'Your assistant discovers and executes tasks without your input.' }
    ]
  },
  {
    type: 'checkbox',
    id: 'delegation_methods',
    title: 'How do you most often delegate?',
    subtitle: 'Select all that apply',
    options: [
      { value: 'in_person', label: 'In person' },
      { value: 'emails', label: 'Emails' },
      { value: 'messaging', label: 'Texts or messaging apps' },
      { value: 'calls', label: 'Calls' },
      { value: 'pm_software', label: 'Project management software (eg Asana)' },
      { value: 'voice_notes', label: 'Asynch voice notes' },
      { value: 'loom', label: 'Loom' }
    ]
  },
  {
    type: 'email',
    id: 'email',
    title: 'Email Address',
    subtitle: 'Enter your email address'
  }
];

// Main component
const DelegationAssessment = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [sliderValue, setSliderValue] = useState(50); // Default middle position
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [autoAdvanceTriggered, setAutoAdvanceTriggered] = useState(false);
  
  const currentQuestion = questions[currentStep];

  useEffect(() => {
    // Reset state when modal opens
    if (isOpen) {
      setCurrentStep(0);
      setResponses({});
      setSliderValue(50);
      setSelectedOptions([]);
      setEmail('');
      setAutoAdvanceTriggered(false);
    }
  }, [isOpen]);

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    
    // Record response
    setResponses({
      ...responses,
      [currentQuestion.id]: value
    });
    
    // Auto-advance after a delay
    if (!autoAdvanceTriggered) {
      setAutoAdvanceTriggered(true);
      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          handleNext();
        }
        setAutoAdvanceTriggered(false);
      }, 1000); // 1 second delay before auto-advancing
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (value: string) => {
    let newSelectedOptions = [...selectedOptions];
    
    if (newSelectedOptions.includes(value)) {
      newSelectedOptions = newSelectedOptions.filter(option => option !== value);
    } else {
      newSelectedOptions.push(value);
    }
    
    setSelectedOptions(newSelectedOptions);
    
    // Record response
    setResponses({
      ...responses,
      [currentQuestion.id]: newSelectedOptions
    });
  };

  // Handle email change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    
    // Record response
    setResponses({
      ...responses,
      [currentQuestion.id]: e.target.value
    });
  };

  // Navigation functions
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      
      // Restore previous values
      const prevQuestion = questions[currentStep - 1];
      if (prevQuestion.type === 'slider') {
        setSliderValue(responses[prevQuestion.id] || 50);
      } else if (prevQuestion.type === 'checkbox') {
        setSelectedOptions(responses[prevQuestion.id] || []);
      } else if (prevQuestion.type === 'email') {
        setEmail(responses[prevQuestion.id] || '');
      }
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      // Save current responses
      if (currentQuestion.type === 'checkbox') {
        setResponses({
          ...responses,
          [currentQuestion.id]: selectedOptions
        });
      }
      
      // Move to next question
      setCurrentStep(currentStep + 1);
      
      // Reset for next question
      if (questions[currentStep + 1].type === 'slider') {
        setSliderValue(responses[questions[currentStep + 1].id] || 50);
      } else if (questions[currentStep + 1].type === 'checkbox') {
        setSelectedOptions(responses[questions[currentStep + 1].id] || []);
      }
    } else {
      // If we're at the last step, submit the assessment
      handleSubmit();
    }
  };

  // Submit form
  const handleSubmit = () => {
    // Add email to responses if on the email step
    if (currentQuestion.type === 'email') {
      setResponses({
        ...responses,
        email: email
      });
    }
    
    // Here you would typically send the data to your backend
    console.log('Assessment responses:', responses);
    
    // Show a success message or redirect
    alert('Thank you for completing the assessment! We will analyze your delegation level and get back to you.');
    
    // Close the modal
    onClose();
  };

  // Progress indicators
  const totalQuestions = questions.length;
  const progressWidth = `${((currentStep + 1) / totalQuestions) * 100}%`;

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl p-8 relative overflow-hidden shadow-md border border-border" style={{ aspectRatio: '16/9' }}>
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close assessment"
        >
          <X size={24} />
        </button>
        
        {/* Header */}
        <h2 className="text-3xl font-serif font-bold text-center mb-2">Find your delegation level</h2>
        <p className="text-center text-gray-600 mb-6">{currentQuestion.subtitle || 'Move the slider based on your default behaviour today'}</p>
        
        {/* Question content */}
        <div className="py-2">
          <h3 className="text-2xl font-serif font-medium text-center mb-6">{currentQuestion.title}</h3>
          
          {/* Slider Question */}
          {currentQuestion.type === 'slider' && (
            <div className="mb-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-card p-4 rounded-lg text-center text-gray-700 border border-border">
                  {(currentQuestion as SliderQuestion).leftLabel}
                </div>
                <div className="bg-card p-4 rounded-lg text-center text-gray-700 border border-border">
                  {(currentQuestion as SliderQuestion).rightLabel}
                </div>
              </div>
              
              <div className="w-full py-6">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderValue} 
                  onChange={handleSliderChange}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    WebkitAppearance: 'none',
                    appearance: 'none',
                    accentColor: '#4AE7C3'
                  }}
                />
              </div>
            </div>
          )}
          
          {/* Checkbox Question */}
          {currentQuestion.type === 'checkbox' && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {(currentQuestion as CheckboxQuestion).options.map((option, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 rounded-lg cursor-pointer hover:bg-card/80 bg-card border border-border"
                  onClick={() => handleCheckboxChange(option.value)}
                >
                  <input 
                    type="checkbox" 
                    id={`option-${index}`} 
                    checked={selectedOptions.includes(option.value)} 
                    onChange={() => handleCheckboxChange(option.value)}
                    className="mt-1 h-5 w-5 text-athena-green rounded border-gray-300 focus:ring-athena-green"
                  />
                  <label htmlFor={`option-${index}`} className="text-gray-700 cursor-pointer">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
          
          {/* Email Question */}
          {currentQuestion.type === 'email' && (
            <div className="mb-8 max-w-md mx-auto">
              <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-athena-green focus:border-transparent bg-white"
              />
            </div>
          )}
        </div>
        
        {/* Progress bar - moved above the buttons */}
        <div className="mb-8 mx-auto max-w-xl">
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-athena-green transition-all duration-300 ease-out"
              style={{ width: progressWidth }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-2">
            {[...Array(totalQuestions)].map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentStep ? 'bg-athena-green' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons - centered */}
        <div className="flex justify-center gap-4 mt-4">
          <button 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`border border-gray-400 text-gray-700 px-8 py-3 rounded-md transition-colors ${
              currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
          >
            PREVIOUS
          </button>
          
          {currentStep === questions.length - 1 ? (
            <button 
              onClick={handleSubmit}
              className="bg-black text-white font-medium px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              SUBMIT
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="bg-black text-white font-medium px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DelegationAssessment; 