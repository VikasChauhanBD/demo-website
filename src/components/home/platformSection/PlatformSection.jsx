import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import "./PlatformSection.css";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const img = (id) =>
  `https://framerusercontent.com/images/${id}.webp?scale-down-to=800`;

const cards = [
  {
    number: "01",
    title: "Understand the why",
    images: [
      img("nRwdEgKtKEpASQfN7i07r9Wiw"),
      img("c3MsKrZxj47RDxRabAHEICoWCU"),
      img("isDkdsT4u3D0wWio9CB6SQCk7OQ"),
    ],
    description:
      "When you understand why a drug produces an effect, many indications, adverse effects and contraindications become logical rather than isolated facts.",
  },
  {
    number: "02",
    title: "Remember intelligently",
    images: [
      img("hixpzry8PTPayIdxie74gS9uAaA"),
      img("KJ4COTLYCETJNQxWPjzWzDyEEg"),
      img("kt6nlSCxVUveV9YE8nPjpzY"),
    ],
    description:
      "Use comparisons, tables, mnemonics, visual associations and repeated reinforcement where they genuinely make learning easier.",
  },
  {
    number: "03",
    title: "Apply with confidence",
    images: [
      img("b3f2adtVzLxED8ySJcPancPCVI"),
      img("p9jZ7iV0d51cluuiV46MpIWc"),
      img("5bTRQ54H4Uh7xtD8ngtCLl5qp80"),
    ],
    description:
      "Connect concepts to clinical questions, PYQs, newer drugs and common examination traps.",
  },
];

function PlatformSection() {
  const container = useRef(null);
  useGSAP(
    (context, contextSafe) => {
      gsap.from(".platform-header > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".platform-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".platform-strip", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".platform-strip",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      const cardEls = gsap.utils.toArray(".platform-card", container.current);
      const mediaEls = gsap.utils.toArray(".platform-media", container.current);
      const cardsGrid = container.current.querySelector(".platform-cards");

      gsap.set(cardEls, { opacity: 0, y: 60 });
      gsap.set(mediaEls, { clipPath: "inset(0 0 100% 0)" });
      const groups = cardEls.map((card) => ({
        slides: gsap.utils.toArray(".platform-slide", card),
        current: 0,
      }));

      groups.forEach((group) => {
        gsap.set(group.slides.slice(1), { opacity: 0, y: 40 });
      });

      const showNext = contextSafe(() => {
        groups.forEach((group) => {
          const next = (group.current + 1) % group.slides.length;
          gsap.to(group.slides[group.current], {
            opacity: 0,
            y: -40,
            duration: 0.8,
            ease: "power2.inOut",
          });
          gsap.fromTo(
            group.slides[next],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          );
          group.current = next;
        });
      });

      const loop = gsap.to(
        {},
        { duration: 4.5, repeat: -1, paused: true, onRepeat: showNext },
      );
      ScrollTrigger.create({
        trigger: cardsGrid,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
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
            gsap.to(card.querySelector(".platform-media"), {
              clipPath: "inset(0 0 0% 0)",
              duration: 1,
              ease: "power3.out",
              delay: 0.3 + i * 0.15,
              overwrite: true,
            });
          });
        },
      });

      gsap.from(".platform-cta-wrap", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".platform-cta-wrap",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container },
  );

  return (
    <section className="platform-section" ref={container}>
      <div className="platform-container">
        <div className="platform-header">
          <span className="platform-tag">THE GRG PROMISE</span>
          <h2 className="platform-heading">
            <span>Pharmacology That</span>
            <span className="platform-heading-mark">Finally Makes Sense.</span>
          </h2>

          <p className="platform-para">
            Dr. GRG’s aim is not to make Pharmacology superficial in the name of
            exam preparation. It is to build a strong conceptual base and then
            make that knowledge easier to remember, revise and apply.
          </p>
        </div>

        <div className="platform-cards">
          {cards.map((card) => (
            <div className="platform-card" key={card.title}>
              <div className="platform-media">
                {card.images.map((src, i) => (
                  <div className="platform-slide" key={i}>
                    <img src={src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="platform-card-number"> {card.number} </div>
              <h4 className="platform-card-title"> {card.title} </h4>
              <p className="platform-card-description">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="platform-cta-wrap">
          <NavLink to="#" className="platform-cta">
            Explore the Platform →
          </NavLink>
        </div>
      </div>
    </section>
  );
}
export default PlatformSection;
