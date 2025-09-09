import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroCliente from "./pages/CadastroCliente";
import Logo from "./Logo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial com os botões */}
        <Route path="/" element={<Logo />} />

        {/* Página de cadastro do Cliente/Embarcador */}
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      </Routes>
    </Router>
  );
}

export default App;
