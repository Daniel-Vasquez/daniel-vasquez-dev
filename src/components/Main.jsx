import { Link } from "react-router-dom";
import logoGithub from "../images/logo-github.png";
import logoWhats from "../images/logo-whatsapp.png";
import logoEmail from "../images/logo-correo.png";
import logoPdf from "../images/file.png";
import personalImage from "../images/daniel-black.png";
import './styles/Main.css'

function LinkWithImage({ linkClassName, url, text, imgClassName, img }) {
  return (
    <Link
      className={linkClassName}
      to={ url }
      target="_black"
      title={text}
    >
      {text}
      <img className={imgClassName} src={img} alt="Image" />
    </Link>
  );
}

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-container__img" title='Linkedin'>
        <LinkWithImage
          url="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
          imgClassName="main-containerImg"
          img={personalImage}
        />
      </div>
      <div className="main-container__description dark:bg-white">
        <div className="typewriter">
          <h1 className="typewriter-text">
            Hola, soy{" "}
            <span className="main-container__span">Daniel Vásquez</span>.
            <span className="typewriter-text__span">&#160;</span>
          </h1>
        </div>
        <p className="main-container__paragraphs">
          Soy <span>Desarrollador Frontend</span>, poseo una
          sólida experiencia en programación de alrededor de un año,
          durante el cual he trabajado en proyectos desafiantes utilizando
          lenguajes de programación como <span>Python</span> y herramientas de servicios
          en la nube de AWS, como: S3 y Cloudwatch. Además,
          he trabajado con los hooks de <span>React</span>, tales como: useState, useEffect
          y useContext. Soy apasionado por el diseño web y
          siempre estoy en busca de nuevas oportunidades para aprender y
          mejorar mis habilidades como desarrollador.
        </p>
        <LinkWithImage
          linkClassName="main-container__mail"
          url="mailto:dani.vasquez.dev@gmail.com"
          text="¿Trabajamos juntos?"
          imgClassName="main-mail__logo"
          img={logoEmail}
        />
        <div className="containerLinks">
          <LinkWithImage
            linkClassName="mainContainer-whats__link"
            url="https://api.whatsapp.com/send?phone=525531483433"
            text="whatsApp"
            imgClassName="mainContainer-whats__img"
            img={logoWhats}
          />
          <LinkWithImage
            linkClassName="mainContainer-git__link"
            url="https://github.com/Daniel-Vasquez"
            text="Github"
            imgClassName="mainContainer-git__img"
            img={logoGithub}
          />
          <a
            className="mainContainer-git__link"
            href='./CV-Daniel-Vasquez.pdf'
            download
          >
            CV
            <img
              className='mainContainer-git__img'
              src={logoPdf}
              alt="Logo pdf"
              title="CV (pdf)"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main