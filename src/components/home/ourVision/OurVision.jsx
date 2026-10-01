import React, { useRef } from "react";
import "./OurVision.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurVision = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray(".vision-highlight-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".vision-label",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        ".vision-title-line",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.3",
      );

      tl.fromTo(
        ".vision-description",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      );

      tl.fromTo(
        words,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.3",
      );

      tl.fromTo(
        ".vision-cta",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="vision-container">
        <div className="vision-top">
          <span className="vision-label">OUR VISION</span>
        </div>

        <div className="vision-main">
          <div className="vision-title">
            <div className="vision-title-line">Make Pharmacology</div>

            <div className="vision-title-line">
              <span>Less Complicated</span>
            </div>

            <div className="vision-title-line">for Students.</div>
          </div>

          <div className="vision-content">
            <p className="vision-description">
              Medical school already gives you enough to remember.
            </p>

            <p className="vision-description">
              Our aim is to make Pharmacology one subject you can approach with
              a little more clarity and a lot less confusion.
            </p>

            <p className="vision-description">
              From your <strong>Second Prof lectures</strong> to{" "}
              <strong>entrance exam preparation</strong>, the focus stays the
              same:
            </p>

            <div className="vision-points">
              <span className="vision-highlight-word">
                Understand what you study.
              </span>

              <span className="vision-highlight-word">
                Remember what matters.
              </span>

              <span className="vision-highlight-word">
                Use it when the question comes.
              </span>
            </div>

            <div className="vision-bottom">
              <p className="vision-closing">
                Because the goal is not to memorise more.
                <strong> It is to help you remember better.</strong>
              </p>

              {/* <a href="#start-learning" className="vision-cta">
                <span>START YOUR PHARMACOLOGY JOURNEY</span>

                <span className="vision-cta-arrow">↗</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
