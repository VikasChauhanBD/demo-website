import React from "react";
import "./PgPlansHeader.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function PgPlansHeader() {
  useGSAP(() => {
    const words = gsap.utils.toArray(".pg-plans-header-word");

    // Circle animation
    gsap.fromTo(
      ".pg-plans-header-circle",
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        onComplete: () => {
          gsap.fromTo(
            words,
            {
              y: 60,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.06,
            },
          );
        },
      },
    );
  });

  const headingText =
    "Complete Pharmacology learning, revision and practice with Dr. GRG - built for NEET PG & INI-CET preparation.";

  return (
    <div className="pg-plans-header-section">
      <div className="pg-plans-header-circle-div">
        <div className="pg-plans-header-circle">
          <div className="pg-plans-header-content">
            <h1 className="pg-plans-header-heading">
              {headingText.split(" ").map((word, index) => (
                <span className="pg-plans-header-word" key={index}>
                  {word}&nbsp;
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PgPlansHeader;
