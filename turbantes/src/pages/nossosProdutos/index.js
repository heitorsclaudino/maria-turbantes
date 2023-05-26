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
               <div className="flex-col grid grid-cols-4 gap-4 px-20">

                <div className="col-span-4 flex justify-center m-10">
                    <h3 className="text-gray-800 font-bold text-xl"> Turbantes </h3>
                </div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    
                <div className="col-span-4 flex justify-center m-10">
                    <h3 className="text-gray-800 font-bold text-xl"> Faixas </h3>    
                </div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>


                <div className="col-span-4 flex justify-center m-10">
                    <h3 className="text-gray-800 font-bold text-xl"> Pochetes </h3>    
                </div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
                    <div className="bg-blue-900 w-full h-80"></div>
               </div>
            <Footer />
        </div>
    );
}

export default Produtos;