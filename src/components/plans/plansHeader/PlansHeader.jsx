import React from "react";
import "./PlansHeader.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function PlansHeader() {
  useGSAP(() => {
    const words = gsap.utils.toArray(".plans-header-word");

    // Circle animation
    gsap.fromTo(
      ".plans-header-circle",
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
    "We are deeply immersed in the areas in which we invest, supporting ideas and organizations that contribute to our four program areas";

  return (
    <div className="plans-header-section">
      <div className="plans-header-circle-div">
        <div className="plans-header-circle">
          <div className="plans-header-content">
            <h1 className="plans-header-heading">
              {headingText.split(" ").map((word, index) => (
                <span className="plans-header-word" key={index}>
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

export default PlansHeader;
