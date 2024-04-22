import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const slideUpVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 50 },
  };

  const fadeInVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, delay: 0.2 },
    },
    hidden: { opacity: 0, scale: 1 },
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

  const featuredProjects = [
    {
      category: "Web Development",
      title: "Project 1",
      description: "A brief description of the project...",
      imageUrl: "/img/github-logo.png",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["React", "API"],
    },
    {
      category: "Machine Learning",
      title: "Project 2",
      description: "A detailed project on predictive analysis...",
      imageUrl: "/img/github-logo.png",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "TensorFlow"],
    },
    {
      category: "Mobile App",
      title: "Project 3",
      description: "An innovative mobile application...",
      imageUrl: "/img/github-logo.png",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Flutter", "Firebase"],
    },
  ];
  const additionalProjects = [
    {
      title: "Project 4",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["CSS", "HTML"],
    },
    {
      title: "Project 5",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
    {
      title: "Project 6",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
    {
      title: "Project 7",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
    {
      title: "Project 8",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
    {
      title: "Project 9",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
    {
      title: "Project 10",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
    {
      title: "Project 11",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
    {
      title: "Project 12",
      category: "Category",
      description: "Project description...",
      githubUrl: "https://elegant-pasca-f13e12.netlify.app/",
      liveDemoUrl: "https://elegant-pasca-f13e12.netlify.app/",
      hashtags: ["Python", "Data"],
    },
  ];
  return (
    <section
      id="projects"
      className="snap-start flex flex-col items-center justify-center text-gray-600 body-font min-h-screen"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some side-projects I've worked on as part of my personal
            portfolio...
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariant}
          className="flex flex-wrap -m-4 items-center"
        >
          {featuredProjects.map((project, index) => (
            <div key={index} className="p-4 flex-col mx-auto sm:w-full md:w-1/2 lg:w-1/3 ">
              <motion.div
                whileHover={hoverEffect}
                className="flex flex-col justify-between bg-gray-100 bg-opacity-75 p-8 rounded-lg overflow-hidden text-center relative min-h-[450px]"
              >
                <img
                  src={project.imageUrl}
                  alt="Project Thumbnail"
                  className="w-1/2 h-1/2 mx-auto object-cover object-center rounded-lg mb-4 sm:w-1/3"
                />
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                  {project.category}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {project.title}
                </h1>
                <p className="flex-grow">{project.description}</p>
                <div className="flex justify-center gap-4 mb-3">
                  <a
                    href={project.githubUrl}
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemoUrl}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
                <p className="text-xs font-semibold text-indigo-500">
                  #{project.hashtags.join(" #")}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
        <div className="flex overflow-x-scroll py-10 gap-4">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] p-4 bg-gray-100 rounded-lg"
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
              <div className="flex justify-center gap-4 mb-3">
                <a
                  href={project.githubUrl}
                  className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemoUrl}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-colors"
                >
                  Live Demo
                </a>
              </div>
              <p className="text-xs font-semibold text-indigo-500 text-right">
                #{project.hashtags.join(" #")}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-10 mb-20">
          <motion.a
            href="#contact"
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
