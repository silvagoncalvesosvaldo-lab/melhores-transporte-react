import { Link } from "react-router-dom";

function JoinUsSection() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Faça Parte da <span className="text-blue-400">Nossa Rede</span>
      </h2>
      <p className="mb-8 text-gray-300">
        Escolha seu perfil e comece a transformar a logística de transportes.
        Junte-se a nós e aproveite todos os benefícios.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Cliente/Embarcador */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Sou Cliente/Embarcador</h3>
          <p className="text-gray-400 mb-4">
            Preciso de um transporte seguro e eficiente para minha carga.
          </p>
          <Link
            to="/cliente"
            className="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Cadastrar como Cliente/Embarcador
          </Link>
        </div>

        {/* Transportador */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Sou Transportador</h3>
          <p className="text-gray-400 mb-4">
            Quero encontrar fretes, aumentar meus ganhos e otimizar minhas rotas.
          </p>
          <Link
            to="/transportador"
            className="block w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Cadastrar como Transportador
          </Link>
        </div>

        {/* Afiliado */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Para ser Afiliado</h3>
          <p className="text-gray-400 mb-4">
            Junte-se à nossa rede de parceiros e ganhe indicando clientes e
            transportadores.
          </p>
          <Link
            to="/afiliado"
            className="block w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Cadastrar como Afiliado
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JoinUsSection;
