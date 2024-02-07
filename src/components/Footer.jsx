import React from "react";
import FooterLogos from "./FooterLogos";
import logoGithub from "../images/logo-github.png";
import logoWhats from "../images/logo-whatsapp.png";
import logoEmail from "../images/logo-correo.png";
import logoLinkedin from "../images/logo-linkedin.png";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="py-10 bg-gray-700 border-t-2 dark:border-t-2 dark:border-black dark:bg-white">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div>
          <ul className="wrapper flex flex-wrap justify-center list-none">
            <FooterLogos
              socialClassName="gitHub"
              url="https://github.com/Daniel-Vasquez"
              logo={logoGithub}
              name="GitHub"
            />
            <FooterLogos
              socialClassName="whatsApp"
              url="https://api.whatsapp.com/send?phone=525531483433"
              logo={logoWhats}
              name="WhatsApp"
            />
            <FooterLogos
              socialClassName="correo"
              url="mailto:dani.vasquez.dev@gmail.com"
              logo={logoEmail}
              name="Correo"
            />
            <FooterLogos
              socialClassName="linkedin"
              url="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
              logo={logoLinkedin}
              name="Linkedin"
            />
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
