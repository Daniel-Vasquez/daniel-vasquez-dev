import { useState } from 'react';
import { BtnShowSections } from './BtnShowSections';
import './styles/HamburgerMenu.css'

export const HamburgerMenu = ({ references }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClickBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id='hamburger'>
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={handleMenuClickBtn}
      >
        <div className="_layer -top"></div>
        <div className="_layer -mid"></div>
        <div className="_layer -bottom"></div>
      </div>
      <div onClick={handleMenuClickBtn} className={`menuppal ${isOpen ? 'is_active' : ''}`}>
        <div className='section-list'>
          {references.map(({ title, icon, handleSectionClick, nameSection }, index) => (
            <BtnShowSections
              key={index}
              title={title}
              icon={icon}
              nameSection={nameSection}
              handleSectionClick={handleSectionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
