import React from "react";
import education from "../education";
import { Link } from "react-router-dom";
import "./styles/Education.css";
import './styles/Education-experience-info.css'

const Education = () => {
  return (
    <>
      <section id="section-education" className="personal-info">
        <div className="personal-info-title">
          <p className="personal-info-title__text">Educación</p>
        </div>
        <div className="containerListEducation">
          {education.map((element, index) => {
            return (
              <div className="listEducation" key={index}>
                <div className="listEducation-img">
                  <img
                    className="listEducation-img__img"
                    src={element.logo}
                    alt={element.name}
                  />
                </div>
                <div className="listEducation-descrption">
                  <h4 className="listEducation-descrption__name">
                    <Link
                      className="listEducation-descrption__link"
                      to={ element.link }
                      target="_blank"
                    >
                      {element.name}
                    </Link>
                  </h4>
                  <p className="listEducation-descrption__title">
                    {element.title}
                  </p>
                  <p className="listEducation-descrption__date">
                    {element.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Education;
