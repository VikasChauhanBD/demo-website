import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MoreSection.css";

gsap.registerPlugin(ScrollTrigger);

function MoreSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    const words = text.textContent.trim().split(/\s+/);

    text.innerHTML = words
      .map((word) => `<span class="more-word">${word}</span>`)
      .join(" ");

    const wordElements = text.querySelectorAll(".more-word");

    const ctx = gsap.context(() => {
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
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="more-section" ref={sectionRef}>
      <div className="more-section-content">
        <h2 ref={textRef}>
          What We Do We are deeply immersed in the areas in which we invest,
          supporting ideas and organizations that contribute to our four program
          areas
        </h2>
      </div>
    </section>
  );
}

export default MoreSection;
