import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Slider from "../../components/slider";

function Home(){
    
    return (
        <div className="container flex flex-col">
            <Header />
            <Slider />
                <main className="">
                    <div className="flex flex-col w-screen h-screen bg-violet-200 items-center">

                            <h3 className="text-black text-2xl font-bold mt-10">Maria turbantes apresenta produtos que não vão sair da sua cabeça!</h3>

                            <div className="mt-10 w-screen justify-center">
                                <p className="flex flex-col text-xl text-xl items-center"> A loja de produtos Maria Turbantes tem o prazer de apresentar o novo site. <br/> Aqui você vai poder ver todas as nossas peças e poder entrar em contato para reservar seu pedido</p>    
                            </div>

                                <div className="flex flex-col items-end">
                                    <img src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Abacaxi descolado" style={{height: 400, width: 600, marginTop: 50, display: "flex"}}/>

                                    <button className="mt-6 mr-0 bg-stone-800 text-white text-base w-36 h-12 px-4 rounded-lg">
                                        <Link to="produtos" className="textBtn"><p>Ver produtos</p></Link>
                                    </button>
                                </div>
                    </div>
                </main>
            <Footer extend={false}/>
        </div>
    );
}

export default Home;