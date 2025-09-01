import React from "react";
import CV from "../../assets/CV.pdf";

export const CTA = () => {
  return (
    <>
      <div className="mt-10 flex gap-5 justify-center sm:justify-start">
        <a
          href={CV}
          download={true}
          className="w-max inline-block text-[#90be6d] py-3 px-5 rounded-lg cursor-pointer border border-green-400 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent"
        >
          Download CV
        </a>
        <a
          href="mailto:sahspeaks@gmail.com"
          className="w-max inline-block bg-[#90be6d] text-gray-900 py-3 px-5 rounded-lg cursor-pointer border border-green-400 transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-transparent"
        >
          Let's Talk
        </a>
      </div>
    </>
  );
};
