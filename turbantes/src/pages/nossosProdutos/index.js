import { useContext } from "react";

import Header from "../../components/header";
import Card from "../../components/productsCard";
import Footer from "../../components/footer";

import { ProdutosContext } from "../../contexts/productsContext";

function Produtos(){
    const { produtos } = useContext(ProdutosContext);
    
    

    return (
        <div className="container">
            <Header />
                <h3> Turbantes </h3>
                { produtos[0].turbantes !== 0 ? <Card produto="turbante"/> : <p> Não há turbantes disponíveis no momento. </p> }
                    
                <h3> Faixas </h3>
                    { produtos[0].faixas !== 0 ? <Card produto="faixa" /> : <p> Não há faixas disponíveis no momento.</p> }
                <h3> Pochetes </h3>
                    { produtos[0].pochetes !== 0 ? <Card produto="pochete" /> : <p> Não há pochetes disponíveis no momento. </p>}
            <Footer />
        </div>
    );
}

export default Produtos;