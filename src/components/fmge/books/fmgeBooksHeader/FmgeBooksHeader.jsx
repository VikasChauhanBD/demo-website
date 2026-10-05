import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FmgeBooksHeader.css";

gsap.registerPlugin(ScrollTrigger);

function FmgeBooksHeader() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".fmge-books-header-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".fmge-books-header-heading",
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.3",
        )
        .from(
          ".fmge-books-header-sub-heading",
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".fmge-books-header-description",
          { y: 30, opacity: 0, duration: 0.7, stagger: 0.15 },
          "-=0.4",
        )
        .from(
          ".fmge-books-header-hero-cta",
          { y: 20, opacity: 0, scale: 0.92, duration: 0.6 },
          "-=0.3",
        );

      // Floating background blobs
      gsap.to(".fmge-books-header-blob-1", {
        x: 60,
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".fmge-books-header-blob-2", {
        x: -50,
        y: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hero parallax on scroll
      gsap.to(".fmge-books-header-hero-inner", {
        y: -40,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: ".fmge-books-header-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Button hover micro-interaction
      const btn = rootRef.current.querySelector(".fmge-books-header-btn");
      const arrow = btn.querySelector(".fmge-books-header-arrow");
      const hover = gsap.to(arrow, {
        x: 6,
        duration: 0.25,
        ease: "power2.out",
        paused: true,
      });
      btn.addEventListener("mouseenter", () => hover.play());
      btn.addEventListener("mouseleave", () => hover.reverse());
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Scrolls to the FmgeBooksDetails section (it has id="fmge-books-details")
  const scrollToBooks = () => {
    const el = document.getElementById("fmge-books-details");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="fmge-books-header" ref={rootRef}>
      <div className="fmge-books-header-blob fmge-books-header-blob-1" />
      <div className="fmge-books-header-blob fmge-books-header-blob-2" />
      <div className="fmge-books-header-grid-bg" />

      <div className="fmge-books-header-hero">
        <div className="fmge-books-header-hero-inner">
          <span className="fmge-books-header-eyebrow">For FMGE</span>

          <h1 className="fmge-books-header-heading">
            Pharmacology made simpler.
          </h1>

          <h2 className="fmge-books-header-sub-heading">
            Built specifically for FMGE preparation.
          </h2>

          <p className="fmge-books-header-description">
            Pharmacology can feel overwhelming when there is too much to
            remember and too little time to organise it.
          </p>

          <p className="fmge-books-header-description">
            The Pharmacology by Dr. GRG FMGE books bring the subject into a
            focused, structured format designed specifically for FMGE aspirants.
          </p>

          <p className="fmge-books-header-description">
            The books are developed alongside the dedicated FMGE video lectures,
            creating a connected learning and revision experience.
          </p>

          <button
            type="button"
            className="fmge-books-header-btn fmge-books-header-hero-cta"
            onClick={scrollToBooks}
          >
            <span>Explore the FMGE Books</span>
            <span className="fmge-books-header-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FmgeBooksHeader;
