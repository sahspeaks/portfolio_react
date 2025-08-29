import React from "react";
import { CTA } from "./CTA";
import ME from "../../assets/Me2.png";
import { HeaderSocial } from "./HeaderSocial";

export const Header = () => {
      return (
            <header className="h-screen pt-28 overflow-hidden lg:h-[68vh] sm:h-screen">
                  <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12 text-center h-full relative">
                          <h5 className="text-gray-400">Hello I'm</h5>
                                  <h1 className="text-5xl font-medium">Abhishek Kumar</h1>
                                          <h5 className="text-gray-400">Fullstack Developer</h5>
                                                  
                                                          <CTA />
                                                                  <HeaderSocial />
                                                                          
                                                                                  <div className="bg-gradient-to-b from-green-400 to-transparent w-80 h-[30rem] absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-t-[12rem] overflow-hidden py-20 px-6 sm:hidden">
                                                                                            <img src={ME} alt="" className="block w-full object-cover" />
                                                                                                    </div>
                                                                                                            
                                                                                                                    <a 
                                                                                                                              href="#footer" 
                                                                                                                                        className="absolute -right-9 bottom-20 transform rotate-90 font-light text-sm sm:hidden"
                                                                                                                                                >
                                                                                                                                                          scroll down
                                                                                                                                                                  </a>
                                                                                                                                                                        </div>
                                                                                                                                                                            </header>
      );
};
      )
}