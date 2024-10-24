import React from "react";
import Style from './faleconosco.module.css';
import FundoImg from '../../assets/FaleConoscoFundo.webp';

function FaleConoscoFundo() {
    return (

        <section className={Style.faleConoscoFundoContainer}>
            <div className={Style.TextContainer}>
                <h1 className={Style.Title}>CENTRAL DE ATENDIMENTO</h1>
                <p className={Style.Text}>Entre em contato agora e receba atendimento imediato!</p>
            </div>

        </section>
    )

}

export default FaleConoscoFundo; 