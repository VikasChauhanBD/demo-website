import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaPlay, FaCheck } from "react-icons/fa";
import "./PgPlansShowcase.css";
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
    original: "₹4,599",
    special: "₹3,149",
    prebooking: "₹1,999",
  },
  {
    validity: "12 Months",
    original: "₹5,599",
    special: "₹3,679",
    prebooking: "₹2,499",
  },
  {
    validity: "24 Months",
    original: "₹6,599",
    special: "₹4,729",
    prebooking: "₹2,999",
  },
];
const toNumber = (price) => Number(price.replace(/[^\d]/g, ""));
function PgPlansShowcase() {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      const cleanups = [];
      /* ---------- floating background blobs ---------- */
      gsap.utils.toArray(".pg-showcase-blob").forEach((blob) => {
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
      reveal(".pg-showcase-exp-header > *", ".pg-showcase-exp-header");
      gsap.fromTo(
        ".pg-showcase-video-card",
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pg-showcase-video-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      );
      reveal(".pg-showcase-exp-closing", ".pg-showcase-exp-closing", {
        stagger: 0,
      });
      /* pulsing ring around every play button */
      gsap.fromTo(
        ".pg-showcase-play-ring",
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
        ".pg-showcase-live-text > *",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pg-showcase-live-grid",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".pg-showcase-live-list li",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pg-showcase-live-list",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".pg-showcase-live-card",
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pg-showcase-live-grid",
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
      /* pulsing live dot */
      gsap.fromTo(
        ".pg-showcase-live-ring",
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
      reveal(".pg-showcase-price-header > *", ".pg-showcase-price-header");
      gsap.fromTo(
        ".pg-showcase-price-card",
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pg-showcase-price-grid",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      );
      /* count-up for every price */
      gsap.utils.toArray(".pg-showcase-price-card").forEach((card) => {
        gsap.utils.toArray(".pg-showcase-count", card).forEach((el) => {
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
        ".pg-showcase-price-footer > *",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".pg-showcase-price-footer",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
      /* ---------- hover lift on cards ---------- */
      gsap.utils
        .toArray(".pg-showcase-video-card, .pg-showcase-price-card")
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
    <section className="pg-showcase-section" ref={sectionRef}>
      <span className="pg-showcase-blob pg-showcase-blob--one"></span>
      <span className="pg-showcase-blob pg-showcase-blob--two"></span>
      <span className="pg-showcase-blob pg-showcase-blob--three"></span>
      <span className="pg-showcase-blob pg-showcase-blob--four"></span>
      <div className="pg-showcase-container">
        {/* <div className="pg-showcase-block">
          <div className="pg-showcase-exp-header pg-showcase-center">
            <span className="pg-showcase-eyebrow">EXPERIENCE THE GRG WAY</span>
            <h2 className="pg-showcase-title">
              Not sure which learning pathway is right for you?
            </h2>
            <p className="pg-showcase-para">
              Not sure which learning pathway is right for you? Experience Dr.
              GRG&apos;s teaching before you choose your plan.
            </p>
          </div>
          <div className="pg-showcase-video-grid">
            {videos.map((item) => (
              <article className="pg-showcase-video-card" key={item.title}>
                <div className="pg-showcase-video-thumb">
                  <span className="pg-showcase-video-number">
                    {item.number}
                  </span>
                  <div className="pg-showcase-play">
                    <span className="pg-showcase-play-ring"></span>
                    <FaPlay />
                  </div>
                </div>
                <div className="pg-showcase-video-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <button type="button" className="pg-showcase-btn">
                    WATCH FREE VIDEO
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="pg-showcase-exp-closing pg-showcase-closing">
            Watch. Experience. Choose the way you want to learn Pharmacology.
          </p>
        </div> */}
        <div className="pg-showcase-block">
          <div className="pg-showcase-live-grid">
            <div className="pg-showcase-live-text">
              <span className="pg-showcase-eyebrow">
                LIVE SESSIONS ON THE APP
              </span>
              <h2 className="pg-showcase-title">Learn with Dr. GRG. Live.</h2>
              <p className="pg-showcase-para pg-showcase-para--left">
                Regular live sessions will bring teaching, revision, questions
                and exam-focused discussions directly into the app.
              </p>
              <ul className="pg-showcase-live-list">
                {liveBullets.map((item) => (
                  <li key={item}>
                    <span className="pg-showcase-check">
                      <FaCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pg-showcase-live-card">
              <div className="pg-showcase-live-indicator">
                <span className="pg-showcase-live-dot">
                  <span className="pg-showcase-live-ring"></span>
                </span>
                <span className="pg-showcase-live-label">
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
        <div className="pg-showcase-block">
          <div className="pg-showcase-price-header pg-showcase-center">
            <span className="pg-showcase-eyebrow">PLANS &amp; PRICING</span>
            <p className="pg-showcase-offer">
              <span>
                Pre-booking starts on 11th October 2026 from 12pm (afternoon)
                valid till 21st October 11:59pm.
              </span>
            </p>
            <p className="pg-showcase-price-note">
              These exclusive pre-booking prices won’t be available again
              <br />
              <span className="pg-showcase-hard-copy-note">
                Hard-copy notes are not included in these plans.
              </span>
            </p>
          </div>
          <div className="pg-showcase-price-grid">
            {plans.map((plan) => (
              <article className="pg-showcase-price-card" key={plan.validity}>
                <span className="pg-showcase-price-label">Validity</span>
                <h3 className="pg-showcase-price-validity">{plan.validity}</h3>
                <div className="pg-showcase-price-row">
                  <span>Original Price</span>
                  <span
                    className="pg-showcase-count pg-showcase-price-original"
                    data-value={toNumber(plan.original)}
                  >
                    {plan.original}
                  </span>
                </div>
                <div className="pg-showcase-price-row">
                  <span>Special Price</span>
                  <span
                    className="pg-showcase-count pg-showcase-price-special"
                    data-value={toNumber(plan.special)}
                  >
                    {plan.special}
                  </span>
                </div>
                <div className="pg-showcase-prebook">
                  <span className="pg-showcase-prebook-label">
                    Pre-Booking Offer
                  </span>
                  <span
                    className="pg-showcase-count pg-showcase-prebook-value"
                    data-value={toNumber(plan.prebooking)}
                  >
                    {plan.prebooking}
                  </span>
                  <span className="pg-showcase-ext">
                    + 3 Months FREE Bonus Extension
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="pg-showcase-price-footer pg-showcase-center">
            <p className="pg-showcase-closing">
              Your Pharmacology preparation. One connected system.
            </p>
            {/* <button type="button" className="pg-showcase-cta">
              CHOOSE YOUR PLAN
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default PgPlansShowcase;