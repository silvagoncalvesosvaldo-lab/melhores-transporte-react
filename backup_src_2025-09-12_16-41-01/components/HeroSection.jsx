export default function HeroSection() {
  return (
    <section className="text-center py-16 bg-gray-50">
      {/* Título principal */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Os Melhores do Transporte
      </h1>

      {/* Subtítulo */}
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
        A Conexão Certa para quem tem algo a ser transportado e claro, para todos os Transportadores.
      </p>

      {/* Texto descritivo */}
      <div className="text-gray-600 max-w-2xl mx-auto space-y-3 mb-8">
        <p>
          Sua solução definitiva para o <strong>TRANSPORTE</strong> de Carga em Geral, Mudanças, Fretes e Carretos.
        </p>
        <p>
          Facilidade para <strong>PAGAMENTO</strong> e <strong>RECEBIMENTO</strong> de todo o tipo de carga a ser transportada.
        </p>
        <p>
          Unimos clientes/Embarcadores a uma elite de profissionais que fazem a diferença.
        </p>
      </div>

      {/* Frase em destaque */}
      <p className="mt-6 text-yellow-500 font-semibold">
        ⬇️ Role para baixo para conhecer nossos benefícios! Os botões de cadastro estão no final da página
      </p>
    </section>
  );
}
