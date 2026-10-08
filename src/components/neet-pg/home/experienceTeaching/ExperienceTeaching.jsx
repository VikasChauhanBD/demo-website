import React from "react";
import { FaPlay } from "react-icons/fa";
import "./ExperienceTeaching.css";
const videoCards = [
  {
    number: "01",
    title: "GRG MASTER CLASS",
    description: "See how Dr. GRG makes difficult concepts simple.",
  },
  {
    number: "02",
    title: "POWER PACK REVISION",
    description: "Experience focused, high-yield Pharmacology revision.",
  },
  {
    number: "03",
    title: "GRG EXPRESS",
    description: "See how Pharmacology can be made faster and more focused.",
  },
];
export default function ExperienceTeaching() {
  return (
    <section
      className="experience-section experience-section-three-cards"
      aria-labelledby="experience-heading"
    >
      <div className="experience-container">
        <span className="experience-eyebrow">EXPERIENCE THE TEACHING</span>
        <h2 className="experience-title" id="experience-heading">
          Don&apos;t just read about the GRG way. See it.
        </h2>
        <p className="experience-para">
          See how Dr. GRG explains difficult mechanisms, connects concepts
          clinically and makes Pharmacology easier to remember - without
          oversimplifying the science.
        </p>
        <div className="experience-cards">
          {videoCards.map(({ number, title, description }) => (
            <div className="experience-preview" key={number}>
              <div className="experience-preview-screen">
                <span className="experience-card-number" aria-hidden="true">
                  {number}
                </span>
                <div className="experience-play" aria-hidden="true">
                  <FaPlay />
                </div>
              </div>
              <div className="experience-preview-bar">
                <div className="experience-preview-text">
                  <h3 className="experience-card-title">{title}</h3>
                  <p className="experience-card-description">{description}</p>
                </div>
                <button type="button" className="experience-cta">
                  WATCH FREE VIDEO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
