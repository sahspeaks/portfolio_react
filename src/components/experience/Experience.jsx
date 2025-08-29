import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id="experience" className="mt-32">
      <h5 className="text-center text-gray-400 mb-4">What Skills I Have</h5>
      <h2 className="text-center text-green-400 text-4xl mb-12 font-medium">My Experience</h2>

      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend Development */}
          <div className="bg-gray-800 p-10 rounded-3xl border border-transparent transition-all duration-300 hover:bg-transparent hover:border-green-300">
            <h3 className="text-green-400 text-center mb-8 text-lg font-medium">Frontend Development</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">HTML</h4>
                  <small className="text-gray-400">Experienced</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">CSS</h4>
                  <small className="text-gray-400">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">JavaScript</h4>
                  <small className="text-gray-400">Experienced</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">Bootstrap</h4>
                  <small className="text-gray-400">Experienced</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">Tailwind</h4>
                  <small className="text-gray-400">Experienced</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">React</h4>
                  <small className="text-gray-400">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-gray-800 p-10 rounded-3xl border border-transparent transition-all duration-300 hover:bg-transparent hover:border-green-300">
            <h3 className="text-green-400 text-center mb-8 text-lg font-medium">Backend Development</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">Node JS</h4>
                  <small className="text-gray-400">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">MongoDB</h4>
                  <small className="text-gray-400">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">PHP</h4>
                  <small className="text-gray-400">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">MySQL</h4>
                  <small className="text-gray-400">Basic</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">Python</h4>
                  <small className="text-gray-400">Intermediate</small>
                </div>
              </article>

              <article className="flex gap-4">
                <BsPatchCheckFill className="text-green-400 mt-1.5" />
                <div>
                  <h4 className="text-white">Express JS</h4>
                  <small className="text-gray-400">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};