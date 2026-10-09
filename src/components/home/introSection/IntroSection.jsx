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
      ".intro-circle",
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
          trigger: ".intro-section",
          start: "top 50%",
          toggleActions: "play none none none",
        },
      },
    );

    // Content animation
    gsap.fromTo(
      ".intro-heading",
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
          trigger: ".intro-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".intro-sub-heading",
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
          trigger: ".intro-sub-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".intro-para",
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
          trigger: ".intro-para",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".intro-cta",
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
          trigger: ".intro-cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Set initial state for all images
    gsap.set(
      ".intro-left-top-img, .intro-right-top-img, .intro-left-bottom-img, .intro-right-bottom-img",
      {
        opacity: 0,
        scale: 1.08,
        clipPath: "inset(0 0 100% 0)",
      },
    );

    // TOP LEFT
    gsap.to(".intro-left-top-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // TOP RIGHT
    gsap.to(".intro-right-top-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // BOTTOM LEFT
    gsap.to(".intro-left-bottom-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-left-bottom-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // BOTTOM RIGHT
    gsap.to(".intro-right-bottom-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".intro-right-bottom-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="intro-section">
      <div className="intro-circle-div">
        <img
          className="intro-left-top-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/pexels-pixabay-33703-1-jpg.webp"
          alt=""
        />

        <img
          className="intro-left-bottom-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/ben-mullins-je240kkjiua-unsplash-2-jpg.webp"
          alt=""
        />

        <div className="intro-circle">
          <span className="intro-tag">ABOUT GRG</span>

          <h2 className="intro-heading">
            The Teacher Behind Pharmacology by Dr. GRG
          </h2>

          {/* <h4 className="intro-sub-heading">
            The teacher behind Pharmacology by Dr. GRG
          </h4> */}

          <p className="intro-para">
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
            students actually learn.
          </p>

          <NavLink to="/about" className="intro-cta">
            Read About Dr. GRG
          </NavLink>
        </div>

        <img
          className="intro-right-top-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/opera4-e1635375200792-jpg.webp"
          alt=""
        />

        <img
          className="intro-right-bottom-img"
          src="https://cdn.dribbble.com/userupload/49244495/file/8b5ca0bf73e3f68bb683e9baaa205fe3.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default IntroSection;
