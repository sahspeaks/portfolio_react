import React from "react";
import { CTA } from "./CTA";
import ME from "../../assets/Me2.png";
import ME2 from "../../assets/me3.png";
import { HeaderSocial } from "./HeaderSocial";

export const Header = () => {
  return (
    <header
      id="header"
      className="h-screen pt-28 overflow-hidden lg:h-[68vh] sm:h-screen"
    >
      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12 h-full relative">
        {/* Mobile/Tablet Layout - Centered */}
        <div className="lg:hidden text-center h-full relative">
          <h5 className="text-gray-400">Hello I'm</h5>
          <h1 className="text-5xl font-medium">Abhishek Kumar</h1>
          <h5 className="text-gray-400">Fullstack Developer</h5>

          <CTA />
          <HeaderSocial />

          <div className="bg-gradient-to-b from-[#90be6d] to-transparent w-80 sm:w-96 md:w-[28rem] h-[30rem] md:h-[40rem] absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden py-20 px-6">
            <img src={ME} alt="" className="block w-full h-full object-cover" />
          </div>
        </div>

        {/* Desktop Layout - Split with circular image */}
        <div className="hidden lg:flex items-center justify-between h-full ">
          {/* Left side - Circular Image */}
          <div className="flex-1 flex justify-center ">
            <div className="w-96 h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full overflow-hidden">
              <img
                src={ME2}
                alt="Abhishek Kumar"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="flex-1 text-left pl-12">
            <h5 className="text-gray-400 text-lg mb-2">Hello I'm</h5>
            <h1 className="text-6xl xl:text-7xl 2xl:text-8xl font-medium mb-4">
              Abhishek Kumar
            </h1>
            <h5 className="text-gray-400 text-xl mb-8">Fullstack Developer</h5>

            <div className="mb-8">
              <CTA />
            </div>
            <HeaderSocial />
          </div>
        </div>

        <a
          href="#footer"
          className="absolute -right-9 bottom-20 transform rotate-90 font-light text-sm sm:hidden lg:block"
        >
          scroll down
        </a>
      </div>
    </header>
  );
};
