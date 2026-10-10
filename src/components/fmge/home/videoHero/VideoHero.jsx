import React, { useState, useRef } from "react";
import "./VideoHero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";

const VideoHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleSampleClassClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("experience-teaching");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useGSAP(
    () => {
      const section = container.current;
      const heroTimeline = gsap.timeline();

      heroTimeline.fromTo(
        ".video-hero-background-video",
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      );

      heroTimeline.fromTo(
        ".video-hero-overlay",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=1",
      );

      heroTimeline.fromTo(
        ".video-hero-sub-heading",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // Powered by eConceptual animation
      heroTimeline.fromTo(
        ".video-hero-powered-by",
        {
          y: 20,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      );

      heroTimeline.fromTo(
        ".video-hero-text h1",
        {
          y: 40,
          scale: 0.5,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.4",
      );

      heroTimeline.fromTo(
        ".video-hero-para",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.7",
      );

      heroTimeline.fromTo(
        ".video-hero-cta",
        {
          y: 40,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
        },
        "-=0.4",
      );

      const horizontalLine = section.querySelector(
        ".video-hero-cursor-horizontal-line",
      );

      const verticalLine = section.querySelector(
        ".video-hero-cursor-vertical-line",
      );

      if (!horizontalLine || !verticalLine) return;

      const moveX = gsap.quickTo(verticalLine, "left", {
        duration: 0.35,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(horizontalLine, "top", {
        duration: 0.35,
        ease: "power3.out",
      });

      const handleMouseMove = (e) => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        moveX(x);
        moveY(y);
      };

      section.addEventListener("mousemove", handleMouseMove);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
      };
    },
    {
      scope: container,
    },
  );

  return (
    <section className="video-hero-header" ref={container}>
      <div className="video-hero-video-wrapper">
        {isLoading && (
          <div className="video-hero-video-loading">
            <div className="video-hero-spinner"></div>
            <p className="video-hero-loading-text">Loading...</p>
          </div>
        )}

        <video
          className="video-hero-background-video"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          preload="auto"
        >
          <source
            src="https://cdn.dribbble.com/userupload/49117125/file/941f5fb64b18e0c07727e80bf7bd5a2b.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="video-hero-overlay"></div>

      {/* Cursor Following Lines */}
      <div className="video-hero-cursor-horizontal-line"></div>
      <div className="video-hero-cursor-vertical-line"></div>

      <div className="video-hero-content">
        <div className="video-hero-text">
          <h1 className="video-hero-title">FMGE</h1>

          <h2 className="video-hero-sub-heading">
            Pharmacology By Dr. Gobind Rai Garg
          </h2>

          <p className="video-hero-powered-by">Powered by eConceptual</p>

          <h1 className="video-hero-heading">
            From Pharmacophobia To Pharmacophilia
          </h1>

          <p className="video-hero-para">
            <b>Understand</b> the concept. <b>Remember</b> what matters.{" "}
            <b>Apply</b> it when it counts.
            <br />
            <br />A complete Pharmacology learning and revision ecosystem for
            <b>FMGE</b>
          </p>

          <div className="video-hero-cta-div">
            <NavLink
              to="#"
              className="video-hero-cta"
              onClick={handleSampleClassClick}
            >
              Watch a Sample Class
            </NavLink>

            <NavLink to="/course/fmge/plans" className="video-hero-cta">
              View Plans
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
