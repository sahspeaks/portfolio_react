import React from "react";
import "./portfolio.css";
import Kinder from "../../assets/Kinder.png";
import Hunger from "../../assets/Hunger.png";
import Todo from "../../assets/ToDoList.png";
import Calculator from "../../assets/Calculator.png";
import Temp from "../../assets/Temp-Converter.png";
import Weather from "../../assets/Weather-App.png";
import News from "../../assets/News-App.png";
import Word from "../../assets/Word-Analyser.png";
import Notes from "../../assets/Notes.png";
import Port from "../../assets/Portfolio.png";
import Edumindz from "../../assets/Edumindz.png";
import HomeMade_Haven from "../../assets/HomeMade_Haven.png";
import Portfolio1 from "../../assets/Portfolio1.png";
import BTC from "../../assets/BTC.jpg";
import WeatherApp from "../../assets/Weather.jpg";
import TicTac from "../../assets/TicTac.png";
import Pixels from "../../assets/Pixels.png";
import ChatApp from "../../assets/ChatApp.png";
import MySTB from "../../assets/MySTB.png";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {/* Mobile Applications */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div className="mobile-frame">
              <div className="mobile-screen">
                <img src={ChatApp} alt="Mobile App 2" />
              </div>
            </div>
          </div>
          <h3>Chat App React-Native</h3>
          {/* <p className="app-details">React Native • Firebase</p> */}
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/ChatApp-react-native"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div className="mobile-frame">
              <div className="mobile-screen">
                <img src={Pixels} alt="Mobile App 2" />
              </div>
            </div>
          </div>
          <h3>Pixels App React-Native</h3>
          {/* <p className="app-details">React Native • Firebase</p> */}
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/PixelsApp-react-native"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div className="mobile-frame">
              <div className="mobile-screen">
                <img src={WeatherApp} alt="Mobile App 2" />
              </div>
            </div>
          </div>
          <h3>Weather App React-Native</h3>
          {/* <p className="app-details">React Native • Firebase</p> */}
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/WeatherApp-react-native"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <div className="mobile-frame">
              <div className="mobile-screen">
                <img src={TicTac} alt="Mobile App 1" />
              </div>
            </div>
          </div>
          <h3>Tic-Tac-Toe React-Native</h3>
          {/* <p className="app-details">Flutter • Node.js • MongoDB</p> */}
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/tictactoe-react-native"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={MySTB} alt="MySTB" />
          </div>
          <h3>MY STB E-commerce</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/dth-ecommerce"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://mystb.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={BTC} alt="BrainTumor-App" />
          </div>
          <h3>Brain Tumor Classifier</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/brain-tumor-webapp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank" disabled>
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={HomeMade_Haven} alt="Edumindz-App" />
          </div>
          <h3>HomeMade Haven</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/react_food_delivery"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank" disabled>
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Edumindz} alt="Edumindz-App" />
          </div>
          <h3>Edumindz</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Edumindz"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://edumindz.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Notes} alt="Notes-App" />
          </div>
          <h3>MyNotes</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Word-Analyzer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://makemynotes.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Word} alt="Word-App" />
          </div>
          <h3>Word-Analyser</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Word-Analyzer"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://word-analyzer.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Port} alt="Portfolio" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/MyPortfolio"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sahspeaks.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={News} alt="News-App" />
          </div>
          <h3>News Nation</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/News-App"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              disabled
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Todo} alt="Todo-App" />
          </div>
          <h3>Todo-List</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/todo_list"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://todolist-app-iou8.onrender.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Calculator} alt="Calculator-App" />
          </div>
          <h3>Calculator</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Calculator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sahspeaks.github.io/Calculator/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Temp} alt="Temp-App" />
          </div>
          <h3>Temperature-Converter</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Temperature-Converter"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sahspeaks.github.io/Temperature-Converter/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Weather} alt="Weather-App" />
          </div>
          <h3>Weather-App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/weather-App2.0"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/"
              className="btn btn-primary"
              target="_blank"
              disabled
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Kinder} alt="Kinder-App" />
          </div>
          <h3>Kinder-A Dating App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Kinder"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sahspeaks.github.io/Kinder/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Hunger} alt="Hunger-App" />
          </div>
          <h3>Hunger</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Hunger"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sahspeaks.github.io/Hunger/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Portfolio1} alt="My first project" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/sahspeaks/Portfolio"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sahspeaks.github.io/Portfolio/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
      <style>
        {`
          .portfolio_item-image {
            position: relative;
            border-radius: 1.5rem;
            overflow: hidden;
            height: 280px; /* Maintain consistent height */
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-bg-variant);
          }

          .portfolio_item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .mobile-frame {
            height: 100%;
            aspect-ratio: 9/19;
            background: #2c2c2c;
            border-radius: 1.5rem;
            padding: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .mobile-screen {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            overflow: hidden;
          }

          .mobile-screen img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .app-details {
            color: var(--color-light);
            font-size: 0.9rem;
            margin: 0.2rem 0;
            text-align: center;
          }

          /* Keep your existing media queries */
          @media screen and (max-width: 1024px) {
            .portfolio_container {
              grid-template-columns: 1fr 1fr;
              gap: 1.2rem;
            }
          }

          @media screen and (max-width: 600px) {
            .portfolio_container {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};
