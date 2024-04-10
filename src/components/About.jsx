import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactTyped } from 'react-typed';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Define the job roles you want to cycle through
  const jobRoles = [
    "Machine Learning Engineer",
    "Deep Learning Researcher",
    "AI Enthusiast",
    "Skier",
    "Surfer",
    "Crossfitter",
  ];

  return (
    <section
      id="about"
      className="text-gray-600 body-font overflow-hidden min-h-screen flex items-center justify-center bg-white snap-y"
      ref={ref}
    >
      <motion.div
        className="container mx-auto flex px-5 py-10 md:flex-row items-center justify-between"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <motion.img
          src={`${process.env.PUBLIC_URL}/img/profile-pic.png`}
          alt="Profile Picture"
          className="mb-10 md:mb-0 w-48 h-48 rounded-full mx-auto md:mx-0 object-cover"
          variants={variants}
        />
        <motion.div className="md:ml-24 text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I'm Ben... <br/>
            {/* Typed component for job roles animation */}
            <ReactTyped
              strings={jobRoles}
              typeSpeed={40}
              backSpeed={20}
              loop
            />
          </h1>
          <p className="mb-8 leading-relaxed">
            Driven by curiosity, I embark on a journey to harness the transformative power of <strong>Machine Learning</strong>. With a knack for developing sophisticated predictive models and deep learning algorithms, I aim to transform insights into innovative strategies that propel industries forward and enhance lives.
          </p>
          <motion.div
            className="flex justify-center md:justify-center gap-4"
            variants={variants}
          >
            <a
              href="#skills"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              View my Skills
            </a>
            <a
              href="#projects"
              className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Explore my Projects
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
