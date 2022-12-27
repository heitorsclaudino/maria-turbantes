import { Link } from "react-router-dom";
import "./style.css"

function Header(){
    return (
        <nav className="navbar">
            <h2 className="logo">Maria Turbantes</h2>
            <ul>
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/produtos">Nossos produtos</Link></li>
                <li className="nav-item"><Link to="/quem-somos">Quem Somos</Link></li>
            </ul>
        </nav>
    );
}

export default Header;