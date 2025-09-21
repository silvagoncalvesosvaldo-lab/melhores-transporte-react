export default function ClientAdvantages() {
  const vantagens = [
    {
      title: "Pagamento Seguro",
      description:
        "Seu dinheiro fica 100% protegido em garantia e s√≥ √© liberado para o transportador ap√≥s a conclus√£o do servi√ßo.",
      icon: "Ìª°Ô∏è",
    },
    {
      title: "Pagamento Flex√≠vel",
      description:
        "Pague com Pix √† vista ou parcele no cart√£o de cr√©dito em at√© 12x com juros.",
      icon: "Ì≤≥",
    },
    {
      title: "Rastreamento em Tempo Real",
      description:
        "Acompanhe sua carga do in√≠cio ao fim. Tenha total visibilidade e tranquilidade com nosso sistema de rastreamento ao vivo.",
      icon: "Ì≥ç",
    },
    {
      title: "Plano de Fidelidade",
      description:
        "Quanto mais voc√™ usa, mais voc√™ ganha! Acumule fretes e desbloqueie descontos progressivos nas taxas da plataforma.",
      icon: "ÌæÅ",
    },
    {
      title: "Indique e Ganhe",
      description:
        "Convide seus amigos para a plataforma. Quando eles realizarem o primeiro frete, voc√™ ganha um b√¥nus em dinheiro!",
      icon: "Ì±•",
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-400">Vantagens para Clientes</h2>
        <p className="text-lg text-gray-300 mb-10">
          Contrate com seguran√ßa, ganhe recompensas e tenha a melhor experi√™ncia de transporte.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vantagens.map((vantagem, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              <div className="text-4xl mb-4">{vantagem.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{vantagem.title}</h3>
              <p className="text-gray-400">{vantagem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
