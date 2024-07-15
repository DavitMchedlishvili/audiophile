
import React, { Dispatch } from 'react';
import "./hamburger.css"

type Props = {
  burgerIsOpen: boolean;
  setBurgerIsOpen: Dispatch<React.SetStateAction<boolean>>;
};


// this is hamburger menu


const Hamburger: React.FC<Props> = ({ burgerIsOpen, setBurgerIsOpen }) => {
  const toggleMenu = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <div className={`hamburger ${burgerIsOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
