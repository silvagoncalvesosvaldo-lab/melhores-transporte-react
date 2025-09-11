import React, { useState } from "react";

export default function Transportador() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    endereco: "",
    antt: "",
    renavam: "",
    placa: "",
    banco: "",
    agencia: "",
    conta: "",
    pix: "",
    comprovanteResidencia: null,
    fotoTransportador: null,
    fotoFrenteVeiculo: null,
    fotoTraseiraVeiculo: null,
    documentoVeiculo: null,
    cnh: null,
    rg: null,
    cpf: null,
    outrosDocs: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Cadastro enviado com sucesso!");
  };

  return (
    <div className="flex justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-center text-lg font-bold mb-4">
          Cadastro de Transportador
        </h2>

        <p className="text-sm text-gray-500 mb-2">Campos Obrigatórios</p>

        {/* Dados pessoais */}
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
            name="endereco"
            placeholder="Endereço Atual *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="antt"
            placeholder="Número da ANTT *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="renavam"
            placeholder="Número do Renavam *"
            required
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="placa"
            placeholder="Placa do Veículo *"
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
        </div>

        {/* Documentos Obrigatórios */}
        <h3 className="mt-6 font-semibold text-gray-700">
          Documentos Obrigatórios
        </h3>
        <div className="grid grid-cols-1 gap-4 mt-2">
          <label className="text-sm font-medium">
            Comprovante de Residência *
            <input
              type="file"
              name="comprovanteResidencia"
              required
              onChange={handleChange}
              className="block mt-1"
            />
          </label>

          <label className="text-sm font-medium">
            Foto do Transportador *
            <input
              type="file"
              name="fotoTransportador"
              required
              onChange={handleChange}
              className="block mt-1"
            />
          </label>

          <label className="text-sm font-medium">
            Foto do Veículo - Frente (Placa visível) *
            <input
              type="file"
              name="fotoFrenteVeiculo"
              required
              onChange={handleChange}
              className="block mt-1"
            />
          </label>

          <label className="text-sm font-medium">
            Foto do Veículo - Traseira (Placa visível) *
            <input
              type="file"
              name="fotoTraseiraVeiculo"
              required
              onChange={handleChange}
              className="block mt-1"
            />
          </label>

          <label className="text-sm font-medium">
            Documento do Veículo (se arrendado/alugado) *
            <span className="block text-xs text-gray-500">
              Obrigatório apenas em caso de arrendamento, aluguel ou similares.
            </span>
            <input
              type="file"
              name="documentoVeiculo"
              required
              onChange={handleChange}
              className="block mt-1"
            />
          </label>
        </div>

        {/* Documentos Opcionais */}
        <h3 className="mt-6 font-semibold text-gray-700">
          Documentos Opcionais:{" "}
          <span className="text-sm font-normal text-gray-600">
            (Se cadastrados abaixo, a plataforma usará somente para monitorar e
            enviará alertas antecipados de vencimento, e no dia do vencimento).
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-4 mt-2">
          <label className="text-sm font-medium">
            CNH
            <input
              type="file"
              name="cnh"
              onChange={handleChange}
              className="block mt-1"
            />
          </label>

          <label className="text-sm font-medium">
            RG
            <input
              type="file"
              name="rg"
              onChange={handleChange}
              className="block mt-1"
            />
          </label>

          <label className="text-sm font-medium">
            CPF
            <input
              type="file"
              name="cpf"
              onChange={handleChange}
              className="block mt-1"
            />
          </label>

          <label className="text-sm font-medium">
            Outros Documentos
            <input
              type="file"
              name="outrosDocs"
              onChange={handleChange}
              className="block mt-1"
            />
          </label>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-6 hover:bg-blue-700"
        >
          Cadastrar Transportador
        </button>
      </form>
    </div>
  );
}
