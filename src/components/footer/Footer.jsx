import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#90be6d] text-gray-900 mt-32 pt-12 text-center text-sm"
    >
      <a
        href="#header"
        className="text-2xl text-gray-600 font-semibold mb-8 inline-block hover:text-gray-700 transition-colors duration-300"
      >
        ABHISHEK
      </a>

      <ul className="flex flex-wrap justify-center gap-8 mb-16 sm:gap-6">
        <li>
          <a
            href="#header"
            className="text-gray-600 hover:text-gray-700 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-700 transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-gray-700 transition-colors duration-300 text-gray-600"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#service"
            className="hover:text-gray-700 transition-colors duration-300 text-gray-600"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-gray-700 transition-colors duration-300 text-gray-600"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-gray-700 transition-colors duration-300 text-gray-600"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-16">
        <a
          href="https://www.linkedin.com/in/sahspeaks/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/sahspeaks"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          <BsGithub />
        </a>
        <a
          href="https://twitter.com/Sah_speaks"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.instagram.com/sah_speaks/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          <BsInstagram />
        </a>
      </div>

      <div className="w-full h-px bg-gray-700 mb-16"></div>

      <div className="pb-16">
        <small className="text-gray-700">
          &copy; ABHISHEK KUMAR. All rights reserved.
        </small>
      </div>
    </footer>
  );
};
