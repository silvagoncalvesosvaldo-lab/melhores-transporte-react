import React from "react";
import { CheckCircle, Package, Wrench } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle size={32} />,
      title: "Profissionais Verificados",
      description: "Parceiros rigorosamente selecionados para garantir sua tranquilidade.",
    },
    {
      icon: <Package size={32} />,
      title: "Especialistas em Embalagem",
      description: "Mestres em proteger e acomodar seus bens com o máximo cuidado.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Equipamentos Completos",
      description: "De catracas, cintas e cordas a mantas, forros e outros materias, tudo para um transporte impecável.",
    },
  ];

  return (
    <section className="bg-[#0a1128] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Por que somos a <span className="text-purple-400">escolha certa?</span>
        </h2>
        <p className="text-lg mb-12">
         Além de todas as Vantagens e Benefícios acima citados à Clientes-Embarcadores, Motoristas-Transportadores e Afiliados-Divulgadores, sempre buscamos parcerias com 
         Pessoas e Empresas que queiram desempenhar bons trabalhos e concretizar ótimos negócios. Nossos parceiros de transporte não são apenas transportadores. São artesãos do cuidado, dedicados a tratar
          seus bens como se fossem deles. Essa dedicação justifica um valor justo por um serviço de
          excelência.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#1b1f3b] p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="text-purple-400 mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
