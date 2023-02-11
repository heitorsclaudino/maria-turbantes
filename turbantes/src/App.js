import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import Home from "./pages/home";
import Produtos from './pages/nossosProdutos';
import QuemSomos from './pages/quemSomos';
import Contato from './pages/contato';

export const ProdutosContext = createContext();

function App() {
  const [turbantes, setTurbantes] = useState( 
      [{
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
      }]);

  const [pochetes, setPochetes] = useState([
    {
      name : 'Pochete vinho',
      desc : 'Pochete de cintura',
      foto : 'foto',
      valor : '45'
    },
  ]);

  const [faixas, setFaixas] = useState([
    {
      name : 'Faixa aramada preta e branca',
      desc : 'descrição do produto',
      foto : 'foto',
      valor : '30'
    },
  ]);
  
  const [products, setProducts] = useState([ turbantes, pochetes, faixas]);

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
