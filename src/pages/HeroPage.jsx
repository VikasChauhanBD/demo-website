import React from "react";
import VideoHero from "../components/home/videoHero/VideoHero";
import MoreSection from "../components/home/moreSection/MoreSection";
import AboutSection from "../components/home/aboutSection/AboutSection";
import WhyGrgSir from "../components/home/whyGrgSir/WhyGrgSir";

function HeroPage() {
  return (
    <div>
      <VideoHero />
      <MoreSection />
      <AboutSection />
      <WhyGrgSir />
    </div>
  );
}

export default HeroPage;
