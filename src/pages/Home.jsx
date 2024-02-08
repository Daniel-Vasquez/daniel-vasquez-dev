import { useState, useEffect } from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import Main from "../components/Main";
import WorkExperience from '../components/WorkExperience'
import Education from "../components/Education";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import InstagramProject from "../components/InstagramProject";
import { TopProjects } from "../components/TopProjects";
import { Technologies } from "../components/Technologies";
import { OptionsButtons } from "../components/OptionsButtons";
import '../components/styles/Home.css'

function Home() {
  const [sections, setSections] = useState({
    showHome: true,
    showProjects: false,
    showProjectInsta: false,
    showFeaturedProjects: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sections]);

  const handleSectionClick = (sectionName) => {
    setSections({
      ...sections,
      ...Object.fromEntries(Object.keys(sections).map((key) => [key, key === sectionName])),
    });
  };

  useScrollToTop()

  return (
    <div className="home pt-4 bg-blue-medium">
      <section className="hidden pl-2 pr-4 bg-black md:block dark:bg-white">
        <OptionsButtons handleSectionClick={handleSectionClick} />
      </section>

      <section className="px-4 dark:bg-light">
        {sections.showHome && (
          <>
            <section className="container bg-blue-medium flex items-center m-auto min-h-96 pt-20 w-full dark:bg-light">
              <Main />
            </section>

            <section id="about-me" className="max-w-5xl w-full m-auto p-2 pb-8">
              <div>
                <section className="personal-info">
                  <div className="mb-6">
                    <p className="text-white text-3xl text-center font-semibold mb-5 sm:text-start dark:text-black">Acerca de mi:</p>
                    <p className="leading-relaxed text-white mb-2 dark:text-black">
                      Soy un programador web con más de un año de experiencia
                      en el emocionante mundo del desarrollo web. A lo largo de
                      mi carrera, he adquirido una amplia gama de habilidades y
                      conocimientos que me han permitido trabajar en diversos
                      proyectos y desafíos tecnológicos.
                    </p>

                    <p className="leading-relaxed text-white mb-2 dark:text-black">
                      Te comparto un resumen de mis habilidades y logros en
                      las siguientes áreas:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <Technologies />
                  </div>

                </section>
                <WorkExperience />
                <Education />
                <Certificates />
                <Skills />
              </div>
            </section>
          </>
        )}

        {sections.showProjects && (
          <section id="all-projects" className="pt-20 dark:bg-light">
            <Projects />
          </section>
        )}

        {sections.showProjectInsta && (
          <>
            <section className="max-w-5xl w-full m-auto pt-20" style={{ minHeight: "800px" }}>
              <InstagramProject />
            </section>
          </>
        )}

        {sections.showFeaturedProjects && (
          <>
            <section id="featured-projects" className="max-w-5xl w-full m-auto pt-20" style={{ minHeight: "800px" }}>
              <TopProjects />
            </section>
          </>
        )}
      </section>
    </div>
  );
}

export default Home;