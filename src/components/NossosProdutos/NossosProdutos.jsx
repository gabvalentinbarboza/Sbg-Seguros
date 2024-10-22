import React, { useState } from "react";
import Styles from './nossosprodutos.module.css';
import ModalNossosProdutos from '../ModalNossosProdutos/ModalNossosProdutos';  // Modal importado
import BeneficiosImg from '../../assets/BeneficiosIgm.png';
import NaoSeguraveisImg from '../../assets/NaoSeguraveisImg.png';
import RamosElementaresImg from '../../assets/RamosElementaresImg.png';
import FrotasImg from '../../assets/FrotasImg.png';
import AutomoveisImg from '../../assets/AutomoveisImg.png';
import MassificadosImg from '../../assets/MassificadosImg.png';
import GarantiaImg from '../../assets/GarantiaImg.png';
import AffinityImg from '../../assets/AffinityImg.png';

function NossosProdutos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const abrirModal = (titulo, topicos) => {
        setModalContent({ titulo, topicos });
        setModalOpen(true);
    };

    const fecharModal = () => {
        setModalOpen(false);
    };

    return (
        <section className={Styles.NossosProdutosContainer}>
            <h1 className={Styles.title}>Nossos Produtos</h1>
            <div className={Styles.productGrid}>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Benefícios', 
                   
                    [
                        'Acidentes Pessoais Coletivo',
                        'Gestão Ambulatorial & Saúde Ocupacional',
                        'Odontológico',
                        'Saúde Empresarial',
                        'Saúde PME & Individual',
                        'Seguro de Vida em Grupo & Individual',
                        'Seguro Previdência'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${BeneficiosImg})` }}></div>
                    <p className={Styles.productName}>Benefícios</p>
                </div>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Não Seguráveis', 
                  
                    [
                        'Farmácia',
                        'Vale Alimentação',
                        'Vale Combustível',
                        'Vale Transporte',
                        'Vale Refeição'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${NaoSeguraveisImg})` }}></div>
                    <p className={Styles.productName}>Não Seguráveis</p>
                </div>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Ramos Elementares', 
                 
                    [
                        'Aeronáutico',
                        'D&O / E&O',
                        'Obras de Arte',
                        'RC Profissional',
                        'Responsabilidade Civil',
                        'Riscos de Engenharia / Obra',
                        'Riscos Nomeados e Operacionais',
                        'Seguro de Crédito',
                        'Seguro Residencial',
                        'Seguro Náutico',
                        'Seguro Fiança Locatícia',
                        'Seguro Transporte',
                        'Maquinários Agrícolas'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${RamosElementaresImg})` }}></div>
                    <p className={Styles.productName}>Ramos Elementares</p>
                </div>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Frotas', 
                    
                    [
                        'Frotas de Caminhões',
                        'Frotas de Veículos'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${FrotasImg})` }}></div>
                    <p className={Styles.productName}>Frotas</p>
                </div>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Automóveis', 
              
                    [
                        'Seguro Automóvel',
                        'Transporte'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${AutomoveisImg})` }}></div>
                    <p className={Styles.productName}>Automóveis</p>
                </div>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Massificados', 
            
                    [
                        'Garantia Estendida',
                        'Seguro Celular',
                        'Seguro Educacional',
                        'Seguro Pet'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${MassificadosImg})` }}></div>
                    <p className={Styles.productName}>Massificados</p>
                </div>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Garantia', 
               
                    [
                        'Depósito Recursal',
                        'Seguro Garantia',
                        'Seguro Patrimonial'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${GarantiaImg})` }}></div>
                    <p className={Styles.productName}>Garantia</p>
                </div>
                <div className={Styles.productBox} onClick={() => abrirModal(
                    'Affinity', 
                
                    [
                        'Garantia Estendida',
                        'Seguro Celular',
                        'Seguro Educacional',
                        'Seguro Pet'
                    ]
                )}>
                    <div className={Styles.icon} style={{ backgroundImage: `url(${AffinityImg})` }}></div>
                    <p className={Styles.productName}>Affinity</p>
                </div>
            </div>

            {modalOpen && (
                <ModalNossosProdutos
                    titulo={modalContent.titulo}
                    topicos={modalContent.topicos}
                    onClose={fecharModal}
                />
            )}
        </section>
    );
}

export default NossosProdutos;
