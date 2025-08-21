import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Projetos from "./pages/Projetos/projetos";
import Sobre from "./pages/Sobre/sobre";
import Tecnologias from "./pages/Tecnologias/tecnologias";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
