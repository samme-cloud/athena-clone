import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Feature list item component for reusability
const FeatureItem = ({ text, included = true }: { text: string | React.ReactNode; included?: boolean }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0 pt-1">
      {included ? (
        <CheckCircle2 className="w-5 h-5 text-athena-green" aria-hidden="true" />
      ) : (
        <XCircle className="w-5 h-5 text-muted-foreground/70" aria-hidden="true" />
      )}
    </div>
    <span className={included ? 'text-foreground' : 'text-muted-foreground/80'}>{text}</span>
  </li>
);

export const AssistantComparison = () => {
  // Define features for both columns
  const athenaFeatures = [
    { text: <strong>360° Life Support</strong>, description: "There's no \"work\" or \"personal\"– just life. We've got you." },
    { text: <strong>Dedicated 40+ hrs/week</strong>, description: "Solely committed to your success." },
    { text: <strong>Delegation Training</strong>, description: "Perfect the art of doing more by doing less." },
    { text: <strong>Proven Systems</strong>, description: "1500+ partnerships underline our expertise." },
    { text: <strong>Ongoing Assistant Training</strong>, description: "Always upskilling for better service." },
    { text: <strong>Paid Benefits</strong>, description: "Athena Assistants are cared for, so they excel for you." },
    { text: <strong>World-Class Community</strong>, description: "Engage with peers facing your same challenges." },
    { text: <strong>Flexible Membership</strong>, description: "No long-term commitments, and cancel after your Onboarding Commitment Period with 30 days notice." },
  ];

  const traditionalFeatures = [
    { text: "Time consuming to hire", included: false },
    { text: "Extremely expensive", included: false },
    { text: "Shorter tenures", included: false },
    { text: "Guilt delegating personal or mundane tasks", included: false },
    { text: "Work to upskill", included: false },
    { text: "Administrative burden", included: false },
    { text: "Stuck to fixed schedules", included: false },
    { text: "Limited professional networks and resources", included: false },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // Added id="pricing" and dark background
    <section id="pricing" className="bg-black section-padding">
      <motion.div 
        className="athena-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-display text-heading-1 text-white mb-4">Membership</h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Get a full-time, dedicated Athena Assistant who works your time zone for only $3,000/month.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {/* Athena Assistant Column */}
          <div className="border border-athena-green/30 rounded-xl p-8 relative bg-athena-gray-light/5">
            {/* Green border accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-athena-green/0 via-athena-green to-athena-green/0"></div>
            <h3 className="text-heading-3 text-athena-green mb-8">Athena Assistant</h3>
            <ul className="space-y-4">
              {athenaFeatures.map((feature, index) => (
                <FeatureItem 
                  key={index} 
                  text={<>{feature.text}<br/><span className="text-sm text-muted-foreground/90">{feature.description}</span></>} 
                  included={true} 
                />
              ))}
            </ul>
          </div>

          {/* Traditional In-Person Assistant Column */}
          <div className="border border-athena-gray-border/20 rounded-xl p-8 bg-athena-gray-light/5">
            <h3 className="text-heading-3 text-white mb-8">Traditional In-Person Assistant</h3>
            <ul className="space-y-4">
              {traditionalFeatures.map((feature, index) => (
                <FeatureItem 
                  key={index} 
                  text={feature.text} 
                  included={feature.included} 
                />
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AssistantComparison;
