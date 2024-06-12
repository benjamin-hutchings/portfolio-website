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

  const getColor = (index) => {
    const colors = [
      "#d9e8f5", // Soft Blue
      "#d5e8d4", // Muted Green
      "#fff9db", // Pale Yellow
      "#f5e8d9", // Warm Beige
    ];
    return colors[index % colors.length];
  };

  const getColorAdditional = (index) => {
    const colors = [
      "#fad4d4", // Light Coral
      "#e8d9f5", // Lavender
      "#d9f5f3", // Light Cyan
      "#fffacd", // Lemon Chiffon
      "#ffe4e1", // Misty Rose
    ];
    return colors[index % colors.length];
  };

  const featuredProjects = [
    {
      category: "Deep Learning Frameworks",
      title: "Pytorch vs Tensorflow vs Keras",
      description: "End-to-end deployment of the same feedforward network trained to classify handwriting samples in the MINST dataset built using Pytorch, Keras & Tensorflow with analysis in an interactive Streamlit App.",
      imageUrl: "img/project_1_img.webp",
      githubUrl: "https://github.com/benjamin-hutchings/comparrison-pytorch-tensorflow-keras",
      liveDemoUrl: "https://comparrison-pytorch-tensorflow-keras-kfvns3i3ex4rdxbtcjpwk4.streamlit.app",
      hashtags: ["PyTorch", "Tensorflow", "Keras", "Streamlit"],
    },
    {
      category: "Deep Learning Mathematics",
      title: "Building a Neural Network with NumPy",
      description: "No PyTorch or TensorFlow - let's build a deep neural network, and calculate training metrics including accuracy, loss and weight & bias updates using just Mathematics!",
      imageUrl: "img/project_2_img.webp",
      githubUrl: "https://github.com/benjamin-hutchings/Neural-Net-Using-NumPy",
      liveDemoUrl: "https://colab.research.google.com/drive/1Biiwy6HHk1jdfxcWuIEVM3tfTHmqJCur?usp=sharing",
      hashtags: ["Python", "Numpy", "Jupyter"],
    },
    {
      category: "Full Stack Application",
      title: "ML Revision Card Application",
      description: "A full-stack ML revision card application with CRUD functionality. React and Tailwind frontend, supported by a custom Nodejs API and SQLite3 database.",
      imageUrl: "img/project_3_img.webp",
      githubUrl: "https://github.com/benjamin-hutchings/ml-revision-app-fullstack",
      liveDemoUrl: "https://github.com/benjamin-hutchings/ml-revision-app-fullstack",
      hashtags: ["React", "TailwindCSS", "Nodejs", "SQLite3"],
    },
  ];
  const additionalProjects = [
    {
      title: "LeetCode Submissions",
      category: "Algorithms and Data Structures",
      description: "A collection of my solutions for algorithm and data structure problems on LeetCode implemented in Python.",
      imageUrl: "img/project_img_leetcode.webp",
      githubUrl: "https://github.com/benjamin-hutchings/LeetCode-Submissions",
      liveDemoUrl: "https://github.com/benjamin-hutchings/LeetCode-Submissions",
      hashtags: ["Python", "LeetCode", "Algorithms"],
    },
    {
      title: "This Website!",
      category: "Portfolio Webpage",
      description: "A fully responsive and modern portfolio website built with React, TailwindCSS and ThreeJS.",
      imageUrl: "img/project_img_website.webp",
      githubUrl: "https://github.com/benjamin-hutchings/portfolio-website",
      liveDemoUrl: "http://localhost:3000/#projects",
      hashtags: ["React", "TailwindCSS", "JavaScript", "ThreeJS"],
    },
    {
      title: "Play Hexapawn!",
      category: "Deep Reinforcement Learning Agent",
      description: "End-to-end training and deployment of a DQN Agent. Backend in Python, UI in JavaScript, connected via Flask, deployed on the Cloud via Docker, and hosted using Heroku.",
      imageUrl: "img/project_img_hexapawn.webp",
      githubUrl: "https://github.com/benjamin-hutchings/DQN-RLAgent-Hexapawn",
      liveDemoUrl: "https://play-hexapawn-app-d82c6332d05f.herokuapp.com/",
      hashtags: ["TensorFlow", "Flask", "Docker"],
    },
    {
      title: "Project 7",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-7",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-7",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 8",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-8",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-8",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 9",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-9",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-9",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 10",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-10",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-10",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 11",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-11",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-11",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 12",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-12",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-12",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 13",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-13",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-13",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 14",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-14",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-14",
      hashtags: ["Hashtag1", "Hashtag2"],
    },
    {
      title: "Project 15",
      category: "Category",
      description: "Project description...",
      imageUrl: "img/github-logo.png",
      githubUrl: "https://github.com/benjamin-hutchings/project-15",
      liveDemoUrl: "https://github.com/benjamin-hutchings/project-15",
      hashtags: ["Hashtag1", "Hashtag2"],
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
            Here are some side-projects I've put together as part of my personal
            portfolio.
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
            <div key={index} className="p-4 flex-col mx-auto sm:w-full md:w-1/2 lg:w-1/3">
              <motion.div
                whileHover={hoverEffect}
                className="flex flex-col justify-between p-8 rounded-lg overflow-hidden text-center relative min-h-[500px]"
                style={{ backgroundColor: getColor(index) }}
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
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveDemoUrl}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
                <p className="text-xs font-semibold text-indigo-500">
                  {project.hashtags.map((tag, i) => (
                    <span key={i}>#{tag} </span>
                  ))}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
        <div className="flex overflow-x-scroll py-10 gap-4">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] p-4 flex flex-col justify-between rounded-lg"
              initial="hidden"
              animate={controls}
              variants={fadeInVariant}
              whileHover={hoverEffect}
              style={{ backgroundColor: getColorAdditional(index) }}
            >
              <img
                src={project.imageUrl}
                alt="Project Thumbnail"
                className="w-full h-32 object-cover object-center rounded-lg mb-4"
              />
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {project.category}
                  </h2>
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-2">
                    {project.title}
                  </h1>
                  <p className="mb-4">{project.description}</p>
                </div>
                <div>
                  <div className="flex justify-center gap-4 mb-3">
                    <a
                      href={project.githubUrl}
                      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition-colors"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-indigo-500 text-right">
                    {project.hashtags.map((tag, i) => (
                      <span key={i}>#{tag} </span>
                    ))}
                  </p>
                </div>
              </div>
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
