import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience" className="mt-32">
      <h5 className="text-center text-gray-400 mb-4">What Skills I Have</h5>
      <h2 className="text-center text-[#90be6d] text-4xl mb-12 font-medium">
        My Experience
      </h2>

      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Development */}
          <div className="flex flex-col">
            <div className="flex-1 bg-gray-800 border border-transparent rounded-3xl p-6 lg:p-8 hover:bg-transparent hover:border-green-300 transition-all duration-300">
              <h3 className="text-center text-[#90be6d] text-xl mb-6 font-medium">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">HTML</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">CSS</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">JavaScript</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Bootstrap</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Tailwind CSS</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">React</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="flex flex-col">
            <div className="flex-1 bg-gray-800 border border-transparent rounded-3xl p-6 lg:p-8 hover:bg-transparent hover:border-green-300 transition-all duration-300">
              <h3 className="text-center text-[#90be6d] text-xl mb-6 font-medium">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">SpringBoot</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>
                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Node JS</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">MongoDB</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">MySQL</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Python</h4>
                    <small className="text-gray-400">Intermediate</small>
                  </div>
                </article>

                <article className="flex gap-4 mb-4">
                  <BsPatchCheckFill className="text-[#90be6d] mt-1 text-lg flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium">Express JS</h4>
                    <small className="text-gray-400">Experienced</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
