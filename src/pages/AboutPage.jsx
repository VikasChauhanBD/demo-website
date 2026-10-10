import React from "react";
import AboutHero from "../components/about/aboutHero/AboutHero";
import ThePerson from "../components/about/thePerson/ThePerson";
import AboutTimeline from "../components/about/aboutTimeline/AboutTimeline";

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <ThePerson />
      <AboutTimeline />
    </div>
  );
}
export default AboutPage;
