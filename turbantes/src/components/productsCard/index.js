import React from "react";
import "./style.css"

export default function Card(props){
    const cardData = {
        nome: props.name,
        foto: props.foto,
        desc: props.desc,
        valor: props.valor
    };

    return (
        <div className="card-container">
            <div className="foto">
                <p>{cardData.foto}</p>
            </div>
            <div className="detalhes">
                <span>Nome: </span> <p>{cardData.nome}</p>
                <span>Descrição: </span> <p>{cardData.desc}</p>
                <span>Preço: </span> <p>{cardData.valor}</p>
            </div> 
        </div>
    );
}