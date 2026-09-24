import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./ClassesHero.css";
// import HeroImage from "../../../assets/images/hero.png";

const ClassesHero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const hero = container.current;

      const bg = hero.querySelector(".classes-hero-bg");
      const eyebrow = hero.querySelector(".classes-hero-eyebrow");
      const title = hero.querySelector(".classes-hero-title");
      const button = hero.querySelector(".classes-hero-button");
      const videoCard = hero.querySelector(".classes-hero-video-card");
      const videoLabel = hero.querySelector(".classes-hero-video-label");

      // Initial states
      gsap.set(bg, {
        scale: 1.12,
      });

      gsap.set([eyebrow, title, button, videoCard, videoLabel], {
        opacity: 0,
      });

      gsap.set(eyebrow, {
        y: -20,
      });

      gsap.set(title, {
        y: 60,
      });

      gsap.set(button, {
        y: 30,
        scale: 0.92,
      });

      gsap.set(videoCard, {
        y: 60,
        scale: 0.94,
      });

      gsap.set(videoLabel, {
        y: 15,
      });

      // Main entrance timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        bg,
        {
          scale: 1.8,
          opacity: 0,
          clipPath: "inset(100% 100% 100% 100%)",
        },
        {
          scale: 1.2,
          opacity: 1,
          duration: 1.8,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power3.out",
        },
      )
        .to(
          eyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=1.1",
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.25",
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
          },
          "-=0.4",
        )
        .to(
          videoLabel,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.35",
        )
        .to(
          videoCard,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          "-=0.2",
        );

      // Subtle parallax on mouse movement
      const moveX = gsap.quickTo(bg, "x", {
        duration: 0.8,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(bg, "y", {
        duration: 0.8,
        ease: "power3.out",
      });

      const handleMouseMove = (event) => {
        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveXValue = (x / rect.width - 0.5) * 20;

        const moveYValue = (y / rect.height - 0.5) * 20;

        moveX(moveXValue);
        moveY(moveYValue);
      };

      hero.addEventListener("mousemove", handleMouseMove);

      return () => {
        hero.removeEventListener("mousemove", handleMouseMove);
      };
    },
    {
      scope: container,
    },
  );

  return (
    <>
      <section className="classes-hero-section" ref={container}>
        {/* Background */}
        <div className="classes-hero-background">
          {/* <img src={HeroImage} alt="" className="classes-hero-bg" /> */}
          <img
            src="https://cdn.sanity.io/images/nyyhaljw/production/1f158eb8bcdc2d6b58b754bc4b7192a7dd9a2e83-2450x1445.webp?rect=0,34,2450,1378&w=1600&h=900&q=80&auto=format&w=1920"
            alt=""
            className="classes-hero-bg"
          />
        </div>

        {/* Dark overlay */}
        <div className="classes-hero-overlay"></div>

        {/* Gradient */}
        <div className="classes-hero-gradient"></div>

        {/* Content */}
        <div className="classes-hero-content">
          <div className="classes-hero-copy">
            <span className="classes-hero-eyebrow">UNLOCK YOUR POTENTIAL</span>

            <h1 className="classes-hero-title">
              Freedom begins the
              <br />
              moment you decide.
            </h1>

            <button className="classes-hero-button">
              <span>Get Started</span>

              <span className="classes-hero-button-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Video */}
        <div className="classes-hero-video-wrapper classes-hero-video-desktop">
          <div className="classes-hero-video-label">
            <span className="classes-hero-label-dot"></span>
            NEXT EVENT
          </div>

          <div className="classes-hero-video-card">
            <video
              className="classes-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
              />
            </video>

            <div className="classes-hero-video-overlay"></div>

            <div className="classes-hero-video-content">
              <button className="classes-hero-play-button">
                <span className="classes-hero-play-icon">▶</span>

                <span>Watch</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Video */}
      <div className="classes-hero-mobile-video">
        <div className="classes-hero-video-label">
          <span className="classes-hero-label-dot"></span>
          NEXT EVENT
        </div>

        <div className="classes-hero-video-card">
          <video
            className="classes-hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>

          <div className="classes-hero-video-overlay"></div>

          <div className="classes-hero-video-content">
            <button className="classes-hero-play-button">
              <span className="classes-hero-play-icon">▶</span>

              <span>Watch</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesHero;
