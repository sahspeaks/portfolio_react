import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export const Contact = () => {
  return (
    <section id="contact" className="mt-32">
      <h5 className="text-center text-gray-400 mb-4">Get In Touch</h5>
      <h2 className="text-center text-[#90be6d] text-4xl mb-12 font-medium">
        Contact Me
      </h2>

      <div className="container mx-auto w-3/4 lg:w-3/4 md:w-5/6 sm:w-11/12">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <article className="bg-gray-800 border border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-green-300 transition-all duration-300">
              <HiOutlineMail className="text-[#90be6d] text-2xl mb-4 mx-auto" />
              <h4 className="text-lg mb-2">Email</h4>
              <h5 className="text-base mb-4 text-gray-400">
                sahspeaks@gmail.com
              </h5>
              <a
                href="mailto:sahspeaks@gmail.com"
                className="text-[#90be6d] hover:text-white transition-all duration-300"
              >
                Send Mail
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
