import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './header.module.css'; // Importando o CSS específico do header
import Logo from '../../assets/Logo_SGB_Small.png'; // Caminho para o logo
import MenuIcon from '../../assets/MenuIcon.png'; // Caminho para o ícone de menu
import CloseIcon from '../../assets/CloseIconBranco.png'; // Caminho para o ícone de fechar

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <img src={Logo} alt="Logo SBG" className={Style.logo} />
      </div>
      {/* Ícone de Menu - Movido para fora da tag <nav> */}
      <img
        src={isMenuOpen ? CloseIcon : MenuIcon}
        alt="Menu"
        className={`${Style.icon} ${Style.menuIcon}`} 
        onClick={toggleMenu}
      />
      <nav className={Style.navContainer + (isMenuOpen ? ` ${Style.active}` : '')}>
        <ul className={Style.ulHeader}>
          <li className={Style.navItem}>
            <Link to="/" className={Style.Links}>Home</Link>
          </li>
          <li className={Style.navItem}>
            <Link to="/Quem-Somos" className={Style.Links}>Quem Somos</Link>
          </li>
          <li className={Style.navItem}>
            <Link to="/Fale-Conosco" className={Style.Links}>Fale Conosco</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
