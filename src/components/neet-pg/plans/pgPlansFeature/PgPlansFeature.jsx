import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./PgPlansFeature.css";
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
function PgPlansFeature() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const goToSlide = (index) => {
    const track = trackRef.current;
    const slide = track.children[index];
    track.scrollTo({
      left: slide.offsetLeft - track.children[0].offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  const updateActiveSlide = () => {
    const track = trackRef.current;
    const firstOffset = track.children[0].offsetLeft;
    let nearest = 0;
    Array.from(track.children).forEach((slide, index) => {
      const distance = Math.abs(
        slide.offsetLeft - firstOffset - track.scrollLeft,
      );
      const nearestDistance = Math.abs(
        track.children[nearest].offsetLeft - firstOffset - track.scrollLeft,
      );
      if (distance < nearestDistance) nearest = index;
    });
    setActiveIndex(nearest);
  };
  return (
    <section
      className="pg-plans-feature-section"
      aria-labelledby="pg-feature-heading"
      aria-roledescription="carousel"
    >
      <h2 id="pg-feature-heading">WHAT YOU GET WITH PHARMA BY DR. GRG</h2>
      <div className="pg-plans-feature-wrap">
        <div
          className="pg-plans-feature-track"
          ref={trackRef}
          onScroll={updateActiveSlide}
          tabIndex={0}
          aria-label="NEET PG features"
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              goToSlide(
                Math.max(
                  0,
                  Math.min(
                    programData.length - 1,
                    activeIndex + (event.key === "ArrowRight" ? 1 : -1),
                  ),
                ),
              );
            }
          }}
        >
          {programData.map((item, index) => (
            <div
              key={item.title}
              className="pg-plans-feature-card"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${programData.length}: ${item.title}`}
            >
              <div className="pg-plans-feature-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="pg-plans-feature-content">
                <h3>{item.title}</h3>
                {item.para.split("</br>").map((text, i) => (
                  <p key={i}>{text.trim()}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pg-plans-feature-controls">
          <button
            type="button"
            className="pg-plans-feature-arrow"
            aria-label="Previous feature"
            disabled={activeIndex === 0}
            onClick={() => goToSlide(activeIndex - 1)}
          >
            <FaChevronLeft />
          </button>
          <div className="pg-plans-feature-dots">
            {programData.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className="pg-plans-feature-dot"
                aria-label={`Show ${item.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="pg-plans-feature-arrow"
            aria-label="Next feature"
            disabled={activeIndex === programData.length - 1}
            onClick={() => goToSlide(activeIndex + 1)}
          >
            <FaChevronRight />
          </button>
        </div>
        <p
          className="pg-plans-feature-status"
          aria-live="polite"
          aria-atomic="true"
        >
          {activeIndex + 1} / {programData.length}
        </p>
      </div>
    </section>
  );
}
export default PgPlansFeature;
