import React, { useRef } from "react";
import "./WhoSection.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStethoscope, FaGlobe } from "react-icons/fa";
import { NavLink } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const WhoSection = () => {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      const introItems = gsap.utils.toArray(".who-intro > *");
      const cards = gsap.utils.toArray(".who-card");
      const lastSection = document.querySelector(".who-last-section");
      const lastHeading = lastSection?.querySelector(".who-tag");
      const lastCta = lastSection?.querySelector(".who-cta");
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
      if (lastSection && lastHeading && lastCta) {
        gsap.set(lastHeading, {
          opacity: 0,
          y: 50,
        });
        gsap.set(lastCta, {
          opacity: 0,
          y: 30,
          scale: 0.95,
        });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: lastSection,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
          .to(lastHeading, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(
            lastCta,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.5)",
            },
            "-=0.3",
          );
      }
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
          <span className="who-eyebrow">BUILT FOR YOUR EXAM</span>
          <h2 className="who-title">
            One Pharmacology platform. Two focused preparation pathways.
          </h2>
          <p className="who-para">
            Dedicated video lectures and learning resources, curated separately
            for:
          </p>
        </div>

        <div className="who-pathways">
          <span className="who-pathway">NEET PG | INI-CET</span>
          <span className="who-pathway">FMGE</span>
        </div>

        <hr className="who-divider" />

        <div className="who-last-section">
          <span className="who-eyebrow">START HERE</span>
          <h3 className="who-tag">
            Wherever you are in your preparation, there is a place for you here.
          </h3>
          <p className="who-para who-start-para">
            The same subject needs a different learning experience depending on
            your exam and stage of preparation.
          </p>

          <div className="who-cards">
            <article className="who-card">
              <div className="who-card-number">01</div>
              <div className="who-card-icon">
                <FaStethoscope />
              </div>
              <div className="who-card-content">
                <h3>NEET PG | INI-CET</h3>
                <p>
                  Build concepts, strengthen recall and prepare with questions,
                  PYQs and exam-oriented revision.
                </p>
              </div>
            </article>
            <article className="who-card">
              <div className="who-card-number">02</div>
              <div className="who-card-icon">
                <FaGlobe />
              </div>
              <div className="who-card-content">
                <h3>FMGE</h3>
                <p>
                  Access separate video lectures designed specifically for FMGE
                  aspirants and their preparation needs.
                </p>
              </div>
            </article>
          </div>

          <p className="who-language">
            Choose the language that works for you. Video lectures available in
            English &amp; Hinglish.
          </p>

          {/* <NavLink to="/buy-new-plans" className="who-cta">
            Find Your Starting Point →
          </NavLink> */}
        </div>
      </div>
    </section>
  );
};
export default WhoSection;
