import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const skills = [
    { name: 'Machine Learning', description: 'Building predictive models and utilizing statistical algorithms to generate insights.', icon: '🤖' },
    { name: 'Deep Learning', description: 'Designing and implementing neural network architectures for complex problem solving.', icon: '🧠' },
    { name: 'Data Visualization', description: 'Transforming data into visual context to highlight insights and trends.', icon: '📊' },
    { name: 'Cloud Computing', description: 'Utilizing AWS and Azure to deploy scalable and efficient applications.', icon: '☁️' },
    // Add more skills as needed
  ];

  // Variants for container and item animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  // Hover effect variants for the skill card
  const cardVariants = {
    hover: {
      scale: 1.05, // Slightly scale up
      transition: { duration: 0.3 },
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)", // Add shadow
    },
  };

  return (
    <section
      id="skills"
      className="snap-start h-screen flex items-center justify-center bg-white text-gray-600 body-font"
      ref={ref}
    >
      <motion.div
        className="container px-5 py-24 mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="text-center mb-20">
          <motion.h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4" variants={itemVariants}>
            Skills & Expertise
          </motion.h1>
          <motion.p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto" variants={itemVariants}>
            Leveraging a blend of technical skills and creativity to solve complex challenges and innovate.
          </motion.p>
        </div>
        <motion.div className="flex flex-wrap -m-4" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div className="p-4 md:w-1/4" key={index} variants={itemVariants} whileHover="hover">
              <motion.div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col" variants={cardVariants}>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    {skill.icon}
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">{skill.name}</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{skill.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
