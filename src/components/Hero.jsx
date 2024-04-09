import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onLearnMoreClick }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="snap-start h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Benjamin Hutchings
        </motion.h1>
        <motion.p
          className="text-xl mt-4"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Machine Learning Engineer
        </motion.p>
        <motion.p
          className="flex justify-center mt-8"
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#about"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Explore Portfolio
          </a>
          <a
            href="/cv/example_cv.pdf"
            download="Benjamin_Hutchings_CV.pdf"
            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            Download CV
        </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
