import { useState } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Administradores() {
    return(
        <div className="flex flex-col items-center h-screen bg-violet-200">
            <Header />
            
            <div className="flex flex-row w-4/6 h-96 mb-20">
                <div className="w-3/6 flex flex-col items-center h-full rounded-lg mt-14 bg-stone-100 border-solid border-2 border-stone-900 mr-1">
                    <p className="font-semibold text-2xl font-mono mt-3">
                        Produtos
                    </p>
                    <div className="flex flex-col mt-16 w-full items-center">
                        <button className="mr-6 ml-6 bg-yellow-600 p-2 px-2 w-4/5 font-semibold">Adicionar um produto</button>
                        <button className="mt-6 mr-3 ml-3 bg-yellow-600 p-2 px2 w-4/5 font-semibold">Editar um produto</button>
                        <button className="mt-6 mr-3 ml-3 bg-red-700 p-2 px-2 w-4/5 font-semibold">Excluir um produto</button>
                    </div>
                </div>
                <div className="w-3/6 flex flex-col items-center h-full rounded-lg mt-14 bg-stone-100 border-solid border-2 border-stone-900 ml-1">
                    <p className="font-semibold text-2xl font-mono mt-3">
                        Eventos
                    </p>
                    <div className="flex flex-col mt-16 w-full items-center">
                        <button className="mr-6 ml-6 bg-yellow-600 p-2 px-2 w-4/5 font-semibold">Adicionar um evento</button>
                        <button className="mt-6 mr-3 ml-3 bg-red-700 p-2 px-2 w-4/5 font-semibold">Excluir um evento</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

//flex-row e flex-col tem relações diferentes com align-items: center e justify-content: center, por exemplo, se você quer centralizar algo em flex-row -> use o justify-center. Agora se você quer centralizar algo em flex-col -> use items-center.