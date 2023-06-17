import { Link } from "react-router-dom";

function Header(){
    return (
    <nav className="bg-stone-800 w-screen h-28 flex justify-between items-center px-3">
            <div className="flex justify-between items-center">
                <img src="https://images.pexels.com/photos/5901052/pexels-photo-5901052.jpeg?auto=compress&cs=tinysrgb&w=600" alt="mulher bonita" className="w-20 h-20 ml-3"></img>
                <h1 className="ml-3 text-gray-100 font-semibold text-lg">Maria Turbantes</h1>
            </div>
            <ul className="flex flex-row no-underline text-gray-100">
                <li><Link className="mr-3" to="/">Home</Link></li>
                <li><Link className="mr-3" to="/produtos">Nossos produtos</Link></li>
                <li><Link className="mr-3" to="/quem-somos">Quem Somos</Link></li>
                <li><Link className="mr-3" to="/eventos">Eventos</Link></li>
                <li><Link className="mr-3" to="/contato">Contato</Link></li>
                <li><Link className="mr-3" to="/administradores">Administração</Link></li>
            </ul>
        </nav>
    );
}

export default Header;