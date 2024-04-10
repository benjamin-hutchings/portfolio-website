import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
    triggerOnce: false, // To trigger animations every time the section comes into view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation variants for the container and items
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      className="text-gray-600 body-font overflow-hidden min-h-screen flex items-center justify-center bg-white snap-y"
      ref={ref}
    >
      <motion.div
        className="container mx-auto flex px-5 py-10 md:py-24 items-center justify-center flex-col"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <motion.div
          className="text-center mb-8"
          variants={variants}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I'm Ben...
          </h1>
          <p className="mb-8 leading-relaxed">
            Driven by curiosity, I embark on a journey to harness the transformative power of <strong>Machine Learning</strong>. With a knack for developing sophisticated predictive models and deep learning algorithms, I aim to transform insights into innovative strategies that propel industries forward and enhance lives.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center gap-4"
          variants={variants}
        >
          <a href="#skills" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            View my Skills
          </a>
          <a href="#experience" className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            What's my experience?
          </a>
          <a href="#projects" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Explore my Projects
          </a>
          <a href="#contact" className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Contact Me!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
