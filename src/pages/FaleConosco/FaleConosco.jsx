import React from "react";
import {Link} from 'react-dom';
import Styles from './faleconosco.module.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import FaleConoscoComponent from '../../components/FaleConoscoComponent/FaleConoscoComponent';
import FaleConoscoFundo from "../../components/FaleConoscoFundo/FaleConoscoFundo";

function FaleConosco() {
    return(
        <>
        <Header />
        <main>
        <FaleConoscoFundo />
            <FaleConoscoComponent  className={Styles.FaleConoscoComponent}/>
        </main>
        <Footer />
        </>
    );
}

export default FaleConosco;