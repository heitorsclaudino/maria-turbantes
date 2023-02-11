import { useContext } from "react";

import Header from "../../components/header";
import Card from "../../components/productsCard";
import { ProdutosContext } from "../../App";
import Footer from "../../components/footer";

function Produtos(){
    const { products } = useContext(ProdutosContext);
    const turbantes = products[0];
    const pochetes = products[1];
    const faixas = products[2];

    return (
        <div className="container">
            <Header />
            <h3> Turbantes </h3>
            { turbantes.lenght !== 0 ? <Card produto={turbantes}/> : <p> Não há turbantes disponíveis no momento. </p> }
                
            <h3> Faixas </h3>
                { faixas.lenght !== 0 ? <Card produto={faixas} /> : <p> Não há faixas disponíveis no momento.</p> }
            <h3> Pochetes </h3>
                { pochetes.lenght !== 0 ? <Card produto={pochetes} /> : <p> Não há pochetes disponíveis no momento. </p>}
            <Footer />
        </div>
    );
}

export default Produtos;