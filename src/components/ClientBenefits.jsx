import React from "react";
import { CreditCard, RefreshCw, Truck, Gift, Shield, Users } from "lucide-react";

const ClientBenefits = () => {
  const benefits = [
    {
      icon: <Truck className="w-10 h-10 text-blue-400" />,
      title: "Anuncie Gratuitamente",
      description: "Anuncie sua carga ou mudança sem custo e encontre transportadores de forma rápida e segura.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-blue-400" />,
      title: "Pagamento Seguro",
      description:
        "Seu dinheiro fica 100% protegido em garantia e só é liberado 70% do valor total para o transportador, após a confirmação do carregamento, sendo liberado os 30% restantes após confirmação no ato da entrega.",
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-blue-400" />,
      title: "Pagamento Flexível",
      description: "Pague com Pix à vista ou parcele no cartão de crédito em até 12x com juros.",
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-400" />,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe sua carga do início ao fim com total visibilidade e tranquilidade.",
    },
    {
      icon: <Gift className="w-10 h-10 text-blue-400" />,
      title: "Plano de Fidelidade",
      description: "Quanto mais você usa, mais você ganha! Acumule fretes e desbloqueie descontos progressivos.",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-400" />,
      title: "Indique e Ganhe",
      description: "Convide amigos para a plataforma e receba bônus quando eles realizarem o primeiro frete.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Vantagens para <span className="text-blue-500">Clientes</span>
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Contrate com segurança, ganhe recompensas e tenha a melhor experiência de transporte.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientBenefits;
