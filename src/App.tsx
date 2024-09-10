import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import './index.css'; // Importando o arquivo de estilos

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
