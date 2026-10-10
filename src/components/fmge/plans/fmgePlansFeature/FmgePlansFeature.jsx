import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./FmgePlansFeature.css";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const programData = [
  {
    title: "GRG MASTER CLASS",
    para: "Where Concepts Become Confidence. </br> Detailed, concept-based learning with Dr. GRG — helping you understand the why behind Pharmacology rather than simply memorising facts. </br> Learn • Understand • Connect • Apply",
  },
  {
    title: "POWER PACK REVISION",
    para: "Quick & Conceptual </br> A focused revision pathway to help you revisit important concepts, reinforce recall and keep your preparation exam-oriented. </br> Revise • Reinforce • Recall",
  },
  {
    title: "GRG EXPRESS",
    para: "Pharmacology, When Time Is Short. </br> A rapid-learning pathway designed to help you cover and revisit essential Pharmacology efficiently. </br> Focus • Revise • Remember",
  },
  {
    title: "QUESTIONS & PRACTICE",
    para: "Turn understanding into exam readiness. </br> Practise what you learn and use questions to identify gaps, reinforce concepts and improve your exam approach. </br> Practise • Identify • Improve",
  },
  {
    title: "REVISION & RECALL",
    para: "Keep Pharmacology active throughout your preparation. </br> Move between detailed learning, revision and rapid recall depending on where you are in your preparation. </br> Learn → Revise → Recall",
  },
];

function FmgePlansFeature() {
  const container = useRef(null);
  const trackRef = useRef(null);
  const scrollTween = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const updateButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setCanPrev(scrollLeft > 4);
      setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
    };

    const stopTween = () => {
      if (scrollTween.current) {
        scrollTween.current.kill();
        scrollTween.current = null;
        track.style.scrollSnapType = "";
      }
    };

    updateButtons();

    track.addEventListener("scroll", updateButtons, { passive: true });
    track.addEventListener("wheel", stopTween, { passive: true });
    track.addEventListener("touchstart", stopTween, { passive: true });
    window.addEventListener("resize", updateButtons);

    const resizeObserver = new ResizeObserver(updateButtons);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateButtons);
      track.removeEventListener("wheel", stopTween);
      track.removeEventListener("touchstart", stopTween);
      window.removeEventListener("resize", updateButtons);
      resizeObserver.disconnect();
      if (scrollTween.current) scrollTween.current.kill();
    };
  }, []);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll(".fmge-plans-feature-card"),
    );
    if (!cards.length) return;

    const trackLeft = track.getBoundingClientRect().left;
    const current = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const positions = cards.map(
      (card) => card.getBoundingClientRect().left - trackLeft + current,
    );

    let target;
    if (direction > 0) {
      target = positions.find((position) => position > current + 4);
      if (target === undefined) target = maxScroll;
    } else {
      target = [...positions]
        .reverse()
        .find((position) => position < current - 4);
      if (target === undefined) target = 0;
    }

    target = Math.max(0, Math.min(target, maxScroll));

    if (scrollTween.current) scrollTween.current.kill();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      track.scrollLeft = target;
      return;
    }

    const proxy = { x: current };
    track.style.scrollSnapType = "none";

    scrollTween.current = gsap.to(proxy, {
      x: target,
      duration: 0.6,
      ease: "power2.inOut",
      onUpdate: () => {
        track.scrollLeft = proxy.x;
      },
      onComplete: () => {
        track.style.scrollSnapType = "";
        scrollTween.current = null;
      },
    });
  };

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    <>
      {" "}
      <section
        className="fmge-plans-feature-container"
        ref={container}
        aria-labelledby="pg-feature-heading"
      >
        <div className="fmge-plans-feature-header">
          <h2 className="fmge-plans-feature-heading" id="pg-feature-heading">
            WHAT YOU GET WITH PHARMA BY DR. GRG
          </h2>
        </div>
        <div className="fmge-plans-feature-carousel">
          <div
            className="fmge-plans-feature-cards"
            ref={trackRef}
            tabIndex={0}
            aria-label="Pharmacology plans carousel"
          >
            {programData.map((item) => (
              <article className="fmge-plans-feature-card" key={item.title}>
                <div className="fmge-plans-feature-card-inner">
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
          <div className="fmge-plans-feature-controls">
            <button
              type="button"
              className="fmge-plans-feature-nav-btn"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous card"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H5" />
                <path d="M11 6L5 12L11 18" />
              </svg>
            </button>
            <button
              type="button"
              className="fmge-plans-feature-nav-btn"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next card"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12H19" />
                <path d="M13 6L19 12L13 18" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="fmge-plans-feature-banner">
        <img
          src="https://cdn.dribbble.com/userupload/49280298/file/d231a543912b2d9fa47ef84d954cad95.jpeg"
          alt=""
        />
      </section>
    </>
  );
}
export default FmgePlansFeature;
