import React from "react";
import {Link} from 'react-dom';
import Styles from './faleconosco.module.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import FaleConoscoComponent from '../../components/FaleConoscoComponent/FaleConoscoComponent';

function FaleConosco() {
    return(
        <>
        <Header />
        <main>
            <div className={Styles.Container}></div>
            <FaleConoscoComponent  className={Styles.FaleConoscoComponent}/>
        </main>
        <Footer />
        </>
    );
}

export default FaleConosco;