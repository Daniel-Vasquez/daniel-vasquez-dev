import { Suspense, lazy } from "react";
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { Loading } from '../components/Loading';
import MobileCard from '../components/MobileCard.jsx';
import useScrollToTop from "../hooks/useScrollToTop.js";
import { projects } from "../projects.json";
import "../components/styles/Project.css";
import "../components/styles/Btn.css"

const CardProjectPost = lazy(() => import("../components/CardProjectPost.jsx"));
const DeskCard = lazy(() => import("../components/DeskCard.jsx"));

function Project() {
  const { nameProject } = useParams()

  const project = projects.find(
    ({ path }) => path.toLowerCase() === nameProject.toLowerCase()
  );

  const { gif, title, link, imageMobile } = project

  useScrollToTop();

  if (!project) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        No tenemos el proyecto
        <strong style={{ color: '#e91e63' }}>
          {nameProject}
        </strong>.
      </h1>
    );
  }

  return (
    <div className="bg-blue-medium pt-24 dark:bg-white">
      <Suspense fallback={<Loading />}>
        <CardProjectPost project={project} />
      </Suspense>
      <div className="flex justify-center gap-7 flex-wrap py-6 px-3">
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-white bg-blue-light p-4 dark:bg-light dark:border-black">
            <p className="text-white mb-4 text-xl font-semibold border-b-2 border-white dark:text-black dark:border-black">
              Versión Mobile
            </p>
            <MobileCard
              imageMobile={imageMobile}
              title={title}
              link={link}
            />
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-white bg-blue-light p-4 dark:bg-light dark:border-black">
            <p className="text-white mb-4 text-xl font-semibold border-b-2 border-white dark:text-black dark:border-black">
              Versión Desktop
            </p>
            <DeskCard
              imageDesk={gif}
              title={title}
              link={link}
            />
          </div>
        </Suspense>
      </div>
      <div className="text-center pb-7">
        <div>
          <Link
            className="btn white bg-light"
            to="/proyectos"
          >
            Proyectos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
