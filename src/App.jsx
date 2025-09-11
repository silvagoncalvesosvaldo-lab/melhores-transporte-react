import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Transportador from "./pages/Transportador";
import Afiliado from "./pages/Afiliado";
import CadastroCliente from "./pages/CadastroCliente";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transportador" element={<Transportador />} />
        <Route path="/afiliado" element={<Afiliado />} />
        <Route path="/cliente" element={<CadastroCliente />} />
      </Routes>
    </BrowserRouter>
  );
}
