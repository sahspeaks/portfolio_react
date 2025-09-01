import React from "react";
import { BiCheck } from "react-icons/bi";

export const Service = () => {
  return (
    <section id="service" className="mt-32">
      <h2 className="text-center text-[#90be6d] text-4xl mb-12 font-medium">
        My Expertise
      </h2>

      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 md:gap-8 sm:gap-6">
          {/* Web Design */}
          <article className="bg-gray-800 rounded-b-3xl border border-green-400 h-fit transition-all duration-300 hover:bg-transparent hover:border-green-300 cursor-default">
            <div className="bg-[#90be6d] py-8 rounded-b-3xl shadow-2xl">
              <h3 className="text-gray-900 text-base text-center font-medium">
                Web Design
              </h3>
            </div>

            <ul className="p-8">
              <li className="flex gap-4 mb-3">
                <BiCheck className="text-[#90be6d] mt-0.5" />
                <p className="text-sm">
                  <b>Responsive Websites:</b> Crafting websites that work
                  seamlessly on all devices.
                </p>
              </li>
              <li className="flex gap-4 mb-3">
                <BiCheck className="text-[#90be6d] mt-0.5" />
                <p className="text-sm">
                  <b>Best Practices:</b> Adhering to industry standards and
                  modern coding practices.
                </p>
              </li>
              <li className="flex gap-4 mb-3">
                <BiCheck className="text-[#90be6d] mt-0.5" />
                <p className="text-sm">
                  <b>Modern Frameworks:</b> Utilizing frameworks like Bootstrap
                  and Tailwind CSS for sleek designs.
                </p>
              </li>
            </ul>
          </article>

          {/* Web Development */}
          <article className="bg-gray-800 rounded-b-3xl border border-green-400 h-fit transition-all duration-300 hover:bg-transparent hover:border-green-300 cursor-default">
            <div className="bg-[#90be6d] py-8 rounded-b-3xl shadow-2xl">
              <h3 className="text-gray-900 text-base text-center font-medium">
                Web Development
              </h3>
            </div>

            <ul className="p-8">
              <li className="flex gap-4 mb-3">
                <BiCheck className="text-[#90be6d] mt-0.5" />
                <p className="text-sm">
                  <b>Optimal Code:</b> Following industry best practices and
                  efficient code architecture.
                </p>
              </li>
              <li className="flex gap-4 mb-3">
                <BiCheck className="text-[#90be6d] mt-0.5" />
                <p className="text-sm">
                  <b>Powerful Backend:</b> Leveraging robust backend tools and
                  frameworks.
                </p>
              </li>
              <li className="flex gap-4 mb-3">
                <BiCheck className="text-[#90be6d] mt-0.5" />
                <p className="text-sm">
                  <b>High Performance:</b> Delivering efficient, responsive, and
                  high-performing websites.
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
