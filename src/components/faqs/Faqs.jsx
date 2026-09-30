import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Faqs.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const generalQuestions = [
  {
    question: "What is the Hejl Foundation?",
    answer:
      "The Hejl Foundation is a private Florida-based family foundation with a focus on national and global impact, founded by Jakub and Carolina Hejl.",
  },

  {
    question: "What is the mission of the Hejl Foundation?",
    answer:
      "Since its founding days, our mission has sought to work towards a future where people can lead healthy, productive, and inspiring lives. We strongly advocate for everyone’s right to access the tools essential for success. While we don’t ensure direct success, our goal is to equip individuals with the resources necessary to achieve their goals.",
  },

  {
    question: "Where is the foundation located?",
    answer: "The Hejl Foundation is located in Miami, FL.",
  },

  {
    question: "What is a family foundation? How does it work?",
    answer:
      "A family foundation is funded by members of a single family, typically with at least one family member, often more, serving as an officer or board member. Family members actively participate in governing and managing the foundation. These foundations often mirror the personal priorities of the governing families, with grantmaking areas and funding methods differing widely among them.",
  },

  {
    question: "What does the Hejl Foundation support?",
    answer:
      "The Hejl Foundation supports ideas, individuals, and organizations that contribute to our four program areas: Arts & Culture, Education, Health, and Policy & Advocacy.",
  },

  {
    question:
      "Do Jakub and Carolina Hejl personally profit from the foundation's work?",
    answer:
      "Jakub and Carolina Hejl do not operate the foundation with any intent to profit from its charitable activities. Furthermore, all U.S. private foundations are subject to legal restrictions that prohibit them from being operated in ways that personally benefit their founders.",
  },

  {
    question: "How is the Hejl Foundation governed?",
    answer:
      "The foundation is governed by a board of directors. Each program is led by a committee of staff members.",
  },

  {
    question: "What's in the grants database?",
    answer:
      "Our grants database displays grants from 2019 to the present. New grants appear in the database after the first payment has been issued.",
  },

  {
    question:
      "How does the Hejl Foundation hold itself accountable and ensure transparency about its work?",
    answer: (
      <>
        We make all our investments public in a searchable{" "}
        <a href="/grants/">grant database</a>.
      </>
    ),
  },

  {
    question:
      "What is the difference between the Hejl Foundation and Hejl Foundation Community Fund Inc (HFCF Inc)?",
    answer:
      "Jakub and Carolina Hejl established the Hejl Foundation as a private family foundation, operating independently from HFCF Inc, which is a public charity. The Hejl Foundation and HFCF Inc have distinct sources of funding and governance, maintaining their independence from each other.",
  },

  {
    question: "How can I get a job at the Hejl Foundation?",
    answer: (
      <>
        To pursue a job at the Hejl Foundation, follow the foundation on
        LinkedIn, Instagram, or Facebook for updates on any openings.
      </>
    ),
  },
];

const grantQuestions = [
  {
    question: "How do I submit an inquiry for funding?",
    answer: (
      <>
        The Hejl Foundation only accepts proposals by invitation. Once you have
        been invited to submit a proposal, we will send you the required
        paperwork. We are always interested in learning about new initiatives,
        and you are welcome to submit an inquiry to{" "}
        <a href="mailto:proposals@hejlfoundation.org">
          proposals@hejlfoundation.org
        </a>
        .
      </>
    ),
  },

  {
    question: "Does the Hejl Foundation issue open calls for proposals?",
    answer:
      "Yes, we occasionally issue open calls for proposals, which are posted on our website and social media channels. You can also sign up for our emails to be notified when one of our four program areas announces an open call.",
  },

  {
    question: "How long does the proposal process take?",
    answer:
      "Our program staff typically responds to funding inquiries within twelve weeks. Some inquiries will be invited to submit a proposal. Proposal timelines vary by program and grant type, often involving multiple rounds. For detailed timelines, please consult the program staff if you are invited to submit a proposal.",
  },

  {
    question: "In what areas dose the Hejl foundation fund?",
    answer:
      "The Hejl Foundation supports ideas, individuals, and organizations that contribute to our four program areas: Arts & Culture, Education, Health, and Policy & Advocacy.",
  },

  {
    question: "What are the grant reporting guidelines?",
    answer:
      "Grantees are expected to provide progress reports according to the requirements outlined in their grant agreement. Reporting requirements may vary depending on the grant type, duration, and program.",
  },

  {
    question:
      "Does Hejl Foundation only support 501(c)(3) organizations in the US?",
    answer:
      "The Hejl Foundation primarily supports U.S. 501(c)(3) organizations and may support international organizations that are the equivalent of U.S. public charities.",
  },

  {
    question: "What does the Hejl Foundation not support?",
    answer:
      "The Hejl Foundation does not support paid advertisements; or political activities or attempts to influence action on specific legislation.",
  },

  {
    question:
      "How can I submit a budget revision, extension, carry-over, or change in project director or contact?",
    answer: (
      <>
        If you need to make budget revisions, extensions, carry-overs, or
        changes to any contact information, please contact{" "}
        <a href="mailto:george.corton@hejlfoundation.org">
          george.corton@hejlfoundation.org
        </a>
        .
      </>
    ),
  },
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
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const questions = activeTab === "general" ? generalQuestions : grantQuestions;

  const changeTab = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null);
    setHoverIndex(null);
  };

  const toggleAnswer = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="hejl-faq-page">
      <section className="faq-hero" aria-hidden="true">
        <CurvedFAQTitle />
      </section>

      <section className="faq-navigation">
        <div className="faq-tabs">
          <button
            type="button"
            className={`faq-tab ${activeTab === "general" ? "active" : ""}`}
            onClick={() => changeTab("general")}
            role="tab"
            aria-selected={activeTab === "general"}
          >
            GENERAL QUESTIONS
          </button>

          <button
            type="button"
            className={`faq-tab ${activeTab === "grant" ? "active" : ""}`}
            onClick={() => changeTab("grant")}
            role="tab"
            aria-selected={activeTab === "grant"}
          >
            GRANT QUESTIONS
          </button>
        </div>
      </section>

      <section className="faq-section" aria-label="Frequently Asked Questions">
        <div className="faq-list" key={activeTab}>
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            const isHovered = hoverIndex === index;

            const isHighlighted = isOpen || isHovered;

            return (
              <article
                className={`faq-item ${isHighlighted ? "hovered" : ""}`}
                key={`${activeTab}-${index}`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${activeTab}-${index}`}
                >
                  <span className="faq-number">
                    /{String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">{item.question}</span>

                  <FAQArrow active={isOpen} />
                </button>

                <div
                  id={`faq-answer-${activeTab}-${index}`}
                  className={`faq-answer-container ${isOpen ? "open" : ""}`}
                >
                  <div>
                    <div className="faq-answer-grid">
                      <div />

                      <div className="faq-answer">{item.answer}</div>

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
