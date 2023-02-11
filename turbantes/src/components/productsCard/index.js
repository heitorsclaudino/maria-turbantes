import React from "react";
import { useContext, useState } from "react";
import { ProdutosContext } from "../../App";
import "./style.css"

export default function Card(props) {
    const { products } = useContext(ProdutosContext);

    return (
        <div className="cards-box">
            { props.produto.forEach((produto) => {
                return (
                <div className="card-container">
                    <img src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Turbante vinho" className="product-img"/>

                    <span>Nome: </span> <p>{produto.name}</p>
                    <span>Descrição: </span> <p>{produto.desc}</p>
                    <span>Preço: </span> <p>R$ {produto.valor}</p>
                </div>
                ); 
            })}
        </div>
    );
        // return(
        //         <div className="cards-box">
        //             {turbantes.map((item, i) => {
        //                 return(
        //                     <div className="card-container" key={i}>
        //                         <img src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Turbante vinho" className="product-img"></img>
            
        //                         <span>Nome:</span>  <p>{item.name}</p>
        //                         <span>Descrição:</span>  <p>{item.desc}</p>
        //                         <span>Preço:</span>  <p>{item.valor}</p>                        
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //     );
    }
    