import React from "react";
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="card-container">
        <h4>{props.Categoria}</h4>
        <p>{props.textoCategoria}</p>
        </div>
    )
}

export default CardPequeno;
