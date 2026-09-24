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
              Widely known as <strong>GRG Sir</strong> or{" "}
              <strong>GOGA Sir</strong>, Dr. Gobind Rai Garg has been teaching
              Pharmacology for more than <strong>18 years</strong>.
              <br />
              <br />
              He is <strong>MBBS, MD Pharmacology from UCMS Delhi</strong> and a
              former{" "}
              <strong>
                Assistant Professor in the Department of Pharmacology at Maulana
                Azad Medical College
              </strong>
              .
              <br />
              <br />
              Over the years, he has taught generations of{" "}
              <strong>
                undergraduate medical students and PGMEE/FMGE aspirants
              </strong>
              .
              <br />
              <br />
              His classes are known for simple explanations, stories, clinical
              connections and, of course, his <strong>
                famous mnemonics
              </strong>{" "}
              that make difficult Pharmacology topics easier to remember.
              <br />
              <br />
              He has also authored and co-authored books covering{" "}
              <strong>Pharmacology, Pathology and Genetics</strong> for medical
              students and entrance-exam preparation.
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
