import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./WhatSection.css";
import { NavLink } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger, useGSAP);
function WhatSection() {
  const container = useRef(null);
  const cardsData = [
    {
      id: 1,
      image:
        "https://cdn.dribbble.com/userupload/49248569/file/71eb1871e457fb270c0443c2efce80a9.jpeg",
      label: "01 · DETAILED LEARNING",
      title: "GRG Master Class",
      description: (
        <>
          <strong>Where Concepts Become Confidence.</strong>
          <br />
          Detailed Pharmacology teaching for building your understanding from
          the ground up.
        </>
      ),
    },
    {
      id: 2,
      image:
        "https://cdn.dribbble.com/userupload/49248568/file/440b7f4bcea9edcf6f73762d6f6feab5.jpeg",
      label: "02 · REVISION",
      title: "Power Pack Revision",
      description: (
        <>
          <strong>Quick & Conceptual</strong>
          <br />
          Concise reinforcement for efficient revision.
        </>
      ),
    },
    {
      id: 3,
      image:
        "https://cdn.dribbble.com/userupload/49269850/file/66000d608cd36a0dc54a6e92c65cb9a9.jpeg",
      label: "03 · RAPID LEARNING",
      title: "GRG Express",
      description: (
        <>
          <strong>Pharmacology, When Time Is Short.</strong>
          <br />
          For focused, time-efficient preparation.
        </>
      ),
    },
    {
      id: 4,
      image:
        "https://cdn.dribbble.com/userupload/49269849/file/cdcb9064b34c15a773e771ff6c17e2d8.jpeg",
      label: "04 · PRACTICE",
      title: "Master Class Q.Bank",
      description: (
        <>
          <strong>Questions That Make You Think.</strong>
          <br />
          MCQs, PYQs and concept-based questions with explanations that
          reinforce learning.
        </>
      ),
    },
    {
      id: 5,
      image:
        "https://cdn.dribbble.com/userupload/49269851/file/9f69b93276e6819961dded20ce862dbf.png",
      label: "05 · ASSESSMENT",
      title: "GOGA Test Approach",
      description: (
        <>
          <strong>Attempt. Analyse. Improve.</strong>
          <br />
          Use questions to identify weak areas and improve recall.
        </>
      ),
    },
  ];
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".what-card", container.current);
      const cardInners = gsap.utils.toArray(
        ".what-card-inner",
        container.current,
      );
      if (!cards.length) return;
      cards.forEach((card, index) => {
        card.style.setProperty("--card-index", index);
        if (index === cards.length - 1) return;
        const nextCard = cards[index + 1];
        const cardInner = cardInners[index];
        if (!nextCard || !cardInner) return;
        const toScale = 1 - (cards.length - 1 - index) * 0.08;
        ScrollTrigger.create({
          trigger: nextCard,
          start: "top 20px",
          end: () => `bottom ${window.innerHeight - card.offsetHeight}px`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = gsap.utils.interpolate(1, toScale, progress);
            const brightness = gsap.utils.interpolate(1, 0.65, progress);
            gsap.set(cardInner, {
              scale,
              filter: `brightness(${brightness})`,
            });
          },
        });
      });
      gsap.from(".what-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".what-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      ScrollTrigger.refresh();
    },
    {
      scope: container,
    },
  );
  return (
    <section className="what-container" ref={container}>
      <div className="what-header">
        <span className="what-eyebrow">WHAT’S INSIDE</span>
        <h2 className="what-heading">
          Everything you need to learn, revise and practise Pharmacology.
        </h2>
        <p className="what-para">
          From dedicated exam-focused video lectures to revision, question
          practice and tests - each component has a role in your preparation.
        </p>
      </div>
      <div className="what-cards">
        {cardsData.map((card) => (
          <article className="what-card" key={card.id}>
            <div className="what-card-inner">
              <div className="what-card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="what-card-content">
                <span className="what-card-label">{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default WhatSection;
