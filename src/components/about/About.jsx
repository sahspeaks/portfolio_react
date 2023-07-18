import './about.css';
import ME from '../../assets/user.jpg'
import React from 'react'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc';

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="my-image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>6+ Months </small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>I am a Bachelor student at the SV College of Engineering, undertaking the Computer Science course.
            I’m an enthusiastic Full‑Stack Web‑Developer.
            I’ve worked on technologies like HTML,CSS,JavaScript,MongoDB,Express JS,React JS,Node JS.
            I enjoy exploring new technologies.
            I am a quick learner with a fun, outgoing personality.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
