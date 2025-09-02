import "../style/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../img/LogoWHI.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      {/* Links */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">Início</Link>
        <Link to="/about" className="nav-link">Sobre</Link>
        <Link to="/projects" className="nav-link">Projetos</Link>
      </div>
    </nav>
  );
}
