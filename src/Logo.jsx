import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
      {/* Card Cliente */}
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h3 className="text-xl font-bold mb-2">Sou Cliente</h3>
        <p className="mb-4">
          Preciso de um transporte seguro e eficiente para minha carga.
        </p>
        <Link to="/cadastro-cliente">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Cadastrar como Cliente
          </button>
        </Link>
      </div>

      {/* Card Transportador */}
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h3 className="text-xl font-bold mb-2">Sou Transportador</h3>
        <p className="mb-4">
          Quero encontrar fretes, aumentar meus ganhos e otimizar minhas rotas.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
          Cadastrar como Transportador
        </button>
      </div>

      {/* Card Afiliado */}
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h3 className="text-xl font-bold mb-2">Para ser Afiliado</h3>
        <p className="mb-4">
          Junte-se à nossa rede de parceiros e ganhe indicando clientes e
          transportadores.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Cadastrar como Afiliado
        </button>
      </div>
    </div>
  );
}

export default Logo;
