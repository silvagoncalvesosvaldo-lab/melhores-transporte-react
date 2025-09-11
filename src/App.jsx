import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CadastroCliente from "./pages/CadastroCliente";
import Transportador from "./pages/Transportador";
import Afiliado from "./pages/Afiliado";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<CadastroCliente />} />
        <Route path="/transportador" element={<Transportador />} />
        <Route path="/afiliado" element={<Afiliado />} />
      </Routes>
    </Router>
  );
}

export default App;
