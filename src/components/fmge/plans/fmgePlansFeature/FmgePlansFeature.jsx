import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./FmgePlansFeature.css";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const programData = [
  {
    title: "GRG MASTER CLASS",
    para: "Where Concepts Become Confidence. </br> Detailed, concept-based learning with Dr. GRG — helping you understand the why behind Pharmacology rather than simply memorising facts. </br> Learn • Understand • Connect • Apply",
    image:
      "https://cdn.dribbble.com/userupload/49248569/file/71eb1871e457fb270c0443c2efce80a9.jpeg",
  },
  {
    title: "POWER PACK REVISION",
    para: "Quick & Conceptual </br> A focused revision pathway to help you revisit important concepts, reinforce recall and keep your preparation exam-oriented. </br> Revise • Reinforce • Recall",
    image:
      "https://cdn.dribbble.com/userupload/49248568/file/440b7f4bcea9edcf6f73762d6f6feab5.jpeg",
  },
  {
    title: "GRG EXPRESS",
    para: "Pharmacology, When Time Is Short. </br> A rapid-learning pathway designed to help you cover and revisit essential Pharmacology efficiently. </br> Focus • Revise • Remember",
    image:
      "https://cdn.dribbble.com/userupload/49258292/file/08474940b4b5fc07d3212681bb0f5940.jpeg",
  },
  {
    title: "QUESTIONS & PRACTICE",
    para: "Turn understanding into exam readiness. </br> Practise what you learn and use questions to identify gaps, reinforce concepts and improve your exam approach. </br> Practise • Identify • Improve",
    image:
      "https://cdn.dribbble.com/userupload/49258499/file/d4a9edc8527c817227e8832161f1f6ce.jpeg",
  },
  {
    title: "REVISION & RECALL",
    para: "Keep Pharmacology active throughout your preparation. </br> Move between detailed learning, revision and rapid recall depending on where you are in your preparation. </br> Learn → Revise → Recall",
    image:
      "https://cdn.dribbble.com/userupload/49258102/file/61fcb64f35ab502a8ddb3e9b69e71070.png",
  },
];
function FmgePlansFeature() {
  const container = useRef(null);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const cards = gsap.utils.toArray(
        ".fmge-plans-feature-card",
        container.current,
      );
      const cardInners = gsap.utils.toArray(
        ".fmge-plans-feature-card-inner",
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
      gsap.from(".fmge-plans-feature-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-plans-feature-header",
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
    <section
      className="fmge-plans-feature-container"
      ref={container}
      aria-labelledby="fmge-feature-heading"
    >
      <div className="fmge-plans-feature-header">
        <h2 className="fmge-plans-feature-heading" id="fmge-feature-heading">
          WHAT YOU GET WITH PHARMA BY DR. GRG
        </h2>
      </div>
      <div className="fmge-plans-feature-cards">
        {programData.map((item) => (
          <article className="fmge-plans-feature-card" key={item.title}>
            <div className="fmge-plans-feature-card-inner">
              <div className="fmge-plans-feature-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="fmge-plans-feature-card-content">
                <h3>{item.title}</h3>
                {item.para.split("</br>").map((text, index) => (
                  <p key={index}>{text.trim()}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default FmgePlansFeature;
