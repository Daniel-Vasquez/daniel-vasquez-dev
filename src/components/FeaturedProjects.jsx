import { Link } from "react-router-dom";

const FeaturedProjects = ({ proyects }) => {
  return (
    <>
      {proyects.map((project) => {
        return (
          <div key={project.id} className="outstandingProjects-container">
            <div className="outstandingProjects-image">
              <img
                className="outstandingProjects-img"
                src={project.img}
                alt=""
              />
            </div>
            <div className="outstandingProjects-info">
              <p className="outstandingProjects-title">{project.title}</p>
              <p className="outstandingProjects-description">
                {project.description}
              </p>
              <div className="outstandingProjects-btn">
                <Link
                  className="outstandingProjects-btn__details"
                  to={`/project/${project.path}`}
                  title="Ver detalles del proycto"
                >
                  Detalles
                </Link>
                <Link
                  className="outstandingProjects-btn__visit"
                  to={  project.link }
                  target="_black"
                  title="Visitar"
                >
                  Visitar
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default FeaturedProjects
