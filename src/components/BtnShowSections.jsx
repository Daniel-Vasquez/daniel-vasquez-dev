import BtnStyle from './styles/BtnShowSections.module.css'

export const BtnShowSections = ({ title, icon, handleSectionClick, nameSection }) => (
  <button
    className={`${BtnStyle['buttons-btn']} dark:bg-light`}
    onClick={() => handleSectionClick(nameSection)}
  >
    {icon ? <img src={icon} alt="Imagen del botón" width="30px" /> : null}
    <span className='font-semibold dark:text-black'>
      {title}
    </span>
  </button>
)
