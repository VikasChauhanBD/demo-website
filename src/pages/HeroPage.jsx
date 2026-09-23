import React from "react";
import HeroSection from "../components/home/heroSection/HeroSection";
import AboutSection from "../components/home/aboutSection/AboutSection";
import WhyGrgSir from "../components/home/whyGrgSir/WhyGrgSir";

function HeroPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhyGrgSir />
    </div>
  );
}

export default HeroPage;
