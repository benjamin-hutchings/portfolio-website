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
      description:
        "Building predictive models and leveraging statistical algorithms to uncover insights.",
      icon: "📈",
      subSkills: [
        { name: "Pandas", icon: "🐼" },
        { name: "Scikit-learn", icon: "🛠️" },
        { name: "Streamlit", icon: "🚀" },
        { name: "NumPy", icon: "🔢" },
        { name: "Matplotlib", icon: "📊" },
        { name: "Seaborn", icon: "🎨" },
      ],
      color: "bg-blue-500",
      subSkillColor: "bg-blue-200",
    },
    {
      name: "Deep Learning",
      description:
        "Designing and implementing neural network architectures for complex problem solving.",
      icon: "🧠",
      subSkills: [
        { name: "Keras", icon: "🔧" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Tensorflow", icon: "💡" },
        { name: "Computer Vision", icon: "👁️" },
        { name: "NLP", icon: "💬" },
        { name: "Reinforcement Learning", icon: "🕹️" },
      ],
      color: "bg-red-500",
      subSkillColor: "bg-red-200",
    },
    {
      name: "Software Development",
      description:
        "Crafting scalable and efficient software solutions with a focus on modern development frameworks.",
      icon: "💻",
      subSkills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "📜" },
        { name: "React", icon: "⚛️" },
        { name: "Three.js", icon: "🌿" },
        { name: "TailwindCSS", icon: "🌬️" },
        { name: "Git", icon: "🌐" },
        { name: "Agile", icon: "🏃‍♂️" },
      ],
      color: "bg-green-500",
      subSkillColor: "bg-green-200",
    },
    {
      name: "Engineering Research",
      description:
        "Applying rigorous methodologies to innovate in AI and engineering.",
      icon: "🔍",
      subSkills: [
        { name: "MATLAB", icon: "📊" },
        { name: "Simulink", icon: "⚙️" },
        { name: "Validation", icon: "✅" },
        { name: "Peer Review", icon: "👀" },
        { name: "Stakeholder Engagement", icon: "🤝" },
        { name: "Lab-Based Experimentation", icon: "🔬" },
      ],
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

  const baseEffect = {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="snap-start min-h-screen flex flex-col items-center justify-center bg-white text-gray-600 body-font"
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
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I can leveraging a blend of technical skills and creativity to solve
            complex challenges.
          </p>
        </div>
        <motion.div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <motion.div
              className="p-4 md:w-1/2 lg:w-1/4"
              key={index}
              variants={subSkillVariants}
              initial={baseEffect}
              animate={baseEffect}
              whileHover={hoverEffect}
            >
              <div className="flex flex-col rounded-lg h-full bg-gray-100 p-8 shadow">
                <div className="flex items-center mb-3">
                  <div
                    className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full ${skill.color} text-white`}
                  >
                    {skill.icon}
                  </div>
                  <h2 className="text-lg title-font font-medium">
                    {skill.name}
                  </h2>
                </div>
                <p className="leading-relaxed mb-4">{skill.description}</p>
                <div className="flex flex-wrap">
                  {skill.subSkills.map((subSkill, subIndex) => (
                    <motion.span
                      key={subIndex}
                      className={`text-sm ${skill.subSkillColor} m-1 p-2 rounded-lg flex items-center`}
                      variants={subSkillVariants}
                    >
                      <span className="mr-1">{subSkill.icon}</span>
                      {subSkill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-8">
          <motion.a
            href="#experience"
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            View my Experience
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
