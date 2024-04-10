import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const skills = [
    {
      name: "Machine Learning",
      description: "Building predictive models and leveraging statistical algorithms to uncover insights.",
      icon: "📈",
      subSkills: ["Pandas", "Scikit-learn", "Streamlit"],
      color: "bg-blue-500",
      subSkillColor: "bg-blue-200",
    },
    {
      name: "Deep Learning",
      description: "Designing and implementing neural network architectures for complex problem solving.",
      icon: "🧠",
      subSkills: ["Keras", "PyTorch", "Tensorflow"],
      color: "bg-red-500",
      subSkillColor: "bg-red-200",
    },
    {
      name: "Software Development",
      description: "Crafting scalable and efficient software solutions with a focus on modern development frameworks.",
      icon: "💻",
      subSkills: ["Python", "JavaScript", "React", "Node.js", "TailwindCSS"],
      color: "bg-green-500",
      subSkillColor: "bg-green-200",
    },
    {
      name: "Engineering Research",
      description: "Applying rigorous methodologies to innovate in AI and engineering.",
      icon: "🔍",
      subSkills: ["MATLAB", "Simulink"],
      color: "bg-purple-500",
      subSkillColor: "bg-purple-200",
    },
  ];

   const subSkillVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
      className="snap-start min-h-screen flex items-center justify-center bg-white text-gray-600 body-font"
      ref={ref}
    >
      <motion.div
        className="container px-5 py-24 mx-auto"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.2,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Leveraging a blend of technical skills and creativity to solve complex challenges and innovate.
          </p>
        </div>
        <motion.div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div className="p-4 md:w-1/2 lg:w-1/4" key={index} variants={subSkillVariants}>
              <div className="flex flex-col rounded-lg h-full bg-gray-100 p-8 shadow">
                <div className="flex items-center mb-3">
                  <div className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <h2 className="text-lg title-font font-medium">{skill.name}</h2>
                </div>
                <p className="leading-relaxed mb-4">{skill.description}</p>
                <div className="flex flex-wrap">
                  {skill.subSkills.map((subSkill, subIndex) => (
                    <motion.span key={subIndex} className={`text-sm ${skill.subSkillColor} m-1 p-2 rounded-lg`} variants={subSkillVariants}>
                      {subSkill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;