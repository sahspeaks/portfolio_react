import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Skills</a>
        </li>
        <li>
          <a href="#service">Expertise</a>
        </li>
        <li>
          <a href="#portfolio">Works</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          class="footer-link"
          href="https://www.linkedin.com/in/sahspeaks/"
          target="_ "
        >
          <FaLinkedin />
        </a>
        <a class="footer-link" href="https://github.com/sahspeaks" target="_ ">
          <FaGithub />
        </a>
        <a
          class="footer-link"
          href="https://twitter.com/Sah_speaks"
          target="_ "
        >
          <FaTwitter />
        </a>
        <a
          class="footer-link"
          href="https://www.instagram.com/sah_speaks/"
          target="_ "
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; {currentYear} Abhishek Kumar. All right reserved.</small>
      </div>
    </footer>
  );
};
