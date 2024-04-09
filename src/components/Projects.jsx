import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="snap-start h-screen flex items-center justify-center white text-gray-600 body-font min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Projects</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Some projects I've worked on.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Project 1 */}
          <div className="p-4 lg:w-1/2">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Project 1</h1>
              <p className="leading-relaxed mb-3">A brief description of the project...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
