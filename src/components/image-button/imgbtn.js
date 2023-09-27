import React from "react";
import "./imgbtn.css"

const Imgbtn = ({ imagem, className, title, url }) => {
    return (
        <div className="infobtn">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button id={className}>
                    <img className="img" src={imagem} alt={title} />
                </button>
            </a>
        </div>
    )
}

export default Imgbtn;