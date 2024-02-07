import { Link } from "react-router-dom";
import MobileCard from "../components/MobileCard.jsx";
import { projects } from "../projects.json";
import './styles/TopProjects.css'


export const TopProjects = () => {
  const FEATURED_PROJECTS = projects.slice(0, 3);

  return (
    <section className="ProjectsContainer px-3">
      <div>
        <h3 className="text-white text-center text-3xl font-bold pb-3 border-b-2 border-white dark:text-black dark:border-black">
          Proyectos que destacan por el diseño e interactividad
        </h3>
        <div className=" flex justify-center m-auto gap-9 flex-wrap py-5 px-3 sm:justify-between">
          {FEATURED_PROJECTS.map((project) => {
            return (
              <article
                key={project.id}
                className="featuredContainer-elements bg-blue-light p-4 text-center rounded-2xl border-2 border-black dark:bg-white"
              >
                <Link
                  className="project-container__link"
                  to={ project.link }
                  target="_black"
                  title="Visitar"
                >
                  {project.title}
                </Link>
                <MobileCard
                  imageMobile={project.imageMobile}
                  link={project.link}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}
