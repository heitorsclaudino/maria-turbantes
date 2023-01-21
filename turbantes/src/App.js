import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Produtos from './pages/nossosProdutos';
import QuemSomos from './pages/quemSomos';
import ProdutosContext from './contexts/produtos';


function App() {
  return (
    <ProdutosContext.Provider value={{ produtos : ['Turbante amarelo', 'Turbante vermelho'] }}>
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
