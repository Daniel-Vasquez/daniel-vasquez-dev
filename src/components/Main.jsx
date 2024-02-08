import { Link } from "react-router-dom";
import personalImage from "../images/daniel-black.png";
import { LogoDownload } from "../icons/LogoDownload";
import { LogoGithub } from "../icons/LogoGithub";
import { LogoWhatsapp } from "../icons/LogoWhatsapp";
import { LogoEmail } from "../icons/LogoEmail";
import './styles/Main.css'

const Main = () => {
  return (
    <div className="main-container px-4">
      <div className="main-container__img" title='Linkedin'>
        <Link
          className="main-containerImg text-white dark:text-black"
          to="https://www.linkedin.com/in/daniel-vasquez-nepomuceno"
          target="_black"
          title="linkedin"
        >
          <img className="main-containerImg" src={personalImage} alt="Daniel Vásquez" />
        </Link>
      </div>
      <div className="main-container__description dark:bg-white">
        <div className="typewriter text-white dark:text-black">
          <h1 className="typewriter-text">
            Hola, soy{" "}
            <span className="main-container__span font-semibold">Daniel Vásquez</span>.
            <span className="typewriter-text__span bg-blue-medium dark:bg-white">&#160;</span>
          </h1>
        </div>
        <p className="my-3 text-white dark:text-black">
          Soy <span className=" font-semibold text-pink-700">Desarrollador Full Stack</span>, poseo una
          sólida experiencia en programación de alrededor de un dos años,
          durante el cual he trabajado en proyectos desafiantes utilizando
          lenguajes de programación como <span className=" font-semibold text-pink-700">Python</span> y herramientas de servicios
          en la nube de AWS, como: <span className=" font-semibold text-pink-700">S3 y Cloudwatch</span>. Además,
          he trabajado con los hooks de <span className=" font-semibold text-pink-700">React</span>, tales como: useState, useEffect
          y useContext.
          Tengo expreriencia trabajando con <span className="font-semibold text-pink-700">Astro, tailwind, redux y redux toolkit</span>.{" "}
          Soy apasionado por el diseño web y
          siempre estoy en busca de nuevas oportunidades para aprender y
          mejorar mis habilidades como desarrollador.
        </p>

        <Link
          className="main-container__mail text-white dark:text-black"
          to="mailto:dani.vasquez.dev@gmail.com"
          target="_black"
          title="WhatsApp"
        >
          ¿Trabajamos juntos?
          <div>
            <LogoEmail className="w-6 h-6 text-red-500" />
          </div>
        </Link>


        <div className="flex justify-evenly gap-2 flex-wrap">
          <Link
            className="mainContainer-git__link underline text-green-500 hover:text-white dark:hover:text-black"
            to="https://api.whatsapp.com/send?phone=525531483433"
            target="_black"
            title="WhatsApp"
          >
            WhatsApp
            <div>
              <LogoWhatsapp className="w-7 h-7 text-green-500" />
            </div>
          </Link>

          <Link
            className="mainContainer-git__link underline text-purple-600 hover:text-white dark:hover:text-black"
            to="https://github.com/Daniel-Vasquez"
            target="_black"
            title="Github"
          >
            Github
            <div>
              <LogoGithub className="w-7 h-7 text-purple-600" />
            </div>
          </Link>
          <a
            className="mainContainer-git__link underline text-blue-400 hover:text-white dark:hover:text-black"
            href='./CV-Daniel-Vasquez.pdf'
            download
          >
            CV
            <LogoDownload className="w-7 h-7 text-blue-400" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main