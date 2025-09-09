import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

const LegalSecurity = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#0f172a] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Compromisso com a Legalidade e Segurança
      </h2>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12">
        Para garantir sua total segurança, nesta plataforma aceitamos{" "}
        <strong>somente transportadores profissionais</strong> que atendam aos
        seguintes critérios rigorosos:
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <p>
            <strong>ANTT:</strong> Registro Nacional de Transportadores
            Rodoviários de Cargas ativo.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <p>
            <strong>Renavam:</strong> Verificado para garantir a regularidade do
            veículo.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <p>
            <strong>Comprovante de residência:</strong> Exigido para confirmação
            da origem do transportador.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto border border-yellow-600 bg-yellow-900/30 p-6 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="text-yellow-400 w-6 h-6 mt-1" />
          <p className="text-sm text-yellow-200">
            <strong>Aviso de Responsabilidade:</strong> Apesar de solicitarmos
            esses documentos, esta plataforma não se responsabiliza por qualquer
            ocorrência relacionada aos veículos ou transportadores. As
            informações são analisadas apenas para auxiliar os clientes que
            desejam contratar fretes com maior segurança. Os dados fornecidos
            não são repassados a terceiros sob nenhuma circunstância.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalSecurity;
