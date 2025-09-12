import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "50px" }}>
        <h1>Bem-vindo ao Os Melhores do Transporte</h1>
        <p>Conectando Cliente/Embarcador, Transportadores e Afiliados em uma única plataforma.</p>
      </section>

      {/* Serviços */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Nossos Serviços</h2>
        <p>Aqui você encontra soluções rápidas e seguras para transporte de cargas.</p>
      </section>

      {/* Benefícios */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Por que escolher a nossa plataforma?</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✔ Segurança nas transações</li>
          <li>✔ Rapidez e eficiência</li>
          <li>✔ Rede de parceiros confiáveis</li>
        </ul>
      </section>

      {/* Área de Cadastro */}
      <section style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "50px" }}>
        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", width: "250px", textAlign: "center", color: "white" }}>
          <h3>Sou Cliente/Embarcador</h3>
          <p>Preciso de um transporte seguro e eficiente para minha carga.</p>
          <Link to="/cadastro-cliente">
            <button style={{ background: "#2563eb", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Cadastrar como Cliente/Embarcador
            </button>
          </Link>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", width: "250px", textAlign: "center", color: "white" }}>
          <h3>Sou Transportador</h3>
          <p>Quero encontrar fretes, aumentar meus ganhos e otimizar minhas rotas.</p>
          <Link to="/transportador">
            <button style={{ background: "#9333ea", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Cadastrar como Transportador
            </button>
          </Link>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px", width: "250px", textAlign: "center", color: "white" }}>
          <h3>Para ser Afiliado</h3>
          <p>Junte-se à nossa rede de parceiros e ganhe indicando clientes e transportadores.</p>
          <Link to="/afiliado">
            <button style={{ background: "#16a34a", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Cadastrar como Afiliado
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
