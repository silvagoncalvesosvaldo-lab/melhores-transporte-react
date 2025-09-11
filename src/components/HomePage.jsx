import React from "react";
import BenefitsSection from "./BenefitsSection";
import ClientBenefits from "./ClientBenefits";
import AffiliateBenefits from "./AffiliateBenefits";
import WhyChooseUs from "./WhyChooseUs";
import LegalSecurity from "./LegalSecurity";
import FreeRegistration from "./FreeRegistration";
import JoinUsSection from "./JoinUsSection";
import TransporterBenefits from "./TransporterBenefits";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <BenefitsSection />
      <ClientBenefits />
      <AffiliateBenefits />
      <WhyChooseUs />
      <LegalSecurity />
      <FreeRegistration />
      <JoinUsSection />
      <TransporterBenefits />
      <Footer />
    </div>
  );
}

export default HomePage;
