import { Link } from "react-router-dom";
import { LogoGithub } from "../icons/LogoGithub";
import { LogoWhatsapp } from "../icons/LogoWhatsapp";
import { LogoEmail } from "../icons/LogoEmail";
import { LogoLinkedin } from "../icons/LogoLinkedin";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="py-10 bg-gray-700 border-t-2 dark:border-t-2 dark:border-black dark:bg-white">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div>
          <ul className="wrapper flex flex-wrap justify-center list-none">
            <Link
              className="icon gitHub"
              to="https://github.com/Daniel-Vasquez"
              target="_black"
            >
              <span className="tooltip">GitHub</span>
              <LogoGithub className="w-9 h-9 text-purple-600" />
            </Link>

            <Link
              className="icon whatsApp"
              to="https://api.whatsapp.com/send?phone=525531483433"
              target="_black"
            >
              <span className="tooltip">WhatsApp</span>
              <LogoWhatsapp className="w-9 h-9 text-green-500" />
            </Link>

            <Link
              className="icon correo"
              to="mailto:dani.vasquez.dev@gmail.com"
              target="_black"
            >
              <span className="tooltip">Correo</span>
              <LogoEmail className="w-9 h-9 text-red-500" />
            </Link>

            <Link
              className="icon linkedin"
              to="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
              target="_black"
            >
              <span className="tooltip">Linkedin</span>
              <LogoLinkedin className="w-9 h-9 text-blue-400" />
            </Link>

          </ul>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-3 dark:text-black">
            Daniel Vasquez
          </h1>
          <p className="opacity-50 text-lg text-white font-medium dark:text-black">
            Desarrollador Frontend
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
