import React from "react"
import { Link } from "react-router-dom"
import './header.css'

type headerProps = {
    titulo: string;
}

const Header: React.FC < headerProps > = ({titulo}) => {
  return (
    <header className="nav_container">
        {/* Barra de navegação */}
        <h1 className="main_title">{titulo}</h1>
        {/* Título principal */}
        <Link className="creators" to="/criadores">CRIADORES</Link>
        {/* Link para a página de criadores */}
    </header>
  )
}

export default Header