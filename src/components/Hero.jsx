import React from "react";
import { motion } from "framer-motion";
import ThreeCanvas from './ThreeCanvas'; // Import the Three.js component

const Hero = ({ onLearnMoreClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const ButtonLink = ({
    className,
    href,
    download,
    onClick,
    children,
    label,
  }) => (
    <motion.a
      className={className}
      href={href}
      download={download}
      onClick={onClick}
      aria-label={label}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      {children}
    </motion.a>
  );

  return (
    <section className="snap-start h-screen flex flex-col items-center justify-center bg-gray-800 text-white relative overflow-hidden">
      <div> {/* Adjusted layering here */}
        <ThreeCanvas />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0"> {/* Lower z-index for text */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-5xl font-bold" variants={itemVariants}>
            Benjamin Hutchings
          </motion.h1>
          <motion.p className="text-xl mt-4" variants={itemVariants}>
            Machine Learning Engineer
          </motion.p>
          <div className="mt-8 flex justify-center space-x-4">
            <ButtonLink
              className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded py-2 px-6 text-lg"
              href="#about"
              onClick={onLearnMoreClick}
              label="Explore Portfolio"
            >
              Explore Portfolio
            </ButtonLink>
            <ButtonLink
              className="inline-flex items-center justify-center text-gray-700 bg-gray-100 hover:bg-gray-200 rounded py-2 px-6 text-lg"
              href="/cv/example_cv.pdf"
              download="Benjamin_Hutchings_CV.pdf"
              label="Download CV"
            >
              Download CV
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
