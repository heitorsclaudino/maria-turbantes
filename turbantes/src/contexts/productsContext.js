import { createContext, useState } from "react";

export const ProdutosContext = createContext({});

export default function ProviderProdutos({children}){
    const produtos = useState({ 
        turbantes: [
            {
                name: 'Turbante amarelo',
                desc: 'desc',
                foto: 'foto',
                valor: '25'
            },
            {
                name: 'Turbante vermelho',
                desc: 'desc',
                foto: 'foto',
                valor: '25'
            }
        ], 
        pochetes: [], 
        faixas: [
            {
                name : 'Faixa aramada preta e branca',
                desc : 'descrição do produto',
                foto : 'foto',
                valor : '30'
            }, {}
        ] });
    
    return (
        <ProdutosContext.Provider value={{produtos}}>
            { children }
        </ProdutosContext.Provider>
    );
}