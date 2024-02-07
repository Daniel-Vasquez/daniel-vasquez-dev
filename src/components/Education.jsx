import React from "react";
import education from "../education";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <section id="section-education" className="bg-blue-light p-5 rounded-xl dark:bg-white">
        <div>
          <p className="text-white text-3xl text-center font-semibold mb-5 sm:text-start dark:text-black">
            Educación
          </p>
        </div>
        <div>
          {education.map((element, index) => {
            return (
              <div className="flex flex-col text-center items-center gap-3 p-2 border-b-2 border-white sm:flex-row sm:text-start dark:border-black" key={index}>
                <div className="w-12">
                  <img
                    className="rounded-full"
                    src={element.logo}
                    alt={element.name}
                  />
                </div>
                <div>
                  <h4 className="text-blue-600 font-semibold mb-1 underline hover:opacity-80">
                    <Link
                      to={ element.link }
                      target="_blank"
                    >
                      {element.name}
                    </Link>
                  </h4>
                  <p className="mb-1 text-white dark:text-black">
                    {element.title}
                  </p>
                  <p className="mb-1 text-white dark:text-black">
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
