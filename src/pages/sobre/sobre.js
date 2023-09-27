import React from "react";
import "./sobre.css"
import Selfie from "../../imagens/selfie.png";

const Sobre = () => {
    return (
        <div className="sobre-wrapper">
            <section className="informacoes-wrapper">
                <img src={Selfie} alt="minha foto" title="Minha foto" />
                <section className="texto-wrapper">
                    <h1>Desenvolvedor <br />Front-end.</h1>
                    <p>
                        Eu sou o Felipe, um Dev. Front-end apaixonado por tecnologia, adoro resolver problemas,
                        essa área me permite colocar todas as minhas ideias em prática, me permitindo
                        aprender novas tecnologias. Curso <b>Análise e desenvolvimento de sistemas</b> e na minha tragetória
                        aprendi tecnologias como <b>CSS, HTML, JavaScript, React</b> e estou
                        estudando <b>Node.js e PostgreSQL</b> para me tornar um Dev. Full-stack.
                    </p>
                </section>
            </section>
        </div>
    )
}

export default Sobre;