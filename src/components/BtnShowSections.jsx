import BtnStyle from './styles/BtnShowSections.module.css'

export const BtnShowSections = ({ title, icon, handleSectionClick, nameSection }) => (
  <button className={BtnStyle['buttons-btn']} onClick={() => handleSectionClick(nameSection)}>
    {icon ? <img src={icon} alt="Imagen del botón" width="30px" /> : null}
    {title}
  </button>
)
