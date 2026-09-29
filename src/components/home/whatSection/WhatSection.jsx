import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./WhatSection.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const restState = [
  { rotation: -4, origin: "bottom center", x: 0, y: 0 },
  { rotation: 3, origin: "top center", x: 0, y: 90 },
  { rotation: 4, origin: "bottom center", x: 40, y: 0 },
  { rotation: -3, origin: "top center", x: -30, y: 40 },
];

const pileTilts = [-8, 6, -5, 9];

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

        // Puts ALL cards in the centered pile (explicit, for every card)
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

        // Pile -> rest positions (start values are read from the pile above)
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

      mm.add("(max-width: 500px)", () => {
        const cards = gsap.utils.toArray(".what-card", container.current);

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
    <div className="what-container" ref={container}>
      <div className="what-header">
        <div>
          <h4 className="what-label">
            <span></span>What You Get
          </h4>
          <h2 className="what-heading">In Pharmacology By Dr. GRG</h2>
        </div>

        <div className="what-para">
          <h3>GOGA Express - where Pharmacology Comes Alive</h3>
          <p>
            When you study with Goga Express, you don’t just memories. You
            understand the concepts, mechanisms, clinical connections and
            applications behind Pharmacology.
            <br />
            <br />
            Inside the lectures, you get:
          </p>
        </div>
      </div>

      <div className="what-cards">
        <div className="what-card card-1">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-02-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>Arts & Culture</h3>
            <p>
              Art and artists are crucial for fostering human connection,
              inspiring creativity, promoting cultural understanding, and
              enriching communities.
            </p>
          </div>
        </div>

        <div className="what-card card-2">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-01-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>Education</h3>
            <p>
              enabling informed decisions, fostering innovation, and driving
              social and economic progress. Knowledge holds the key to
              empowerment,
            </p>
          </div>
        </div>

        <h2>GOGA EXPRESS</h2>

        <div className="what-card card-3">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-03-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
            <h3>Health</h3>
            <p>
              Healthy futures for people and the planet promote sustainability,
              well-being, and resilience against environmental and health
              challenges.
            </p>
          </div>
        </div>

        <div className="what-card card-4">
          <div className="what-card-image">
            <img
              src="https://www.hejlfoundation.org/app/uploads/2024/06/img-program-04-jpg.webp"
              alt=""
            />
          </div>

          <div className="what-card-content">
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

export default WhatSection;
