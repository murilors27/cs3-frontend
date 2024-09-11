import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"; // Importando o arquivo de estilos
import Home from "./pages/home";
import Criadores from "./pages/criadores";
import OpalaVision from "./pages/OpalaVision";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criadores" element={<Criadores/>}/>
          <Route path="/opalavision" element={<OpalaVision/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
