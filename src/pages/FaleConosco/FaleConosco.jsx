import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FaleConoscoComponent from "../../components/FaleConoscoComponent/FaleConoscoComponent";
import FaleConoscoFundo from "../../components/FaleConoscoFundo/FaleConoscoFundo";
import Informacoes from "../../components/Informacoes/Informacoes";
import Style from './faleconosco.module.css'; // Importando o CSS

function FaleConosco() {
    return (
        <>
            <Header />
            <main >
                <FaleConoscoFundo /> {/* Mantido na mesma posição e sem alteração */}
                <div className={Style.contentContainer}>
                    <div className={Style.InformacoesContainer}>
                    <Informacoes />
                    </div>
                    

                    <div className={Style.FaleConoscoComponentContainer}>
                    <FaleConoscoComponent />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default FaleConosco;
