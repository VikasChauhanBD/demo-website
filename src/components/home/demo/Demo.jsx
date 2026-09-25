import React from "react";
import "./Demo.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Demo() {
  useGSAP(() => {
    // Circle animation
    gsap.fromTo(
      ".demo-circle",
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
          trigger: ".demo-section",
          start: "top 50%",
          toggleActions: "play none none none",
        },
      },
    );

    // Content animation
    gsap.fromTo(
      ".demo-heading",
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
          trigger: ".demo-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".demo-para",
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
          trigger: ".demo-para",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      ".demo-cta",
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
          trigger: ".demo-cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Set initial state for all images
    gsap.set(
      ".demo-left-top-img, .demo-right-top-img, .demo-left-bottom-img, .demo-right-bottom-img",
      {
        opacity: 0,
        scale: 1.08,
        clipPath: "inset(0 0 100% 0)",
      },
    );

    // TOP LEFT
    gsap.to(".demo-left-top-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".demo-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // TOP RIGHT
    gsap.to(".demo-right-top-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".demo-section",
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // BOTTOM LEFT
    gsap.to(".demo-left-bottom-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".demo-left-bottom-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // BOTTOM RIGHT
    gsap.to(".demo-right-bottom-img", {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0 0 0% 0)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".demo-right-bottom-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="demo-section">
      <div className="demo-circle-div">
        <img
          className="demo-left-top-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/pexels-pixabay-33703-1-jpg.webp"
          alt=""
        />

        <img
          className="demo-left-bottom-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/ben-mullins-je240kkjiua-unsplash-2-jpg.webp"
          alt=""
        />

        <div className="demo-circle">
          <h2 className="demo-heading">
            We Invest in Transformative Ideas,
            <br />
            Individuals and Organizations
          </h2>

          <p className="demo-para">
            We are dedicated to fulfilling our mission. Explore our full
            database of grants to gain a deeper understanding of the
            organizations we support and the remarkable impact they have made
            thus far.
          </p>

          <NavLink className="demo-cta">Explore Grants</NavLink>
        </div>

        <img
          className="demo-right-top-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/opera4-e1635375200792-jpg.webp"
          alt=""
        />

        <img
          className="demo-right-bottom-img"
          src="https://www.hejlfoundation.org/app/uploads/2024/06/cdc-n6z8c6nugfe-unsplash-1-jpg.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Demo;
