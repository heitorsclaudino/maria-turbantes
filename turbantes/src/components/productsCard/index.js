import React from "react";
import { useContext, useState } from "react";
import { ProdutosContext } from "../../App";
import "./style.css"

export default function Card(props) {
    const { products } = useContext(ProdutosContext);
    console.log(products);
    const turbantes = products[0];
    const pochetes = products[1];
    const faixas = products[2];

    if(props.produto === "turbante"){
        return(
            <div className="cards-box">
                {turbantes.map((item, i) => {
                    return(
                        <div className="card-container" key={i}>
                            <img src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Turbante vinho" className="product-img"></img>
        
                            <span>Nome:</span>  <p>{item.name}</p>
                            <span>Descrição:</span>  <p>{item.desc}</p>
                            <span>Preço:</span>  <p>{item.valor}</p>                        
                        </div>
                    );
                })}
            </div>
        );
    }

    if(props.produto === "faixa"){
        return(
            <div className="cards-box">
                {faixas.map((item, i) => {
                    return(
                        <div className="card-container" key={i}>
                            <img src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Turbante vinho" className="product-img"></img>
        
                            <span>Nome:</span>  <p>{item.name}</p>
                            <span>Descrição:</span>  <p>{item.desc}</p>
                            <span>Preço:</span>  <p>{item.valor}</p>                        
                        </div>
                    );
                })}
            </div>
        );
    }

    if(props.produto === "pochete"){
        return(
            <div className="cards-box">
                {pochetes.map((item, i) => {
                    return(
                        <div className="card-container" key={i}>
                            <img src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Turbante vinho" className="product-img"></img>
        
                            <span>Nome:</span>  <p>{item.name}</p>
                            <span>Descrição:</span>  <p>{item.desc}</p>
                            <span>Preço:</span>  <p>{item.valor}</p>                        
                        </div>
                    );
                })}
            </div>
        );
    }
        
    }
    