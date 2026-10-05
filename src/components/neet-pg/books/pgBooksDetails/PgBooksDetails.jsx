import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PgBooksDetails.css";

gsap.registerPlugin(ScrollTrigger);

const books = [
  {
    image:
      "https://cdn.dribbble.com/userupload/49226168/file/c9327c4303801445213c791efbbf342c.png",
    stage: "01 · DETAILED LEARNING",
    title: "GRG MASTER CLASS",
    imageAlt: "GRG Master Class book cover",
    subHeading: "Where Concepts Become Confidence.",
    lead: "Build your Pharmacology understanding from the ground up.",
    description:
      "The GRG Master Class book brings the detailed teaching of Dr. GRG into a structured written format - helping you understand concepts logically, connect them clinically and build a strong foundation for your NEET PG & INI-CET preparation.",
    listLabel: "Designed to help you:",
    points: [
      "Build concepts systematically",
      "Understand the why behind Pharmacology",
      "Connect mechanisms with clinical applications",
      "Follow and reinforce the detailed video teaching",
      "Return to difficult concepts whenever you need to",
    ],
    bestForLabel: "Best for:",
    bestFor:
      "Students looking to build a strong Pharmacology foundation for NEET PG & INI-CET.",
    tagline: "Learn deeply. Understand clearly. Build confidence.",
    cta: "Explore GRG Master Class",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/49226170/file/cf22b68dc5b14293840e0dff4add6667.png",
    stage: "02 · REVISION",
    title: "POWER PACK REVISION",
    imageAlt: "Power Pack Revision book cover",
    subHeading: "Quick & Conceptual",
    lead: "You've studied it. Now bring it all back.",
    description:
      "Power Pack Revision is designed to help you revisit and reinforce Pharmacology efficiently when you don't need to start from the beginning again.",
    listLabel: "Designed to help you:",
    points: [
      "Revise efficiently",
      "Reinforce important concepts",
      "Refresh what you've already learnt",
      "Focus your revision",
      "Prepare for the next stage of your examination journey",
    ],
    bestForLabel: "Best for:",
    bestFor:
      "NEET PG & INI-CET aspirants who have already studied Pharmacology and are ready to revise.",
    tagline: "Revise smarter. Stay focused.",
    cta: "Explore Power Pack Revision",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/49226169/file/e30f205d25bb74de5ddacaa5364b7ada.png",
    stage: "03 · RAPID LEARNING",
    title: "GOGA EXPRESS",
    imageAlt: "GOGA Express book cover",
    subHeading: "Pharmacology, When Time Is Short.",
    lead: "When your preparation window gets shorter, your learning needs to become more focused.",
    description:
      "GOGA Express brings Pharmacology into a time-efficient learning format, helping you cover and revisit what matters when you have limited time before the exam.",
    listLabel: "Designed to help you:",
    points: [
      "Make the most of limited preparation time",
      "Focus on essential Pharmacology",
      "Quickly revisit important concepts",
      "Bring structure to last-mile preparation",
    ],
    bestForLabel: "Best for:",
    bestFor:
      "NEET PG, INI-CET and FMGE aspirants who need a focused, time-efficient approach.",
    tagline: "One GOGA Express. One focused Pharmacology revision experience.",
    cta: "Explore GOGA Express",
  },
];

function PgBooksDetails() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background blobs
      gsap.to(".pg-books-details-blob-1", {
        x: 30,
        y: -50,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".pg-books-details-blob-2", {
        x: -40,
        y: 40,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Section label
      gsap.from(".pg-books-details-divider-line", {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".pg-books-details-divider",
          start: "top 85%",
        },
      });
      gsap.from(".pg-books-details-divider-label", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pg-books-details-divider",
          start: "top 85%",
        },
      });

      // Each book card (zig-zag: even cards image left, odd cards image right)
      gsap.utils.toArray(".pg-books-details-card").forEach((card, index) => {
        const dir = index % 2 === 0 ? -1 : 1;

        const ctl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 80%" },
          defaults: { ease: "power3.out" },
        });
        ctl
          .from(card, { y: 70, opacity: 0, duration: 0.9 })
          .from(
            card.querySelectorAll(".pg-books-details-head > *"),
            { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 },
            "-=0.6",
          )
          .from(
            card.querySelector(".pg-books-details-media"),
            { opacity: 0, duration: 0.9 },
            "-=0.3",
          )
          .from(
            card.querySelector(".pg-books-details-panel"),
            { x: -dir * 70, opacity: 0, duration: 0.9 },
            "<",
          )
          .from(
            card.querySelectorAll(".pg-books-details-point"),
            { x: -dir * 24, opacity: 0, duration: 0.5, stagger: 0.09 },
            "-=0.5",
          )
          .from(
            card.querySelectorAll(
              ".pg-books-details-panel > *:not(.pg-books-details-points)",
            ),
            { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
            "-=0.6",
          );

        // Hover: card lift
        const body = card.querySelector(".pg-books-details-card-body");
        const lift = gsap.to(body, {
          y: -6,
          duration: 0.3,
          ease: "power2.out",
          paused: true,
        });
        card.addEventListener("mouseenter", () => lift.play());
        card.addEventListener("mouseleave", () => lift.reverse());
      });

      // Button hover micro-interaction
      gsap.utils.toArray(".pg-books-details-btn").forEach((btn) => {
        const arrow = btn.querySelector(".pg-books-details-arrow");
        const hover = gsap.to(arrow, {
          x: 6,
          duration: 0.25,
          ease: "power2.out",
          paused: true,
        });
        btn.addEventListener("mouseenter", () => hover.play());
        btn.addEventListener("mouseleave", () => hover.reverse());
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pg-books-details" id="pg-books-details" ref={rootRef}>
      <div className="pg-books-details-blob pg-books-details-blob-1" />
      <div className="pg-books-details-blob pg-books-details-blob-2" />

      {/* DIVIDER */}
      <div className="pg-books-details-divider">
        <span className="pg-books-details-divider-line" />
        <span className="pg-books-details-divider-label">
          THREE BOOKS. THREE STAGES OF PREPARATION.
        </span>
        <span className="pg-books-details-divider-line" />
      </div>

      {/* BOOKS */}
      <div className="pg-books-details-list">
        {books.map((book, i) => (
          <article
            className={`pg-books-details-card ${
              i % 2 === 1 ? "pg-books-details-card-reverse" : ""
            }`}
            key={book.title}
          >
            <div
              className={`pg-books-details-card-body pg-books-details-tone-${i + 1}`}
            >
              {/* CENTERED TITLE + DESCRIPTION */}
              <div className="pg-books-details-head">
                <span className="pg-books-details-stage">{book.stage}</span>
                <h3 className="pg-books-details-sub-heading pg-books-details-title">
                  {book.title}
                </h3>
                <p className="pg-books-details-subline">{book.subHeading}</p>
                <p className="pg-books-details-description pg-books-details-lead">
                  {book.lead}
                </p>
                <p className="pg-books-details-description">
                  {book.description}
                </p>
              </div>

              {/* IMAGE + CONTENT (zig-zag) */}
              <div className="pg-books-details-row">
                <div className="pg-books-details-media">
                  <img
                    className="pg-books-details-cover-img"
                    src={book.image}
                    alt={book.imageAlt}
                  />
                </div>

                <div className="pg-books-details-panel">
                  <p className="pg-books-details-list-label">
                    {book.listLabel}
                  </p>
                  <ul className="pg-books-details-points">
                    {book.points.map((p) => (
                      <li className="pg-books-details-point" key={p}>
                        <span className="pg-books-details-tick" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="pg-books-details-best">
                    <strong>{book.bestForLabel}</strong> {book.bestFor}
                  </p>

                  <p className="pg-books-details-tagline">{book.tagline}</p>

                  <button type="button" className="pg-books-details-btn">
                    <span>{book.cta}</span>
                    <span className="pg-books-details-arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PgBooksDetails;
