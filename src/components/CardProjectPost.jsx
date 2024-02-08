import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import { Icons } from "./Icons";
import "./styles/CardProjectPost.css";

const CarouselImages = lazy(() => import("./CarouselImages"));

function CardProjectPost({ project }) {
  const { title, description, technologies, link, codigo, images } = project
  return (
    <section>
      <div className="max-w-5xl m-auto px-3">
        <Link
          className="inline-block text-white text-2xl font-black underline mb-3 pb-2 hover:text-blue-600 dark:text-black dark:hover:text-blue-600"
          to={ link }
          target="_black"
          title="Visitar"
        >
          {title}
        </Link>

        <div className="text-center">
          <Suspense fallback={<Loading />}>
            <CarouselImages images={images} />
          </Suspense>
        </div>

        <div className="projectContainer-info">
          <h2 className="text-3xl font-bold text-white dark:text-black sm:text-5xl">{title}</h2>
          <div className="mb-3">
            <div className="py-4 text-white leading-7 dark:text-black">
              {description}
            </div>
            <h3 className="text-gray-500 text-3xl font-semibold dark:text-black">Tecnologias:</h3>
            <Icons technologies={technologies} />
          </div>
          <div className="projectContainer-links">
            <Link
              className="projectContainer-links__link dark:bg-white dark:text-black dark:hover:bg-light"
              to={ link }
              target="_blank"
            >
              <span>Visitar</span>
            </Link>

            <Link
              className="projectContainer-links__link dark:bg-white dark:text-black dark:hover:bg-light"
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
