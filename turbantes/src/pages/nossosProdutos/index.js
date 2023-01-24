import { useContext } from "react";

import Header from "../../components/header";
import Card from "../../components/productsCard";
import { ProdutosContext } from "../../App";
import Footer from "../../components/footer";

function Produtos(){
    const { products } = useContext(ProdutosContext);
    const produtos = products[0]; 

    return (
        <div className="container">
            <Header />
                <Card />
            <Footer />
        </div>
    );
}

export default Produtos;