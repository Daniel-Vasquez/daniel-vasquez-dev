import { technologies } from "../../technologies.json";
import { Link } from "react-router-dom";

export const Technologies = () => {
  return (
    <>
      {technologies.map(({ name, description, link }, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-2 p-6 bg-gray-800 border border-gray-200 rounded-lg shadow cursor-pointer dark:bg-white hover:bg-gray-700 hover:border-gray-300 hover:shadow-lg dark:border-gray-700"
          >
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-gray-900">
              {name}
            </h5>
            <p className="font-normal text-gray-400 dark:text-gray-700">
              {description} {""}
              {link && (
                <Link
                  to={link}
                  target="_blank"
                  className="text-blue-500 font-semibold text-base underline hover:text-white dark:hover:text-purple-600"
                >
                  Proyecto
                </Link>
              )}
            </p>
          </div>
        );
      })}
    </>
  )
}
