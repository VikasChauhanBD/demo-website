import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PgBooksExperience.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: "watch",
    title: "WATCH",
    text: "Learn the concept through Dr. GRG's video lectures.",
  },
  {
    icon: "read",
    title: "READ",
    text: "Follow the corresponding content in the book.",
  },
  {
    icon: "practise",
    title: "PRACTISE",
    text: "Apply your understanding through questions.",
  },
  {
    icon: "revise",
    title: "REVISE",
    text: "Return to the concepts that need reinforcement.",
  },
  {
    icon: "recall",
    title: "RECALL",
    text: "Retrieve what you know when the exam demands it.",
  },
];

const reasons = [
  {
    icon: "concept",
    title: "Concept-first",
    text: "Understand before you memorise.",
  },
  {
    icon: "clinical",
    title: "Clinically connected",
    text: "See how Pharmacology connects with clinical application.",
  },
  {
    icon: "exam",
    title: "Exam-oriented",
    text: "Focus your preparation around what matters for NEET PG & INI-CET.",
  },
  {
    icon: "revision",
    title: "Revision-ready",
    text: "Structured so you can return to important concepts again and again.",
  },
];

const featureReason = {
  icon: "teaching",
  title: "Built around Dr. GRG's teaching",
  text: "The books extend the same teaching philosophy into a format you can keep beside you throughout preparation.",
};

const system = ["Video Lectures", "Books", "Questions", "Revision", "Tests"];

function Icon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "watch":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      );
    case "read":
      return (
        <svg {...props}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "practise":
      return (
        <svg {...props}>
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      );
    case "revise":
      return (
        <svg {...props}>
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      );
    case "recall":
    case "concept":
      return (
        <svg {...props}>
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "clinical":
      return (
        <svg {...props}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
        </svg>
      );
    case "exam":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "revision":
      return (
        <svg {...props}>
          <path d="m17 2 4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="m7 22-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      );
    case "teaching":
      return (
        <svg {...props}>
          <path d="M22 10v6" />
          <path d="M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    default:
      return null;
  }
}

function PgBooksExperience() {
  const rootRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Header timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".pg-books-experience-header",
          start: "top 85%",
        },
      });
      tl.from(".pg-books-experience-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".pg-books-experience-heading",
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.3",
        )
        .from(
          ".pg-books-experience-header .pg-books-experience-description",
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.4",
        );

      // Floating background blobs
      gsap.to(".pg-books-experience-blob-1", {
        x: 60,
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".pg-books-experience-blob-2", {
        x: -50,
        y: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".pg-books-experience-blob-3", {
        x: 40,
        y: -40,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Connector line fill (horizontal on desktop, vertical on mobile)
      mm.add("(min-width: 901px)", () => {
        gsap.fromTo(
          ".pg-books-experience-line-fill",
          { scaleX: 0, scaleY: 1, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".pg-books-experience-steps",
              start: "top 75%",
              end: "bottom 60%",
              scrub: true,
            },
          },
        );
      });
      mm.add("(max-width: 900px)", () => {
        gsap.fromTo(
          ".pg-books-experience-line-fill",
          { scaleY: 0, scaleX: 1, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".pg-books-experience-steps",
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      });

      // Steps entrance
      gsap.from(".pg-books-experience-step", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pg-books-experience-steps",
          start: "top 80%",
        },
      });
      gsap.from(".pg-books-experience-step-icon", {
        scale: 0,
        rotation: -45,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".pg-books-experience-steps",
          start: "top 80%",
        },
      });

      // Looping highlight that walks through the five steps
      const circles = gsap.utils.toArray(".pg-books-experience-step-circle");
      const loop = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.6,
        paused: true,
      });
      circles.forEach((circle, i) => {
        loop
          .to(
            circle,
            {
              backgroundColor: "#004d7a",
              color: "#ffffff",
              scale: 1.1,
              duration: 0.4,
              ease: "power2.out",
            },
            i * 0.9,
          )
          .to(
            circle,
            {
              backgroundColor: "#ffffff",
              color: "#004d7a",
              scale: 1,
              duration: 0.4,
              ease: "power2.inOut",
            },
            i * 0.9 + 0.9,
          );
      });
      ScrollTrigger.create({
        trigger: ".pg-books-experience-steps",
        start: "top 70%",
        end: "bottom 10%",
        onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
      });

      // Step hover
      gsap.utils.toArray(".pg-books-experience-step").forEach((step) => {
        const circle = step.querySelector(".pg-books-experience-step-circle");
        const hover = gsap.to(circle, {
          y: -6,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
        });
        step.addEventListener("mouseenter", () => hover.play());
        step.addEventListener("mouseleave", () => hover.reverse());
      });

      // "WHY THESE BOOKS?" divider
      gsap.from(".pg-books-experience-divider-line", {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".pg-books-experience-divider",
          start: "top 85%",
        },
      });
      gsap.from(".pg-books-experience-divider-label", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pg-books-experience-divider",
          start: "top 85%",
        },
      });

      // Reason cards
      gsap.from(".pg-books-experience-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pg-books-experience-cards",
          start: "top 80%",
        },
      });
      gsap.from(".pg-books-experience-feature", {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pg-books-experience-feature",
          start: "top 88%",
        },
      });
      gsap.to(".pg-books-experience-feature-glow", {
        scale: 1.25,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Card hover
      gsap.utils.toArray(".pg-books-experience-card").forEach((card) => {
        const icon = card.querySelector(".pg-books-experience-card-icon");
        const hover = gsap
          .timeline({ paused: true })
          .to(card, { y: -8, duration: 0.3, ease: "power2.out" }, 0)
          .to(
            icon,
            { rotation: -8, scale: 1.1, duration: 0.3, ease: "back.out(2)" },
            0,
          );
        card.addEventListener("mouseenter", () => hover.play());
        card.addEventListener("mouseleave", () => hover.reverse());
      });

      // Closing band
      const band = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".pg-books-experience-band",
          start: "top 80%",
        },
      });
      band
        .from(".pg-books-experience-band", { y: 60, opacity: 0, duration: 0.9 })
        .from(
          ".pg-books-experience-band .pg-books-experience-sub-heading",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".pg-books-experience-chip",
          {
            scale: 0.6,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(2)",
          },
          "-=0.3",
        )
        .from(
          ".pg-books-experience-plus",
          { opacity: 0, rotation: -90, duration: 0.4, stagger: 0.1 },
          "-=0.8",
        )
        .from(
          ".pg-books-experience-cta",
          { y: 20, opacity: 0, duration: 0.6 },
          "-=0.2",
        );

      gsap.to(".pg-books-experience-band-orb-1", {
        y: 20,
        x: 14,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".pg-books-experience-band-orb-2", {
        y: -18,
        x: -12,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // CTA hover
      const cta = rootRef.current.querySelector(".pg-books-experience-cta");
      const arrow = cta.querySelector(".pg-books-experience-arrow");
      const ctaHover = gsap.to(arrow, {
        x: 6,
        duration: 0.25,
        ease: "power2.out",
        paused: true,
      });
      cta.addEventListener("mouseenter", () => ctaHover.play());
      cta.addEventListener("mouseleave", () => ctaHover.reverse());
    }, rootRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="pg-books-experience" ref={rootRef}>
      <div className="pg-books-experience-blob pg-books-experience-blob-1" />
      <div className="pg-books-experience-blob pg-books-experience-blob-2" />
      <div className="pg-books-experience-blob pg-books-experience-blob-3" />
      <div className="pg-books-experience-grid-bg" />

      <div className="pg-books-experience-container">
        {/* HEADER */}
        <div className="pg-books-experience-header">
          <span className="pg-books-experience-eyebrow">
            THE GRG BOOK + VIDEO EXPERIENCE
          </span>
          <h2 className="pg-books-experience-heading">
            Learn with Dr. GRG. Read it. Revisit it. Remember it.
          </h2>
          <p className="pg-books-experience-description">
            The books are created from the corresponding video teaching so that
            your visual learning and written revision stay connected.
          </p>
        </div>

        {/* STEPS */}
        <div className="pg-books-experience-steps">
          <div className="pg-books-experience-line">
            <div className="pg-books-experience-line-fill" />
          </div>
          {steps.map((s) => (
            <div className="pg-books-experience-step" key={s.title}>
              <div className="pg-books-experience-step-circle">
                <span className="pg-books-experience-step-icon">
                  <Icon name={s.icon} />
                </span>
              </div>
              <div className="pg-books-experience-step-body">
                <h3 className="pg-books-experience-step-title">{s.title}</h3>
                <p className="pg-books-experience-step-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WHY THESE BOOKS */}
        <div className="pg-books-experience-divider">
          <span className="pg-books-experience-divider-line" />
          <span className="pg-books-experience-divider-label">
            WHY THESE BOOKS?
          </span>
          <span className="pg-books-experience-divider-line" />
        </div>

        <div className="pg-books-experience-cards">
          {reasons.map((r) => (
            <div className="pg-books-experience-card" key={r.title}>
              <span className="pg-books-experience-card-icon">
                <Icon name={r.icon} />
              </span>
              <h3 className="pg-books-experience-card-title">{r.title}</h3>
              <p className="pg-books-experience-card-text">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="pg-books-experience-feature">
          <span className="pg-books-experience-feature-glow" />
          <span className="pg-books-experience-feature-icon">
            <Icon name={featureReason.icon} />
          </span>
          <div className="pg-books-experience-feature-body">
            <h3 className="pg-books-experience-feature-title">
              {featureReason.title}
            </h3>
            <p className="pg-books-experience-feature-text">
              {featureReason.text}
            </p>
          </div>
        </div>

        {/* CLOSING BAND */}
        <div className="pg-books-experience-band">
          <span className="pg-books-experience-band-orb pg-books-experience-band-orb-1" />
          <span className="pg-books-experience-band-orb pg-books-experience-band-orb-2" />
          <h2 className="pg-books-experience-sub-heading">
            One Pharmacology. One Connected Learning System.
          </h2>
          <div className="pg-books-experience-chips">
            {system.map((item, i) => (
              <span className="pg-books-experience-chip-wrap" key={item}>
                <span className="pg-books-experience-chip">{item}</span>
                {i < system.length - 1 && (
                  <span className="pg-books-experience-plus">+</span>
                )}
              </span>
            ))}
          </div>
          <button type="button" className="pg-books-experience-cta">
            <span>Explore NEET PG &amp; INI-CET Books</span>
            <span className="pg-books-experience-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PgBooksExperience;
