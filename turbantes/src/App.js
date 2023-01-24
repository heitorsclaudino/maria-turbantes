import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import Home from "./pages/home";
import Produtos from './pages/nossosProdutos';
import QuemSomos from './pages/quemSomos';

export const ProdutosContext = createContext();

function App() {
  const products = useState([
    {
      name: 'Turbante amarelo',
      desc: 'desc',
      foto: 'foto',
      valor: '25,00'
    },
    {
      name: 'Turbante vermelho',
      desc: 'desc',
      foto: 'foto',
      valor: '25,00'
    }
  ]);
  
  return (
    <ProdutosContext.Provider value={ {products} }>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={ <Home /> } />
          <Route path='produtos' element={ <Produtos /> } />
          <Route path='quem-somos' element={ <QuemSomos /> } />
        </Routes>
      </BrowserRouter>
    </ProdutosContext.Provider>
  );
}

export default App;
