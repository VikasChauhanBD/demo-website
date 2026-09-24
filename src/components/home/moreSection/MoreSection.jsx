import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./MoreSection.css";

gsap.registerPlugin(ScrollTrigger);

function MoreSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      const section = container.current;
      const text = section.querySelector(".more-section-content h2");

      if (!section || !text) return;

      const words = text.textContent.trim().split(/\s+/);

      text.innerHTML = words
        .map((word) => `<span class="more-word">${word}</span>`)
        .join(" ");

      const wordElements = text.querySelectorAll(".more-word");

      gsap.to(wordElements, {
        color: "#000000",
        ease: "none",
        stagger: 1,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });
    },
    {
      scope: container,
    },
  );

  return (
    <section className="more-section" ref={container}>
      <div className="more-section-content">
        <h2>
          What We Do We are deeply immersed in the areas in which we invest,
          supporting ideas and organizations that contribute to our four program
          areas
        </h2>
      </div>
    </section>
  );
}

export default MoreSection;
