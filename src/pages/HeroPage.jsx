import React from "react";
import VideoHero from "../components/home/videoHero/VideoHero";
import AboutSection from "../components/home/aboutSection/AboutSection";
import WhyGrgSir from "../components/home/whyGrgSir/WhyGrgSir";

function HeroPage() {
  return (
    <div>
      <VideoHero />
      <AboutSection />
      <WhyGrgSir />
    </div>
  );
}

export default HeroPage;
