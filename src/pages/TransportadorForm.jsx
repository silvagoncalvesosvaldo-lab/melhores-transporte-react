import React, { useState } from "react";

const TransportadorForm = () => {
  const [veiculoProprio, setVeiculoProprio] = useState(true);

  return (
    <form>
      <h2>Cadastro de Transportador</h2>

      {/* Campos obrigatórios */}
      <label>Nome Completo *</label>
      <input type="text" required />

      <label>Whatsapp *</label>
      <input type="text" required />

      <label>Email *</label>
      <input type="email" required />

      <label>Endereço Atual *</label>
      <input type="text" required />

      <label>Número da ANTT *</label>
      <input type="text" required />

      <label>Número do Renavan *</label>
      <input type="text" required />

      <label>Placa do Veículo *</label>
      <input type="text" required />

      <label>Banco *</label>
      <input type="text" required />

      <label>Agência *</label>
      <input type="text" required />

      <label>Número da Conta *</label>
      <input type="text" required />

      <label>Chave PIX *</label>
      <input type="text" required />

      {/* Uploads obrigatórios */}
      <label>Foto do Transportador *</label>
      <input type="file" accept="image/*" required />

      <label>Foto da frente do veículo (placa visível) *</label>
      <input type="file" accept="image/*" required />

      <label>Foto da traseira do veículo (placa visível) *</label>
      <input type="file" accept="image/*" required />

      <label>Comprovante de Residência *</label>
      <input type="file" accept="image/*,.pdf" required />

      {/* Campo condicional obrigatório */}
      <label>
        O veículo está em seu nome?
      </label>
      <select
        value={veiculoProprio}
        onChange={(e) => setVeiculoProprio(e.target.value === "true")}
      >
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>

      {!veiculoProprio && (
        <div>
          <label>
            Caso o veículo não esteja em seu nome, envie aqui documento de
            contratação legalmente aceito *
          </label>
          <input type="file" accept="image/*,.pdf" required />
        </div>
      )}

      {/* Campos opcionais */}
      <label>CNH</label>
      <input type="file" accept="image/*,.pdf" />

      <label>RG</label>
      <input type="file" accept="image/*,.pdf" />

      <label>CPF</label>
      <input type="file" accept="image/*,.pdf" />

      <label>Outros Documentos</label>
      <input type="file" accept="image/*,.pdf" />
    </form>
  );
};

export default TransportadorForm;
