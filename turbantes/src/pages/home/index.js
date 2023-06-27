import { Link } from "react-router-dom";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Slider from "../../components/slider";

function Home(){
    
    return (
        <div className="w-full flex flex-col h-full bg-violet-200">
            <Header />
                <main className="mb-20">
                    <div className="flex flex-col items-center">

                            <h3 className="text-black text-2xl font-bold mt-10">Maria turbantes apresenta produtos que não vão sair da sua cabeça!</h3>

                            <div className="mt-10 w-screen flex flex-col items-center">
                                <p className=" text-2xl w-3/5">
                                    <div className="font-semibold">
                                        O site da loja de produtos Maria Turbantes está de volta e vem com tuuuudo!
                                    </div>
                                    Navegue pelo site e sinta-se a vontade para olhar produtos, entrar em contato e/ou mandar um feedback! Por enquanto, nosso sistema ainda <strong>não</strong> tem suporte a pagamentos com cartões e envio pelos correios, mas isso pode ser tratado entrando em contato diretamente no nosso <i>WhatsApp</i> exibido na <Link className="text-violet-600 font-semibold" to="/contato"> página de contato</Link>. 
                                </p>    
                            </div>

                                <div className="flex flex-col items-end">
                                    <img src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Abacaxi descolado" style={{height: 400, width: 600, marginTop: 50, display: "flex"}}/>

                                    <button className="mt-6 mr-0 bg-stone-800 text-white text-base w-36 h-12 px-4 rounded-lg">
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