import React from "react";
import VideoHero from "../components/home/videoHero/VideoHero";
import IntroSection from "../components/home/introSection/IntroSection";
import WhatSection from "../components/home/whatSection/WhatSection";
import WhySection from "../components/home/whySection/WhySection";
import WhoSection from "../components/home/whoSection/WhoSection";
import AboutSection from "../components/home/aboutSection/AboutSection";
import OurVision from "../components/home/ourVision/OurVision";
import Approach from "../components/home/approach/Approach";
import PlatformSection from "../components/home/platformSection/PlatformSection";

function HomePage() {
  return (
    <div>
      <VideoHero />
      <IntroSection />
      <WhoSection />
      <PlatformSection />
      {/* <AboutSection /> */}
      <WhatSection />
      <Approach />
      {/* <WhySection /> */}
      {/* <OurVision /> */}
    </div>
  );
}

export default HomePage;
