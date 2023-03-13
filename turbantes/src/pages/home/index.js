import { Link } from "react-router-dom";
import "./style.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

function Home(){
    
    return (
        <div className="container">
            <Header />
                <main className="principal">
                    <div className="img-container">
                        <img className="img" />
                            <h3>Maria turbantes apresenta produtos que não vão sair da sua cabeça!</h3>
                            <div className="central">
                                <p className="texto-central"> A loja de produtos Maria Turbantes tem o prazer de apresentar o novo site. <br/> Aqui você vai poder ver todas as nossas peças e reservar seu pedido</p>
                                
                                <button className="btnProdutos">
                                    <Link to="produtos" className="textBtn"><p>Ver produtos</p></Link>
                                </button>
                            </div>
                    </div>
                </main>
            <Footer />
        </div>
    );
}

export default Home;