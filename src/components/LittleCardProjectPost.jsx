import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/LittleCardProjectPost.css";

function LittleCardProjectPost({ projects }) {
  return (
    <div className="cardProject">
      {projects.map(({ id, img, title, description, path, link }) => {
        return (
          <motion.div
            className="cardProject-card dark:bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={id}
          >
            <Link
              to={ link }
              target="_black"
              title="Visitar"
            >
              <div className="cardProject-img">
                <span className="cardProject-img-sapn">
                  <img
                    className="cardProject-img-sapn__img"
                    src={img} alt={title}
                  />
                </span>
              </div>
            </Link>
            <div className="cardProject-info dark:border-black">
              <Link
                className="cardProject-title dark:text-black"
                to={ link }
                target="_black"
                title="Visitar"
              >
                {title}
              </Link>
              <div className="cardProject-description dark:text-black">
                {description}
              </div>
              <div className="cardProject-links">
                <Link
                  className="cardProject-links-btn__details"
                  to={`/proyecto/${path}`}
                  title="Ver detalles del proycto"
                >
                  Detalles
                </Link>
                <Link
                  className="cardProject-links-btn__visit"
                  to={ link }
                  target="_black"
                  title="Visitar"
                >
                  Visitar
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default LittleCardProjectPost;
