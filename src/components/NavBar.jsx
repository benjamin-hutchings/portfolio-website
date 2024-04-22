import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white p-4 h-16 flex items-center justify-between z-50 fixed top-0 w-full shadow-md">
      <div className="text-lg font-semibold">
        <a href="/" className="hover:text-gray-300">
          Benjamin Hutchings | Portfolio
        </a>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white inline-flex p-3 hover:bg-gray-700 rounded lg:hidden ml-auto hover:text-white outline-none top-0 z-50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu Items */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-full right-0 bg-gray-800 mt-px w-auto z-20`}
      >
        <ul className="space-y-1">
          <li>
            <a href="#about" className="block px-3 py-2 hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="block px-3 py-2 hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="block px-3 py-2 hover:text-gray-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="block px-3 py-2 hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block px-3 py-2 hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* For larger screens, keep the existing layout */}
      <div className="hidden flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
        <ul className="lg:flex-grow lg:flex lg:justify-end mt-2 lg:mt-0 space-x-4">
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
