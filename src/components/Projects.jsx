import LittleCardProjectPost from "./LittleCardProjectPost.jsx";
import useScrollToTop from "../hooks/useScrollToTop.js";
import { projects } from "../projects.json";

function Projects() {
  useScrollToTop()

  return (
    <>
      <div className="max-w-5xl m-auto">
        <div className="text-center py-3">
          <div>
            <h2 className="text-white text-4xl font-semibold dark:text-black">Proyectos</h2>
          </div>
        </div>
        <section className="px-4">
          <LittleCardProjectPost projects={ projects } />
        </section>
      </div>
    </>
  );
}

export default Projects;
