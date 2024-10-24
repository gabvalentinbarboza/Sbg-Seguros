import React from "react";
import Style from './informacoes.module.css';

import AddressIcon from '../../assets/AddressIcon.png';
import EmailIcon from '../../assets/EmailIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';
import PhoneIcon from '../../assets/PhoneIcon.png';
import WhatsAppIcon from '../../assets/WhatsAppIcon.png';
import InstagramIcon from '../../assets/InstagramIcon.png';

function Informacoes() {
    return (
        <section className={Style.InformacoesContainer}>

            <div className={Style.contactGroup}>
                <h1 className={Style.contactTitle}>Contato</h1>
                <ul className={Style.contactList}>
                    <li className={Style.contactItem}>
                        <a className={Style.contactLink} href="https://wa.me/5511982040163" target="_blank" rel="noopener noreferrer">
                            <img src={WhatsAppIcon} alt="WhatsApp" className={Style.contactIcon} />
                            <span className={Style.contactText}>WhatsApp</span>
                        </a>
                    </li>
                    <li className={Style.contactItem}>
                        <a className={Style.contactLink} href="tel:113132-1142">
                            <img src={PhoneIcon} alt="Telefone" className={Style.contactIcon} />
                            <span className={Style.contactText}>Telefone</span>
                        </a>
                    </li>
                    <li className={Style.contactItem}>
                        <a className={Style.contactLink} href="mailto:simone.sabbag@sbgseguros.com.br">
                            <img src={EmailIcon} alt="E-mail" className={Style.contactIcon} />
                            <span className={Style.contactText}>E-mail</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={Style.socialGroup}>
                <h1 className={Style.socialTitle}>Siga-nos</h1>
                <ul className={Style.socialList}>
                    <li className={Style.socialItem}>
                        <a className={Style.socialLink} href="https://www.linkedin.com/in/simone-sabbag-30330924" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className={Style.socialIcon} />
                            <span className={Style.socialText}>LinkedIn</span>
                        </a>
                    </li>
                    <li className={Style.socialItem}>
                        <a className={Style.socialLink} href="https://www.instagram.com/sbg_seguros?igsh=NzRvZTR0Y3l2bHN5" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="Instagram" className={Style.socialIcon} />
                            <span className={Style.socialText}>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={Style.officeGroup}>
                <h1 className={Style.officeTitle}>Escritório</h1>
                <ul className={Style.officeList}>
                    <li className={Style.officeItem}>
                        <a className={Style.officeLink} href="https://maps.app.goo.gl/MzvgmXKc5Vcyr36c6" target="_blank" rel="noopener noreferrer">
                            <img src={AddressIcon} alt="Endereço" className={Style.officeIcon} />
                            <span className={Style.officeText}>Rua Bom Sucesso, 220 - Tatuapé, SP</span>
                        </a>
                    </li>
                </ul>
            </div>

        </section>
    );
}

export default Informacoes;
