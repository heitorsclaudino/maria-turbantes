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
           const resposta = await axios.get('http://localhost:8080')
        //    console.log(resposta);
        }
        getAllProducts();
    
    }, []);

    return (
        <div className="w-screen h-full bg-violet-200">
            <Header />
               <div className="flex-col grid grid-cols-4 gap-4 px-20 mb-6 items-center h-full mb-8">

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
                
                <Footer/>
        </div>
    );
}

export default Produtos;