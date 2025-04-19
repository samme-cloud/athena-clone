import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ArrowRight, Check, X } from 'lucide-react';

type Question = {
  id: string;
  title: string;
  description: string;
  type: 'slider' | 'checkbox';
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  valueLabels?: string[];
};

const questions: Question[] = [
  {
    id: 'intuition',
    title: 'Intuition',
    description: 'How comfortable are you with allowing an assistant to make decisions for you?',
    type: 'slider',
    min: 0,
    max: 10,
    step: 1,
    valueLabels: [
      'I need to double-check everything',
      'I verify most decisions',
      'I trust but verify important decisions',
      'I\'m comfortable with most autonomy',
      'Full delegation with minimal oversight'
    ]
  },
  {
    id: 'time',
    title: 'Time Management',
    description: 'How much time do you spend on routine tasks that could be delegated?',
    type: 'slider',
    min: 0,
    max: 10,
    step: 1,
    valueLabels: [
      'Very little (<2 hrs/week)',
      'Some (2-5 hrs/week)',
      'Moderate (5-10 hrs/week)',
      'Significant (10-20 hrs/week)',
      'Extensive (20+ hrs/week)'
    ]
  },
  {
    id: 'control',
    title: 'Control',
    description: 'How difficult is it for you to let go of control over tasks?',
    type: 'slider',
    min: 0,
    max: 10,
    step: 1,
    valueLabels: [
      'Very difficult',
      'Somewhat difficult',
      'Neutral',
      'Somewhat easy',
      'Very easy'
    ]
  },
  {
    id: 'tasks',
    title: 'Tasks',
    description: 'Which tasks would you consider delegating? (Select all that apply)',
    type: 'checkbox',
    options: [
      { value: 'email', label: 'Email management' },
      { value: 'calendar', label: 'Calendar scheduling' },
      { value: 'research', label: 'Research & information gathering' },
      { value: 'documentation', label: 'Documentation & note-taking' },
      { value: 'travel', label: 'Travel planning' },
      { value: 'project', label: 'Project management' },
      { value: 'social', label: 'Social media management' },
      { value: 'personal', label: 'Personal errands & tasks' }
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    description: 'How would you rate your past experiences with delegation?',
    type: 'slider',
    min: 0,
    max: 10,
    step: 1,
    valueLabels: [
      'Very negative',
      'Somewhat negative',
      'Neutral',
      'Somewhat positive',
      'Very positive'
    ]
  }
];

type Answer = {
  questionId: string;
  value: number | string[];
};

const DelegationAssessment: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<NodeJS.Timeout | null>(null);

  // Track assessment opens for analytics
  const handleOpenAssessment = () => {
    setOpen(true);
    // Track the event (would be connected to your analytics system)
    console.log('Analytics: Assessment Started');
    // Example analytics call: 
    // window.analytics.track('assessment_started');
  };

  // Clear auto-advance timer when component unmounts
  useEffect(() => {
    return () => {
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
      }
    };
  }, [autoAdvanceTimer]);

  const handleSliderChange = (value: number[]) => {
    const currentQuestion = questions[currentStep];
    const existingAnswerIndex = answers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingAnswerIndex >= 0) {
      const newAnswers = [...answers];
      newAnswers[existingAnswerIndex] = { questionId: currentQuestion.id, value: value[0] };
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, { questionId: currentQuestion.id, value: value[0] }]);
    }

    // Set auto-advance timer for slider questions
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
    }

    const timer = setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(prevStep => prevStep + 1);
      }
    }, 1800);

    setAutoAdvanceTimer(timer);
  };

  const handleCheckboxChange = (option: string, isChecked: boolean) => {
    const currentQuestion = questions[currentStep];
    const existingAnswerIndex = answers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingAnswerIndex >= 0) {
      const existingValues = answers[existingAnswerIndex].value as string[];
      let newValues: string[];
      
      if (isChecked) {
        newValues = [...existingValues, option];
      } else {
        newValues = existingValues.filter(v => v !== option);
      }
      
      const newAnswers = [...answers];
      newAnswers[existingAnswerIndex] = { questionId: currentQuestion.id, value: newValues };
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, { questionId: currentQuestion.id, value: isChecked ? [option] : [] }]);
    }
  };

  const getCurrentAnswer = () => {
    const currentQuestion = questions[currentStep];
    const answer = answers.find(a => a.questionId === currentQuestion.id);
    
    if (currentQuestion.type === 'slider') {
      return answer ? [answer.value as number] : [currentQuestion.min || 0];
    } else {
      return answer ? answer.value as string[] : [];
    }
  };

  const isCheckboxSelected = (option: string) => {
    const currentQuestion = questions[currentStep];
    const answer = answers.find(a => a.questionId === currentQuestion.id);
    
    if (!answer) return false;
    
    return (answer.value as string[]).includes(option);
  };

  const getLabelByValue = (value: number) => {
    const currentQuestion = questions[currentStep];
    if (!currentQuestion.valueLabels) return '';
    
    const index = Math.floor((value / (currentQuestion.max || 10)) * (currentQuestion.valueLabels.length - 1));
    return currentQuestion.valueLabels[index];
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      
      // Clear any existing auto-advance timer
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        setAutoAdvanceTimer(null);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      
      // Clear any existing auto-advance timer
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        setAutoAdvanceTimer(null);
      }
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 1500);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset state when closing
    setTimeout(() => {
      setCurrentStep(0);
      setIsComplete(false);
    }, 300);
  };

  const calculateDelegationLevel = () => {
    // Extract slider questions only
    const sliderAnswers = answers.filter(a => 
      questions.find(q => q.id === a.questionId)?.type === 'slider'
    );
    
    if (sliderAnswers.length === 0) return 'Beginner';
    
    // Calculate average score
    const sum = sliderAnswers.reduce((acc, curr) => acc + (curr.value as number), 0);
    const avg = sum / sliderAnswers.length;
    
    // Determine level based on average score
    if (avg >= 8) return 'Master Delegator';
    if (avg >= 6) return 'Strategic Delegator';
    if (avg >= 4) return 'Developing Delegator';
    if (avg >= 2) return 'Tactical Delegator';
    return 'Delegation Novice';
  };

  return (
    <section id="delegation-assessment" className="py-24 bg-sage-50" aria-labelledby="delegation-assessment-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="delegation-assessment-heading" className="text-3xl md:text-4xl font-serif font-bold mb-6">Discover Your Delegation Level</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Take our quick assessment to find out your delegation style and receive personalized recommendations to maximize your time and impact.
          </p>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-mint-700 hover:bg-mint-800 text-white px-8 py-6 text-lg rounded-xl"
                onClick={handleOpenAssessment}
              >
                FIND YOUR LEVEL
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[600px] p-0">
              {!isComplete ? (
                <>
                  <DialogHeader className="p-6 pb-0">
                    {/* Progress bar */}
                    <div className="w-full mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-500">Question {currentStep + 1} of {questions.length}</span>
                        <span className="text-sm font-medium text-mint-700">{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-mint-600 rounded-full transition-all duration-300 ease-in-out" 
                          style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                        ></div>
                      </div>
                      
                      {/* Step indicators */}
                      <div className="flex justify-between mt-2">
                        {questions.map((_, index) => (
                          <div 
                            key={index} 
                            className={`w-3 h-3 rounded-full ${
                              index < currentStep ? 'bg-mint-600' : 
                              index === currentStep ? 'bg-mint-800 ring-2 ring-mint-200' : 
                              'bg-gray-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <DialogTitle className="text-xl font-semibold">
                      {questions[currentStep].title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-600 mt-2">
                      {questions[currentStep].description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="p-6 pt-4">
                    {questions[currentStep].type === 'slider' && (
                      <div className="mb-8 pt-6">
                        <Slider
                          value={getCurrentAnswer() as number[]}
                          min={questions[currentStep].min || 0}
                          max={questions[currentStep].max || 10}
                          step={questions[currentStep].step || 1}
                          onValueChange={handleSliderChange}
                          className="mb-6"
                        />
                        
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <span className="w-0.5 h-2 bg-gray-300 mb-1"></span>
                              <span>{i * 2.5}</span>
                            </div>
                          ))}
                        </div>
                        
                        {getCurrentAnswer()[0] !== undefined && (
                          <div className="mt-6 text-center">
                            <span className="inline-block px-4 py-2 bg-mint-100 text-mint-900 rounded-full text-sm font-medium">
                              {getLabelByValue(getCurrentAnswer()[0] as number)}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {questions[currentStep].type === 'checkbox' && (
                      <div className="space-y-3 my-4">
                        {questions[currentStep].options?.map(option => (
                          <div 
                            key={option.value} 
                            className={`p-4 border rounded-lg flex items-center cursor-pointer transition-all ${
                              isCheckboxSelected(option.value) 
                                ? 'border-mint-600 bg-mint-50' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleCheckboxChange(option.value, !isCheckboxSelected(option.value))}
                          >
                            <div 
                              className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                                isCheckboxSelected(option.value) 
                                  ? 'bg-mint-600 text-white' 
                                  : 'border border-gray-300'
                              }`}
                            >
                              {isCheckboxSelected(option.value) && <Check className="w-3 h-3" />}
                            </div>
                            <span>{option.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex justify-between mt-8">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                      >
                        Back
                      </Button>
                      
                      {currentStep === questions.length - 1 ? (
                        <div className="flex gap-4 items-center">
                          <Input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-60"
                          />
                          <Button 
                            onClick={handleSubmit}
                            disabled={!email || isSubmitting}
                            className="bg-mint-700 hover:bg-mint-800"
                          >
                            {isSubmitting ? 'Submitting...' : 'Get Results'}
                          </Button>
                        </div>
                      ) : (
                        questions[currentStep].type === 'checkbox' && (
                          <Button 
                            onClick={handleNext}
                            disabled={
                              questions[currentStep].type === 'checkbox' && 
                              (getCurrentAnswer() as string[]).length === 0
                            }
                            className="bg-mint-700 hover:bg-mint-800"
                          >
                            Continue
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Your Delegation Level</h3>
                  <div className="text-3xl font-serif font-bold text-mint-800 mb-6 py-2">
                    {calculateDelegationLevel()}
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    Thank you for completing the assessment! We've sent your detailed results and personalized recommendations to {email}.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <Button 
                      className="bg-mint-700 hover:bg-mint-800 w-full"
                      asChild
                    >
                      <a href="#pricing">
                        Explore Plans <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={handleClose}
                      className="w-full"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
              
              <button 
                onClick={handleClose}
                className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default DelegationAssessment; 