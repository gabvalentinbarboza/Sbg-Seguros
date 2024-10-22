import React, { useState } from 'react';
import Styles from './faleconoscocomponent.module.css'; // Importando o CSS como um módulo


const FaleConoscoComponent = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Telefone:', telefone);
        console.log('Mensagem:', mensagem);
        setNome('');
        setEmail('');
        setTelefone('');
        setMensagem('');
    };

    return (
        <section className={Styles.FaleConoscoContainer}>
            <h1 className={Styles.FaleConoscoTitulo}>Fale Conosco</h1>
            <form className={Styles.forms} onSubmit={handleSubmit}>
                <label className={Styles.label} htmlFor="nome">Nome</label>
                <input
                    className={Styles.input}
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    required
                />
                
                <label className={Styles.label} htmlFor="email">E-mail</label>
                <input
                    className={Styles.input}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    required
                />
                
                <label className={Styles.label} htmlFor="telefone">Telefone</label>
                <input
                    className={Styles.input}
                    type="tel"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder="Digite seu telefone"
                    required
                />
                
                <label className={Styles.label} htmlFor="mensagem">Mensagem</label>
                <textarea
                    className={Styles.textarea}
                    id="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                    required
                />
                
                <button className={Styles.buttom_solicitar} type="submit">
                    SOLICITAR
                </button>
            </form>
        </section>
    );
};

export default FaleConoscoComponent;
