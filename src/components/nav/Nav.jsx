import React, { useState } from 'react';
import { BiHomeAlt2, BiUser, BiBookAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { GrReactjs } from 'react-icons/gr';

export const Nav = () => {
  const [active, setActive] = useState('#');

  return (
    <nav className="bg-white bg-opacity-10 w-max block py-3 px-7 z-10 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-3 rounded-full backdrop-blur-md">
      <a 
        href="#" 
        onClick={() => setActive('#')} 
        className={`bg-transparent p-4 rounded-full flex text-gray-400 text-lg hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300 ${active === '#' ? 'bg-gray-900 text-white' : ''}`}
      >
        <BiHomeAlt2 />
      </a>
      <a 
        href="#about" 
        onClick={() => setActive('#about')} 
        className={`bg-transparent p-4 rounded-full flex text-gray-400 text-lg hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300 ${active === '#about' ? 'bg-gray-900 text-white' : ''}`}
      >
        <BiUser />
      </a>
      <a 
        href="#experience" 
        onClick={() => setActive('#experience')} 
        className={`bg-transparent p-4 rounded-full flex text-gray-400 text-lg hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300 ${active === '#experience' ? 'bg-gray-900 text-white' : ''}`}
      >
        <BiBookAlt />
      </a>
      <a 
        href="#portfolio" 
        onClick={() => setActive('#portfolio')} 
        className={`bg-transparent p-4 rounded-full flex text-gray-400 text-lg hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300 ${active === '#portfolio' ? 'bg-gray-900 text-white' : ''}`}
      >
        <GrReactjs />
      </a>
      <a 
        href="#footer" 
        onClick={() => setActive('#contact')} 
        className={`bg-transparent p-4 rounded-full flex text-gray-400 text-lg hover:bg-black hover:bg-opacity-60 hover:text-white transition-all duration-300 ${active === '#contact' ? 'bg-gray-900 text-white' : ''}`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
