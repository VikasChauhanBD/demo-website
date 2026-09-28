import React from "react";
import VideoHero from "../components/home/videoHero/VideoHero";
import Demo from "../components/home/demo/Demo";
import MoreSection from "../components/home/moreSection/MoreSection";
import AboutSection from "../components/home/aboutSection/AboutSection";
import WhyGrgSir from "../components/home/whyGrgSir/WhyGrgSir";
import Programs from "../components/home/programs/Programs";

function HomePage() {
  return (
    <div>
      <VideoHero />
      <Demo />
      <Programs />
      {/* <MoreSection /> */}
      {/* <AboutSection /> */}
      {/* <WhyGrgSir /> */}
    </div>
  );
}

export default HomePage;
