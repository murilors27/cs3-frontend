import React from "react"
import { Link } from "react-router-dom"
import "./header.css"


const Header: React.FC = () => {
  return (
    <header className="nav_container">
        {/* Barra de navegação */}
        <Link className="main_title" to="/">CHEVOTECH</Link>
        {/* Título principal */}
        <Link className="creators" to="/criadores">CRIADORES</Link>
        {/* Link para a página de criadores */}
    </header>
  )
}

export default Header