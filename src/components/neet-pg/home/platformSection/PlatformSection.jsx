import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import "./PlatformSection.css";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const cards = [
  {
    number: "01",
    title: "Understand the why",
    image:
      "https://cdn.dribbble.com/userupload/49267101/file/062e0e1034e53b5b87c3e30840f9e715.jpg",
    description:
      "When you understand why a drug produces an effect, many indications, adverse effects and contraindications become logical rather than isolated facts.",
  },
  {
    number: "02",
    title: "Remember intelligently",
    image:
      "https://cdn.dribbble.com/userupload/49248099/file/2a0e269a98f6e3cdc7066bf696db4dfa.png",
    description:
      "Use comparisons, tables, mnemonics, visual associations and repeated reinforcement where they genuinely make learning easier.",
  },
  {
    number: "03",
    title: "Apply with confidence",
    image:
      "https://cdn.dribbble.com/userupload/49255008/file/5b2985665bfbe8975a012b6b8b064386.png",
    description:
      "Connect concepts to clinical questions, PYQs, newer drugs and common examination traps.",
  },
];
function PlatformSection() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".pg-platform-header > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".pg-platform-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".pg-platform-strip", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pg-platform-strip",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      const cardEls = gsap.utils.toArray(
        ".pg-platform-card",
        container.current,
      );
      const mediaEls = gsap.utils.toArray(
        ".pg-platform-media",
        container.current,
      );
      gsap.set(cardEls, {
        opacity: 0,
        y: 60,
      });
      gsap.set(mediaEls, {
        clipPath: "inset(0 0 100% 0)",
      });
      ScrollTrigger.batch(cardEls, {
        start: "top 85%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            overwrite: true,
          });
          batch.forEach((card, i) => {
            gsap.to(card.querySelector(".pg-platform-media"), {
              clipPath: "inset(0 0 0% 0)",
              duration: 1,
              ease: "power3.out",
              delay: 0.3 + i * 0.15,
              overwrite: true,
            });
          });
        },
      });
      gsap.from(".pg-platform-cta-wrap", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pg-platform-cta-wrap",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );
  return (
    <section className="pg-platform-section" ref={container}>
      <div className="pg-platform-container">
        <div className="pg-platform-header">
          <span className="pg-platform-tag">THE GRG PROMISE</span>
          <h2 className="pg-platform-heading">
            <span>Pharmacology That</span>
            <span className="pg-platform-heading-mark">
              Finally Makes Sense.
            </span>
          </h2>
          <p className="pg-platform-para">
            Dr. GRG’s aim is not to make Pharmacology superficial in the name of
            exam preparation. It is to build a strong conceptual base and then
            make that knowledge easier to remember, revise and apply.
          </p>
        </div>
        <div className="pg-platform-cards">
          {cards.map((card) => (
            <div className="pg-platform-card" key={card.title}>
              <div className="pg-platform-media">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <div className="pg-platform-card-number">{card.number}</div>
              <h4 className="pg-platform-card-title">{card.title}</h4>
              <p className="pg-platform-card-description">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="pg-platform-cta-wrap">
          <NavLink to="/course/neet-pg/plans" className="pg-platform-cta">
            Explore the Platform →
          </NavLink>
        </div>
      </div>
    </section>
  );
}
export default PlatformSection;
