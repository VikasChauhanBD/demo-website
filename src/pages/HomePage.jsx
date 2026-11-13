import React from "react";
import HeroSection from "../components/home/heroSection/HeroSection";
import EventsSection from "../components/home/events/EventsSection";
import Pillars from "../components/home/pillers/Pillars";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <EventsSection />
      <Pillars />
    </div>
  );
}

export default HomePage;
