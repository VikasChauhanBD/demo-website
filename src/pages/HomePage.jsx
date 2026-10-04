import React from "react";
import VideoHero from "../components/home/videoHero/VideoHero";
import IntroSection from "../components/home/introSection/IntroSection";
import WhatSection from "../components/home/whatSection/WhatSection";
import WhySection from "../components/home/whySection/WhySection";
import WhoSection from "../components/home/whoSection/WhoSection";
import BeforeYouJoin from "../components/home/beforeYouJoin/BeforeYouJoin";
import PlatformSection from "../components/home/platformSection/PlatformSection";
import PromiseSection from "../components/home/promiseSection/PromiseSection";
import GrgWaySection from "../components/home/grgWaySection/GrgWaySection";
import LearningPathSection from "../components/home/learningPathSection/LearningPathSection";
import ExperienceTeaching from "../components/home/experienceTeaching/ExperienceTeaching";
import ThePromise from "../components/home/thePromise/ThePromise";

function HomePage() {
  return (
    <div>
      <VideoHero />
      <WhySection />
      <PlatformSection />
      <GrgWaySection />
      <WhoSection />
      <WhatSection />
      <LearningPathSection />
      <IntroSection />
      <ExperienceTeaching />
      <BeforeYouJoin />
      <ThePromise />
      {/* <PromiseSection /> */}
    </div>
  );
}

export default HomePage;
