import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contato() {
    const [feedback, setFeedback] = useState('');

    return(
        <div className="w-screen h-full bg-violet-200 flex flex-col items-center">
            <Header />
                <div className="flex flex-col items-center justify-center bg-stone-100 w-3/6 h-full rounded-md mt-16 mb-4 p-2">
                    <div className="w-full h-full flex flex-col items-center">
                        <p className="mt-10 text-xl font-semibold font-mono">Ficou interessada por algum produto? Entre em contato conosco!</p>
                            <div className="flex">
                                <button >
                                    <a href="https://www.instagram.com/maria.turbantes/" className='flex flex-row justify-between items-center w-24 h-14 mt-2 mr-3'> <BsInstagram /> Instagram</a>
                                </button>
                                <button>
                                    <a href="https://api.whatsapp.com/send?phone=5511962251597" className='flex flex-row justify-between items-center w-24 h-14 mt-2 ml-3'> <BsWhatsapp /> WhatsApp</a>
                                </button>
                            </div>
                        <p className="m-5 text-xl font-semibold font-mono">Quer fechar uma parceria ou contato profissional? Envie-nos um <a href='https://www.google.com' className="text-violet-600 font-sans"><i>e-mail</i></a></p>

                        <p className="m-5 mt-3 text-xl font-semibold font-mono">
                            Apontamentos e sugestões também são muito bem-vindos. Envie o seu feedback!
                        </p>
                        
                        <textarea placeholder="Deixe seu feedback aqui, isso ajuda a melhorar a sua experiência com o site!" className="w-full h-64 resize-none p-4" value={feedback} onChange={(event) => {
                            setFeedback(event.target.value);
                        }}
                        ></textarea>

                        <button className="mt-6 rounded-xl bg-stone-800 font-semibold text-xl text-stone-300 w-40 h-16" onClick={() => console.log(feedback)}>Enviar</button>
                    </div>
                </div>

                <Footer />
        </div>
    )
}