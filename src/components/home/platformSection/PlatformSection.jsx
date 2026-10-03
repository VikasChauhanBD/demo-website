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
    title: "Concepts",
    images: [
      img("nRwdEgKtKEpASQfN7i07r9Wiw"),
      img("c3MsKrZxj47RDxRabAHEICoWCU"),
      img("isDkdsT4u3D0wWio9CB6SQCk7OQ"),
    ],
  },
  {
    title: "Clinical Connections",
    images: [
      img("hixpzry8PTPayIdxie74gS9uAaA"),
      img("KJ4COTLYCETJNQxWPjzWzDyEEg"),
      img("kt6nlSCxVUveV9YE8nPjpzY"),
    ],
  },
  {
    title: "Mnemonics",
    images: [
      img("b3f2adtVzLxED8ySJcPancPCVI"),
      img("p9jZ7iV0d51cluuiV46MpIWc"),
      img("5bTRQ54H4Uh7xtD8ngtCLl5qp80"),
    ],
  },
  {
    title: "Questions",
    images: [
      img("cnUr2VLMIwZ6MGC4wjohO9hOTw"),
      img("TFgydAuMHmbQ9l3hjBki7tieg"),
      img("AdHCooMpTci1f2uKKNsj1P2m8"),
    ],
  },
  {
    title: "Revision",
    images: [
      img("ZSq6TtoKVqx0t9HYy32h18AWdI"),
      img("QSj92GHag5y9xn8oRFoxoADBMw"),
      img("9cwbkkfxw8qxdANrOGEGMwRJRk"),
    ],
  },
];

function PlatformSection() {
  const container = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      // Header
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

      // Strip heading
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

      // Cards
      const cardEls = gsap.utils.toArray(".platform-card", container.current);
      const mediaEls = gsap.utils.toArray(".platform-media", container.current);
      const cardsGrid = container.current.querySelector(".platform-cards");

      gsap.set(cardEls, { opacity: 0, y: 60 });
      gsap.set(mediaEls, { clipPath: "inset(0 0 100% 0)" });

      // Image slideshow: one image at a time in every card, all cards change together
      const groups = cardEls.map((card) => ({
        slides: gsap.utils.toArray(".platform-slide", card),
        current: 0,
      }));

      // Only the first image of each card is visible at the start
      groups.forEach((group) => {
        gsap.set(group.slides.slice(1), { opacity: 0, y: 40 });
      });

      const showNext = contextSafe(() => {
        groups.forEach((group) => {
          const next = (group.current + 1) % group.slides.length;

          // Current image fades out and moves up
          gsap.to(group.slides[group.current], {
            opacity: 0,
            y: -40,
            duration: 0.8,
            ease: "power2.inOut",
          });

          // Next image fades in and moves up into place
          gsap.fromTo(
            group.slides[next],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          );

          group.current = next;
        });
      });

      // One shared loop: changes the images in all cards every 3.2s
      const loop = gsap.to(
        {},
        {
          duration: 4.5,
          repeat: -1,
          paused: true,
          onRepeat: showNext,
        },
      );

      // Run only while the cards are in the viewport
      ScrollTrigger.create({
        trigger: cardsGrid,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
      });

      // Cards reveal on scroll
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

      // CTA
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
    {
      scope: container,
    },
  );

  return (
    <section className="platform-section" ref={container}>
      <div className="platform-container">
        <div className="platform-header">
          <span className="platform-tag">GRG PROMISE</span>

          <h2 className="platform-heading">
            <span>Built by a Teacher.</span>{" "}
            <span className="platform-heading-mark">
              Built Around Students.
            </span>
          </h2>

          <p className="platform-para">
            Concepts, clinical connections, mnemonics, questions and revision
            come together in one place, helping you understand the concept,
            remember what matters and practise what you have learnt.
          </p>
        </div>

        <h3 className="platform-strip">Make difficult things simple.</h3>

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

              <h4 className="platform-card-title">{card.title}</h4>
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
