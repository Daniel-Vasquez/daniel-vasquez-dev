import { LogoReact } from "../icons/LogoReact";
import { LogoAstro } from "../icons/LogoAstro";
import { LogoNodejs } from "../icons/LogoNodejs";
import { LogoJavascript } from "../icons/LogoJavascript";
import { LogoHtml } from "../icons/LogoHtml";
import { LogoTypescript } from "../icons/LogoTypescript";
import { LogoCss } from "../icons/LogoCss";

const LOGOSSVG = [
  {
    name: "astro",
    svg: <LogoAstro className="w-11 h-11 text-orange-500" />,
  },
  {
    name: "react",
    svg: <LogoReact className="w-11 h-11 text-blue-500" />,
  },
  {
    name: "nodejs",
    svg: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "expressjs",
    svg: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "javascript",
    svg: <LogoJavascript className="w-11 h-11 text-yellow-400" />,
  },
  {
    name: "html",
    svg: <LogoHtml className="w-11 h-11 text-orange-500" />,
  },
  {
    name: "typescript",
    svg: <LogoTypescript className="w-11 h-11 text-blue-600" />,
  },
  {
    name: "css",
    svg: <LogoCss className="w-11 h-11 text-blue-500" />,
  }
]

export const Icons = ({ technologies }) => {
  return (
    <ul className="flex gap-8 mt-4 mb-7 flex-wrap">
      {technologies.map(({ name }) => {
        return (
          <li key={name} title={name} className="wrapper flex flex-col justify-center cursor-pointer">
            <div className="flex justify-center">
              {LOGOSSVG.find((logo) => logo.name.toLocaleLowerCase() === name.toLocaleLowerCase())?.svg || name}
            </div>
            <span className="text-white font-semibold dark:text-black">{name}</span>
          </li>
        );
      })}
    </ul>
  );
};
