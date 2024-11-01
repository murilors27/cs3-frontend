import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import "./index.css"; // Importando o arquivo de estilos
import Home from "./pages/home"; // Rota para a página inicial
import Criadores from "./pages/criadores"; // Rota para criadores
import OpalaVision from "./pages/OpalaVision"; // Rota para OpalaVision
import Cadastro from "./pages/cadastro/cadastro"; // Rota para cadastro
import Login from "./pages/login/login"; // Rota para login

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página inicial */}
          <Route path="/criadores" element={<Criadores />} />
          <Route path="/opalavision" element={<OpalaVision />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
