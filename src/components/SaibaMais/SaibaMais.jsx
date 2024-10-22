import React from "react";
import Styles from './saibamais.module.css';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/fundo_saibamais.png'; // Importe da imagem de fundo
import nextPageIcon from '../../assets/NextPageIcon.png'; // Importe do ícone

function SaibaMais() {
    return (
        <section className={Styles.saibaMaisContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={Styles.overlay}></div>
            <h1 className={Styles.excellenceText}>EXCELÊNCIA NÃO SE NEGOCIA.</h1>
            <Link to="/Quem-Somos" className={Styles.saibaMaisButton}>
                <span className={Styles.saibaMaisText}>Saiba mais sobre a SBG</span>
                {/* Ícone ao lado do texto */}
                <img src={nextPageIcon} alt="Ícone de próxima página" className={Styles.iconImage} />
            </Link>
        </section>
    );
}

export default SaibaMais;
