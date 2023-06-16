import React from 'react';
import { Link } from 'react-router-dom';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contato() {
    return(
        <div className="w-screen h-screen bg-stone-400 flex flex-col items-center">
            <Header />
                <div className="flex flex-col items-center justify-center bg-gray-200 w-2/6 h-56 rounded-md mt-20 mb-20 p-2">
                    <h3>Ficou interessada por algum produto? Entre em contato conosco!</h3>
                        <button >
                            <a href="https://www.instagram.com/maria.turbantes/" className='flex flex-row justify-between items-center w-[108px] mt-2'> <BsInstagram /> Instagram</a>
                        </button>
                        <button>
                            <a href="https://api.whatsapp.com/send?phone=5511962251597" className='flex flex-row justify-between items-center w-[108px] mb-2'> <BsWhatsapp /> WhatsApp</a>
                        </button>
                    <p>Quer fechar uma parceria ou contato profissional? Envie-nos um <a href='https://www.google.com'>e-mail</a></p>
                </div>
            <div className="mb-0 h-full">
                <div className="mb-0">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}