import React from "react";
import AboutHero from "../components/about/AboutHero";
import IntroSection from "../components/neet-pg/home/introSection/IntroSection.jsx";
import "./AboutPage.css";
function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <IntroSection showCta={false} showFullContent />
    </div>
  );
}
export default AboutPage;
