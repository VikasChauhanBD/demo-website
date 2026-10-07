import React from "react";
import { FaPlay } from "react-icons/fa";
import "./ExperienceTeaching.css";

export default function ExperienceTeaching() {
  return (
    <section
      className="experience-section"
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

        <div className="experience-preview">
          <div className="experience-preview-screen">
            <div className="experience-play">
              <FaPlay />
            </div>
          </div>
          <div className="experience-preview-bar">
            <div className="experience-preview-text">
              <span className="experience-preview-label">VIDEO PREVIEW</span>
            </div>
            <button type="button" className="experience-cta">
              Watch Sample Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
