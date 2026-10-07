import React from "react";
import "./IntroSection.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function IntroSection() {
  useGSAP(() => {
    // Circle animation
    gsap.fromTo(
      ".fmge-intro-circle",
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-intro-section",
          start: "top 50%",
          toggleActions: "play none none none",
        },
      },
    );

    // Content animation
    gsap.fromTo(
      ".fmge-intro-heading",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-intro-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".fmge-intro-sub-heading",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-intro-sub-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".fmge-intro-para",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-intro-para",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".fmge-intro-cta",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-intro-cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Set initial state for all images
    gsap.set(
      ".fmge-intro-left-top-img, .fmge-intro-right-top-img, .fmge-intro-left-bottom-img, .fmge-intro-right-bottom-img",
      {
        opacity: 0,
        scale: 1.08,
        clipPath: "inset(0 0 100% 0)",
      },
    );

    // TOP LEFT
    gsap.to(".fmge-intro-left-top-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fmge-intro-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // TOP RIGHT
    gsap.to(".fmge-intro-right-top-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fmge-intro-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // BOTTOM LEFT
    gsap.to(".fmge-intro-left-bottom-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fmge-intro-left-bottom-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // BOTTOM RIGHT
    gsap.to(".fmge-intro-right-bottom-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".fmge-intro-right-bottom-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="fmge-intro-section">
      <div className="fmge-intro-circle-div">
        <img
          className="fmge-intro-left-top-img"
          src="https://cdn.dribbble.com/userupload/49245648/file/526e7ec8d72c1e435ba7549baeb1740a.png"
          alt=""
        />

        <img
          className="fmge-intro-left-bottom-img"
          src="https://cdn.dribbble.com/userupload/49245650/file/45a68918dc05668300817ab5674f126c.png"
          alt=""
        />

        <div className="fmge-intro-circle">
          <span className="fmge-intro-tag">ABOUT GRG</span>

          <h2 className="fmge-intro-heading">
            The Teacher Behind Pharmacology by Dr. GRG
          </h2>

          {/* <h4 className="fmge-intro-sub-heading">
            The teacher behind Pharmacology by Dr. GRG
          </h4> */}

          <p className="fmge-intro-para">
            For more than two decades, Dr. Gobind Rai Garg has taught
            Pharmacology in classrooms, through books, on digital platforms and
            in large revision programmes. Across those years, one belief has
            remained constant: Pharmacology does not have to be a subject
            students fear or simply memorise.
            <br />
            <br />
            THE JOURNEY From classrooms to a dedicated Pharmacology home. After
            years of teaching within larger academic systems, Dr. GRG wanted to
            build a dedicated platform where Pharmacology itself remains at the
            centre and the learning experience could be shaped around how
            students actually learn. THE PHILOSOPHY Make difficult things simple
            - without oversimplifying. His approach begins with the concept,
            then uses memory tools, clinical connections, questions and revision
            to make that understanding easier to retain and apply. THE PURPOSE
            Help students move from pharmacophobia to pharmacophilia. The goal
            goes beyond marks: organise Pharmacology in the student’s mind so
            they can reason through unfamiliar questions and revise efficiently.
            <br />
            “I would like the student to be able to say: ‘Pharmacology finally
            makes sense to me.’” - Dr. Gobind Rai Garg
            {/* <br />
            Teach the concept first. Then make it easier to remember, revise and
            apply. */}
            {/* <span className="fmge-intro-tagline">Make difficult things simple.</span>
            <span className="fmge-intro-chips">
              <span className="fmge-intro-chip">Concepts</span>
              <span className="fmge-intro-chip">Clinical Connections</span>
              <span className="fmge-intro-chip">Mnemonics</span>
              <span className="fmge-intro-chip">Questions</span>
              <span className="fmge-intro-chip">Revision</span>
            </span> */}
          </p>

          <NavLink to="#" className="fmge-intro-cta">
            Read About Dr. GRG
          </NavLink>
        </div>

        <img
          className="fmge-intro-right-top-img"
          src="https://cdn.dribbble.com/userupload/49245649/file/032c6cdc0f1b996fdf5d15b80143a087.png"
          alt=""
        />

        <img
          className="fmge-intro-right-bottom-img"
          src="https://cdn.dribbble.com/userupload/49244495/file/22d27375a033a89a1535301a496f8802.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default IntroSection;
