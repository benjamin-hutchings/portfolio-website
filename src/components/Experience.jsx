import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as FontAwesomeIcons from "react-icons/fa";

const experiences = [
  {
    id: 1,
    title: "Machine Learning Engineer",
    company: "Defence Science & Technology Laboratory (DSTL)",
    duration: "Oct 2022 - Present",
    description:
      "Experienced in taking AI algorithms from concept to deployment on embedded systems, developing end-to-end tools powered by novel AI technology, and supporting cross-discipline teams in applied data science sprints. Member of the Institute of Engineering and Technology (MIET) and collective lead for the organisation's AI Community of Practice (CoP).",
    side: "right",
    icon: "FaRobot",
  },
  {
    id: 2,
    title: "Engineering Summer Internship",
    company: "Defence Science & Technology Laboratory (DSTL)",
    duration: "June - Aug 2018, 2019, 2020",
    description:
      "12 week engineering research summer placements undertaken as part of sponsorship by DSTL through the Defence Technical Undergraduate Scheme (DTUS). Focused on communications and wireless technologies, provided initial exposure to AI.",
    side: "left",
    icon: "FaLaptopCode",
  },
  {
    id: 3,
    title: "M.Eng. Mechanical Engineering",
    company: "University of Birmingham, UK",
    duration: "Sept 2017 - Jul 2021",
    description:
      "Graduated with a 1st Class Undergraduate Masters with Honours in Mechanical Engineering (MEng). Received an academic scholarship from the School of Engineering and sponsorship by the prestigious Defence Technical Undergraduate Scheme (DTUS). ",
    side: "right",
    icon: "FaGraduationCap",
  },
  {
    id: 4,
    title: "A-Levels",
    company: "Welbeck Defence Sixth Form College (DSFC)",
    duration: "Sept 2017 - Aug 2019",
    description:
      "A-Levels: A*A*A (Mathematics, Physics & Further Mathematics), A (AS - Chemistry) & EPQ. 1st XV Rugby Union, 1st VIII Rowing, 1st XI Cricket. Attendance was sponsored by the Ministry of Defence's (MOD) Defence Technical Officer and Engineer Entry Scheme (DTOEES).",
    side: "left",
    icon: "FaSchool",
  },
];

const Experience = () => {
  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    visible: (side) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    }),
    hidden: (side) => ({
      x: side === "left" ? -100 : 100,
      opacity: 0,
    }),
  };

  const [showTravel, setShowTravel] = useState(false);

  const renderIcon = (iconName) => {
    const IconComponent = FontAwesomeIcons[iconName];
    if (IconComponent) {
      // Check if the icon component exists
      return <IconComponent className="icon-class" />;
    }
    return null; // Return null if no icon found
  };

  // Use the useInView hook to monitor the visibility of the ref element
  const [ref, inView] = useInView({
    triggerOnce: false, // This makes the animation re-trigger every time
    threshold: 0.1, // Adjust this value based on when you want the animation to start
  });

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
      id="experience"
      className="text-gray-600 body-font min-h-screen bg-slate-50"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Experience
            </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-right">
                Chronological timeline of my professional journey and
                significant achievements.
              </p>
          </div>
          <motion.div
            ref={ref} // Attach the ref to the motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Use the inView state to toggle the animation
            variants={containerVariants}
            className="flex flex-col items-center justify-center"
          >
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                custom={experience.side}
                variants={itemVariants}
                className={`flex w-full md:w-2/3 my-4 ${
                  experience.side === "left" ? "self-start" : "self-end"
                }`}
              >
                <div
                  className={`flex flex-col ${
                    experience.side === "right" ? "items-start" : "items-end"
                  }`}
                >
                  <div className="flex items-center">
                    {renderIcon(experience.icon)} {/* Render the icon */}
                    <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest ml-2">
                      {experience.duration}
                    </span>
                  </div>
                  <h2 className="text-gray-900 font-medium title-font my-1">
                    {experience.title} @ {experience.company}
                  </h2>
                  <p className="leading-relaxed">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col items-center sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300 rounded text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg max-w-64"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            Explore projects
          </motion.a>
          <motion.a
            href="/cv/example_cv.pdf"
            download="Benjamin_Hutchings_CV.pdf"
            className="inline-flex items-center justify-center text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg max-w-64"
            aria-label="Download CV"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            Download CV
          </motion.a>
          <motion.button
            onMouseEnter={() => setShowTravel(true)}
            onMouseLeave={() => setShowTravel(false)}
            className="text-indigo-500 bg-transparent border border-solid border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all max-w-64"
            type="button"
          >
            Aug 2021 - Sept 2022
          </motion.button>
          {showTravel && (
            <div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="travel-info absolute bg-white shadow-lg p-3 mt-2 rounded z-50 max-w-96"
            >
              <p className="text-gray-800 text-sm ">
                After graduating, I embraced the opportunity to broaden my
                horizons through a year of global travel and diverse work
                experiences. I volunteered on a sheep farm in Iceland, was front
                of house hospitality services in the French Alps, explored the
                Philippines through hitchhiking, and "brought the vibe" as a
                surf camp host in Bali. These experiences enhanced my
                adaptability, cultural awareness, and ability to thrive in
                varied and challenging environments, skills I am eager to
                leverage in my professional career.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
