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
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nome || formData.nome.length < 3) {
      newErrors.nome = "Nome completo deve ter pelo menos 3 caracteres.";
    }

    if (!formData.whatsapp || !/^[0-9]{10,}$/.test(formData.whatsapp)) {
      newErrors.whatsapp =
        "Informe um WhatsApp válido (somente números, mínimo 10 dígitos).";
    }

    if (
      !formData.email ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Informe um e-mail válido.";
    }

    if (!formData.endereco) newErrors.endereco = "Endereço atual é obrigatório.";
    if (!formData.antt) newErrors.antt = "Número da ANTT é obrigatório.";
    if (!formData.renavam) newErrors.renavam = "Número do Renavam é obrigatório.";
    if (!formData.placa) newErrors.placa = "Placa do veículo é obrigatória.";
    if (!formData.banco) newErrors.banco = "Banco é obrigatório.";
    if (!formData.agencia) newErrors.agencia = "Agência é obrigatória.";
    if (!formData.conta) newErrors.conta = "Número da conta é obrigatório.";
    if (!formData.pix) newErrors.pix = "Chave Pix é obrigatória.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // ��� Bloqueia o envio se houver erros
    }

    setErrors({});
    console.log("Formulário Transportador enviado:", formData);
    alert("Cadastro de Transportador enviado com sucesso!");

    setFormData({
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
    });
    setSubmitted(false);
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

        <div className="grid grid-cols-1 gap-4">
          {[
            { name: "nome", placeholder: "Nome Completo *" },
            { name: "whatsapp", placeholder: "Whatsapp *" },
            { name: "email", placeholder: "E-mail *" },
            { name: "endereco", placeholder: "Endereço Atual *" },
            { name: "antt", placeholder: "Número da ANTT *" },
            { name: "renavam", placeholder: "Número do Renavam *" },
            { name: "placa", placeholder: "Placa do Veículo *" },
            { name: "banco", placeholder: "Banco *" },
            { name: "agencia", placeholder: "Agência *" },
            { name: "conta", placeholder: "Número da Conta *" },
            { name: "pix", placeholder: "Chave Pix *" },
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.name === "email" ? "email" : "text"}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
              {submitted && errors[field.name] && (
                <p className="text-red-600 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Uploads obrigatórios */}
        <div className="mt-6">
          <label className="block font-semibold">
            Comprovante de Residência (Obrigatório)
          </label>
          <input type="file" className="border p-2 rounded w-full" required />

          <label className="block font-semibold mt-4">
            Foto do Transportador (Obrigatório)
          </label>
          <input type="file" className="border p-2 rounded w-full" required />

          <label className="block font-semibold mt-4">
            Foto da Frente do Veículo (Placa visível - Obrigatório)
          </label>
          <input type="file" className="border p-2 rounded w-full" required />

          <label className="block font-semibold mt-4">
            Foto da Traseira do Veículo (Placa visível - Obrigatório)
          </label>
          <input type="file" className="border p-2 rounded w-full" required />

          <label className="block font-semibold mt-4">
            Documento do Veículo (se arrendado/alugado) *
          </label>
          <p className="text-xs text-gray-500">
            Obrigatório apenas em caso de arrendamento, aluguel ou similares
            legalmente aceitos.
          </p>
          <input type="file" className="border p-2 rounded w-full" required />
        </div>

        {/* Documentos Opcionais */}
        <div className="mt-8">
          <p className="font-semibold text-blue-700">
            Documentos Opcionais:
            <span className="text-gray-600 text-sm">
              {" "}
              (Se cadastrados abaixo, a plataforma usará somente para monitorar e
              enviará alertas antecipados de vencimento, e no dia do vencimento).
            </span>
          </p>

          <label className="block mt-4">CNH (Opcional)</label>
          <input type="file" className="border p-2 rounded w-full" />

          <label className="block mt-4">RG (Opcional)</label>
          <input type="file" className="border p-2 rounded w-full" />

          <label className="block mt-4">CPF (Opcional)</label>
          <input type="file" className="border p-2 rounded w-full" />

          <label className="block mt-4">Outros Documentos (Opcional)</label>
          <input type="file" className="border p-2 rounded w-full" />
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
