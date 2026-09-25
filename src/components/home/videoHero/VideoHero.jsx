import React, { useState, useRef } from "react";
import "./VideoHero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const VideoHero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const container = useRef(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  useGSAP(
    () => {
      const section = container.current;

      gsap.fromTo(
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
            src="https://cdn.dribbble.com/userupload/49117125/file/7ad9bf57473f6fad669b1132870e1eb4.mp4"
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
          <h1>
            A NEW ERA OF <span>PHARMACOLOGY</span>.
            <br />
            Learn Pharmacology directly from Dr. Gobind Rai Garg (Pharma Guru)
            <br />
            For <b>MBBS • NEET PG • INI-CET • FMGE</b>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
