import React from "react";
import { Link } from "react-router-dom";


import './home.css';

export default function Home(){
    return(
        <div className="container">
            <nav className="header">
                **Logo** 
                <ul>
                    <li>
                        <Link to="/">Home</Link>   
                    </li>
                    <li>
                        <Link to="/produtos">Nossos Produtos</Link>
                    </li>
                </ul>
            </nav>
            <main></main>
            <footer className="footer">
                <p>Site oficial da Maria Turbantes. Todos os direitos reservados &copy;.</p>
            </footer>
        </div>
    )
};