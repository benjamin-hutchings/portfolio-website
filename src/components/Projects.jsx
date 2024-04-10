import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const slideUpVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  const fadeInVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, delay: 0.5 },
    },
    hidden: { opacity: 0, scale: 0.95 },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  };

  const additionalProjects = [
    {
      title: "Project 4",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 5",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 6",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 7",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 8",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 9",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 10",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 11",
      category: "Category",
      description: "Project description...",
    },
    {
      title: "Project 12",
      category: "Category",
      description: "Project description...",
    },
  ];

  return (
    <section
      id="projects"
      className="snap-start flex items-center justify-center text-gray-600 body-font min-h-screen"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Some projects I've worked on.
          </p>
        </div>

        {/* Main featured projects */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariant}
          className="flex flex-wrap -m-4 justify-center" // Added 'justify-center' to center the items
        >
          {/* You can duplicate this block for each featured project you have */}
          <div className="p-4 lg:w-1/3">
            <motion.div
              whileHover={hoverEffect}
              div
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Project 1
              </h1>
              <p className="leading-relaxed mb-3">
                A brief description of the project...
              </p>
            </motion.div>
          </div>
          <div className="p-4 lg:w-1/3">
            <motion.div
              whileHover={hoverEffect}
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Project 2
              </h1>
              <p className="leading-relaxed mb-3">
                A brief description of the project...
              </p>
            </motion.div>
          </div>
          <div className="p-4 lg:w-1/3">
            <motion.div
              whileHover={hoverEffect}
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Project 3
              </h1>
              <p className="leading-relaxed mb-3">
                A brief description of the project...
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scrollable section for additional projects */}
        <div className="flex overflow-x-scroll py-10">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] p-4 lg:mr-4 bg-gray-100 rounded-lg"
              initial="hidden"
              animate={controls}
              variants={fadeInVariant}
              whileHover={hoverEffect}
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                {project.category}
              </h2>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
