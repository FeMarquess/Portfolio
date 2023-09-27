import React from "react";
import "./habilidades.css"
import Imgreact from "../../imagens/react.png"
import CSS from "../../imagens/css.png"
import HTML from "../../imagens/html.png"
import Javascript from "../../imagens/js.png"
import Card from "../../components/card-habilidade/card";

const Habilidades = () => {
    return (
        <div className="habilidades-wrapper">
            <section className="habilidades">
                <Card
                    image={Imgreact}
                    title="imagem react"
                    text="Linguagem Front-end focada em reatividade na criação de páginas,
                visando a interatividade com o usuário"
                />
                <Card
                    image={CSS}
                    title="imagem css"
                    text="Usada para estilização, o CSS é focado em dar a forma e mudar a estitca
                     da pagina"
                />
                <Card
                    image={HTML}
                    title="imagem html"
                    text="É um linguagem de marcação onde você pode usar tags para criar a sua página
                Web"
                />
                <Card
                    image={Javascript}
                    title="imagem js"
                    text="Uma linguagem de programação utilizada pra criar aplicações com comportamento 
                interativo e mais complexo"
                />
            </section>
            </div>
    )
}

export default Habilidades;