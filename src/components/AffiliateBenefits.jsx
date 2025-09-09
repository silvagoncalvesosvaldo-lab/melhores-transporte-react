import React from "react";
import { DollarSign, TrendingUp, Users, Gift, Shield, Banknote } from "lucide-react";

const AffiliateBenefits = () => {
  const benefits = [
    {
      icon: Banknote,
      title: "Pagamento Direto",
      description: "Receba seus pagamentos diretamente em sua conta bancária, assim que finalizarem transportes feitos via seus links de divulgações.",
    },
    {
      icon: DollarSign,
      title: "Comissões Atraentes",
      description: "Ganhe comissões a cada indicação bem-sucedida, com ganhos recorrentes enquanto os usuários utilizarem a plataforma.",
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
      title: "Bônus Exclusivos",
      description: "Receba prêmios extras e bonificações em campanhas e metas especiais para afiliados.",
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
