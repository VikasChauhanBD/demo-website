import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PgBooksHeader.css";

gsap.registerPlugin(ScrollTrigger);

function PgBooksHeader() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".pg-books-header-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          ".pg-books-header-heading",
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.3",
        )
        .from(
          ".pg-books-header-sub-heading",
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".pg-books-header-description",
          { y: 30, opacity: 0, duration: 0.7, stagger: 0.15 },
          "-=0.4",
        )
        .from(
          ".pg-books-header-hero-cta",
          { y: 20, opacity: 0, scale: 0.92, duration: 0.6 },
          "-=0.3",
        );

      // Floating background blobs
      gsap.to(".pg-books-header-blob-1", {
        x: 60,
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".pg-books-header-blob-2", {
        x: -50,
        y: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Hero parallax on scroll
      gsap.to(".pg-books-header-hero-inner", {
        y: -40,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: ".pg-books-header-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Button hover micro-interaction
      const btn = rootRef.current.querySelector(".pg-books-header-btn");
      const arrow = btn.querySelector(".pg-books-header-arrow");
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

  // Scrolls to the PgBooksDetails section (it has id="pg-books-details")
  const scrollToBooks = () => {
    const el = document.getElementById("pg-books-details");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="pg-books-header" ref={rootRef}>
      <div className="pg-books-header-blob pg-books-header-blob-1" />
      <div className="pg-books-header-blob pg-books-header-blob-2" />
      <div className="pg-books-header-grid-bg" />

      <div className="pg-books-header-hero">
        <div className="pg-books-header-hero-inner">
          <span className="pg-books-header-eyebrow">
            For NEET PG &amp; INI-CET
          </span>
          <h1 className="pg-books-header-heading">
            Pharmacology that makes sense.
          </h1>
          <h2 className="pg-books-header-sub-heading">
            Built for NEET PG &amp; INI-CET preparation.
          </h2>
          <p className="pg-books-header-description">
            Learn Pharmacology with Dr. Gobind Rai Garg through concepts,
            clinical connections, memory tools, questions and structured
            revision — now brought together in books designed specifically for
            NEET PG and INI-CET aspirants.
          </p>
          <p className="pg-books-header-description">
            These books follow the corresponding video-learning pathways, giving
            you a structured resource to read, understand, annotate, revisit and
            revise throughout your preparation.
          </p>
          <button
            type="button"
            className="pg-books-header-btn pg-books-header-hero-cta"
            onClick={scrollToBooks}
          >
            <span>Explore the Books</span>
            <span className="pg-books-header-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PgBooksHeader;
