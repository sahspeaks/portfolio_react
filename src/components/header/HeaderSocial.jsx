import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

export const HeaderSocial = () => {
  return (
      <div className="flex flex-col items-center gap-3 absolute left-0 bottom-12">
            <a 
                    href="https://www.linkedin.com/in/sahspeaks/" 
                            target="_blank" 
                                    rel="noopener noreferrer"
                                            className="text-green-400 hover:text-white transition-all duration-300"
                                                  >
                                                          <AiFillLinkedin />
                                                                </a>
                                                                      <a 
                                                                              href="https://github.com/sahspeaks" 
                                                                                      target="_blank" 
                                                                                              rel="noopener noreferrer"
                                                                                                      className="text-green-400 hover:text-white transition-all duration-300"
                                                                                                            >
                                                                                                                    <AiFillGithub />
                                                                                                                          </a>
                                                                                                                                <a 
                                                                                                                                        href="https://twitter.com/Sah_speaks" 
                                                                                                                                                target="_blank" 
                                                                                                                                                        rel="noopener noreferrer"
                                                                                                                                                                className="text-green-400 hover:text-white transition-all duration-300"
                                                                                                                                                                      >
                                                                                                                                                                              <AiFillTwitterCircle />
                                                                                                                                                                                    </a>
                                                                                                                                                                                          <a 
                                                                                                                                                                                                  href="https://www.instagram.com/sah_speaks/" 
                                                                                                                                                                                                          target="_blank" 
                                                                                                                                                                                                                  rel="noopener noreferrer"
                                                                                                                                                                                                                          className="text-green-400 hover:text-white transition-all duration-300"
                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                        <AiFillInstagram />
                                                                                                                                                                                                                                              </a>
                                                                                                                                                                                                                                                    <div className="w-px h-8 bg-green-400"></div>
                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                          };
                                                                                                                                                                                                                                                          