import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onLearnMoreClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="snap-start h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="text-center">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-5xl font-bold"
            variants={itemVariants}
            transition={{ duration: 0.8 }}
          >
            Benjamin Hutchings
          </motion.h1>
          <motion.p
            className="text-xl mt-4"
            variants={itemVariants}
            transition={{ duration: 0.8 }}
          >
            Machine Learning Engineer
          </motion.p>
        </motion.header>
        <motion.div
          className="mt-8"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={onLearnMoreClick}
            aria-label="Explore Portfolio"
          >
            Explore Portfolio
          </a>
          <a
            href="/cv/example_cv.pdf"
            download="Benjamin_Hutchings_CV.pdf"
            className="ml-4 inline-flex items-center justify-center text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            aria-label="Download CV"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
