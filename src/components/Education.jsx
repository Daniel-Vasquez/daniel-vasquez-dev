import React from "react";
import education from "../education";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <section id="section-education" className="personal-info">
        <div>
          <p className="text-black text-3xl text-center font-semibold mb-5 sm:text-start">Educación</p>
        </div>
        <div>
          {education.map((element, index) => {
            return (
              <div className="flex flex-col text-center items-center gap-3 p-2 border-b-2 border-black sm:flex-row sm:text-start dark:border-white" key={index}>
                <div className="w-12">
                  <img
                    className="rounded-full"
                    src={element.logo}
                    alt={element.name}
                  />
                </div>
                <div>
                  <h4 className="text-blue-600 font-semibold mb-1">
                    <Link
                      to={ element.link }
                      target="_blank"
                    >
                      {element.name}
                    </Link>
                  </h4>
                  <p className="mb-1">
                    {element.title}
                  </p>
                  <p className="mb-1">
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
