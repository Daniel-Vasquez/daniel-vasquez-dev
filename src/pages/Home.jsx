import { useState, useEffect } from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import Main from "../components/Main";
import WorkExperience from '../components/WorkExperience'
import Education from "../components/Education";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import InstagramProject from "../components/InstagramProject";
import meIcon from "../images/me-icon.png"
import projectsIcon from "../images/projects-icon.png"
import instaIcon from "../images/insta-icon.png"
import featuredIcon from "../images/featured-icon.png"
import { BtnShowSections } from "../components/BtnShowSections";
import { TopProjects } from "../components/TopProjects";
import { HamburgerMenu } from "../components/HamburgerMenu";
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

  const REFERENCES = [
    {
      title: 'Acerca de mi',
      icon: meIcon,
      nameSection: "showHome",
      handleSectionClick: handleSectionClick
    },
    {
      title: 'Proyectos',
      icon: projectsIcon,
      nameSection: "showProjects",
      handleSectionClick: handleSectionClick
    },
    {
      title: 'Replica de Instagram',
      icon: instaIcon,
      nameSection: "showProjectInsta",
      handleSectionClick: handleSectionClick
    },
    {
      title: 'Proyectos destacados',
      icon: featuredIcon,
      nameSection: "showFeaturedProjects",
      handleSectionClick: handleSectionClick,
    }
  ]

  useScrollToTop()

  return (
    <div className="home generalContainer">
      <section className="sections-buttons">
        <div className="buttons">
          <BtnShowSections
            title='Acerca de mi'
            icon={meIcon}
            nameSection="showHome"
            handleSectionClick={handleSectionClick}
          />
          <BtnShowSections
            title='Proyectos'
            icon={projectsIcon}
            nameSection="showProjects"
            handleSectionClick={handleSectionClick}
          />
          <BtnShowSections
            title='Replica de Instagram'
            icon={instaIcon}
            nameSection="showProjectInsta"
            handleSectionClick={handleSectionClick}
          />
          <BtnShowSections
            title='Proyectos destacados'
            icon={featuredIcon}
            nameSection="showFeaturedProjects"
            handleSectionClick={handleSectionClick}
          />
        </div>
      </section>

      <section>
        <HamburgerMenu references={REFERENCES} />

        {sections.showHome && (
          <>
            <section className="mainContainer">
              <Main />
            </section>

            <section id="about-me" className="about-me">
              <div className="generalContainer">
                <section className="personal-info">
                  <p className="personal-info-title__text">Acerca de mi:</p>
                  <p className="personal-info-paragraph">
                    Soy un programador web con más de un año de experiencia
                    en el emocionante mundo del desarrollo web. A lo largo de
                    mi carrera, he adquirido una amplia gama de habilidades y
                    conocimientos que me han permitido trabajar en diversos
                    proyectos y desafíos tecnológicos.
                  </p>

                  <p>
                    Te comparto un resumen de mis habilidades y logros en
                    las siguientes áreas:
                  </p>

                  <div className="about-me-skills">
                    <div className="about-me-skills__skill">
                      <p className="about-me-skills__title">
                        <span>JavaScript</span>:
                      </p>
                      He <strong>trabajado</strong> con JavaScript,
                      abarcando temas como el asincronismo, manipulación del
                      DOM y el uso de Promesas. Estos conocimientos me han
                      permitido crear aplicaciones interactivas y dinámicas que
                      ofrecen una experiencia fluida a los usuarios.
                    </div>

                    <div className="about-me-skills__skill">
                      <p className="about-me-skills__title">
                        <span>Python</span>:
                      </p>
                      Cuento con <span>experiencia</span> en Python, dominando
                      conceptos como el entorno virtual, list comprehensions,
                      high order functions y módulos. Esto me ha permitido
                      abordar proyectos desde diferentes perspectivas y
                      ofrecer soluciones eficientes.
                    </div>
                    <div className="about-me-skills__skill">
                      <p className="about-me-skills__title">
                        <span>React</span>:
                      </p>
                      Soy competente en el desarrollo con React, haciendo uso
                      de conceptos como useContext, useState, useEffect, hooks
                      y props. Esto me ha permitido crear aplicaciones web
                      modernas y escalables, brindando a los usuarios una
                      experiencia única e interactiva.
                    </div>
                    <div className="about-me-skills__skill">
                      <p className="about-me-skills__title">
                        <span>Node.js</span>:
                      </p>
                      Amplío mis habilidades en el desarrollo web con Node.js,
                      lo que me permite trabajar en proyectos más completos y
                      escalables. Tengo conocimientos en la creación de módulos
                      con la extensión .mjs, la lectura de archivos utilizando
                      Promesas y/o async/await, y el uso de los módulos path,
                      http, net y process para una gestión eficiente de rutas
                      y procesos.
                    </div>
                    <div className="about-me-skills__skill">
                      <p className="about-me-skills__title">
                        <span>Express</span>:
                      </p>
                      También tengo <strong>conocimientos</strong> con Express,
                      un popular framework de aplicaciones web para Node.js.
                      Conozco su potencial para manejar diferentes métodos HTTP
                      (GET, POST, PUT, DELETE, etc.), lo que me permite
                      construir APIs robustas y aplicaciones web eficientes.
                    </div>
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
          <section id="all-projects" className="section-all-projects">
            <Projects />
          </section>
        )}

        {sections.showProjectInsta && (
          <>
            <section className="section-InstagramProject">
              <InstagramProject />
            </section>
          </>
        )}

        {sections.showFeaturedProjects && (
          <>
            <section id="featured-projects" className="section-TopProjects">
              <TopProjects />
            </section>
          </>
        )}
      </section>
    </div>
  );
}

export default Home;