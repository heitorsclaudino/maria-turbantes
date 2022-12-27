import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Produtos from './pages/nossosProdutos';
import QuemSomos from './pages/quemSomos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={ <Home /> } />
        <Route path='produtos' element={ <Produtos /> } />
        <Route path='quem-somos' element={ <QuemSomos /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
