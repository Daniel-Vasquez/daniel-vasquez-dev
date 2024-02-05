import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="headerContainer">
      <section className="headerContainer-title">
        {pathname.includes('/project/')
          ? (
            <a className="headerContainer-title__link" href="/">
              Inicio
            </a>
          )
          : (
            <h1 style={{margin: '0'}}>
              Daniel Vasquez
            </h1>
          )
        }
      </section>
      <section className="headerContainer-link">
        <Link
          className="headerContainer-link__github"
          to="https://github.com/Daniel-Vasquez"
          target="_blank"
        >
          Github
        </Link>
        <Link
          className="headerContainer-link__perfil"
          to="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
          target="_blank"
        >
          Linkedin
        </Link>
      </section>
    </header>
  );
}

export default Navbar;
