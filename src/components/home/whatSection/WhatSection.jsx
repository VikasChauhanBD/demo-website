import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./WhatSection.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const restState = [
  { rotation: -4, origin: "bottom center", x: 0, y: 0 },
  { rotation: 3, origin: "bottom center", x: 0, y: 0 },
  { rotation: -2, origin: "top center", x: 0, y: 0 },
  { rotation: 4, origin: "top center", x: 0, y: 0 },
  { rotation: -3, origin: "top center", x: 0, y: 0 },
];

const pileTilts = [-8, 6, -3, 9, -5];

function WhatSection() {
  const container = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 581px)", () => {
        const cardsContainer = container.current.querySelector(".what-cards");

        const cards = gsap.utils.toArray(".what-card", cardsContainer);

        cards.forEach((card, i) => {
          gsap.set(card, {
            transformOrigin: restState[i].origin,
          });
        });

        let played = false;

        // Puts ALL cards in the centered pile
        const setPile = () => {
          gsap.set(cards, {
            x: (i, el) =>
              cardsContainer.clientWidth / 2 -
              (el.offsetLeft + el.offsetWidth / 2),
            y: (i, el) =>
              cardsContainer.clientHeight / 2 -
              (el.offsetTop + el.offsetHeight / 2),
            rotation: (i) => pileTilts[i],
            scale: 0.85,
          });
        };

        setPile();

        // Pile -> rest positions
        const spread = gsap.to(cards, {
          x: (i) => restState[i].x,
          y: (i) => restState[i].y,
          rotation: (i) => restState[i].rotation,
          scale: 1,
          duration: 1.4,
          ease: "power3.inOut",
          stagger: 0.08,
          paused: true,
        });

        const trigger = ScrollTrigger.create({
          trigger: cardsContainer,
          start: "center 85%",
          end: "max",
          once: true,
          onEnter: () => {
            played = true;
            spread.play();
          },
        });

        // Re-apply the pile if layout changes before the animation has played
        const onRefreshInit = contextSafe(() => {
          if (!played) setPile();
        });

        ScrollTrigger.addEventListener("refreshInit", onRefreshInit);

        // Images change card heights when they load, so re-measure
        const onImgLoad = contextSafe(() => {
          if (!played) setPile();
          ScrollTrigger.refresh();
        });

        const imgs = Array.from(cardsContainer.querySelectorAll("img"));

        imgs.forEach((img) => {
          if (!img.complete) img.addEventListener("load", onImgLoad);
        });

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

        return () => {
          cleanups.forEach((fn) => fn());
          ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
          imgs.forEach((img) => img.removeEventListener("load", onImgLoad));
          trigger.kill();
          spread.kill();
        };
      });

      return () => mm.revert();
    },
    {
      scope: container,
    },
  );

  return (
    <div className="what-container" ref={container}>
      <div className="what-header">
        <h2 className="what-heading">WHAT’S INSIDE</h2>
        <p className="what-para">
          Different ways to learn, revise and practise Pharmacology.
        </p>
      </div>

      <div className="what-cards">
        <div className="what-card">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-02-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>GOGA MASTER CLASS</h3>
            <p>
              Where Concepts Become Confidence.
              <br />
              Detailed Pharmacology teaching for building your understanding
              from the ground up.
            </p>
          </div>
        </div>

        <div className="what-card">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-01-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>POWER PACK REVISION</h3>
            <p>Quick. Clear. To the Point.</p>
          </div>
        </div>

        <div className="what-card">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-01-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>GOGA EXPRESS</h3>
            <p>Pharmacology, When Time Is Short.</p>
          </div>
        </div>

        <div className="what-card">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-03-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>MASTER CLASS Q.BANK</h3>
            <p>
              Questions That Make You Think.
              <br />
              MCQs, PYQs and concept based questions that show you how
              Pharmacology is asked.
            </p>
          </div>
        </div>

        <div className="what-card">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-04-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>GOGA TEST APPROACH</h3>
            <p>Attempt. Analyse. Improve.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatSection;
