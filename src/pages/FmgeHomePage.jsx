import React from "react";
import VideoHero from "../components/fmge/home/videoHero/VideoHero";
import IntroSection from "../components/fmge/home/introSection/IntroSection";
import WhatSection from "../components/fmge/home/whatSection/WhatSection";
import WhySection from "../components/fmge/home/whySection/WhySection";
import BeforeYouJoin from "../components/fmge/home/beforeYouJoin/BeforeYouJoin";
import PlatformSection from "../components/fmge/home/platformSection/PlatformSection";
import GrgWaySection from "../components/fmge/home/grgWaySection/GrgWaySection";
import LearningPathSection from "../components/fmge/home/learningPathSection/LearningPathSection";
import ExperienceTeaching from "../components/fmge/home/experienceTeaching/ExperienceTeaching";
import ThePromise from "../components/fmge/home/thePromise/ThePromise";

function FmgeHomePage() {
  return (
    <div className="fmge-home">
      <VideoHero />
      <WhySection />
      <PlatformSection />
      <GrgWaySection />
      <WhatSection />
      <LearningPathSection />
      <IntroSection />
      <ExperienceTeaching />
      <BeforeYouJoin />
      <ThePromise />
    </div>
  );
}

export default FmgeHomePage;
