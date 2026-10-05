import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FmgeBooksDetails.css";

gsap.registerPlugin(ScrollTrigger);

const BOOK_IMAGE =
  "https://cdn.dribbble.com/userupload/47187682/file/35fd36049bdc1dfe49efe682ccfd99bc.jpeg";

const books = [
  {
    stage: "01 · DETAILED LEARNING",
    title: "GOGA MASTER CLASS",
    imageAlt: "GOGA Master Class book cover",
    subHeading: "Where Concepts Become Confidence.",
    lead: "Build your Pharmacology understanding systematically with content designed specifically for the FMGE pathway.",
    description:
      "The book works alongside the dedicated FMGE video lectures, helping you understand the concepts, organise the subject and return to important areas during revision.",
    listLabel: "Designed to help you:",
    points: [
      "Build a clear Pharmacology foundation",
      "Understand concepts rather than rely only on memorisation",
      "Connect mechanisms with clinical relevance",
      "Follow the dedicated FMGE video teaching",
      "Create a strong base for further revision",
    ],
    bestForLabel: "Best for:",
    bestFor:
      "FMGE aspirants looking to build their Pharmacology understanding systematically.",
    tagline: "Understand first. Remember better.",
    cta: "Explore GOGA Master Class",
  },

  {
    stage: "02 · REVISION",
    title: "POWER PACK REVISION",
    imageAlt: "Power Pack Revision book cover",
    subHeading: "Quick. Clear. To the Point.",
    lead: "Once you've learnt Pharmacology, revision becomes about bringing the important concepts back quickly and clearly.",
    description:
      "Power Pack Revision is designed to work alongside the FMGE revision pathway, helping you reinforce what you've already studied without repeatedly going back through the entire learning process.",
    listLabel: "Designed to help you:",
    points: [
      "Revise Pharmacology efficiently",
      "Reinforce important concepts",
      "Refresh previously studied content",
      "Keep revision focused",
      "Build confidence as the examination approaches",
    ],
    bestForLabel: "Best for:",
    bestFor:
      "FMGE aspirants who have already studied Pharmacology and need focused revision.",
    tagline: "Less time searching. More time revising.",
    cta: "Explore Power Pack Revision",
  },

  {
    stage: "03 · RAPID LEARNING",
    title: "GOGA EXPRESS",
    imageAlt: "GOGA Express book cover",
    subHeading: "Pharmacology, When Time Is Short.",
    lead: "When the examination is approaching, you need a way to use your remaining preparation time wisely.",
    description:
      "GOGA Express is the common rapid-learning book across GRG's Pharmacology pathways, providing a focused, time-efficient resource when preparation time is limited.",
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

function FmgeBooksDetails() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background blobs
      gsap.to(".fmge-books-details-blob-1", {
        x: 30,
        y: -50,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".fmge-books-details-blob-2", {
        x: -40,
        y: 40,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Section label
      gsap.from(".fmge-books-details-divider-line", {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".fmge-books-details-divider",
          start: "top 85%",
        },
      });
      gsap.from(".fmge-books-details-divider-label", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fmge-books-details-divider",
          start: "top 85%",
        },
      });

      // Each book card (zig-zag: even cards image left, odd cards image right)
      gsap.utils.toArray(".fmge-books-details-card").forEach((card, index) => {
        const dir = index % 2 === 0 ? -1 : 1;

        const ctl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 80%" },
          defaults: { ease: "power3.out" },
        });
        ctl
          .from(card, { y: 70, opacity: 0, duration: 0.9 })
          .from(
            card.querySelectorAll(".fmge-books-details-head > *"),
            { y: 24, opacity: 0, duration: 0.6, stagger: 0.1 },
            "-=0.6",
          )
          .from(
            card.querySelector(".fmge-books-details-media"),
            { opacity: 0, duration: 0.9 },
            "-=0.3",
          )
          .from(
            card.querySelector(".fmge-books-details-panel"),
            { x: -dir * 70, opacity: 0, duration: 0.9 },
            "<",
          )
          .from(
            card.querySelectorAll(".fmge-books-details-point"),
            { x: -dir * 24, opacity: 0, duration: 0.5, stagger: 0.09 },
            "-=0.5",
          )
          .from(
            card.querySelectorAll(
              ".fmge-books-details-panel > *:not(.fmge-books-details-points)",
            ),
            { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
            "-=0.6",
          );

        // Hover: card lift
        const body = card.querySelector(".fmge-books-details-card-body");
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
      gsap.utils.toArray(".fmge-books-details-btn").forEach((btn) => {
        const arrow = btn.querySelector(".fmge-books-details-arrow");
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
    <section
      className="fmge-books-details"
      id="fmge-books-details"
      ref={rootRef}
    >
      <div className="fmge-books-details-blob fmge-books-details-blob-1" />
      <div className="fmge-books-details-blob fmge-books-details-blob-2" />

      {/* DIVIDER */}
      <div className="fmge-books-details-divider">
        <span className="fmge-books-details-divider-line" />
        <span className="fmge-books-details-divider-label">
          THREE BOOKS. ONE FMGE-FOCUSED JOURNEY
        </span>
        <span className="fmge-books-details-divider-line" />
      </div>

      {/* BOOKS */}
      <div className="fmge-books-details-list">
        {books.map((book, i) => (
          <article
            className={`fmge-books-details-card ${
              i % 2 === 1 ? "fmge-books-details-card-reverse" : ""
            }`}
            key={book.title}
          >
            <div
              className={`fmge-books-details-card-body fmge-books-details-tone-${i + 1}`}
            >
              {/* CENTERED TITLE + DESCRIPTION */}
              <div className="fmge-books-details-head">
                <span className="fmge-books-details-stage">{book.stage}</span>
                <h3 className="fmge-books-details-sub-heading fmge-books-details-title">
                  {book.title}
                </h3>
                <p className="fmge-books-details-subline">{book.subHeading}</p>
                <p className="fmge-books-details-description fmge-books-details-lead">
                  {book.lead}
                </p>
                <p className="fmge-books-details-description">
                  {book.description}
                </p>
              </div>

              {/* IMAGE + CONTENT (zig-zag) */}
              <div className="fmge-books-details-row">
                <div className="fmge-books-details-media">
                  <img
                    className="fmge-books-details-cover-img"
                    src={BOOK_IMAGE}
                    alt={book.imageAlt}
                  />
                </div>

                <div className="fmge-books-details-panel">
                  <p className="fmge-books-details-list-label">
                    {book.listLabel}
                  </p>
                  <ul className="fmge-books-details-points">
                    {book.points.map((p) => (
                      <li className="fmge-books-details-point" key={p}>
                        <span className="fmge-books-details-tick" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="fmge-books-details-best">
                    <strong>{book.bestForLabel}</strong> {book.bestFor}
                  </p>

                  <p className="fmge-books-details-tagline">{book.tagline}</p>

                  <button type="button" className="fmge-books-details-btn">
                    <span>{book.cta}</span>
                    <span className="fmge-books-details-arrow">→</span>
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

export default FmgeBooksDetails;
