import React from "react";
import { useContext, useState } from "react";
import "./style.css"

import { ProdutosContext } from "../../contexts/productsContext";

export default function Card(props) {
    const { produtos } = useContext(ProdutosContext);
    

    if(props.produto === "turbante"){
        return(
            <div className="cards-box">
                {produtos[0].turbantes.map((item, i) => {
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
                {produtos[0].faixas.map((item, i) => {
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
                {produtos[0].pochetes.map((item, i) => {
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
    