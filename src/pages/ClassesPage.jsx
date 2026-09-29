import React from "react";
import ClassesHero from "../components/classes/classesHero/ClassesHero";
import EventsSection from "../components/classes/events/EventsSection";
import Pillars from "../components/classes/pillers/Pillars";

function ClassesPage() {
  return (
    <div>
      <ClassesHero />
      <EventsSection />
      <Pillars />
    </div>
  );
}

export default ClassesPage;
