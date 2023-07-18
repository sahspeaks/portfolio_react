import React from 'react'
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer id='footer'>

      <a href="#" className='footer_logo'>Abhishek</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Works</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a class="footer-link" href="https://www.linkedin.com/in/sahspeaks/" target="_ "><FaLinkedin /></a>
        <a class="footer-link" href="https://github.com/sahspeaks" target="_ "><FaGithub /></a>
        <a class="footer-link" href="https://twitter.com/Sah_speaks" target="_ "><FaTwitter /></a>
        <a class="footer-link" href="https://www.instagram.com/sah_speaks/" target="_ "><FaInstagram /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Abhishek Kumar. All right reserved.</small>
      </div>
    </footer>
  )
}
