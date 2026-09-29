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
          <h2 className="intro-heading">Pharmacology With Dr. GRG</h2>

          <h4 className="intro-sub-heading">
            Understand It. Enjoy it. Apply It.
          </h4>

          <p className="intro-para">
            Pharmacology can feel like a lot when you first start studying it.
            <br />
            There are drug names, mechanisms, classifications, adverse effects
            and clinical uses , and somehow, you have to remember all of it.
            <br />
            Pharmacology By GRG's approach is simple:
            <br />
            <b>
              Understand the concept first. Find an easy way to remember it.
              Then practise using it.
            </b>
            <br />
            Whether you're starting Pharmacology in <b>Second Prof MBBS</b> or
            preparing for <b>NEET PG, INI-CET or FMGE</b>, this is a place to
            learn, practise and revise Pharmacology with GRG Sir.
          </p>

          <NavLink className="intro-cta">Start Learning</NavLink>
        </div>

        <img
          className="intro-right-top-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/opera4-e1635375200792-jpg.webp"
          alt=""
        />

        <img
          className="intro-right-bottom-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/cdc-n6z8c6nugfe-unsplash-1-jpg.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default IntroSection;
