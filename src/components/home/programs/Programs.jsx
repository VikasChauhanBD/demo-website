import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Programs.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const restState = [
  { rotation: -4, origin: "bottom center", x: 0, y: 0 },
  { rotation: 3, origin: "top center", x: 0, y: 90 },
  { rotation: 4, origin: "bottom center", x: 40, y: 0 },
  { rotation: -3, origin: "top center", x: -30, y: 40 },
];

const pileTilts = [-8, 6, -5, 9];

function Programs() {
  const container = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 581px)", () => {
        const cardsContainer =
          container.current.querySelector(".programs-cards");

        const cards = gsap.utils.toArray(".programs-card", cardsContainer);

        cards.forEach((card, i) => {
          gsap.set(card, {
            transformOrigin: restState[i].origin,
          });
        });

        const spread = gsap.fromTo(
          cards,
          {
            x: (i, el) =>
              cardsContainer.clientWidth / 2 -
              (el.offsetLeft + el.offsetWidth / 2),
            y: (i, el) =>
              cardsContainer.clientHeight / 2 -
              (el.offsetTop + el.offsetHeight / 2),
            rotation: (i) => pileTilts[i],
            scale: 0.85,
          },
          {
            x: (i) => restState[i].x,
            y: (i) => restState[i].y,
            rotation: (i) => restState[i].rotation,
            scale: 1,
            duration: 1.4,
            ease: "power3.inOut",
            stagger: 0.08,
            immediateRender: true,
            scrollTrigger: {
              trigger: cardsContainer,
              start: "center 85%",
              invalidateOnRefresh: true,
            },
          },
        );

        const cleanups = cards.map((card, i) => {
          const straighten = contextSafe(() => {
            if (spread.progress() < 1) return;

            gsap.to(card, {
              rotation: 0,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          const tiltBack = contextSafe(() => {
            if (spread.progress() < 1) return;

            gsap.to(card, {
              rotation: restState[i].rotation,
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          card.addEventListener("mouseenter", straighten);
          card.addEventListener("mouseleave", tiltBack);

          return () => {
            card.removeEventListener("mouseenter", straighten);
            card.removeEventListener("mouseleave", tiltBack);
          };
        });

        return () => cleanups.forEach((fn) => fn());
      });

      mm.add("(max-width: 500px)", () => {
        const cards = gsap.utils.toArray(".programs-card", container.current);

        gsap.set(cards, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          clearProps: "transform",
        });
      });

      return () => mm.revert();
    },
    {
      scope: container,
    },
  );

  return (
    <div className="programs-container" ref={container}>
      <div className="programs-header">
        <div>
          <h4 className="programs-label">
            <span></span>Our Programs
          </h4>
          <h2 className="programs-heading">Foundation’s Work</h2>
        </div>

        <p className="programs-para">
          We are deeply immersed in the areas in which we invest, supporting
          ideas and organizations that contribute to our four program areas:
          Arts & Culture, Education, Health, and Policy & Advocacy.
        </p>
      </div>

      <div className="programs-cards">
        <div className="programs-card card-1">
          <div className="programs-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-02-jpg.webp"
              alt=""
            />
          </div>

          <div className="programs-card-content">
            <h3>Arts & Culture</h3>
            <p>
              Art and artists are crucial for fostering human connection,
              inspiring creativity, promoting cultural understanding, and
              enriching communities.
            </p>
          </div>
        </div>

        <div className="programs-card card-2">
          <div className="programs-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-01-jpg.webp"
              alt=""
            />
          </div>

          <div className="programs-card-content">
            <h3>Education</h3>
            <p>
              enabling informed decisions, fostering innovation, and driving
              social and economic progress. Knowledge holds the key to
              empowerment,
            </p>
          </div>
        </div>

        <h2>Program Areas</h2>

        <div className="programs-card card-3">
          <div className="programs-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-03-jpg.webp"
              alt=""
            />
          </div>

          <div className="programs-card-content">
            <h3>Health</h3>
            <p>
              Healthy futures for people and the planet promote sustainability,
              well-being, and resilience against environmental and health
              challenges.
            </p>
          </div>
        </div>

        <div className="programs-card card-4">
          <div className="programs-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-04-jpg.webp"
              alt=""
            />
          </div>

          <div className="programs-card-content">
            <h3>Policy & Advocacy</h3>
            <p>
              Promoting economic fairness and prosperity is crucial for reducing
              inequality, fostering social stability, and creating opportunities
              for everyone to thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
