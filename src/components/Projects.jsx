import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import LittleCardProjectPost from "./LittleCardProjectPost.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";
import "../components/styles/Projects.css";
import { projects } from "../projects.json";

function Projects() {

  useScrollToTop()

  return (
    <>
      <div className="projects">
        <div className="projects-options">
          <div className="generalContainer">
            <h2 className="projects-options__title">Proyectos</h2>
          </div>
        </div>
        <section className="projects-cards">
          <LittleCardProjectPost projects={ projects } />
        </section>
      </div>
    </>
  );
}

export default Projects;
