import React from 'react';
import Styles from './modalnossosprodutos.module.css';
import CloseIcon from '../../assets/CloseImg.png';  // Importe o ícone

function ModalNossosProdutos({ titulo, topicos, onClose }) {
    return (
        <div className={Styles.modalOverlay}>
            <div className={Styles.modalContainer}>
                <h2 className={Styles.modalTitle}>{titulo}</h2>

                <div className={Styles.modalTopicos}>
                    {topicos && topicos.map((topico, index) => (
                        <div key={index} className={Styles.topico}>
                            <p>• {topico}</p> {/* Usando um ponto como marcador */}
                        </div>
                    ))}
                </div>

                <button className={Styles.closeButton} onClick={onClose}>
                    <img src={CloseIcon} alt="Fechar" width="60px" height="60px" />
                </button>
            </div>
        </div>
    );
}

export default ModalNossosProdutos;
