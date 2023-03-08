import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contato() {
    return(
        <div>
            <Header />
                <h3>Ficou interessada por algum produto? Entre em contato conosco!</h3>
                <button>
                    <a href="https://www.instagram.com/maria.turbantes/">Instagram</a>
                </button>
                <button>
                    <a href="https://api.whatsapp.com/send?phone=5511962251597">WhatsApp</a>
                </button>
                {/* <button>
                    <Link to="administradores">Administração</Link> //problema na rota que é encaminhada errada pelo fato de nn estar na home
                </button> */}
            <Footer />
        </div>
    )
}