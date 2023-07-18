import React from 'react';
import './service.css';
import {BiCheck} from 'react-icons/bi';

export const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        {/* Web design */}
        <article className="service">
          <div className='service_head'>
          <h3>Web Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I build Responsive Websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I build Websites that delight and inform.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I follow industry standards and best code practice.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I uses some of best designinng frameworks like Bootstrap and Material UI to design websites.</p>
            </li>
          </ul>
        </article>

        {/* Web development */}
        <article className="service">
          <div className='service_head'>
          <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I follow best industry standards and best code practices.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I follow best code architecture followed by many companies.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>I uses best backend tools and frameworks.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Provides best efficient responsive websites.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
