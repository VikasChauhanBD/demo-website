import React, { useRef } from "react";
import "./Approach.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray(".approach-highlight-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".approach-label",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        ".approach-title-line",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.3",
      );

      tl.fromTo(
        ".approach-description",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      );

      tl.fromTo(
        words,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.3",
      );

      tl.fromTo(
        ".approach-cta",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section className="approach-section" ref={sectionRef}>
      <div className="approach-main">
        <h2 className="approach-title">THE GRG APPROACH</h2>
        <h3 className="approach-sub-title">
          Pharmacology, Beyond Memorisation.
        </h3>

        <p className="approach-para">
          Pharmacology is easier to learn when you understand how everything
          connects.
          <br />
          Concepts. Clinical connections. Memory tools. Questions. Revision.
          <br />
          The GRG approach is built around one simple idea:
          <br />
          <span className="approach-tag">• Understand • Remember • Apply</span>
        </p>

        <NavLink to="#" className="approach-main-cta">
          How to Study Pharmacology →
        </NavLink>
      </div>

      <div className="approach-final">
        <h4 className="approach-final-title">
          READY TO MAKE PHARMACOLOGY MAKE SENSE?
        </h4>

        <p className="approach-final-para">
          Learn it properly. Revise it smarter. Apply it with confidence.
        </p>

        <NavLink to="#" className="approach-final-cta">
          Start Learning →
        </NavLink>
        <br />
        <span className="approach-final-tag">• Learn • Enjoy • Excel</span>
      </div>
    </section>
  );
};

export default Approach;
