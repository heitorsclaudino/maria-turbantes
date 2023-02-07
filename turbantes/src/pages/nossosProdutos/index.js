import { useContext } from "react";

import Header from "../../components/header";
import Card from "../../components/productsCard";
import { ProdutosContext } from "../../App";
import Footer from "../../components/footer";

function Produtos(){
    const { products } = useContext(ProdutosContext);
    //const produtos = products[0]; 

    return (
        <div className="container">
            <Header />
            <h3> Turbantes </h3>
                <Card turbantes={true}/>

            <h3> Faixas </h3>
                <Card faixas={true}/>

            <h3> Pochetes </h3>
                <Card pochetes={true}/>
            <Footer />
        </div>
    );
}

export default Produtos;