import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaPlay, FaCheck } from "react-icons/fa";
import "./FmgePlansShowcase.css";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const videos = [
  {
    number: "01",
    title: "GRG MASTER CLASS",
    text: "See how Dr. GRG makes difficult concepts simple.",
  },
  {
    number: "02",
    title: "POWER PACK REVISION",
    text: "Experience focused, high-yield Pharmacology revision.",
  },
  {
    number: "03",
    title: "GRG EXPRESS",
    text: "See how Pharmacology can be made faster and more focused.",
  },
];
const liveBullets = [
  "Interactive learning with Dr. GRG",
  "Concept clarification & revision",
  "Important exam-focused discussions",
  "Student questions & doubt-solving",
];
const plans = [
  {
    validity: "6 Months",
    original: "₹4,598",
    special: "₹3,148",
    prebooking: "₹1,998",
  },
  {
    validity: "12 Months",
    original: "₹5,598",
    special: "₹3,678",
    prebooking: "₹2,498",
  },
  {
    validity: "24 Months",
    original: "₹6,598",
    special: "₹4,728",
    prebooking: "₹2,998",
  },
];
const toNumber = (price) => Number(price.replace(/[^\d]/g, ""));
function FmgePlansShowcase() {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      const cleanups = [];
      /* ---------- floating background blobs ---------- */
      gsap.utils.toArray(".fmge-showcase-blob").forEach((blob) => {
        gsap.to(blob, {
          x: "random(-50, 50)",
          y: "random(-50, 50)",
          duration: "random(6, 10)",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
      /* ---------- generic scroll reveal helper ---------- */
      const reveal = (targets, trigger, vars = {}) => {
        gsap.fromTo(
          targets,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            ...vars,
          },
        );
      };
      /* ---------- EXPERIENCE THE GRG WAY ---------- */
      reveal(".fmge-showcase-exp-header > *", ".fmge-showcase-exp-header");
      gsap.fromTo(
        ".fmge-showcase-video-card",
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fmge-showcase-video-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      );
      reveal(".fmge-showcase-exp-closing", ".fmge-showcase-exp-closing", {
        stagger: 0,
      });
      /* pulsing ring around every play button */
      gsap.fromTo(
        ".fmge-showcase-play-ring",
        { scale: 1, opacity: 0.6 },
        {
          scale: 1.8,
          opacity: 0,
          duration: 1.6,
          ease: "power1.out",
          repeat: -1,
          stagger: 0.4,
        },
      );
      /* ---------- LIVE SESSIONS ---------- */
      gsap.fromTo(
        ".fmge-showcase-live-text > *",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fmge-showcase-live-grid",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".fmge-showcase-live-list li",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".fmge-showcase-live-list",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".fmge-showcase-live-card",
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fmge-showcase-live-grid",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
      /* pulsing live dot */
      gsap.fromTo(
        ".fmge-showcase-live-ring",
        { scale: 1, opacity: 0.7 },
        {
          scale: 2.4,
          opacity: 0,
          duration: 1.4,
          ease: "power1.out",
          repeat: -1,
        },
      );
      /* ---------- PLANS & PRICING ---------- */
      reveal(".fmge-showcase-price-header > *", ".fmge-showcase-price-header");
      gsap.fromTo(
        ".fmge-showcase-price-card",
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fmge-showcase-price-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      );
      /* count-up for every price */
      gsap.utils.toArray(".fmge-showcase-price-card").forEach((card) => {
        gsap.utils.toArray(".fmge-showcase-count", card).forEach((el) => {
          const target = Number(el.dataset.value);
          const counter = { value: 0 };
          el.textContent = "₹0";
          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              el.textContent =
                "₹" + Math.round(counter.value).toLocaleString("en-IN");
            },
          });
        });
      });
      gsap.fromTo(
        ".fmge-showcase-price-footer > *",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".fmge-showcase-price-footer",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
      /* ---------- hover lift on cards ---------- */
      gsap.utils
        .toArray(".fmge-showcase-video-card, .fmge-showcase-price-card")
        .forEach((card) => {
          const enter = () =>
            gsap.to(card, {
              y: -10,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          const leave = () =>
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
          });
        });
      return () => cleanups.forEach((fn) => fn());
    },
    { scope: sectionRef },
  );
  return (
    <section className="fmge-showcase-section" ref={sectionRef}>
      <span className="fmge-showcase-blob fmge-showcase-blob--one"></span>
      <span className="fmge-showcase-blob fmge-showcase-blob--two"></span>
      <span className="fmge-showcase-blob fmge-showcase-blob--three"></span>
      <span className="fmge-showcase-blob fmge-showcase-blob--four"></span>
      <div className="fmge-showcase-container">
        {/* <div className="fmge-showcase-block">
          <div className="fmge-showcase-exp-header fmge-showcase-center">
            <span className="fmge-showcase-eyebrow">
              EXPERIENCE THE GRG WAY
            </span>
            <h2 className="fmge-showcase-title">
              Not sure which learning pathway is right for you?
            </h2>
            <p className="fmge-showcase-para">
              Not sure which learning pathway is right for you? Experience Dr.
              GRG&apos;s teaching before you choose your plan.
            </p>
          </div>
          <div className="fmge-showcase-video-grid">
            {videos.map((item) => (
              <article className="fmge-showcase-video-card" key={item.title}>
                <div className="fmge-showcase-video-thumb">
                  <span className="fmge-showcase-video-number">
                    {item.number}
                  </span>
                  <div className="fmge-showcase-play">
                    <span className="fmge-showcase-play-ring"></span>
                    <FaPlay />
                  </div>
                </div>
                <div className="fmge-showcase-video-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <button type="button" className="fmge-showcase-btn">
                    WATCH FREE VIDEO
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="fmge-showcase-exp-closing fmge-showcase-closing">
            Watch. Experience. Choose the way you want to learn Pharmacology.
          </p>
        </div> */}
        <div className="fmge-showcase-block">
          <div className="fmge-showcase-live-grid">
            <div className="fmge-showcase-live-text">
              <span className="fmge-showcase-eyebrow">
                LIVE SESSIONS ON THE APP
              </span>
              <h2 className="fmge-showcase-title">Learn with Dr. GRG. Live.</h2>
              <p className="fmge-showcase-para fmge-showcase-para--left">
                Regular live sessions will bring teaching, revision, questions
                and exam-focused discussions directly into the app.
              </p>
              <ul className="fmge-showcase-live-list">
                {liveBullets.map((item) => (
                  <li key={item}>
                    <span className="fmge-showcase-check">
                      <FaCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fmge-showcase-live-card">
              <div className="fmge-showcase-live-indicator">
                <span className="fmge-showcase-live-dot">
                  <span className="fmge-showcase-live-ring"></span>
                </span>
                <span className="fmge-showcase-live-label">
                  LIVE SESSION SCHEDULE
                </span>
              </div>
              <h3>Coming Soon</h3>
              <p>
                The schedule of upcoming live sessions will be announced
                shortly.
              </p>
            </div>
          </div>
        </div>
        <div className="fmge-showcase-block">
          <div className="fmge-showcase-price-header fmge-showcase-center">
            <span className="fmge-showcase-eyebrow">PLANS &amp; PRICING</span>
            <p className="fmge-showcase-offer">
              <span>
                Pre-booking starts on 11th October 2026 from 12pm (afternoon)
                valid till 21st October 11:59pm.
              </span>
            </p>
            <p className="fmge-showcase-price-note">
              These Prices will never come back again.
            </p>
          </div>
          <div className="fmge-showcase-price-grid">
            {plans.map((plan) => (
              <article className="fmge-showcase-price-card" key={plan.validity}>
                <span className="fmge-showcase-price-label">Validity</span>
                <h3 className="fmge-showcase-price-validity">
                  {plan.validity}
                </h3>
                <div className="fmge-showcase-price-row">
                  <span>Original Price</span>
                  <span
                    className="fmge-showcase-count fmge-showcase-price-original"
                    data-value={toNumber(plan.original)}
                  >
                    {plan.original}
                  </span>
                </div>
                <div className="fmge-showcase-price-row">
                  <span>Special Price</span>
                  <span
                    className="fmge-showcase-count fmge-showcase-price-special"
                    data-value={toNumber(plan.special)}
                  >
                    {plan.special}
                  </span>
                </div>
                <div className="fmge-showcase-prebook">
                  <span className="fmge-showcase-prebook-label">
                    Pre-Booking Offer
                  </span>
                  <span
                    className="fmge-showcase-count fmge-showcase-prebook-value"
                    data-value={toNumber(plan.prebooking)}
                  >
                    {plan.prebooking}
                  </span>
                  <span className="fmge-showcase-ext">
                    + 3 Months FREE Bonus Extension
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="fmge-showcase-price-footer fmge-showcase-center">
            <p className="fmge-showcase-closing">
              Your Pharmacology preparation. One connected system.
            </p>
            <button type="button" className="fmge-showcase-cta">
              CHOOSE YOUR PLAN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FmgePlansShowcase;
