import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import Home from "./pages/home";
import Produtos from './pages/nossosProdutos';
import QuemSomos from './pages/quemSomos';
import Contato from './pages/contato';

export const ProdutosContext = createContext();

function App() {
  const products = useState({
    turbantes : [
      {
        name: 'Turbante amarelo',
        desc: 'desc',
        foto: 'foto',
        valor: '25'
      },
      {
        name: 'Turbante vermelho',
        desc: 'desc',
        foto: 'foto',
        valor: '25'
      }
    ],
    faixas : [
      {
        name: 'Faixinha preta',
        desc: 'desc',
        foto: 'foto',
        valor: '25'
      },
    ],
    pochetes : [
      {
        name: 'Pochete Jeans',
        desc: 'desc',
        foto: 'foto',
        valor: '40'
      },
    ],
  });
  
  return (
    <ProdutosContext.Provider value={ {products} }>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={ <Home /> } />
          <Route path='produtos' element={ <Produtos /> } />
          <Route path='quem-somos' element={ <QuemSomos /> } />
          <Route path='contato' element={ <Contato /> } />
        </Routes>
      </BrowserRouter>
    </ProdutosContext.Provider>
  );
}

export default App;
