import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import Icons from "./Icons";
import "./styles/CardProjectPost.css";

const CarouselImages = lazy(() => import("./CarouselImages"));

function CardProjectPost({ project }) {
  const { title, description, technologies, link, codigo, images } = project
  return (
    <section className="projectContainer dark:bg-white">
      <div className="projectContainer-blogs">
        <Link
          className="projectContainer-blogs__title"
          to={ link }
          target="_black"
          title="Visitar"
        >
          {title}
        </Link>

        <div className="projectContainer-coverPage">
          <Suspense fallback={<Loading />}>
            <CarouselImages images={images} />
          </Suspense>
        </div>

        <div className="projectContainer-info">
          <h2 className="projectContainer-info__title font-bold">{title}</h2>
          <div className="projectContainer-info__paragraph">
            <div className="projectContainer-info__description">
              {description}
            </div>
            <h3 className="projectContainer-info__span text-3xl font-semibold">Tecnologias:</h3>
            <Icons technologies={technologies} />
          </div>
          <div className="projectContainer-links">
            <Link
              className="projectContainer-links__link effectBtn"
              to={ link }
              target="_blank"
            >
              <span>Visitar</span>
            </Link>

            <Link
              className="projectContainer-links__link effectBtn"
              to={ codigo }
              target="_blank"
            >
              <span>Ver código</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProjectPost;
