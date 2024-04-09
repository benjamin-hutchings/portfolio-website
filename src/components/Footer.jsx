import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* Optional: Include a logo or brand name */}
          <span className="ml-3 text-xl">Benjamin Hutchings</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Your Brand —
          <a href="#contact" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">ADD SOCIALS HERE</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="#contact" className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              {/* Facebook icon SVG */}
            </svg>
          </a>
          <a href="#contactm" className="ml-3 text-gray-500">
            {/* Twitter icon SVG */}
          </a>
          <a href="#contact" className="ml-3 text-gray-500">
            {/* Instagram icon SVG */}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;