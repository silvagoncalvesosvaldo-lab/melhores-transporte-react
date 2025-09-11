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

    if (!formData.banco) newErrors.banco = "Banco é obrigatório.";
    if (!formData.agencia) newErrors.agencia = "Agência é obrigatória.";
    if (!formData.conta) newErrors.conta = "Número da conta é obrigatório.";
    if (!formData.pix) newErrors.pix = "Chave Pix é obrigatória.";
    if (!formData.cidade) newErrors.cidade = "Cidade onde reside é obrigatória.";
    if (!formData.estado) newErrors.estado = "Estado é obrigatório.";

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
    console.log("Formulário Afiliado enviado:", formData);
    alert("Cadastro de Afiliado enviado com sucesso!");

    // Limpa o formulário
    setFormData({
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
    setSubmitted(false);
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
          {[
            { name: "nome", placeholder: "Nome Completo *" },
            { name: "whatsapp", placeholder: "Whatsapp *" },
            { name: "email", placeholder: "E-mail *" },
            { name: "banco", placeholder: "Banco *" },
            { name: "agencia", placeholder: "Agência *" },
            { name: "conta", placeholder: "Número da Conta *" },
            { name: "pix", placeholder: "Chave Pix *" },
            { name: "cidade", placeholder: "Cidade onde reside *" },
            { name: "estado", placeholder: "Estado *" },
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
