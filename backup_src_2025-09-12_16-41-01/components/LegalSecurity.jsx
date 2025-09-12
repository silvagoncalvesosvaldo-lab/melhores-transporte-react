import React from "react";

export default function LegalSecurity() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Compromisso com a Legalidade e Segurança
        </h2>
        <p className="mb-4 text-gray-700">
          Para garantir sua total segurança, nesta plataforma aceitamos somente
          transportadores profissionais que atendam aos seguintes critérios
          rigorosos:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <strong>ANTT:</strong> Registro Nacional de Transportadores
            Rodoviários de Cargas ativo.
          </li>
          <li>
            <strong>Renavam:</strong> Verificado para garantir a regularidade do
            veículo.
          </li>
          <li>
            <strong>Comprovante de residência:</strong> Exigido para confirmação
            da origem do transportador.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Aviso de Responsabilidade
        </h3>
        <p className="mb-6 text-gray-700">
          Apesar de solicitarmos esses documentos, esta plataforma não se
          responsabiliza por qualquer ocorrência relacionada aos veículos,
          transportadores e quaisquer pessoas envolvidas na realização de
          qualquer transporte. Ficamos isentos geral e totalmente de: Despesas,
          danos, avarias, quebras, incidentes, acidentes, atropelamentos,
          tombamentos, roubos e outros, que possam acontecer com os veículos dos
          Motoristas/Transportadores. Da mesma forma ficamos isentos por:
          Desvios de rotas, atrasos, despesas, danos, avarias, quebras,
          incidentes, acidentes, tombamentos, roubos e outros que venham
          acontecer com qualquer tipo de carga a serem transportadas. Também não
          temos e não teremos nenhum tipo de responsabilidade sobre quaisquer
          tipo de danos Pessoais e Morais, que possam ocorrer a qualquer pessoa
          envolvida em qualquer transporte combinado e acertado dentro da nossa
          plataforma.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Sobre os Afiliados, Transportadores e Clientes/Embarcadores
        </h3>
        <p className="text-gray-700">
          Esta plataforma não mantém qualquer vínculo empregatício, societário
          ou de representação legal com os Afiliados, Transportadores e
          Clientes/Embarcadores. A atuação dos Afiliados, Transportadores e
          Clientes/Embarcadores ocorre de forma autônoma e independente, sem
          qualquer obrigação trabalhista, previdenciária ou fiscal por parte da
          plataforma. Toda e qualquer responsabilidade decorrente da atividade
          dos Afiliados, Transportadores e Clientes/Embarcadores, inclusive
          perante terceiros e órgãos públicos, é de inteira e exclusiva
          responsabilidade destes.
        </p>
      </div>
    </section>
  );
}
