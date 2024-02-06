import LittleCardProjectPost from "./LittleCardProjectPost.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";
import "../components/styles/Projects.css";
import { projects } from "../projects.json";

function Projects() {

  useScrollToTop()

  return (
    <>
      <div className="projects mt-20 dark:bg-light">
        <div className="projects-options dark:bg-light">
          <div className="generalContainer">
            <h2 className="projects-options__title font-semibold">Proyectos</h2>
          </div>
        </div>
        <section className="projects-cards dark:bg-light">
          <LittleCardProjectPost projects={ projects } />
        </section>
      </div>
    </>
  );
}

export default Projects;
