import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

export const headerSocial = () => {
  return (
    <div className='header_social'>
        <a class="footer-link" href="https://www.linkedin.com/in/sahspeaks/" target="_ "><AiFillLinkedin/></a>
        <a class="footer-link" href="https://github.com/sahspeaks" target="_ "><AiFillGithub/></a>
        <a class="footer-link" href="https://twitter.com/Sah_speaks" target="_ "><AiFillTwitterCircle/></a>
        <a class="footer-link" href="https://www.instagram.com/sah_speaks/" target="_ "><AiFillInstagram/></a>
    </div>
  )
}
