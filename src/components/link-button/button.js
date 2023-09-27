import React from "react";

const Button = ({ url, className, content }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <button className={className}>{content}</button>
        </a>
     )
}

export default Button;