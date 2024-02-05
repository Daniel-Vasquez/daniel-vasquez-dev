import React from "react";
import { Link } from "react-router-dom";
import workExperience from "../workExperience";
import "./styles/Education-experience-info.css";
import "./styles/WorkExperience.css"

const WorkExperience = () => {
  return (
    <>
      <section id="work-experience" className="personal-info">
        <div className="personal-info-title">
          <p className="personal-info-title__text">Experiencia</p>
        </div>
        <div className="containerListWords">
          {workExperience.map(({name, position, skills, start_date, end_date, link}, index) => {
            return (
              <div className="containerListWords-info" key={index}>
                <div className="containerListWords-info__text">
                  <div>Empresa:
                    <Link
                      className="containerListWords-info__link"
                      to={ link }
                      target="_blank"
                    >
                      {name}
                    </Link>
                  </div>
                </div>
                <p className="containerListWords-info__text">Posición: {position}</p>
                <p className="containerListWords-info__text">Skills: {skills}</p>
                <p className="containerListWords-info__text">Fecha de inicio: {start_date}</p>
                { end_date && <p className="containerListWords-info__text">Fecha de finalización: {end_date}</p> }
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
