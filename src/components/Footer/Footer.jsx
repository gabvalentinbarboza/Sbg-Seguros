import React from "react";
import { Link } from 'react-router-dom';
import Styles from './footer.module.css';
import AddressIcon from '../../assets/AddressIcon.png';
import EmailIcon from '../../assets/EmailIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';
import Logo from '../../assets/Logo_SGB_Small.png';
import PhoneIcon from '../../assets/PhoneIcon.png';
import WhatsAppIcon from '../../assets/WhatsAppIcon.png';

function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.logoContainer}>
                <img src={Logo} alt="Logo SBG" className={Styles.logo} />
            </div>

            <nav className={Styles.navContainer}>
                <div className={Styles.navTitleContainer}>
                    <h1 className={Styles.navTitle}>SBG</h1>
                </div>
                <ul className={Styles.navList}>
                    <li className={Styles.navItem}>
                        <Link to="/" className={Styles.Links}>Home</Link>
                    </li>
                    <li className={Styles.navItem}>
                        <Link to="/Quem-Somos" className={Styles.Links}>Quem Somos</Link>
                    </li>
                    <li className={Styles.navItem}>
                        <Link to="/Fale-Conosco" className={Styles.Links}>Fale Conosco</Link>
                    </li>
                </ul>
            </nav>

            <nav className={Styles.navContainer}>
                <div className={Styles.navTitleContainer}>
                    <h1 className={Styles.navTitle}>Redes</h1>
                </div>
                <ul className={Styles.navList}>
                    <li className={Styles.navItem}>
                        <img src={LinkedInIcon} alt="LinkedIn" className={Styles.icon} />
                        <a href="https://www.linkedin.com/in/simone-sabbag-30330924" className={Styles.Links}>LinkedIn</a>
                    </li>
                    <li className={Styles.navItem}>
                        <img src={WhatsAppIcon} alt="WhatsApp" className={Styles.icon} />
                        <a href="https://wa.me/5511982040163" className={Styles.Links}>WhatsApp</a>
                    </li>
                    <li className={Styles.navItem}>
                        <img src={PhoneIcon} alt="Telefone" className={Styles.icon} />
                        <a href="tel:+5511982040163" className={Styles.Links}>Telefone</a>
                    </li>
                    <li className={Styles.navItem}>
                        <img src={EmailIcon} alt="E-mail" className={Styles.icon} />
                        <a href="mailto:simone.sabbag@sbgseguros.com.br" className={Styles.Links}>E-mail</a>
                    </li>
                </ul>
            </nav>

            <nav className={Styles.navContainer}>
                <div className={Styles.navTitleContainer}>
                    <h1 className={Styles.navTitle}>Escritório</h1>
                </div>
                <ul className={Styles.navList}>
                    <li className={Styles.navItem}>
                        <img src={AddressIcon} alt="Endereço" className={Styles.icon} />
                        <a href="https://maps.app.goo.gl/MzvgmXKc5Vcyr36c6" className={Styles.Links}>
                        Rua Bom Sucesso, 220  - Tatuapé - Edifício Platina 220 - 03305-000 - SP

                        </a>
                    </li>
                </ul>
            </nav>

            <div className={Styles.rigths}>
                <p className={Styles.rigthsPhrase}>© SBG Seguros 2024. Todos os Direitos Reservados</p>
            </div>

        </footer>
    );
}

export default Footer;

