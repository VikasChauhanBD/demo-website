import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./FmgePlansFeature.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const programData = [
  {
    title: "GRG MASTER CLASS",
    para: "Where Concepts Become Confidence. </br> Detailed, concept-based learning with Dr. GRG — helping you understand the why behind Pharmacology rather than simply memorising facts. </br> Learn • Understand • Connect • Apply",
    image:
      "https://cdn.dribbble.com/userupload/49248569/file/71eb1871e457fb270c0443c2efce80a9.jpeg",
  },
  {
    title: "POWER PACK REVISION",
    para: "Quick & Conceptual </br> A focused revision pathway to help you revisit important concepts, reinforce recall and keep your preparation exam-oriented. </br> Revise • Reinforce • Recall",
    image:
      "https://cdn.dribbble.com/userupload/49248568/file/440b7f4bcea9edcf6f73762d6f6feab5.jpeg",
  },
  {
    title: "GOGA EXPRESS",
    para: "Pharmacology, When Time Is Short. </br> A rapid-learning pathway designed to help you cover and revisit essential Pharmacology efficiently. </br> Focus • Revise • Remember",
    image:
      "https://cdn.dribbble.com/userupload/49248774/file/e8c83f70e0e0f7cd72aeef4454d357ff.jpeg",
  },
  {
    title: "QUESTIONS & PRACTICE",
    para: "Turn understanding into exam readiness. </br> Practise what you learn and use questions to identify gaps, reinforce concepts and improve your exam approach. </br> Practise • Identify • Improve",
    image:
      "https://www.hejlfoundation.org/app/uploads/2024/06/img-program-04-jpg.webp",
  },
  {
    title: "REVISION & RECALL",
    para: "Keep Pharmacology active throughout your preparation. </br> Move between detailed learning, revision and rapid recall depending on where you are in your preparation. </br> Learn → Revise → Recall",
    image:
      "https://www.hejlfoundation.org/app/uploads/2024/06/img-program-02-jpg.webp",
  },
];

const circleData = [
  { top: "4%", left: "-3%", size: 180, type: "fill" },
  { top: "22%", left: "88%", size: 130, type: "ring" },
  { top: "38%", left: "4%", size: 90, type: "ring" },
  { top: "55%", left: "92%", size: 200, type: "fill" },
  { top: "72%", left: "-4%", size: 150, type: "fill" },
  { top: "90%", left: "80%", size: 110, type: "ring" },
];

function FmgePlansFeature() {
  const sectionRef = useRef(null);
  const svgRef = useRef(null);
  const dotPathRef = useRef(null);
  const maskPathRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const svg = svgRef.current;
      const dotPath = dotPathRef.current;
      const maskPath = maskPathRef.current;

      /* ---------- build path: section top-left -> images -> section bottom-right ---------- */
      const buildPath = () => {
        const sectionRect = section.getBoundingClientRect();
        const W = sectionRect.width;
        const H = sectionRect.height;
        svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

        const points = gsap.utils
          .toArray(".fmge-plans-feature-media", section)
          .map((el) => {
            const r = el.getBoundingClientRect();
            return {
              x: r.left - sectionRect.left + r.width / 2,
              top: r.top - sectionRect.top,
              bottom: r.bottom - sectionRect.top,
            };
          });

        if (!points.length) return;

        const first = points[0];
        const last = points[points.length - 1];

        // start: top-left corner of the section, curve into the first image
        const startMidY = first.top / 2;
        let d = `M 0 0 C 0 ${startMidY}, ${first.x} ${startMidY}, ${first.x} ${first.top}`;
        d += ` L ${first.x} ${first.bottom}`;

        // zig-zag between the images
        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const next = points[i];
          const midY = (prev.bottom + next.top) / 2;
          d += ` C ${prev.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.top}`;
          d += ` L ${next.x} ${next.bottom}`;
        }

        // finish: curve from the last image to the bottom-right corner of the section
        const endMidY = (last.bottom + H) / 2;
        d += ` C ${last.x} ${endMidY}, ${W} ${endMidY}, ${W} ${H}`;

        dotPath.setAttribute("d", d);
        maskPath.setAttribute("d", d);

        const length = maskPath.getTotalLength();
        maskPath.style.strokeDasharray = length;
      };

      const mm = gsap.matchMedia();

      /* ---------- dashed line draw (desktop only) ---------- */
      mm.add("(min-width: 769px)", () => {
        buildPath();
        ScrollTrigger.addEventListener("refreshInit", buildPath);

        gsap.fromTo(
          maskPath,
          { strokeDashoffset: () => maskPath.getTotalLength() },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              end: "bottom 70%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );

        return () => {
          ScrollTrigger.removeEventListener("refreshInit", buildPath);
        };
      });

      /* ---------- re-measure the line whenever the section size changes ---------- */
      let refreshTimer;
      const resizeObserver = new ResizeObserver(() => {
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      });
      resizeObserver.observe(section);

      /* ---------- circles zoom up with scroll ---------- */
      gsap.utils
        .toArray(".fmge-plans-feature-circle", sectionRef.current)
        .forEach((circle) => {
          gsap.fromTo(
            circle,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: circle,
                start: "top 95%",
                end: "top 35%",
                scrub: 1,
              },
            },
          );
        });

      return () => {
        clearTimeout(refreshTimer);
        resizeObserver.disconnect();
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <div className="fmge-plans-feature-section" ref={sectionRef}>
      {circleData.map((c, i) => (
        <span
          key={i}
          className={`fmge-plans-feature-circle fmge-plans-feature-circle--${c.type}`}
          style={{
            top: c.top,
            left: c.left,
            width: `${c.size}px`,
            height: `${c.size}px`,
          }}
        />
      ))}

      <svg
        className="fmge-plans-feature-line"
        ref={svgRef}
        preserveAspectRatio="none"
      >
        <defs>
          <mask
            id="fmge-plans-feature-line-mask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <path
              ref={maskPathRef}
              fill="none"
              stroke="#ffffff"
              strokeWidth="10"
            />
          </mask>
        </defs>
        <path
          ref={dotPathRef}
          fill="none"
          stroke="#004d7a"
          strokeWidth="4"
          strokeLinecap="butt"
          strokeDasharray="16 12"
          mask="url(#fmge-plans-feature-line-mask)"
        />
      </svg>

      <h2>WHAT YOU GET WITH PHARMA BY DR. GRG</h2>

      <div className="fmge-plans-feature-wrap">
        {programData.map((item, index) => (
          <div
            key={item.title}
            className={`fmge-plans-feature-card ${index % 2 !== 0 ? "fmge-plans-feature-card--reverse" : ""}`}
          >
            <div className="fmge-plans-feature-media">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="fmge-plans-feature-content">
              <h3>{item.title}</h3>
              {item.para.split("</br>").map((text, i) => (
                <p key={i}>{text.trim()}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FmgePlansFeature;
