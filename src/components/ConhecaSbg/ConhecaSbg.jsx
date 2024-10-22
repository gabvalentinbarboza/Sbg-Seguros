import React from "react";
import Styles from './conhecasbg.module.css';
import FundoImg from '../../assets/ConhecaSbgImg.png';


function ConhecaSbg() {

    return (
        <section className={Styles.ConhecaSbgContainer}>


            <div className={Styles.TextContainer}>

                <p className={Styles.Text}>
                    Conheça a SBG Consultoria de Benefícios e<br />
                    Corretora de Seguros e veja como oferecemos<br />
                    as melhores soluções para você.
                </p>

            </div>


        </section>
    );
}

export default ConhecaSbg;