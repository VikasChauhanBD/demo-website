import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FmgeBooksExperience.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: "watch",
    title: "WATCH",
    text: "Learn through the dedicated FMGE video lectures.",
  },
  {
    icon: "read",
    title: "READ",
    text: "Follow the corresponding concepts in the book.",
  },
  {
    icon: "practise",
    title: "PRACTISE",
    text: "Apply what you have learnt.",
  },
  {
    icon: "revise",
    title: "REVISE",
    text: "Return to important concepts and weak areas.",
  },
  {
    icon: "recall",
    title: "RECALL",
    text: "Retrieve what you know when it matters.",
  },
];

const reasons = [
  {
    icon: "exam",
    title: "Built for FMGE",
    text: "The content is specifically curated for the FMGE preparation pathway.",
  },
  {
    icon: "concept",
    title: "Concept-first",
    text: "Understand the concept instead of depending entirely on isolated facts.",
  },
  {
    icon: "revision",
    title: "Structured for revision",
    text: "Make it easier to return to important areas during preparation.",
  },
  {
    icon: "time",
    title: "Time-conscious",
    text: "Designed to support both detailed learning and focused revision.",
  },
];

const featureReason = {
  icon: "link",
  title: "Connected to the FMGE video lectures",
  text: "Your book and video learning work as one system rather than as separate resources.",
};

const stages = [
  { name: "GOGA Master Class", action: "Build" },
  { name: "Power Pack Revision", action: "Reinforce" },
  { name: "GOGA Express", action: "Focus" },
];

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
    case "time":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "link":
      return (
        <svg {...props}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...props}>
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      );
    default:
      return null;
  }
}

function FmgeBooksExperience() {
  const rootRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Header timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".fmge-books-experience-header",
          start: "top 85%",
        },
      });
      tl.from(".fmge-books-experience-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".fmge-books-experience-heading",
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.3",
        )
        .from(
          ".fmge-books-experience-header .fmge-books-experience-description",
          { y: 30, opacity: 0, duration: 0.7 },
          "-=0.4",
        );

      // Floating background blobs
      gsap.to(".fmge-books-experience-blob-1", {
        x: 60,
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".fmge-books-experience-blob-2", {
        x: -50,
        y: -30,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".fmge-books-experience-blob-3", {
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
          ".fmge-books-experience-line-fill",
          { scaleX: 0, scaleY: 1, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".fmge-books-experience-steps",
              start: "top 75%",
              end: "bottom 60%",
              scrub: true,
            },
          },
        );
      });
      mm.add("(max-width: 900px)", () => {
        gsap.fromTo(
          ".fmge-books-experience-line-fill",
          { scaleY: 0, scaleX: 1, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".fmge-books-experience-steps",
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      });

      // Steps entrance
      gsap.from(".fmge-books-experience-step", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-books-experience-steps",
          start: "top 80%",
        },
      });
      gsap.from(".fmge-books-experience-step-icon", {
        scale: 0,
        rotation: -45,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".fmge-books-experience-steps",
          start: "top 80%",
        },
      });

      // Looping highlight that walks through the five steps
      const circles = gsap.utils.toArray(".fmge-books-experience-step-circle");
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
        trigger: ".fmge-books-experience-steps",
        start: "top 70%",
        end: "bottom 10%",
        onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
      });

      // Step hover
      gsap.utils.toArray(".fmge-books-experience-step").forEach((step) => {
        const circle = step.querySelector(".fmge-books-experience-step-circle");
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
      gsap.from(".fmge-books-experience-divider-line", {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".fmge-books-experience-divider",
          start: "top 85%",
        },
      });
      gsap.from(".fmge-books-experience-divider-label", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-books-experience-divider",
          start: "top 85%",
        },
      });

      // Reason cards
      gsap.from(".fmge-books-experience-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-books-experience-cards",
          start: "top 80%",
        },
      });
      gsap.from(".fmge-books-experience-feature", {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-books-experience-feature",
          start: "top 88%",
        },
      });
      gsap.to(".fmge-books-experience-feature-glow", {
        scale: 1.25,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Card hover
      gsap.utils.toArray(".fmge-books-experience-card").forEach((card) => {
        const icon = card.querySelector(".fmge-books-experience-card-icon");
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
          trigger: ".fmge-books-experience-band",
          start: "top 80%",
        },
      });
      band
        .from(".fmge-books-experience-band", {
          y: 60,
          opacity: 0,
          duration: 0.9,
        })
        .from(
          ".fmge-books-experience-band .fmge-books-experience-sub-heading",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".fmge-books-experience-band .fmge-books-experience-description",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".fmge-books-experience-stage",
          { y: 40, opacity: 0, scale: 0.94, duration: 0.7, stagger: 0.15 },
          "-=0.3",
        );

      // Gentle nudge on the stage arrows
      gsap.to(".fmge-books-experience-stage-arrow", {
        y: 6,
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      gsap.to(".fmge-books-experience-band-orb-1", {
        y: 20,
        x: 14,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".fmge-books-experience-band-orb-2", {
        y: -18,
        x: -12,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Stage hover
      gsap.utils.toArray(".fmge-books-experience-stage").forEach((stage) => {
        const hover = gsap.to(stage, {
          y: -8,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
        });
        stage.addEventListener("mouseenter", () => hover.play());
        stage.addEventListener("mouseleave", () => hover.reverse());
      });
    }, rootRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="fmge-books-experience" ref={rootRef}>
      <div className="fmge-books-experience-blob fmge-books-experience-blob-1" />
      <div className="fmge-books-experience-blob fmge-books-experience-blob-2" />
      <div className="fmge-books-experience-blob fmge-books-experience-blob-3" />
      <div className="fmge-books-experience-grid-bg" />

      <div className="fmge-books-experience-container">
        {/* HEADER */}
        <div className="fmge-books-experience-header">
          <span className="fmge-books-experience-eyebrow">
            THE FMGE GRG BOOK + VIDEO EXPERIENCE
          </span>
          <h2 className="fmge-books-experience-heading">
            One subject. One focused FMGE learning system.
          </h2>
          <p className="fmge-books-experience-description">
            Your book and video lectures work together.
          </p>
        </div>

        {/* STEPS */}
        <div className="fmge-books-experience-steps">
          <div className="fmge-books-experience-line">
            <div className="fmge-books-experience-line-fill" />
          </div>
          {steps.map((s) => (
            <div className="fmge-books-experience-step" key={s.title}>
              <div className="fmge-books-experience-step-circle">
                <span className="fmge-books-experience-step-icon">
                  <Icon name={s.icon} />
                </span>
              </div>
              <div className="fmge-books-experience-step-body">
                <h3 className="fmge-books-experience-step-title">{s.title}</h3>
                <p className="fmge-books-experience-step-text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WHY THESE BOOKS */}
        <div className="fmge-books-experience-divider">
          <span className="fmge-books-experience-divider-line" />
          <span className="fmge-books-experience-divider-label">
            WHY THESE BOOKS?
          </span>
          <span className="fmge-books-experience-divider-line" />
        </div>

        <div className="fmge-books-experience-cards">
          {reasons.map((r) => (
            <div className="fmge-books-experience-card" key={r.title}>
              <span className="fmge-books-experience-card-icon">
                <Icon name={r.icon} />
              </span>
              <h3 className="fmge-books-experience-card-title">{r.title}</h3>
              <p className="fmge-books-experience-card-text">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="fmge-books-experience-feature">
          <span className="fmge-books-experience-feature-glow" />
          <span className="fmge-books-experience-feature-icon">
            <Icon name={featureReason.icon} />
          </span>
          <div className="fmge-books-experience-feature-body">
            <h3 className="fmge-books-experience-feature-title">
              {featureReason.title}
            </h3>
            <p className="fmge-books-experience-feature-text">
              {featureReason.text}
            </p>
          </div>
        </div>

        {/* CLOSING BAND */}
        <div className="fmge-books-experience-band">
          <span className="fmge-books-experience-band-orb fmge-books-experience-band-orb-1" />
          <span className="fmge-books-experience-band-orb fmge-books-experience-band-orb-2" />
          <h2 className="fmge-books-experience-sub-heading">
            FROM LEARNING TO LAST-MILE REVISION
          </h2>
          <p className="fmge-books-experience-description fmge-books-experience-band-text">
            Whether you are starting your Pharmacology preparation,
            strengthening your concepts or revising close to the FMGE, there is
            a GRG book for your stage.
          </p>
          <div className="fmge-books-experience-stages">
            {stages.map((s) => (
              <div className="fmge-books-experience-stage" key={s.name}>
                <span className="fmge-books-experience-stage-name">
                  {s.name}
                </span>
                <span className="fmge-books-experience-stage-arrow">
                  <Icon name="arrow-down" />
                </span>
                <span className="fmge-books-experience-stage-action">
                  {s.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FmgeBooksExperience;
