import { useContext } from "react";

import Header from "../../components/header";
import Card from "../../components/productsCard";
import ProdutosContext from "../../contexts/produtos";

function Produtos(){
    const { produtos } = useContext(ProdutosContext);
    console.log(produtos) 
    return (
        <div className="container">
            <Header />
            <Card name="Turbante amarelo" foto="xxx" desc="Bla bla bla" valor="25,00"/>
        </div>
    );
}

export default Produtos;