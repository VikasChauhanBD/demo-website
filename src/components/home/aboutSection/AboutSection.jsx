import React, { useRef } from "react";
import "./AboutSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "../../../assets/images/hero.png";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const section = container.current;

      const badge = section.querySelector(".home-about-badge");
      const headingLines = section.querySelectorAll(".home-about-heading-line");
      const description = section.querySelector(".home-about-description");
      const button = section.querySelector(".home-about-cta");
      const image = section.querySelector(".home-about-image");

      const elements = [badge, ...headingLines, description, button].filter(
        Boolean,
      );

      // Initial states
      gsap.set(elements, {
        opacity: 0,
      });

      gsap.set(badge, {
        y: -20,
      });

      gsap.set(headingLines, {
        y: 35,
      });

      gsap.set(description, {
        y: 20,
      });

      gsap.set(button, {
        y: 20,
        scale: 0.92,
      });

      gsap.set(image, {
        opacity: 0,
        scale: 1.08,
        clipPath: "inset(0 0 100% 0)",
      });

      // Animation timeline
      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(badge, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          headingLines,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.25",
        )
        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
          },
          "-=0.3",
        )
        .to(
          image,
          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
          },
          "-=0.8",
        );

      // ScrollTrigger
      ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        once: true,
        onEnter: () => {
          timeline.play();
        },
      });
    },
    {
      scope: container,
    },
  );

  return (
    <div className="home-about-page">
      <section className="home-about-section" ref={container}>
        <div className="home-about-container">
          <div className="home-about-content">
            <span className="home-about-badge">MEET</span>

            <h2 className="home-about-heading">
              <span className="home-about-heading-line">
                Dr. Gobind Rai Garg
              </span>
            </h2>

            <p className="home-about-description">
              <b>
                MBBS | MD Pharmacology, UCMS Delhi Ex-Assistant Professor,
                Department of Pharmacology, Maulana Azad Medical College
              </b>
              <br />
              <br />
              Known to generations of medical students as <b>
                GRG Sir
              </b> and <b>GOGA Sir</b>, Dr. Gobind Rai Garg has spent more than
              18 years teaching undergraduate medical students and medical
              entrance aspirants.
              <br />
              <br />
              His teaching is known for making difficult drug names easier to
              remember, breaking down complicated mechanisms and using stories
              and mnemonics that stay with you long after the lecture ends.
              <br />
              <br />
              Because Pharmacology is not only about remembering a drug.
              <br />
              <br />
              It is about knowing{" "}
              <b>why it works, where it is used, and what can go wrong</b>.
            </p>
          </div>

          <div className="home-about-image-col">
            <div className="home-about-image-wrapper">
              <img
                src={Image}
                alt="Dr. Gobind Rai Garg"
                className="home-about-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
