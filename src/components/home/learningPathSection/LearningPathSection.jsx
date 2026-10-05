import React, { useRef } from "react";
import "./LearningPathSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaBookOpen,
  FaLayerGroup,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const learningPaths = [
  {
    number: "01",
    icon: <FaBookOpen />,
    title: "Learning from the beginning",
    description:
      "Start with GRG Master Class and build Pharmacology from the ground up.",
  },
  {
    number: "02",
    icon: <FaLayerGroup />,
    title: "Need structured revision",
    description:
      "Use Power Pack Revision for concise, high-yield reinforcement.",
  },
  {
    number: "03",
    icon: <FaClock />,
    title: "Short on time",
    description:
      "Use GOGA Express for focused preparation when time is limited.",
  },
  {
    number: "04",
    icon: <FaClipboardCheck />,
    title: "Need more practice",
    description:
      "Add Master Class Q. Bank and GOGA Test Approach to practise and assess.",
  },
];

const LearningPathSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const introItems = gsap.utils.toArray(".learning-path-intro > *");
      const cards = gsap.utils.toArray(".learning-path-card");

      gsap.fromTo(
        introItems,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".learning-path-intro",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".learning-path-cards",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      cards.forEach((card) => {
        const icon = card.querySelector(".learning-path-icon");

        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 8,
            scale: 1.08,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section className="learning-path-section" ref={sectionRef}>
      <div className="learning-path-container">
        <div className="learning-path-intro">
          <span className="learning-path-eyebrow">
            NOT SURE WHERE TO START?
          </span>

          <h2 className="learning-path-title">
            Choose the learning path that fits your preparation.
          </h2>
        </div>

        <div className="learning-path-cards">
          {learningPaths.map((path) => (
            <article className="learning-path-card" key={path.number}>
              <span className="learning-path-number">{path.number}</span>

              <div className="learning-path-icon">{path.icon}</div>

              <div className="learning-path-content">
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
