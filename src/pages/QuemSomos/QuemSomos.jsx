import React from "react";
import {Link} from 'react-dom';
import Styles from './quemsomos.module.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import ConhecaSbg from "../../components/ConhecaSbg/ConhecaSbg";
import Institucional from "../../components/Institucional/Institucional";
import MissaoVisaoValores from "../../components/MissaoVisaoValores/MissaoVisaoValores";

function QuemSomos() {
    return(
        <>
        <Header />
        <main>
            <ConhecaSbg />
            <Institucional />
            <MissaoVisaoValores />
        </main>
        <Footer />
        </>
    );
}

export default QuemSomos;