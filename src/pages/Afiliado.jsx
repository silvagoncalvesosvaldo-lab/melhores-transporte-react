import React, { useState } from "react";

export default function Afiliado() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    banco: "",
    agencia: "",
    conta: "",
    pix: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário Afiliado enviado:", formData);
    alert("Cadastro de Afiliado enviado com sucesso!");
  };

  return (
    <div className="flex justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-center text-lg font-bold mb-4">
          Cadastro de Afiliado
        </h2>

        <p className="text-sm text-gray-500 mb-2">Campos Obrigatórios</p>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome Completo *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="Whatsapp *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="banco"
            placeholder="Banco *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="agencia"
            placeholder="Agência *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="conta"
            placeholder="Número da Conta *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="pix"
            placeholder="Chave Pix *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="cidade"
            placeholder="Cidade onde reside *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="estado"
            placeholder="Estado *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded mt-6 hover:bg-green-700"
        >
          Cadastrar Afiliado
        </button>
      </form>
    </div>
  );
}
