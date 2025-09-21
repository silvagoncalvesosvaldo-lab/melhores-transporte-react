import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FreeRegistration from "./components/FreeRegistration";
import ClientBenefits from "./components/ClientBenefits";
import TransporterBenefits from "./components/TransporterBenefits";
import AffiliateBenefits from "./components/AffiliateBenefits";
import WhyChooseUs from "./components/WhyChooseUs";
import LegalSecurity from "./components/LegalSecurity";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Cabeçalho */}
      <Header />

      {/* Seção Principal */}
      <HeroSection />

      {/* Cadastro Gratuito */}
      <FreeRegistration />

      {/* Vantagens para Clientes */}
      <ClientBenefits />

      {/* Benefícios para Transportadores */}
      <TransporterBenefits />

      {/* Benefícios para Afiliados */}
      <AffiliateBenefits />

      {/* Por que somos a escolha certa */}
      <WhyChooseUs />

      {/* Compromisso com a Legalidade e Segurança */}
      <LegalSecurity />

      {/* Faça Parte da Nossa Rede */}
      <JoinUs />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default App;
