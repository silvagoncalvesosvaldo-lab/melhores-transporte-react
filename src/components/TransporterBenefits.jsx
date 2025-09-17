import React from "react";
import {
  CheckCircle,
  Users,
  Shield,
  Headphones,
  Gift,
  FileText,
  Star,
  Fuel,
  Truck,
} from "lucide-react";

const TransporterBenefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="text-blue-500" size={32} />,
      title: "Avisos de Novas Cargas",
      description:
        "Escolha os tipos de Carga e os Estados que deseja transportar, e receba avisos em seu e-mail ou WhatsApp assim que cadastrarem uma nova carga em nossa plataforma.",
    },
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: "Pagamento Garantido",
      description:
        "Segurança ao receber, com pagamento direto em sua conta bancária. Ao confirmar o carregamento receba 70% do valor total combinado, os 30% restante receba após confirmação no ato da entrega.",
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Oportunidades Reais",
      description:
        "Tenha acesso a diversos clientes/embarcadores em todo o Brasil, com ofertas de fretes atualizadas em tempo real.",
    },
    {
      icon: <Shield className="text-blue-500" size={32} />,
      title: "Plano de Fidelidade",
      description:
        "Quanto mais você realiza Transportes, mais poderá ganhar! Acumule transportes e desbloqueie Bônus em dinheiro na plataforma.",
    },
    {
      icon: <Headphones className="text-blue-500" size={32} />,
      title: "Sugestões de Apoio em Rota",
      description:
        "Dicas de rotas e sugestões de pontos para refeições, assistência, descanso etc..",
    },
    {
      icon: <Gift className="text-blue-500" size={32} />,
      title: "Programa de Afiliados",
      description:
        "Divulgue seus links e ganhe ainda mais indicando Motoristas, Empresas embarcadoras, Mudanças e outros tipos de cargas para a plataforma.",
    },
    {
      icon: <Fuel className="text-blue-500" size={32} />,
      title: "Controle de Custos da Viagem",
      description:
        "Ferramentas para calcular pedágios, combustível e demais despesas, garantindo maior rentabilidade.",
    },
    {
      icon: <FileText className="text-blue-500" size={32} />,
      title: "Gestão de Documentos",
      description:
        "Caso queira, preencha alguns campos com dados e nossa plataforma pode monitorar vencimentos de documentos, de forma prática e segura.",
    },
    {
      icon: <Star className="text-yellow-500" size={32} />,
      title: "Sistema de Ranking",
      description:
        "Transportadores bem avaliados recebem destaque, aumentando as chances de novos contratos.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-600">
          Benefícios para Transportadores
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Mais segurança, rentabilidade e oportunidades para profissionais do transporte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransporterBenefits;
