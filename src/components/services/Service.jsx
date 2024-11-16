import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

export const Service = () => {
  return (
    <section id="service">
      {/* <h5>What I Offer</h5> */}
      <h2>My Expertise</h2>
      <div className="container services_container">
        {/* Web design */}
        <article className="service">
          <div className="service_head">
            <h3>Web Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <b>Responsive Websites:</b> Crafting websites that work
                seamlessly on all devices.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <b>Best Practices:</b> Adhering to industry standards and modern
                coding practices.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <b>Modern Frameworks:</b> Utilizing frameworks like Bootstrap
                and Tailwind CSS for sleek designs.
              </p>
            </li>
          </ul>
        </article>

        {/* Web development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <b>Optimal Code:</b> Following industry best practices and
                efficient code architecture.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <b>Powerful Backend:</b> Leveraging robust backend tools and
                frameworks.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                <b>High Performance:</b> Delivering efficient, responsive, and
                high-performing websites.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
