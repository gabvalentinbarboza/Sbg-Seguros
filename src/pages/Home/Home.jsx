import React from "react";
import { Link } from 'react-dom';
import Styles from './home.module.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import SaibaMais from "../../components/SaibaMais/SaibaMais.jsx";
import NossosProdutos from "../../components/NossosProdutos/NossosProdutos.jsx";
import FaleConoscoComponent from "../../components/FaleConoscoComponent/FaleConoscoComponent.jsx";

function Home() {
    return (
        <>
            <Header />
            <main>
                <SaibaMais />
                <NossosProdutos />
                <FaleConoscoComponent />
            </main>
            <Footer />
        </>
    );
}

export default Home;