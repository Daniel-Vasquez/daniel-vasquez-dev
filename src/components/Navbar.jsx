import { createSignal, createEffect } from "solid-js";
import { Link } from "react-router-dom";
import { Toggle } from "./Togggle";
import { DropdownMenu } from "./DropdownMenu"

function Navbar() {
  const [darkMode, setDarkMode] = createSignal(false);

  createEffect(() => {
    document.body.classList.toggle("dark", darkMode());
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode())
  }

  return (
    <header className="flex justify-between p-4 fixed top-0 right-0 left-0 z-50 bg-black dark:bg-white">
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link
              className="text-white font-bold text-xl hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="text-white font-bold text-xl hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
              to="/proyectos"
            >
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>

      <section className="rounded-lg  block md:hidden">
        <DropdownMenu />
      </section>
      <div className="hidden gap-4 sm:flex">
        <Link
          className="text-white font-bold text-xl hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
          to="https://github.com/Daniel-Vasquez"
          target="_blank"
        >
          Github
        </Link>

        <Link
          className="text-white font-bold text-xl hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
          to="https://www.linkedin.com/in/daniel-vasquez-nepomuceno/"
          target="_blank"
        >
          Linkedin
        </Link>

      </div>
      <Toggle
        handleDarkMode={handleDarkMode}
      />
    </header>
  );
}

export default Navbar;
