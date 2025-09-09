import React from "react";
import { Briefcase, Truck, Heart } from "lucide-react";

const JoinUs = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Faça Parte da <span className="text-blue-400">Nossa Rede</span>
        </h2>
        <p className="text-gray-300 mb-12">
          Escolha seu perfil e comece a transformar a logística de transportes.
          Junte-se a nós e aproveite todos os benefícios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cliente */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Briefcase className="mx-auto mb-4 text-blue-400" size={40} />
            <h3 className="text-xl font-semibold mb-2">Sou Cliente</h3>
            <p className="text-gray-400 mb-4">
              Preciso de um transporte seguro e eficiente para minha carga.
            </p>
            <a
              href="#cadastro-cliente"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
            >
              Cadastrar como Cliente
            </a>
          </div>

          {/* Transportador */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Truck className="mx-auto mb-4 text-purple-400" size={40} />
            <h3 className="text-xl font-semibold mb-2">Sou Transportador</h3>
            <p className="text-gray-400 mb-4">
              Quero encontrar fretes, aumentar meus ganhos e otimizar minhas rotas.
            </p>
            <a
              href="#cadastro-transportador"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
            >
              Cadastrar como Transportador
            </a>
          </div>

          {/* Afiliado */}
          <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <Heart className="mx-auto mb-4 text-green-400" size={40} />
            <h3 className="text-xl font-semibold mb-2">Para ser Afiliado</h3>
            <p className="text-gray-400 mb-4">
              Junte-se à nossa rede de parceiros e ganhe indicando clientes e transportadores.
            </p>
            <a
              href="#cadastro-afiliado"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            >
              Cadastrar como Afiliado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
