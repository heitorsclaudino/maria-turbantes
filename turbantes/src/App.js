import Rotas from './routes';

import ProviderProdutos from './contexts/productsContext';

function App() {
  return (
    <ProviderProdutos>
      <Rotas />
    </ProviderProdutos>
  );
}

export default App;
