import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/header";
import Footer from "../../components/footer";

function Produtos(){
    const [turbantes, setTurbantes] = useState('');
    const [faixas, setFaixas] = useState('');
    const [pochetes, setPochetes] = useState('');

    useEffect(() => {
        const getAllProducts = async () => {
           const resposta = await axios.get('http://localhost:8080');
           console.log(resposta);
        }
        getAllProducts();
    
    }, []);

    return (
        <div className="container">
            <Header />
               <div className="flex-col grid grid-cols-4 gap-4 px-20 mb-6 items-center w-screen bg-stone-100">

                <div className="col-span-4 flex justify-center m-10">
                    <h3 className="text-gray-800 font-bold text-xl"> Turbantes </h3>
                </div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    
                <div className="col-span-4 flex justify-center m-10">
                    <h3 className="text-gray-800 font-bold text-xl"> Faixas </h3>    
                </div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>


                <div className="col-span-4 flex justify-center m-10">
                    <h3 className="text-gray-800 font-bold text-xl"> Pochetes </h3>    
                </div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
                    <div className="bg-stone-600 w-full h-80"></div>
               </div>
            <div className="mt-10 bg-stone-400">
                <Footer/>
            </div>
        </div>
    );
}

export default Produtos;