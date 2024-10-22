import React from "react";
import Styles from './missaovisaovalores.module.css';

function MissaoVisaoValores() {
    return (
        <section className={Styles.MissaoVisaoValoresContainer}>
            <article className={Styles.TextContainer}>
                <div className={Styles.ItemContainer}>
                    <h1 className={Styles.Title}>
                        Missão
                    </h1>
                    <p className={Styles.Text}>
                    Desenvolver e disponibilizar produtos e soluções em seguros, adequados às necessidades dos clientes, com agilidade e segurança. 
                    </p>
                </div>
                <div className={Styles.ItemContainer}>
                    <h1 className={Styles.Title}>
                        Visão
                    </h1>
                    <p className={Styles.Text}>
                    Crescer de maneira sustentável e consolidar a perenidade da companhia, além de oferecer as melhores soluções aos clientes.
                    </p>
                </div>
                <div className={Styles.ItemContainer}>
                    <h1 className={Styles.Title}>
                        Valores
                    </h1>
                    <p className={Styles.Text}>
                    Trabalhar com ética, transparência, profissionalismo, qualidade, inovação, parceria e respeito em todos os relacionamentos.
                    </p>
                </div>
                <div className={Styles.ItemContainer}>
                    <h1 className={Styles.Title}>
                        No que acreditamos
                    </h1>
                    <p className={Styles.Text}>
                    Manter uma equipe qualificada para atendimento personalizado nos traz a capacidade de atender clientes de cada empresa. 
                    </p>
                </div>
            </article>
        </section>
    );
}

export default MissaoVisaoValores;