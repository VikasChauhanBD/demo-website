import React from "react";
import VideoHero from "../components/neet-pg/home/videoHero/VideoHero";
import IntroSection from "../components/neet-pg/home/introSection/IntroSection";
import WhatSection from "../components/neet-pg/home/whatSection/WhatSection";
import WhySection from "../components/neet-pg/home/whySection/WhySection";
import BeforeYouJoin from "../components/neet-pg/home/beforeYouJoin/BeforeYouJoin";
import PlatformSection from "../components/neet-pg/home/platformSection/PlatformSection";
import GrgWaySection from "../components/neet-pg/home/grgWaySection/GrgWaySection";
import LearningPathSection from "../components/neet-pg/home/learningPathSection/LearningPathSection";
import ExperienceTeaching from "../components/neet-pg/home/experienceTeaching/ExperienceTeaching";
import ThePromise from "../components/neet-pg/home/thePromise/ThePromise";

function NeetPgHomePage() {
  return (
    <div>
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

export default NeetPgHomePage;
