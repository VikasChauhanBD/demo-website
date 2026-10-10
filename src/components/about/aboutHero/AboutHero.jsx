import React from "react";
import "./AboutHero.css";

function AboutHero() {
  return (
    <div className="about-hero-section">
      <div className="about-hero-banner">
        <img
          src="https://cdn.dribbble.com/userupload/49279421/file/bc718325399f052d27182daa5063cdbf.png"
          alt=""
        />
      </div>

      <div className="about-hero-content">
        <h2>
          Some journeys are planned. Others find their purpose along the way.
        </h2>
        <p>
          Dr. Gobind Rai Garg never set out to build a career around teaching
          Pharmacology. But one unexpected turn led to a calling that would
          shape his books, his classrooms, and the way generations of medical
          students learn the subject.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
