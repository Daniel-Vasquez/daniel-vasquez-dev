import { NAMECERTIFICATES } from "../nameCertificates";
import { LogoReact } from "../icons/LogoReact";
import { LogoAstro } from "../icons/LogoAstro";
import { LogoTailwind } from "../icons/LogoTailwind";
import { LogoNodejs } from "../icons/LogoNodejs";
import { LogoAws } from "../icons/LogoAws";
import { LogoJavascript } from "../icons/LogoJavascript";
import { LogoCssgrid } from "../icons/LogoCssgrid";
import { LogoDom } from "../icons/LogoDom";
import { LogoGit } from "../icons/LogoGit";

const LOGOSSVG = [
  {
    name: "astro",
    img: <LogoAstro className="w-11 h-11 text-orange-500" />,
  },
  {
    name: "tailwind",
    img: <LogoTailwind className="w-11 h-11 text-cyan-300" />,
  },
  {
    name: "react",
    img: <LogoReact className="w-11 h-11 text-blue-500" />,
  },
  {
    name: "nodejs",
    img: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "expressjs",
    img: <LogoNodejs className="w-11 h-11 text-green-500" />,
  },
  {
    name: "aws",
    img: <LogoAws className="w-11 h-11 text-orange-400" />,
  },
  {
    name: "javascript",
    img: <LogoJavascript className="w-11 h-11 text-yellow-400" />,
  },
  {
    name: "css grid",
    img: <LogoCssgrid className="w-11 h-11 text-black" />,
  },
  {
    name: "dom",
    img: <LogoDom className="w-11 h-11 text-purple-600" />,
  },
  {
    name: "git",
    img: <LogoGit className="w-11 h-11 text-red-500" />,
  },
]

const Certificates = () => {
  return (
    <section className="certificates my-9">
      <div>
        <p className="text-white text-3xl text-center font-semibold mb-5 sm:text-start dark:text-black">
          Certificaciones
        </p>
      </div>
      <div
        className="bg-blue-light flex flex-col gap-4 max-h-72 rounded-xl p-5 border-2 border-black dark:bg-white"
        style={{
          overflowY: "scroll",
          scrollbarColor: "#2463eb transparent",
        }}
      >
        {NAMECERTIFICATES.map(({ tag, title }, index) => {
          return (
            <div className="flex flex-col items-center text-center gap-5 font-semibold text-white sm:flex-row dark:text-black" key={index}>
              <div className="listCertificates-img">
                {LOGOSSVG.find((logo) => logo.name === tag)?.img || tag}
              </div>
              <div>
                {title}
              </div>
            </div>
          );
        })}
        <p className="font-semibold text-md opacity-50 text-center my-2">Entre otros</p>
      </div>
    </section>
  );
};

export default Certificates;
