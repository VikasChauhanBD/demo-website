import React, { useEffect, useRef, useState } from "react";
import "./VideoHero.css";
import gsap from "gsap";

const VideoHero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const sectionRef = useRef(null);
  const horizontalLineRef = useRef(null);
  const verticalLineRef = useRef(null);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const horizontalLine = horizontalLineRef.current;
    const verticalLine = verticalLineRef.current;

    if (!section || !horizontalLine || !verticalLine) return;

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
  }, []);

  return (
    <section className="video-hero-header" ref={sectionRef}>
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
            src="https://cdn.dribbble.com/userupload/47317464/file/86921485b5c9c3a81c0f0a91b214e6af.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="video-hero-overlay"></div>

      {/* Cursor Following Lines */}
      <div
        ref={horizontalLineRef}
        className="video-hero-cursor-horizontal-line"
      ></div>

      <div
        ref={verticalLineRef}
        className="video-hero-cursor-vertical-line"
      ></div>

      <div className="video-hero-content">
        <div className="video-hero-text">
          <h1>
            10x Australian <span>Windsurfing Champion</span>. Design leader @
            Brisbane Agency. Building the big thing in data startups.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
