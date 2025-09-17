import React from "react";
import { DollarSign, TrendingUp, Users, Gift, Shield, Banknote } from "lucide-react";

const AffiliateBenefits = () => {
  const benefits = [
    {
      icon: Banknote,
      title: "Comissões por Transportes Realizados",
      description: "Divulgue os seus links e ganhe comissões a cada transporte feito via seus links de divulgações.",
    },
    {
      icon: DollarSign,
      title: "Pagamento Direto",
      description: "Receba seus pagamentos diretamente em sua conta bancária.",
    },
    {
      icon: TrendingUp,
      title: "Renda Escalável",
      description: "Aumente sua renda conforme mais clientes e transportadores se cadastrarem através do seu link de afiliado.",
    },
    {
      icon: Users,
      title: "Rede de Indicações",
      description: "Indique transportadores e clientes e receba uma porcentagem de todas as operações que realizarem.",
    },
    {
      icon: Gift,
      title: "Plano de Fidelidade",
      description: "Quanto mais transportes são realizados através de seus links, mais você poderá ganhar! Acumule transportes via suas indicações e desbloqueie Bônus em dinheiro na plataforma",
    },
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Acompanhe relatórios detalhados sobre suas indicações, pagamentos e estatísticas de desempenho.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Benefícios para Afiliados</h2>
        <p className="text-center text-gray-600 mb-12">
          Conquiste ganhos extras indicando clientes e transportadores para a plataforma.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <benefit.icon className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliateBenefits;
