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
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
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
            <a href="" className="btn btn-primary" target="_blank" disabled>
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
    </section>
  );
};
