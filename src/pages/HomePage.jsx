import React from "react";
import VideoHero from "../components/home/videoHero/VideoHero";
import IntroSection from "../components/home/introSection/IntroSection";
import WhatSection from "../components/home/whatSection/WhatSection";
import WhySection from "../components/home/whySection/WhySection";
import WhoSection from "../components/home/whoSection/WhoSection";
import AboutSection from "../components/home/aboutSection/AboutSection";
import OurVision from "../components/home/ourVision/OurVision";

function HomePage() {
  return (
    <div>
      <VideoHero />
      <IntroSection />
      <WhatSection />
      <WhySection />
      <WhoSection />
      <AboutSection />
      <OurVision />
    </div>
  );
}

export default HomePage;
