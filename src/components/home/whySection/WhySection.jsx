import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./WhySection.css";

gsap.registerPlugin(ScrollTrigger);

function WhySection() {
  const container = useRef(null);

  useGSAP(
    () => {
      const section = container.current;
      const text = section.querySelector(".why-section-para");

      if (!section || !text) return;

      const words = text.textContent.trim().split(/\s+/);

      text.innerHTML = words
        .map((word) => `<span class="why-word">${word}</span>`)
        .join(" ");

      const wordElements = text.querySelectorAll(".why-word");

      gsap.fromTo(
        wordElements,
        {
          color: "#d1d1d1",
        },
        {
          color: "#000000",
          ease: "none",
          stagger: 0.08,
          duration: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <section className="why-section" ref={container}>
      <div className="why-section-content">
        <h2 className="why-section-heading">Why This App?</h2>

        <h4 className="why-section-sub-heading">
          Because You Don't Need Another Resource.You Need the Right One.
        </h4>

        <p className="why-section-para">
          You already have lectures to watch, books to read, questions to solve
          and topics to revise. The problem is finding the time to manage all of
          it. This platform is designed to make that process simpler. Study when
          you have time. Pause when you need to. Revisit a difficult topic
          before your exam. Practise questions after finishing a chapter. You
          don't have to study everything at once. Take one topic. Understand it.
          Revise it. Move ahead.
        </p>
      </div>
    </section>
  );
}

export default WhySection;
