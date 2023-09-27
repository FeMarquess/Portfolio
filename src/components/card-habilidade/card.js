import React from "react";
import "./card.css"

const Card = ({image, title, text}) => {
    return(
        <div className="card">
            <img src={image} alt={title} />
            <p>{text}</p>
        </div>
    )
}

export default Card;