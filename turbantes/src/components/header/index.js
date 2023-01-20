import { Link } from "react-router-dom";
import "./style.css"

function Header(){
    return (
        <nav className="navbar">
            <div className="marca">
                <img src="https://images.pexels.com/photos/5901052/pexels-photo-5901052.jpeg?auto=compress&cs=tinysrgb&w=600" alt="mulher bonita"></img>
                <h1 className="logo">Maria Turbantes</h1>
            </div>
            <ul className="list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/produtos">Nossos produtos</Link></li>
                <li className="nav-item"><Link to="/quem-somos">Quem Somos</Link></li>
            </ul>
        </nav>
    );
}

export default Header;