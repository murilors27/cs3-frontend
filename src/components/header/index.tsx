import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="nav_container">
      <Link className="nav_container_title" to="/">CHEVOTECH</Link>
      <Link className="nav_container_options" to="/criadores">CRIADORES</Link>
      <Link className="nav_container_options" to="/login">LOGIN</Link> {/* Link para a página de login */}
      <Link className="nav_container_options" to="/cadastro">CADASTRE-SE</Link> {/* Link para a página de cadastro */}
    </header>
  );
};


export default Header;
