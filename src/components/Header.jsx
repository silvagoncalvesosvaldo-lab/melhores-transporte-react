export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">Aqui será a logo</div>

      {/* Menu Central */}
      <nav className="flex space-x-6 text-gray-700 font-medium">
        <a href="#clientes" className="hover:text-blue-600">
          Para Cliente/Embarcador/Embarcador
        </a>
        <a href="#transportadores" className="hover:text-blue-600">
          Para Transportadores
        </a>
        <a href="#afiliados" className="hover:text-blue-600">
          Para Afiliados
        </a>
      </nav>

      {/* Login à direita */}
      <div>
        <a
          href="#login"
          className="text-sm font-semibold text-gray-700 hover:text-blue-600"
        >
          Para quem já é cadastrado → <span className="text-blue-600">Acessar/Login</span>
        </a>
      </div>
    </header>
  );
}
