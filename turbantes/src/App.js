import React, { useState } from 'react';
import { createContext } from 'react';

import Rotas from './routes';

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
      <Rotas />
    </ProdutosContext.Provider>
  );
}

export default App;
