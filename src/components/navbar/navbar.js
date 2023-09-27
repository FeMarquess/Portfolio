import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import Imgbtn from "../image-button/imgbtn";
import Github from "../../imagens/github.jpg"
import Linkedin from "../../imagens/linkedin.png"
import Whatsapp from "../../imagens/whatsapp.png"
import DarkMode from "../dark-button/dark-button";

const Navbar = ({ classname }) => {
    return (
        <div className={classname}>
            <section className="linkbtn">
                <DarkMode />
                <Imgbtn
                    url="https://github.com/FeMarquess"
                    imagem={Github}
                    className="btn-github"
                    title="github"
                />
                <Imgbtn
                    url="https://www.linkedin.com/in/felipe-bueno-92b38521b/"
                    imagem={Linkedin}
                    className="btn-linkedin"
                    title="linkedin"
                />
                <Imgbtn
                    url="https://wa.me/19996508599"
                    imagem={Whatsapp}
                    className="btn-whatsapp"
                    title="whatsapp"
                />
            </section>
            <section className="links">
                <li><Link className="link" to="/">Sobre</Link></li>
                <li><Link className="link" to="Habilidades">Habilidades</Link></li>
                <li><Link className="link" to="Projetos">Projetos</Link></li>
            </section>
        </div>
    )
}

export default Navbar;