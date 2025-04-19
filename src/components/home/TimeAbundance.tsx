
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const TimeAbundance = () => {
  return (
    <div className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-athena-green/5"></div>
      <div className="athena-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
            You have dreams and vision, but never enough time.
            <br />
            <span className="bg-gradient-to-r from-athena-green to-athena-blue bg-clip-text text-transparent">
              Become an elite delegator
            </span>
            <br />
            and unlock time abundance
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default TimeAbundance;
