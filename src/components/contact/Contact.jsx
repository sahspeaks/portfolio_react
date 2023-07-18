import React from 'react'
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>sahspeaks@gmail.com</h5>
            <a href="mailto:sahspeaks@gmail.com">Send Mail</a>
          </article>
          <article className="contact_option">
            <HiOutlineMail />
            <h4>WhatsApp</h4>
            <h5>+91123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+9393606147">Send Mail</a>
          </article>
        </div>
      </div>
    </section>
  )
}
