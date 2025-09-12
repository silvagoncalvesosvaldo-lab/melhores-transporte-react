import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo e Descrição */}
        <div>
          <h2 className="text-white text-lg font-bold">Os Melhores do Transporte</h2>
          <p className="mt-2 text-sm">
            Conectando cargas e motoristas com eficiência e segurança.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            © {new Date().getFullYear()} Os Melhores do Transporte. Todos os direitos reservados.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">Sobre Nós</a></li>
            <li><a href="#help" className="hover:text-white">Ajuda</a></li>
            <li><a href="mailto:contato@osmelhoresdotransporte.com.br" className="hover:text-white">E-mail</a></li>
            <li><a href="#suggestions" className="hover:text-white">Sugestões</a></li>
            <li><a href="#privacy" className="hover:text-white">Segurança e Privacidade</a></li>
            <li><a href="#terms" className="hover:text-white">Termos de Uso</a></li>
            <li><a href="#cookies" className="hover:text-white">Política de Cookies</a></li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4">Conecte-se</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook size={22} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
