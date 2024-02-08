import BtnStyle from '../../components/styles/BtnShowSections.module.css'
import { LogoHome } from "../../icons/LogoHome"
import { LogoProjects } from "../../icons/LogoProjects"
import { LogoInstagram } from "../../icons/LogoInstagram"
import { LogoStar } from "../../icons/LogoStar"

export const OptionsButtons = ({ handleSectionClick }) => {
  return (
    <div className="flex flex-col gap-4 sticky top-1/4">
      <button
        className={`${BtnStyle['buttons-btn']} dark:bg-light`}
        onClick={() => handleSectionClick("showHome")}
      >
        <LogoHome className="w-7 h-7 text-white font-black dark:text-black" />
        <span className='font-semibold dark:text-black'>
          Acerca de mi
        </span>
      </button>

      <button
        className={`${BtnStyle['buttons-btn']} dark:bg-light`}
        onClick={() => handleSectionClick("showProjects")}
      >
        <LogoProjects className="w-7 h-7 text-orange-300 font-black" />
        <span className='font-semibold dark:text-black'>
          Proyectos
        </span>
      </button>

      <button
        className={`${BtnStyle['buttons-btn']} dark:bg-light`}
        onClick={() => handleSectionClick("showProjectInsta")}
      >
        <LogoInstagram className="w-7 h-7 text-pink-600 font-black" />
        <span className='font-semibold dark:text-black'>
          Replica de Instagram
        </span>
      </button>

      <button
        className={`${BtnStyle['buttons-btn']} dark:bg-light`}
        onClick={() => handleSectionClick("showFeaturedProjects")}
      >
        <LogoStar className="w-7 h-7 text-yellow-400 font-black" />
        <span className='font-semibold dark:text-black'>
          Proyectos destacados
        </span>
      </button>
    </div>
  )
}
