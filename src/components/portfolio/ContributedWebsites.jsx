import React from "react";
import "./portfolio.css"; // Reuse the same CSS file

import MySTB from "../../assets/MySTB.png";
import Atnatic from "../../assets/Atnatic.png";
import Moonsflare from "../../assets/Moonsflare.png";

export const ContributedWebsites = () => {
  return (
    <section id="contributed">
      <h5>My Professional Contributions</h5>
      <h2>Collaborative Projects</h2>
      {/* Caution Banner */}
      <div className="caution-banner">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <span>
          &nbsp;Note: These are live production websites. Please refrain from:
        </span>
        <ul>
          <li>Placing test/fake orders</li>
          <li>Submitting dummy personal information</li>
          <li>Attempting payment transactions</li>
        </ul>
      </div>
      <div className="container portfolio_container">
        {/* Moonsflare E-commerce */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Moonsflare} alt="Moonsflare E-commerce" />
          </div>
          <h3>Moonsflare Style Store</h3>
          <div className="contribution-details">
            <p>
              Developed inventory management system and order processing
              workflows
            </p>
            <small>Contribution: Backend Development</small>
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://moonsflare.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
          <div className="live-site-warning">
            <i className="fa-solid fa-circle-info"></i>
            Active production site - Real transactions enabled
          </div>
        </article>
        {/* Atnatic E-commerce */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Atnatic} alt="Atnatic E-commerce" />
          </div>
          <h3>Atnatic Streetwear</h3>
          <div className="contribution-details">
            <p>
              Implemented cart functionality, payment gateway, and BlueDart
              integration
            </p>
            <small>Contribution: Backend Development</small>
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://atnatic.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
          <div className="live-site-warning">
            <i className="fa-solid fa-circle-info"></i>
            Active production site - Real transactions enabled
          </div>
        </article>

        {/* MY STB E-commerce */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={MySTB} alt="MY STB E-commerce" />
          </div>
          <h3>MY STB E-commerce</h3>
          <div className="contribution-details">
            <p>
              Full-stack development of DTH services marketplace with product
              customization
            </p>
            <small>Contribution: Full-stack Development (Solo)</small>
          </div>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/dth-ecommerce"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://mystb.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
          <div className="live-site-warning">
            <i className="fa-solid fa-circle-info"></i>
            Active production site - Real transactions enabled
          </div>
        </article>
      </div>

      <style>
        {`
        
          .contribution-details {
            margin: 0.5rem 0 1rem;
            color: var(--color-light);
          }
          
          .contribution-details p {
            font-size: 0.9rem;
            margin-bottom: 0.3rem;
          }

          .contribution-details small {
            font-size: 0.7rem;
            color: var(--color-primary);
            display: block;
            font-weight: 500;
          }

          @media screen and (max-width: 600px) {
            .contribution-details p {
              font-size: 0.8rem;
            }
          }

          a[disabled], a[disabled]:hover {
            pointer-events: none;
            color: var(--color-bg-variant);
            text-decoration: line-through;
          }

          /* Caution Banner Styles */
          .caution-banner {
            background: var(--color-bg-variant);
            border-left: 4px solid var(--color-primary);
            padding: 1.5rem;
            margin: 2rem auto;  /* Centered with vertical margins */
            border-radius: 8px;
            max-width: 1000px;
            width: calc(100% - 3rem);  /* Maintain side margins */
          }

          @media screen and (max-width: 1024px) {
            .caution-banner {
              width: calc(100% - 2.5rem);
              margin: 1.75rem auto;
              padding: 1.25rem;
              max-width: none;
            }
            .caution-banner span {
              font-size: 0.95rem;
            }
            
            .caution-banner li {
              font-size: 0.85rem;
            }
          }

          @media screen and (max-width: 768px) {
            .caution-banner {
              width: calc(100% - 2rem);
              margin: 1.5rem auto;
              padding: 1rem;
              border-left-width: 3px;
            }
            .caution-banner span {
              font-size: 0.9rem;
            }
            .caution-banner li {
              font-size: 0.75rem;
            }
          }

          @media screen and (max-width: 600px) {
            .caution-banner {
              width: calc(100% - 1.5rem);
              margin: 1.25rem auto;
              padding: 0.75rem;
              border-radius: 6px;
            }
            
            .caution-banner ul {
              margin-left: 1rem;
            }
            .caution-banner li {
              font-size: 0.8rem;
            }
            
            .caution-banner span {
              font-size: 0.85rem;
            }
          }

          /* Project-specific Warnings */
          .live-site-warning {
           
            padding: 0.5rem;
            margin-top: 1rem;
            border-radius: 4px;
            font-size: 0.8rem;
            color: var(--color-light);
          
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .live-site-warning i {
            color: var(--color-primary);
          }
        `}
      </style>
    </section>
  );
};
