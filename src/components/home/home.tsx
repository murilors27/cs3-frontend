import React from 'react';
import './home.css';
import Header from '../header';

const Home: React.FC = () => {
  return (
    <div className="container">
      {/* Contêiner principal */}
      < Header titulo = 'Chevotech'/>
      <div className="main_container">
        {/* Contêiner principal do conteúdo */}
        <div>
          <h2 className="title">
            OpalaVision:<br />
            {/* Título secundário */}
            O futuro da <br />
            {/* Quebra de linha */}
            detecção ao <br />
            {/* Quebra de linha */}
            seu alcance.
          </h2>
          <div className="button_container">
            {/* Contêiner do botão */}
            <a href="./pages/opalavision.html" className="button">
              {/* Botão */}
              <span>Conheça o</span>
              {/* Texto do botão */}
              <span>OpalaVision</span>
              {/* Texto do botão */}
            </a>
          </div>
        </div>
      </div>
      <footer>
        {/* Rodapé */}
        <p className="text_footer">© 2024 - Todos os Direitos Reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
