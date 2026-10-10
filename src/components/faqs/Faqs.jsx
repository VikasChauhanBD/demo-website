import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Faqs.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const questions = [
  [
    "Is this for NEET PG, INI-CET and FMG?",
    "Yes. The course content is specifically designed for NEET PG, INI-CET and FMG aspirants, with separate video lectures for NEET PG/INI-CET and FMG preparation.",
  ],
  [
    "Are the video lectures available in English and Hinglish?",
    "Yes. Video lectures will be available in both English and Hinglish.",
  ],
  [
    "Are there separate lectures for FMG aspirants?",
    "Yes. FMG aspirants will have access to separate video lectures designed specifically for their preparation.",
  ],
  [
    "Is it suitable for first-time learning as well as revision?",
    "Yes. Students can enter at different stages and use different layers of the learning system.",
  ],
  [
    "Are notes and question practice included?",
    "Course-specific inclusions should be clearly shown on each plan page before enrolment.",
  ],
  [
    "How long do I get access?",
    "Validity should be displayed clearly for every plan.",
  ],
  [
    "Is the content updated?",
    "The platform intends to update content when science, guidelines or examination patterns change.",
  ],
];

const TITLE_PHRASE = "Frequently Asked Questions";
const TITLE_REPEAT = 8;
const TITLE_TEXT = Array(TITLE_REPEAT).fill(TITLE_PHRASE).join(" ");

const CurvedFAQTitle = () => {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const textRef = useRef(null);
  const textPathRef = useRef(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const svg = svgRef.current;
      const path = pathRef.current;
      const text = textRef.current;
      const textPath = textPathRef.current;

      if (!wrap || !svg || !path || !text || !textPath) {
        return undefined;
      }

      const state = { cycle: 900, progress: 0 };

      const render = () => {
        const offset = gsap.utils.wrap(
          -state.cycle,
          0,
          -state.progress * state.cycle - window.scrollY * 0.6,
        );

        textPath.setAttribute("startOffset", offset);
      };

      const build = () => {
        const { width, height } = svg.getBoundingClientRect();

        if (!width || !height) {
          return;
        }

        const pad = width * 0.15;
        const edgeY = height * 0.8;
        const peakY = height * 0.45;
        const controlY = 2 * peakY - edgeY;

        path.setAttribute(
          "d",
          `M ${-pad} ${edgeY} Q ${width / 2} ${controlY} ${width + pad} ${edgeY}`,
        );

        let length = 0;

        try {
          length = text.getSubStringLength(0, TITLE_PHRASE.length + 1);
        } catch (error) {
          length = 0;
        }

        if (!length) {
          length = textPath.getComputedTextLength() / TITLE_REPEAT;
        }

        if (length) {
          state.cycle = length;
        }

        render();
      };

      build();

      const resizeObserver = new ResizeObserver(build);
      resizeObserver.observe(svg);

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(build);
      }

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(state, {
          progress: 1,
          duration: 32,
          ease: "none",
          repeat: -1,
          onUpdate: render,
        });

        gsap.fromTo(
          wrap,
          { y: 0 },
          {
            keyframes: [
              { y: 7, duration: 7 },
              { y: -5, duration: 7 },
            ],
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
        );

        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: render,
        });
      });

      return () => {
        resizeObserver.disconnect();
        mm.revert();
      };
    },
    { scope: wrapRef },
  );

  return (
    <div className="faq-curved-title" ref={wrapRef}>
      <svg className="faq-curved-svg" ref={svgRef} aria-hidden="true">
        <defs>
          <path id="faqCircularPath" ref={pathRef} d="M 0 0" />
        </defs>

        <text className="faq-circular-text" ref={textRef}>
          <textPath ref={textPathRef} href="#faqCircularPath" startOffset="0">
            {TITLE_TEXT}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

const FAQArrow = ({ active }) => {
  return (
    <span className={`faq-arrow ${active ? "active" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 4V19" />
        <path d="M6 13L12 19L18 13" />
      </svg>
    </span>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="hejl-faq-page">
      <section className="faq-hero" aria-hidden="true">
        <CurvedFAQTitle />
      </section>

      <section className="faq-section" aria-label="Frequently Asked Questions">
        <div className="faq-list">
          {questions.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            const isHovered = hoverIndex === index;

            const isHighlighted = isOpen || isHovered;

            return (
              <article
                className={`faq-item ${isHighlighted ? "hovered" : ""}`}
                key={`faq-${index}`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-number">
                    /{String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">{question}</span>

                  <FAQArrow active={isOpen} />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer-container ${isOpen ? "open" : ""}`}
                >
                  <div>
                    <div className="faq-answer-grid">
                      <div />

                      <div className="faq-answer">{answer}</div>

                      <div />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Faqs;
