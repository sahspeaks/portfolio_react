import React from "react";
import CV from "../../assets/CV.pdf";

export const CTA = () => {
  return (
    <div className="flex gap-3 justify-center lg:justify-start">
      <a href={CV} download={true} className="btn btn-lg btn-primary">
        Download CV
      </a>
      <a href="mailto:sahspeaks@gmail.com" className="btn btn-lg">
        Let's Talk
      </a>
    </div>
  );
};
