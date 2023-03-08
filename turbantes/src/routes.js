import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import QuemSomos from "./pages/quemSomos";
import Produtos from "./pages/nossosProdutos";
import Contato from "./pages/contato";


export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' index element={ <Home /> } />
                <Route path='produtos' element={ <Produtos /> } />
                <Route path='quem-somos' element={ <QuemSomos /> } />
                <Route path='contato' element={ <Contato /> } />
            </Routes>
      </BrowserRouter>
    );
};