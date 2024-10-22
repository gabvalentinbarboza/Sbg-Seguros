import React from "react";
import Styles from './institucional.module.css';
import FotoSimone from '../../assets/Foto_Simone.png'; // Certifique-se de que a imagem está no caminho correto

function Institucional() {
    return (
        <section className={Styles.InstitucionalContainer}>
            <article className={Styles.ArtigoContainer}>
                <div className={Styles.TitleContainer}>
                    <h1 className={Styles.Title}>Institucional</h1>
                </div>

                <div className={Styles.PhasesContainer}>
                    <p className={Styles.Phase}>
                        Simone Sabbag, sócia-fundadora da SBG Seguros, tem uma história de sucesso construída com mais de 25 anos de experiência na área.<br /><br /> A dedicação aos clientes trouxe um diferencial aos seus atendimentos, com acolhimento e profissionalismo.<br /><br />
                    </p>
                    <p className={Styles.Phase}>
                        A SBG atua em todos os ramos de seguros e tem orgulho em atender o mercado com agilidade e permanente busca pela excelência.<br /><br /><br /> Procuramos oferecer serviços de alta qualidade, com atendimento especializado e transparência nas relações com nossos clientes. O seu negócio é o nosso negócio.
                    </p>
                </div>
            </article>
            <div className={Styles.FotoSimoneContainer}>
                <img src={FotoSimone} alt="Simone Sabbag" className={Styles.FotoSimone} />
            </div>
        </section>
    );
}

export default Institucional;
