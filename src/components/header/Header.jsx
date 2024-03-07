import React from "react";
import "./header.css";
import { CTA } from "./CTA";
import ME from "../../assets/Me2.png";
import { headerSocial } from "./headerSocial";

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Abhishek Kumar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <headerSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#footer" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};
