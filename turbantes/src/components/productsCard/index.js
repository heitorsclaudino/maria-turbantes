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
                <img className="product-img" src="https://images.pexels.com/photos/2952204/pexels-photo-2952204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div>

            <div className="detalhes">
                <span>Nome: </span> <p>{cardData.nome}</p>
                <span>Descrição: </span> <p>{cardData.desc}</p>
                <span>Preço: </span> <p>{cardData.valor}</p>
            </div> 
        </div>
    );
}