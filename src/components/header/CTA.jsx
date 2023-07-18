import React from 'react'
import CV from '../../assets/CV.pdf'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
export const CTA = () => {
  return (
    <> 
    <div className='cta'>
        <a href={CV} download={true} className='btn'>Download CV</a>
        <a href="mailto:sahspeaks@gmail.com" className='btn btn-primary'> Let's Talk</a>
    </div>
    <div className='header_social'>
        <a class="footer-link" href="https://www.linkedin.com/in/sahspeaks/" target="_ "><BsLinkedin/></a>
        <a class="footer-link" href="https://github.com/sahspeaks" target="_ "><BsGithub/></a>
        <a class="footer-link" href="https://www.instagram.com/sah_speaks/" target="_ "><BsInstagram/></a>
    </div>
    </>

  )
}
