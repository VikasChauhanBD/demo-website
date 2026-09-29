import React, { useRef } from "react";
import "./WhoSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaUserGraduate,
  FaStethoscope,
  FaBookMedical,
  FaGlobe,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const WhoSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const introItems = gsap.utils.toArray(".who-intro > *");
      const cards = gsap.utils.toArray(".who-card");

      gsap.fromTo(
        introItems,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".who-intro",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".who-cards",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );

      cards.forEach((card) => {
        const icon = card.querySelector(".who-card-icon");

        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 8,
            scale: 1.08,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(icon, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="who-section" ref={sectionRef}>
      <div className="who-container">
        <div className="who-intro">
          <h2 className="who-title">Who Is This App Designed For?</h2>

          <h3 className="who-sub-title">
            Wherever You Are in Your Medical Journey
          </h3>
        </div>

        <div className="who-cards">
          <article className="who-card">
            <div className="who-card-number">01</div>

            <div className="who-card-icon">
              <FaUserGraduate />
            </div>

            <div className="who-card-content">
              <h3>Second Prof MBBS Students</h3>
              <p>
                Starting Pharmacology from the basics? Build a strong foundation
                for your university exams and the subjects that follow.
              </p>
            </div>
          </article>

          <article className="who-card">
            <div className="who-card-number">02</div>

            <div className="who-card-icon">
              <FaStethoscope />
            </div>

            <div className="who-card-content">
              <h3>NEET PG Aspirants</h3>
              <p>
                Revise important mechanisms, drug choices, adverse effects and
                frequently tested areas with an exam-focused approach.
              </p>
            </div>
          </article>

          <article className="who-card">
            <div className="who-card-number">03</div>

            <div className="who-card-icon">
              <FaBookMedical />
            </div>

            <div className="who-card-content">
              <h3>INI-CET Aspirants</h3>
              <p>
                Go beyond recall with concepts and clinical application that
                help you approach integrated questions.
              </p>
            </div>
          </article>

          <article className="who-card">
            <div className="who-card-number">04</div>

            <div className="who-card-icon">
              <FaGlobe />
            </div>

            <div className="who-card-content">
              <h3>FMGE Aspirants</h3>
              <p>
                Focus on the Pharmacology areas that matter for your
                preparation, revision and question practice.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
