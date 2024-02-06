import { createSignal, createEffect } from "solid-js";
import { Link, useLocation } from "react-router-dom";
import { Toggle } from "./Togggle";
import "./styles/Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = createSignal(false);

  createEffect(() => {
    document.body.classList.toggle("dark", darkMode());
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode())
  }

  const { pathname } = useLocation();

  return (
    <header className="headerContainer fixed top-0 right-0 left-0 z-50 bg-black dark:bg-white">
      <section className="headerContainer-title text-2xl font-bold">
        {pathname.includes('/proyecto/') && (
          <a className="headerContainer-title__link text-lg dark:text-black" href="/proyectos">
            Volver a proyectos
          </a>
        )}
        {pathname.includes('/proyectos') && (
          <a href="/" className="text-white dark:text-black" style={{ margin: '0' }}>
            Inicio
          </a>
        )}
        {pathname === '/' && (
          <h1 className="text-white dark:text-black" style={{ margin: '0' }}>
            Daniel Vasquez
          </h1>
        )}
      </section>
      <section className="headerContainer-link">
        <Link
          className="headerContainer-link__github dark:text-black"
          to="https://github.com/Daniel-Vasquez"
          target="_blank"
        >
          Github
        </Link>
        <Link
          className="headerContainer-link__perfil dark:text-black"
          to="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
          target="_blank"
        >
          Linkedin
        </Link>
      </section>
      <Toggle
        handleDarkMode={handleDarkMode}
      />
    </header>
  );
}

export default Navbar;
