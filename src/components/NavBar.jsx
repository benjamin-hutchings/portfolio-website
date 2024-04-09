import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 h-16 flex-none">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <a href="/" className="hover:text-gray-300">My Portfolio</a>
        </div>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBar;
