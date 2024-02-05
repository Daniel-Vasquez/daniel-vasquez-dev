import React from "react";
import { Link } from "react-router-dom";
import workExperience from "../workExperience";

const WorkExperience = () => {
  return (
    <>
      <section
        id="work-experience"
        className="bg-white my-7 mx-2 p-4 rounded-xl"
      >
        <div className="personal-info-title">
          <p className="text-black text-3xl text-center font-semibold mb-5 sm:text-start">Experiencia</p>
        </div>
        <div className="flex flex-col gap-4 bg-light p-3 rounded-lg dark:bg-white">
          {workExperience.map(({name, position, skills, start_date, end_date, link}, index) => {
            return (
              <div key={index}>
                <div>
                  <div>
                    <span>Empresa: {" "}</span>
                    <Link
                      className="text-blue-500 font-semibold text-base"
                      to={ link }
                      target="_blank"
                    >
                      {name}
                    </Link>
                  </div>
                </div>
                <p>Posición: {position}</p>
                <p>Skills: {skills}</p>
                <p>Fecha de inicio: {start_date}</p>
                { end_date && <p>Fecha de finalización: {end_date}</p> }
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
