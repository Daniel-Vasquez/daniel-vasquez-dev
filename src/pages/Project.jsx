import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { Loading } from '../components/Loading';
import MobileCard from '../components/MobileCard.jsx';
import useScrollToTop from "../hooks/useScrollToTop.js";
import "../components/styles/Project.css";
import "../components/styles/Btn.css"
import { projects } from "../projects.json";

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
    <div>
      <Suspense fallback={<Loading />}>
        <CardProjectPost project={project} />
      </Suspense>
      <div className="generalContainer">
        <div className="containerImages">
          <Suspense fallback={<Loading />}>
            <div className="containerMobile">
              <p className="containerMobile-title">Versión Mobile</p>
              <MobileCard
                imageMobile={imageMobile}
                title={title}
                link={link}
              />
            </div>
            <div className="containerDesk">
              <p className="containerDesk-title">Versión Desktop</p>
              <DeskCard
                imageDesk={gif}
                title={title}
                link={link}
              />
            </div>
          </Suspense>
        </div>
      </div>
      <div className="containerButton">
        <div>
          <a className="btn white" href="/">Volver</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
