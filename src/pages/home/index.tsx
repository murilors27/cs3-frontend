import React from "react";
import "./home.css";
// import Header from '../header';
import { Link } from "react-router-dom";
import Container from "../../components/container";


const Home: React.FC = () => {
  return (
    <Container img="img01.jpg">
      {/* Contêiner principal */}
      {/* Contêiner principal do conteúdo */}

      <div className="main_container">
        <div>
          <p className="main_text">
            OpalaVision:<br />
            O futuro da <br />
            detecção ao <br />
            seu alcance.
          </p>
        </div>

        {/* Contêiner do botão */}
        <Link to="/opalavision" className="button">
          {/* Botão */}
          <span>Conheça o </span>
          {/* Texto do botão */}
          <span>OpalaVision</span>
          {/* Texto do botão */}
        </Link>
      </div>

    </Container>
  );
};

export default Home;
