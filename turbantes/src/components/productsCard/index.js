import React from "react";
import { useContext, useState } from "react";
import { ProdutosContext } from "../../App";
import "./style.css"

export default function Card(props){
    const { products } = useContext(ProdutosContext);
    const produtos = products[0];

    const [pochetes, setPochetes] = useState(false);
    const [faixas, setFaixas] = useState(false);

    let verifica = props.pochetes ? setPochetes(true) : null;
    verifica = props.faixas ? setFaixas(true) : null;

    if(props.turbantes){
        return(
            <div className="cards-box">
                {produtos.turbantes.map((item, i) => {
                    
                    console.log(item, i);
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

    if(props.faixas){
        return(
            <div className="cards-box">
                {produtos.faixas.map((item, i) => {
                    
                    console.log(item, i);
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
     
    if (props.pochetes){
        return(
            <div className="cards-box">
                {produtos.pochetes.map((item, i) => {
                    
                    console.log(item, i);
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