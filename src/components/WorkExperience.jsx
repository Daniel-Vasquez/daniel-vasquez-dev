import React from "react";
import { Link } from "react-router-dom";
import workExperience from "../workExperience";

const WorkExperience = () => {
  return (
    <>
      <section
        id="work-experience"
        className="bg-blue-light my-8 p-5 rounded-xl dark:bg-white"
      >
        <div className="personal-info-title">
          <p className="text-white text-3xl text-center font-semibold mb-5 sm:text-start dark:text-black">Experiencia</p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg text-white dark:text-black">
          {workExperience.map(({ name, position, skills, start_date, end_date, link }, index) => {
            return (
              <div key={index} className="border-b-2 border-white pb-2 dark:border-black">
                <div>
                  <div>
                    <span>Empresa: {" "}</span>
                    <Link
                      className="text-blue-500 font-semibold text-base underline hover:text-blue-600"
                      to={link}
                      target="_blank"
                    >
                      {name}
                    </Link>
                  </div>
                </div>
                <p>Posición: {position}</p>
                <p>Skills: {" "}
                  <span className="font-semibold text-blue-300">
                    {skills}
                  </span>
                </p>
                <p>Fecha de inicio: {start_date}</p>
                {end_date && <p>Fecha de finalización: {end_date}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
