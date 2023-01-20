import Header from "../../components/header";
import Card from "../../components/productsCard";

function Produtos(){
    return (
        <div className="container">
            <Header />
            <Card name="Turbante amarelo" foto="xxx" desc="Bla bla bla" valor="25,00"/>
        </div>
    );
}

export default Produtos;