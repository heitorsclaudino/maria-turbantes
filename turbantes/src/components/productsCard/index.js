import React from "react";
import { useContext } from "react";
import { ProdutosContext } from "../../App";
import "./style.css"

export default function Card(){
    const { products } = useContext(ProdutosContext);
    const produtos = products[0];

    return(
        <div className="cards-box">
            {produtos.map((item, i) => {
                
                console.log(item, i);
                return(
                    <div className="card-container" key={i}>
                        <img src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=600" className="product-img"></img>

                        <span>Nome:</span>  <p>{item.name}</p>
                        <span>Descrição:</span>  <p>{item.desc}</p>
                        <span>Preço:</span>  <p>{item.valor}</p>                        
                    </div>
                );
            })}
        </div>
    ); 
        

    
}