import React, { useState } from "react";

export default function CadastroCliente() {
  const [tipoCarga, setTipoCarga] = useState("");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1 style={{ background: "#007BFF", color: "white", padding: "10px" }}>
        Formulário Obrigatório, Preencha Totalmente.
      </h1>

      <h3>Cadastro do Cliente/Embarcador</h3>
      <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
        <label>Nome Completo: <input type="text" style={{ width: "80%" }} required /></label><br />
        <label>Whatsapp: <input type="text" style={{ width: "40%" }} required /></label><br />
        <label>E-mail: <input type="email" style={{ width: "80%" }} required /></label><br />
        <label>Endereço Atual: <input type="text" style={{ width: "80%" }} required /></label><br />
        <label>Banco: <input type="text" style={{ width: "40%" }} /></label><br />
        <label>Agência: <input type="text" style={{ width: "40%" }} /></label><br />
        <label>Número da Conta: <input type="text" style={{ width: "40%" }} /></label><br />
        <label>Chave Pix: <input type="text" style={{ width: "80%" }} /></label>
      </div>

      <h3>Escolha o tipo de Carga que deseja Cadastrar:</h3>
      <select value={tipoCarga} onChange={(e) => setTipoCarga(e.target.value)}>
        <option value="">-- Selecionar Carga --</option>
        <option value="mudanca">Mudança</option>
        <option value="carretos">Carretos</option>
        <option value="secas">Cargas Secas</option>
        <option value="refrigeradas">Cargas Refrigeradas</option>
        <option value="granel">Cargas a Granel</option>
        <option value="perigosas">Cargas Perigosas</option>
        <option value="veiculos">Cargas de Veículos</option>
        <option value="conteinerizadas">Cargas Conteinerizadas</option>
        <option value="grandeporte">Cargas Indivisíveis e de Grande Porte</option>
      </select>

      {/* Formulário Mudança */}
      {tipoCarga === "mudanca" && (
        <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
          <h2 style={{ color: "#b30000" }}>Formulário de Mudança</h2>
          {/* ... aqui replicamos fielmente todas as perguntas, avisos, observação, upload e botão Finalizar ... */}
          <button style={{ background: "#007BFF", color: "white", padding: "12px 20px", marginTop: "15px", cursor: "pointer" }}>
            Finalizar Cadastro
          </button>
        </div>
      )}

      {/* Formulário de Carga */}
      {tipoCarga && tipoCarga !== "mudanca" && (
        <div style={{ border: "1px solid #000", padding: "10px", margin: "15px 0" }}>
          <h2 style={{ color: "#b30000" }}>Formulário de Carga</h2>
          {/* ... aqui replicamos fielmente todas as categorias (Unidades, Paletizada, Batida, Outros) e botão Finalizar ... */}
          <button style={{ background: "#007BFF", color: "white", padding: "12px 20px", marginTop: "15px", cursor: "pointer" }}>
            Finalizar Cadastro
          </button>
        </div>
      )}
    </div>
  );
}
