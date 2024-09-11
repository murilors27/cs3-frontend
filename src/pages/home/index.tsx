import React from "react";
import "./home.css";
// import Header from '../header';
import { Link } from "react-router-dom";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <Container img="img01.jpg">
      {/* Contêiner principal */}
      {/* Contêiner principal do conteúdo */}
      <Header />
      <div className="main_container">
        <h2 className="title">
          OpalaVision: <br />
          {/* Título secundário */}
          O futuro da <br />
          {/* Quebra de linha */}
          detecção ao <br />
          {/* Quebra de linha */}
          seu alcance.
        </h2>
        {/* Contêiner do botão */}
        <Link to="/opalavision" className="button">
          {/* Botão */}
          <span>Conheça o </span>
          {/* Texto do botão */}
          <span>OpalaVision</span>
          {/* Texto do botão */}
        </Link>
      </div>
      <Footer/>
    </Container>
  );
};

export default Home;
