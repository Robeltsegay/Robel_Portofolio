import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project4 from "./img/portfolio-4.jpg";
import Download1 from "./img/portfolio-4.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          I Make Busy Myself Develping Such Projects
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">To-Do-List</h5>
                <h4 className="project__text">
                  This is React based To-Do-List.It stores tasks with remainder.
                </h4>
                <a
                  href="https://github.com/Robeltsegay/My-Todo-List"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Ethiopian Research Hub</h5>
                <h4 className="project__text">
                  This project is my Bachelor Degree final project.
                </h4>
                <a
                  href="https://github.com/Robeltsegay/Reaserch-HUb"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Collection</h5>
                <h4 className="project__text">
                  This is Collection of different reusable React Components that
                  help on the way of developing website.
                </h4>
                <a
                  href="https://github.com/Robeltsegay/testreact"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">My Portfolio</h5>
                <h4 className="project__text">React based Portfolio.</h4>
                <a
                  href="https://github.com/Robeltsegay/Robel_Portofolio"
                  className="project__btn"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
