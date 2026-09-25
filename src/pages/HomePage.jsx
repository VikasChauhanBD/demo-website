import React from "react";
import VideoHero from "../components/home/videoHero/VideoHero";
import Demo from "../components/home/demo/Demo";
import MoreSection from "../components/home/moreSection/MoreSection";
import AboutSection from "../components/home/aboutSection/AboutSection";
import WhyGrgSir from "../components/home/whyGrgSir/WhyGrgSir";

function HomePage() {
  return (
    <div>
      <VideoHero />
      <Demo />
      {/* <MoreSection /> */}
      <AboutSection />
      <WhyGrgSir />
    </div>
  );
}

export default HomePage;
