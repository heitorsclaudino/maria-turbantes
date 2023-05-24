import { Link } from "react-router-dom";
import "../style.css";

function Header(){
    return (
        <nav className="bg-red-700">
            <div className="marca">
                <img src="https://images.pexels.com/photos/5901052/pexels-photo-5901052.jpe?auto=compress&cs=tinysrgb&w=600" alt="mulher bonita" className=""></img>
                <h1 className="logo">Maria Turbantes</h1>
            </div>
            <ul className="list">
                <li className="nav-item"><Link className="linkPage" to="/">Home</Link></li>
                <li className="nav-item"><Link className="linkPage" to="/produtos">Nossos produtos</Link></li>
                <li className="nav-item"><Link className="linkPage" to="/quem-somos">Quem Somos</Link></li>
                <li className="nav-item"><Link className="linkPage" to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Header;