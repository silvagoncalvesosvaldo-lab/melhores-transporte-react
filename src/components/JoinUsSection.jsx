import React from "react";
import { Briefcase, Truck, Heart } from "lucide-react";

const JoinUsSection = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Faça Parte da <span className="text-blue-400">Nossa Rede</span>
        </h2>
        <p className="text-lg mb-12 text-gray-300">
          Escolha seu perfil e comece a transformar a logística de transportes. 
          Junte-se a nós e aproveite todos os benefícios.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cliente */}
          <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <Briefcase size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sou Cliente</h3>
            <p className="text-gray-400 mb-4">
              Preciso de um transporte seguro e eficiente para minha carga.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
              Cadastrar como Cliente
            </button>
          </div>

          {/* Transportador */}
          <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <Truck size={40} className="text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sou Transportador</h3>
            <p className="text-gray-400 mb-4">
              Quero encontrar fretes, aumentar meus ganhos e otimizar minhas rotas.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition">
              Cadastrar como Transportador
            </button>
          </div>

          {/* Afiliado */}
          <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <Heart size={40} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Para ser Afiliado</h3>
            <p className="text-gray-400 mb-4">
              Junte-se à nossa rede de parceiros e ganhe indicando clientes e transportadores.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition">
              Cadastrar como Afiliado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
